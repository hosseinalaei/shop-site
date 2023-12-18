import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const HomeSliderThumbs = ({ data, handleSlideChange }) => {
  const [thumbs, setThumbs] = useState([]);
  const swiperRef = useRef(null);

  const getThumbs = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/media/GetMedia",
        data.map((item) => ({
          id: item.id,
          mediaFieldName: "sliderAvatarImageName",
        }))
      );

      response.status === 200 && setThumbs(response.data.data);
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  useEffect(() => {
    getThumbs();
  }, [data]);
  return (
    <>
      {thumbs.map((item, index) => (
        <Link
          key={item?.id}
          href="#"
          className="active"
          onClick={() => {
            handleSlideChange(index);
          }}
        >
          <Image
            src={`data:image/jpeg;base64,${item?.mediaFieldName}`}
            alt="Dot"
            width="70"
            height="70"
          />
        </Link>
      ))}
    </>
  );
};

export default HomeSliderThumbs;
