type CardProps = {
  title: string;
  description: string
  image: string;
};

export default function Card({ title, description, image }: CardProps) {

  return (
    <div className="max-w-3xl rounded-lg shadow-md grid grid-cols-2 gap-4 p-2 border transform transition duration-200 ease-out hover:scale-105 hover:shadow-lg relative overflow-hidden" >
      <div className="relative z-20 bg-white rounded-l-lg p-4">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      {/* decorative white circle that overlaps the image */}
      <div style={{ position: 'absolute', left: '25%', top: '50%', transform: 'translate(-50%, -50%)', width: '30rem', height: '30rem', borderRadius: '9999px', backgroundColor: 'white', zIndex: 10, pointerEvents: 'none' }} />
      <div className="relative z-0">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-r-lg"/>
      </div>
    </div>
  );
}