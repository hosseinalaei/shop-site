import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductSlider = ({ data = [] }) => {
  const [media, setMedia] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useLayoutEffect(() => {
    if (slider1.current !== null) {
      slider1.current.controller.control = slider2.current;
    }
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/media/GetMedia",
        data.map((item) => ({
          id: item.imageuniqueId,
          mediaFieldName: "productGalleryImageName",
        }))
      );

      setMedia(response.data.data);
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  useEffect(() => {
    data?.length > 0 && fetchData();
  }, [data]);

  return (
    <div style={{ alignItems: "center" }}>
      <Swiper
        onSwiper={(swiper) => {
          if (slider1.current !== null) {
            slider1.current = swiper;
          }
        }}
        controller={{ control: slider2 }}
        loop={true}
        spaceBetween={10}
        // navigation={true}
        // thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {media?.map((mediaUrl) => (
          <SwiperSlide key={mediaUrl?.id}>
            <Image
              src={`data:image/jpeg;base64,${mediaUrl?.mediaFieldName}`}
              alt={`Image ${mediaUrl?.id}`}
              width="300"
              height="300"
              style={{ margin: "0 auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        controller={{ control: slider1 }}
        loop={true}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        // navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {media?.map((mediaUrl) => (
          <SwiperSlide key={mediaUrl?.id}>
            <Image
              src={`data:image/jpeg;base64,${mediaUrl?.mediaFieldName}`}
              alt={`Image ${mediaUrl?.id}`}
              width={100}
              height={100}
              style={{ margin: "0 auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
