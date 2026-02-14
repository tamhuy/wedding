import { useTranslation } from 'react-i18next';
import banner from '../assets/banner_v3.png';

export function Banner() {
  const { t } = useTranslation();

  return (
    <div
      className="banner h-screen flex flex-col items-center text-black p-4 text-center -mt-14 sm:-mt-16"
      style={{
        paddingTop: '23vh',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="tracking-wider m-8 text-shadow-lg/75 text-white text-shadow-black whitespace-pre-line md:whitespace-normal">{t('banner.title')}</h1>
      <h1 className="text-5xl tracking-wider m-4 text-shadow-lg/75 text-white text-shadow-black">{t('banner.date')}</h1>
    </div>
  );
}