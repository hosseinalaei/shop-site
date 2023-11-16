import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import cat1 from "../../assets/images/mob.jpeg";
import cat2 from "../../assets/images/laptop.png";
import cat3 from "../../assets/images/watch.jpeg";
import cat4 from "../../assets/images/tab.jpeg";
import cat5 from "../../assets/images/play.jpeg";
import cat6 from "../../assets/images/demos/demo15/categories/cat-6.jpg";
import cat7 from "../../assets/images/demos/demo15/categories/cat-7.jpg";
import cat8 from "../../assets/images/demos/demo15/categories/cat-8.jpg";
import Link from "next/link";
import { Autoplay, Pagination, Scrollbar } from "swiper";

const data = [
  { title: "موبایل", bgColor: "#C1C6C", Link: "/", image: cat1 },
  { title: "لپ تاپ", bgColor: "#9BC4CA", Link: "/", image: cat2 },
  { title: "ساعت هوشمند", bgColor: "#5D6A73", Link: "/", image: cat3 },
  { title: "تبلت", bgColor: "#8692A0", Link: "/", image: cat4 },
  { title: "کنسول بازی", bgColor: "#E2E2E2", Link: "/", image: cat5 },
  { title: "لوازم جانبی", bgColor: "#596F7C", Link: "/", image: cat6 },
];
const TopCategories = () => {
  return (
    <div className="container-fluid">
      {/* <Swiper
        loop={false}
        spaceBetween={0}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      > */}
      <div className="icon-box-wrapper">
        <Swiper
          loop={true}
          spaceBetween={0}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="swiper-slide icon-box icon-box-side text-dark swiper-slide-active">
            <div className="d-flex align-items-center text-center justify-content-center pt-4 pb-4">
              <span className="icon-box-icon icon-shipping">
                <i className="w-icon-truck"></i>
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title">ارسال رایگان و مرجوعی</h4>
                <p className="text-default">برای تمام سفارشات بیش از 99 دلار</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide icon-box icon-box-side text-dark swiper-slide-active">
            <div className="d-flex align-items-center text-center justify-content-center pt-4 pb-4">
              <span className="icon-box-icon icon-payment">
                <i className="w-icon-bag"></i>
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title">پرداخت امن</h4>
                <p className="text-default">ما تضمین می کنیم</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide icon-box icon-box-side text-dark swiper-slide-active">
            <div className="d-flex align-items-center text-center justify-content-center pt-4 pb-4">
              <span className="icon-box-icon icon-money">
                <i className="w-icon-money"></i>
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title">تضمین بازگشت پول</h4>
                <p className="text-default">پس از 30 روز بازگشت</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide icon-box icon-box-side text-dark swiper-slide-active">
            <div className="d-flex align-items-center text-center justify-content-center pt-4 pb-4">
              <span className="icon-box-icon icon-chat">
                <i className="w-icon-chat"></i>
              </span>
              <div className="icon-box-content">
                <h4 className="icon-box-title">پشتیبانی مشتری</h4>
                <p className="text-default">
                  24/7 با ما تماس بگیرید یا ایمیل بزنید
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* </Swiper> */}

      <div className="top-categories-wrapper ">
        <h2 className="title title-center text-capitalize pt-7 mb-7">
          دسته بندی محصولات
        </h2>
        <div className="pl-2 pr-2">
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet d-lg-none",
              bulletActiveClass: "swiper-pagination-bullet-active d-lg-none",
              renderBullet: (index, className) => {
                return '<span class="' + className + '" role="button"> </span>';
              },
            }}
            // scrollbar={{ draggable: true }}
            spaceBetween={40}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 6,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            // className="swiper-container swiper-theme shadow-swiper"
          >
            <div className="swiper-wrapper row cols-xl-8 cols-lg-4 cols-md-4 cols-sm-3 cols-2 justify-content-between">
              {data?.map((item, index) => {
                return (
                  <SwiperSlide
                    // className="swiper-slide category category-ellipse"
                    key={index}
                  >
                    <div className="category category-ellipse">
                      <figure className="category-media">
                        <Link href={item.Link}>
                          <Image
                            src={item.image}
                            alt="Categroy"
                            width="180"
                            height="180"
                            style={{ backgroundColor: item.bgColor }}
                          />
                        </Link>
                      </figure>
                      <div className="category-content">
                        <h4 className="category-name">
                          <Link href="demo15-shop.html">{item.title} </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* <div className="swiper-slide category category-ellipse">
                <figure className="category-media">
                  <Link href="demo15-shop.html">
                    <Image
                      src={cat1}
                      alt="Categroy"
                      width="190"
                      height="190"
                      style={{ backgroundColor: "#C1C6CC" }}
                    />
                  </Link>
                </figure>
                <div className="category-content">
                  <h4 className="category-name">
                    <Link href="demo15-shop.html">مد </Link>
                  </h4>
                </div>
              </div>
              <div className="swiper-slide category category-ellipse">
                <figure className="category-media">
                  <Link href="demo15-shop.html">
                    <Image
                      src={cat2}
                      alt="Categroy"
                      width="190"
                      height="190"
                      style={{ backgroundColor: "#9BC4CA" }}
                    />
                  </Link>
                </figure>
                <div className="category-content">
                  <h4 className="category-name">
                    <Link href="demo15-shop.html">کفش </Link>
                  </h4>
                </div>
              </div>
              <div className="swiper-slide category category-ellipse">
                <figure className="category-media">
                  <Link href="demo15-shop.html">
                    <Image
                      src={cat3}
                      alt="Categroy"
                      width="190"
                      height="190"
                      style={{ backgroundColor: "#5D6A73" }}
                    />
                  </Link>
                </figure>
                <div className="category-content">
                  <h4 className="category-name">
                    <Link href="demo15-shop.html">آشپزخانه </Link>
                  </h4>
                </div>
              </div>
              <div className="swiper-slide category category-ellipse">
                <figure className="category-media">
                  <Link href="demo15-shop.html">
                    <Image
                      src={cat4}
                      alt="Categroy"
                      width="190"
                      height="190"
                      style={{ backgroundColor: "#8692A0" }}
                    />
                  </Link>
                </figure>
                <div className="category-content">
                  <h4 className="category-name">
                    <Link href="demo15-shop.html">گوشی </Link>
                  </h4>
                </div>
              </div>
              <div className="swiper-slide category category-ellipse">
                <figure className="category-media">
                  <Link href="demo15-shop.html">
                    <Image
                      src={cat5}
                      alt="Categroy"
                      width="190"
                      height="190"
                      style={{ backgroundColor: "#E2E2E2" }}
                    />
                  </Link>
                </figure>
                <div className="category-content">
                  <h4 className="category-name">
                    <Link href="demo15-shop.html">لوازم آرایشی </Link>
                  </h4>
                </div>
              </div>
              <div className="swiper-slide category category-ellipse">
                <figure className="category-media">
                  <Link href="demo15-shop.html">
                    <Image
                      src={cat6}
                      alt="Categroy"
                      width="190"
                      height="190"
                      style={{ backgroundColor: "#596F7C" }}
                    />
                  </Link>
                </figure>
                <div className="category-content">
                  <h4 className="category-name">
                    <Link href="demo15-shop.html">دوربین ها </Link>
                  </h4>
                </div>
              </div>
              <div className="swiper-slide category category-ellipse">
                <figure className="category-media">
                  <Link href="demo15-shop.html">
                    <Image
                      src={cat7}
                      alt="Categroy"
                      width="190"
                      height="190"
                      style={{ backgroundColor: "#B8BCBF" }}
                    />
                  </Link>
                </figure>
                <div className="category-content">
                  <h4 className="category-name">
                    <Link href="demo15-shop.html">ساعت </Link>
                  </h4>
                </div>
              </div>
              <div className="swiper-slide category category-ellipse">
                <figure className="category-media">
                  <Link href="demo15-shop.html">
                    <Image
                      src={cat8}
                      alt="Categroy"
                      width="190"
                      height="190"
                      style={{ backgroundColor: "#65737C" }}
                    />
                  </Link>
                </figure>
                <div className="category-content">
                  <h4 className="category-name">
                    <Link href="demo15-shop.html">بچه ها </Link>
                  </h4>
                </div>
              </div> */}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
