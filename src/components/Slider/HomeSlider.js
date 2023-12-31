import axios from "axios";

import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

const HomeSlider = ({ data }) => {
  const [slides, setSlides] = useState([]);

  const getSlides = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/media/GetMedia",
        data.map((item) => ({
          id: item.id,
          mediaFieldName: "sliderImageName",
        }))
      );

      response.status === 200 && setSlides(response.data.data);
    } catch (error) {
      console.error(error);
      return "";
    }
  };
  console.log("slides", slides);

  useEffect(() => {
    getSlides();
  }, [data]);

  return (
    <>
      {slides?.map((item, index) => (
        <SwiperSlide key={item?.id}>
          <div
            className={`banner banner-fixed content-center intro-slide intro-slide${
              index + 1
            }`}
            style={{
              backgroundImage: `url(data:image/jpeg;base64,${item?.mediaFieldName})`,
              backgroundColor: "#EEF4F4",
            }}
          ></div>
        </SwiperSlide>
      ))}
    </>
  );
};

export default HomeSlider;
