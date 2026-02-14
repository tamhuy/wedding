import { useEffect, useRef } from 'react';
import timeline from '../assets/timeline_v6.png';
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
    <section id="our-story" className="block lg:flex gap-10 py-12">
      <div className="flex-1">

      <h2 className="my-4">{t('ourStory.title')}</h2>
      <p className="my-3 text-gray-700 italic">
        {t('ourStory.intro')}
      </p>
      <p className="my-4">{t("ourStory.firstMeeting")}</p>
      <p className="my-4">{t("ourStory.longDistance")}</p>
      <p className="my-4">{t("ourStory.closerTogether")}</p>
      <p className="my-4">{t("ourStory.nextChapter")}</p>

      </div>
      <img
        ref={imgRef}
        src={timeline}
        alt="Our story"
        className="h-auto max-w-sm md:max-w-md mx-auto block  lg:max-h-full lg:w-auto lg:object-contain transform -translate-x-10 opacity-0 transition-all duration-700 ease-out"
      />
    </section>
  );
}