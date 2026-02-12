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
      <h2 className="my-4">{t('ourStory.title')}</h2>
      <p className="my-3 text-gray-700">
        {t('ourStory.intro')}
      </p>
      <p className="my-4">{t("ourStory.firstMeeting")}</p>
      <p className="my-4">{t("ourStory.longDistance")}</p>
      <p className="my-4">{t("ourStory.closerTogether")}</p>
      <p className="my-4">{t("ourStory.nextChapter")}</p>
      <img
        ref={imgRef}
        src={group3}
        alt="Our story"
        className="w-full max-w-xl mx-auto block transform -translate-x-10 opacity-0 transition-all duration-700 ease-out"
      />
    </section>
  );
}