import { useTranslation } from 'react-i18next';
import banner from '../assets/banner.png';

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
      <h1 className="text-7xl font-bold text-shadow-lg/75 text-white text-shadow-black">{t('banner.title')}</h1>
      <p className="mt-2">{t('banner.message')}</p>
    </div>
  );
}