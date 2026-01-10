import { useEffect, useRef } from 'react';
import group3 from '../assets/Group 3.avif';

export default function Our_story() {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('translate-x-0', 'opacity-100');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold mb-4">Our Story</h2>
      <p className="mb-6 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <img
        ref={imgRef}
        src={group3}
        alt="Nordre Skøyen Hovedgård"
        className="w-full max-w-xl mx-auto block transform -translate-x-10 opacity-0 transition-all duration-700 ease-out"
      />
    </div>
  );
}