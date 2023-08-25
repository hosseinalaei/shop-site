import Image from "next/image";
import defaultImage from "../../assets/images/defaultImage.png";

const ProductImage = (media) => {
  return (
    <Image
      src={media.src ? `data:image/jpeg;base64,${media.src}` : defaultImage}
      alt="Product"
      width="300"
      height="338"
    />
  );
};

export default ProductImage;
