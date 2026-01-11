import Card from "../components/Card";
import nordre_skoyen from '../assets/nordre_skoyen.webp';

export function Cards() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Card title="Venue" description="Nordre Skøyen Hovedgård, Oslo, Norge" image={nordre_skoyen} />
      <Card title="Program" description="Our wedding program will be announced soon." image={nordre_skoyen} />
      <Card title="?" description="More information will be added soon." image={nordre_skoyen} />
    </div>
    );
}