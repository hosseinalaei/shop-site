import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

export default function Test() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div style={{ width: "300px" }}>
      {/* <Swiper
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
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-6.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-7.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-8.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-9.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://swiperjs.com/demos/images/nature-10.jpg"
            width={200}
            height={200}
          />
        </SwiperSlide>
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
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="https://swiperjs.com/demos/images/nature-10.jpg" />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
}
