import { useEffect, useRef } from 'react';
import group3 from '../assets/Group 3.avif';
import { useTranslation } from 'react-i18next';

export default function Our_story() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const { t } = useTranslation();
  
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
    <section id="our-story" className="py-12">
      <h2 className="text-2xl font-bold mb-4">{t('ourStory.title')}</h2>
      <p className="mb-6 text-gray-700">
        {t('ourStory.content')}
      </p>
      <img
        ref={imgRef}
        src={group3}
        alt="Our story"
        className="w-full max-w-xl mx-auto block transform -translate-x-10 opacity-0 transition-all duration-700 ease-out"
      />
    </section>
  );
}