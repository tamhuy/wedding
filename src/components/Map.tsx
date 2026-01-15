export default function Map() {
    const apiKey = import.meta.env.VITE_MAPS_API_KEY;
    return (
        <>
         <h1>Map Section</h1>
         <iframe
            width="100%"
            height="450"
            // style="border:0"
            loading="lazy"
            // allowFullscreen
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Nordre+Skøyen+Hovedgård`}>
            </iframe>
        </>
    );
}