import Image from "next/image";
import defaultImage from "../../assets/images/defaultImage.png";

const ProductImage = ({ src }) => {
  return (
    <Image
      src={src ? `data:image/jpeg;base64,${src}` : defaultImage}
      alt="Product"
      width="300"
      height="338"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ProductImage;
