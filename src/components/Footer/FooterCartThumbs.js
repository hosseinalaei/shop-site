import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import defaultImage from "../../assets/images/defaultImage.png";

const FooterCartThumbs = ({ src }) => {
  const [media, setMedia] = useState(null);

  const getMedia = async (src) => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/media/getmedia",
        [
          {
            id: src,
            mediaFieldName: "productImageName",
          },
        ]
      );
      setMedia(response.data.data[0]);
    } catch (error) {}
  };

  useEffect(() => {
    getMedia(src);
  }, [src]);
  return (
    <Image
      src={media ? `data:image/jpeg;base64,${media}` : defaultImage}
      alt="Product"
      width="70"
      height="70"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default FooterCartThumbs;
