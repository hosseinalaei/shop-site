import Image from "next/image";
import defaultImage from "../../assets/images/defaultImage.png";
import { useEffect, useState } from "react";
import axios from "axios";


const ProductImage = ({src}) => {
  console.log((src));
  const [media, setMedia] = useState(null);

  const getMedia = async (src) => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/media/getmedia",
        {
          id: src,
          mediaFieldName: "productImageName",
        }
      );
      setMedia(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      // console.log(error);
    }
  };


  useEffect(() =>{
    getMedia(src)
  },[src])
  return (
    <Image
      src={media ? `data:image/jpeg;base64,${media}` : defaultImage}
      alt="Product"
      width="300"
      height="338"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ProductImage;
