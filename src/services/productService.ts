import Papa from 'papaparse';
import type { Product } from '../types/product';
import { logger } from '../utils/logger';
const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export const fetchProducts = (): Promise<Product[]> => {
  logger.info('Iniciando descarga de productos desde Google Sheets...');
  
  return new Promise((resolve, reject) => {
    // Añadimos un timestamp para evitar que el navegador guarde en caché una versión vieja de los datos
    const cacheBuster = `&t=${new Date().getTime()}`;
    const urlWithCacheBuster = SHEET_URL + cacheBuster;

    Papa.parse(urlWithCacheBuster, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        logger.success('Productos descargados correctamente', { count: results.data.length });
        
        // Mapeamos los datos para asegurar calidad y evitar errores de React
        const products: Product[] = results.data
          .filter((item: any) => item.name && item.name.trim() !== '') // Ignorar filas sin nombre
          .map((item: any, index: number) => {
            // Combinamos el ID de la hoja con el índice para asegurar que SIEMPRE sea único
            const rawId = item.id && item.id.trim() !== '' ? item.id : 'p';
            const uniqueId = `${rawId}-${index}`;
            
            return {
              ...item,
              id: uniqueId,
              price: (() => {
                const rawPrice = item.price || item.precio || item.Price || item.Precio || '0';
                const cleanPrice = String(rawPrice).replace(/[^0-9.,]/g, '').replace(',', '.');
                return parseFloat(cleanPrice) || 0;
              })(),
              keywords: (() => {
                const rawKeywords = item.keywords || item.Keywords || item['Palabras clave'] || item.palabras_clave || '';
                return rawKeywords 
                  ? String(rawKeywords).split(',').map(k => k.trim().toLowerCase()).filter(k => k.length > 0) 
                  : [];
              })(),
              // Si no hay imagen, usamos un placeholder profesional
              image: item.image && item.image.trim() !== '' 
                ? item.image 
                : 'https://images.unsplash.com/photo-1541973342419-74e92a838561?q=80&w=600&auto=format&fit=crop',
            };
          });

        logger.success('Productos procesados y validados', { count: products.length });
        resolve(products);
      },
      error: (error: any) => {
        logger.error('Error al descargar productos de Google Sheets', error);
        reject(error);
      },
    });
  });
};
