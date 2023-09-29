import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";

const settings1 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const ProductSlider = ({ data = [] }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [media, setMedia] = useState([]);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);

    const fetchData = async () => {
      const mediaData = await Promise.all(
        data?.map(async (item) => {
          try {
            const response = await axios.post(
              "https://138.201.167.230:5050/media/GetMedia",
              {
                id: item.imageuniqueId,
                mediaFieldName: "productGalleryImageName",
              }
            );
            return response.data.data;
          } catch (error) {
            console.error(error);
            return "";
          }
        })
      );

      setMedia(mediaData);
    };

    fetchData();
  }, [data]);

  return (
    <div style={{ alignItems: "center" }}>
      <Slider {...settings1} asNavFor={nav2} ref={slider1}>
        {media?.map((mediaUrl, index) => {
          return (
            <div key={index}>
              <Image
                src={`data:image/jpeg;base64,${mediaUrl}`}
                alt={`Image ${index}`}
                width="300"
                height="300"
                style={{ margin: "0 auto" }}
              />
            </div>
          );
        })}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {media?.map((mediaUrl, index) => (
          <div key={index}>
            <Image
              src={`data:image/jpeg;base64,${mediaUrl}`}
              alt={`Image ${index}`}
              width={100}
              height={100}
              style={{ margin: "0 auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
