import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const clinicPhotos: Photo[] = [
  {
    src: "/figmaAssets/img-7853-1.png",
    alt: "Кабинет стоматолога",
    width: 433,
    height: 289,
  },
  {
    src: "/figmaAssets/img-7807-1-2.png",
    alt: "Стоматологическое оборудование",
    width: 216,
    height: 137,
  },
  {
    src: "/figmaAssets/img-7828-1.png",
    alt: "Рабочее место врача",
    width: 216,
    height: 136,
  },
  {
    src: "/figmaAssets/img-7822-1-2.png",
    alt: "Стоматологическое кресло",
    width: 370,
    height: 289,
  },
  {
    src: "/figmaAssets/img-7759-1.png",
    alt: "Кабинет клиники",
    width: 293,
    height: 289,
  },
  {
    src: "/figmaAssets/img-7846-1.png",
    alt: "Консультация пациента",
    width: 433,
    height: 389,
  },
  {
    src: "/figmaAssets/img-7838-1--1-.png",
    alt: "Лечение пациента",
    width: 602,
    height: 389,
  },
  {
    src: "/figmaAssets/img-7836-1.png",
    alt: "Рабочий стол",
    width: 293,
    height: 195,
  },
  {
    src: "/figmaAssets/img-7785-1-2.png",
    alt: "Стоматологический кабинет",
    width: 293,
    height: 177,
  },
];

export const PhotoCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    dragFree: false,
    duration: 25,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 1 },
    }
  });

  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex will-change-transform pl-4">
          {clinicPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-[0_0_280px] md:flex-[0_0_320px] lg:flex-[0_0_360px] shrink-0 mr-4 cursor-pointer group"
              onClick={() => openModal(photo)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300 ease-out">
                    <ZoomIn className="w-6 h-6 text-gray-800" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-gray-200 z-10 transition-all duration-200"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg border-gray-200 z-10 transition-all duration-200"
        onClick={scrollNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full animate-in zoom-in-95 duration-300">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};