import Image from 'next/image';
import loading from '../../assets/images/Blocks-1s-200px.gif'
const PageLoader = () => {
    return (
      <div className="fp-container">
        <Image height={100} width={200} src={loading} alt="Loading..." className="fp-loader" />
      </div>
    );
  };
  
  export default PageLoader;