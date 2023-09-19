import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import bg1 from "../../assets/images/sl1.jpeg";

const SingleSlide = (props) => {
  const [media, setMedia] = useState(null);

  const getMedia = async () => {
    try {
      const response = await fetch(
        "https://138.201.167.230:5050/Get/GetMedia",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            id: props.id,
            mediaFieldName: "sliderImageName",
          }),
        }
      );
      const resData = await response.json();
      if (response.status === 200) {
        setMedia(resData.data);
        console.log(resData.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMedia();
  }, []);
  return (
    media && (
      <SwiperSlide>
        <div
          className="banner banner-fixed content-center intro-slide intro-slide1"
          style={{
            backgroundImage: `url(${bg1.src})`,
          }}
        >
          <div className="container">
            <div className="banner-content d-inline-block y-50">
              <div></div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    )
  );
};

export default SingleSlide;
