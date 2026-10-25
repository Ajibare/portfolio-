"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

export function GalleryViewer({ images }: { images: GalleryImage[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false);
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggle = () => setIsOpen((o) => !o);
  const close = () => { setIsOpen(false); };

  if (isOpen === false || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <>
      <button onClick={toggle} aria-label="Open gallery" className="sr-only" />
      {isOpen && (
        <div
          onClick={e => e.currentTarget !== e.target ? null : close()}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 transition-opacity duration-300"
        >
          <div className="relative w-full max-w-full max-h-full">
            <img
              src={current.src}
              alt={current.alt}
              className="object-contain rounded-md max-w-full max-h-full"
            />
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-4 left-4 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-colors z-20"
            >
              <X size={30} aria-hidden />
            </button>
            <button
              onClick={() => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1))}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 p-2 text-white rounded-full hover:bg-black/50 transition-colors disabled:opacity-30"
              aria-label="Previous"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1))}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 p-2 text-white rounded-full hover:bg-black/50 transition-colors disabled:opacity-30"
              aria-label="Next"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
      {isOpen && (
        <div onClick={close} className="fixed inset-0 z-[999]" />
      )}
    </>
  );
}
