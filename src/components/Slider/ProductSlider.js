import { useEffect, useRef, useState } from "react";
// import Slider from "react-slick";
import axios from "axios";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductSlider = ({ data = [] }) => {
  console.log(
    "dataaa imaaage",
    data.map((item) => ({
      id: item.imageuniqueId,
      mediaFieldName: "productGalleryImageName",
    }))
  );
  // const [nav1, setNav1] = useState(null);
  // const [nav2, setNav2] = useState(null);
  const [media, setMedia] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const slider1 = useRef(null);
  // const slider2 = useRef(null);

  useEffect(() => {
    // setNav1(slider1.current);
    // setNav2(slider2.current);

    const fetchData = async () => {
      // const mediaData = await Promise.all(
      // data?.map(async (item) => {
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
      // })
      // );
    };

    fetchData();
  }, [data]);

  return (
    <div style={{ alignItems: "center" }}>
      {/* <Slider {...settings1} asNavFor={nav2} ref={slider1}>
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
      </Slider> */}
      {/* <Slider
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
      </Slider> */}

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {media?.map((mediaUrl) => {
          return (
            <div key={mediaUrl?.id}>
              <SwiperSlide>
                <Image
                  src={`data:image/jpeg;base64,${mediaUrl?.mediaFieldName}`}
                  alt={`Image ${mediaUrl?.id}`}
                  width="300"
                  height="300"
                  style={{ margin: "0 auto" }}
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={4}
        // freeMode={true}
        // navigation={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {media?.map((mediaUrl) => (
          <div key={mediaUrl?.id}>
            <SwiperSlide>
              <Image
                src={`data:image/jpeg;base64,${mediaUrl?.mediaFieldName}`}
                alt={`Image ${mediaUrl?.id}`}
                width={100}
                height={100}
                style={{ margin: "0 auto" }}
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
