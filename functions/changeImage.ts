import { useState } from "react";

interface Product {
  id: string;
  product_media: Array<{ url: string, position: number }>;
}

export function useProductImageSlider(products: Product[]) {
  const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: string]: number }>({});

  const changeImage = (productId: string, direction: string) => {
    setCurrentImageIndices((prevIndices) => {
      const currentImageIndex = prevIndices[productId] || 0;
      const product = products.find((p) => p.id === productId);
  
      if (product) {
        const filteredProductMedia = product.product_media.slice(0, 3);
        const lastIndex = filteredProductMedia.length ? filteredProductMedia.length - 1 : 0;
  
        if (direction === "left") {
          return { ...prevIndices, [productId]: currentImageIndex === 0 ? lastIndex : currentImageIndex - 1 };
        } else {
          return { ...prevIndices, [productId]: currentImageIndex === lastIndex ? 0 : currentImageIndex + 1 };
        }
      } else {
        return prevIndices;
      }
    });
  };

  return { currentImageIndices, changeImage };
}
