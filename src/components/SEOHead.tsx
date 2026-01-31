import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const SEOHead = ({
  title = "Стоматология Перфектус в Приозерске | Современная стоматологическая клиника",
  description = "Стоматологическая клиника Перфектус в Приозерске. Опытные врачи, современное оборудование, безопасное лечение. Запись по телефону +7 (921) 873-70-73. Ул. Калинина, 11, 3 этаж.",
  keywords = "стоматология Приозерск, зубной врач, стоматологическая клиника, лечение зубов, протезирование, имплантация, Перфектус, стоматолог Приозерск",
  ogImage = "https://перфектус.рф/figmaAssets/mask-group-1.png",
  canonicalUrl = "https://перфектус.рф/",
  structuredData
}: SEOHeadProps) => {
  
  useEffect(() => {
    // Обновляем title
    document.title = title;
    
    // Обновляем meta теги
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Основные meta теги
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph теги
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);
    
    // Twitter теги
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', ogImage, true);
    updateMetaTag('twitter:url', canonicalUrl, true);
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    
    // Структурированные данные
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-dynamic]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-dynamic', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
    
  }, [title, description, keywords, ogImage, canonicalUrl, structuredData]);
  
  return null;
};
