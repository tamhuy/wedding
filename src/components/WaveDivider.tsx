type WaveDividerProps = {inverted: boolean};
export default function WaveDivider({inverted}: WaveDividerProps) {
    return (
        <svg 
          className="block w-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 160" 
          preserveAspectRatio="none"
        >
          <path  
            className={`scale-y-50 ${inverted ? 'fill-primary' : 'fill-secondary'} opacity-70`} 
            d="M0,160L40,176C80,192,160,224,240,234.7C320,245,400,235,480,213.3C560,192,640,160,720,128C800,96,880,64,960,53.3C1040,43,1120,53,1200,69.3C1280,85,1360,107,1400,117.3L1440,128L1440,-1L1400,-1C1360,-1,1280,-1,1200,-1C1120,-1,1040,-1,960,-1C880,-1,800,-1,720,-1C640,-1,560,-1,480,-1C400,-1,320,-1,240,-1C160,-1,80,-1,40,-1L0,-1Z"
          />
          <path  
            className={`scale-y-50 ${inverted ? 'fill-secondary' : 'fill-primary'} opacity-70`} 
            d="M0,160L40,176C80,192,160,224,240,234.7C320,245,400,235,480,213.3C560,192,640,160,720,128C800,96,880,64,960,53.3C1040,43,1120,53,1200,69.3C1280,85,1360,107,1400,117.3L1440,128L1440,321L1400,321C1360,321,1280,321,1200,321C1120,321,1040,321,960,321C880,321,800,321,720,321C640,321,560,321,480,321C400,321,320,321,240,321C160,321,80,321,40,321L0,321Z"
          />
        </svg>
    )
}