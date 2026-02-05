type WaveDividerProps = {inverted: boolean};
export default function WaveDivider({inverted}: WaveDividerProps) {
    return (
        <svg className="w-full h-20 block"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path shapeRendering="geometricPrecision" className={`${inverted ? 'fill-primary' : 'fill-secondary'} opacity-70`} d="M0,160L40,176C80,192,160,224,240,234.7C320,245,400,235,480,213.3C560,192,640,160,720,128C800,96,880,64,960,53.3C1040,43,1120,53,1200,69.3C1280,85,1360,107,1400,117.3L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
          <path shapeRendering="geometricPrecision" className={`${inverted ? 'fill-secondary' : 'fill-primary'} opacity-70`} d="M0,160L40,176C80,192,160,224,240,234.7C320,245,400,235,480,213.3C560,192,640,160,720,128C800,96,880,64,960,53.3C1040,43,1120,53,1200,69.3C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
    )
}