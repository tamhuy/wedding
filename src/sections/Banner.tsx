import banner from '../assets/banner.jpeg';

export function Banner() {
  return (
    <div
      className="h-80 text-black p-4 text-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl font-bold">Welcome to Our Wedding!</h1>
      <p className="mt-2">Join us in celebrating our special day.</p>
    </div>
  );
}