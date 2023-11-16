import Footer from "@/components/Footer/Footer";
import StickyFooter from "@/components/Footer/StickyFooter";
import MobileMenu from "@/components/Menu/MobileMenu";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="main">
          <div className="page-header">
            <div className="container">
              <h1 className="page-title mb-0">درباره ما</h1>
            </div>
          </div>
          <nav className="breadcrumb-nav mb-10 pb-8">
            <div className="container">
              <ul className="breadcrumb">
                <li>
                  <Link href="demo1.html">خانه </Link>
                </li>
                <li>درباره ما</li>
              </ul>
            </div>
          </nav>

          <div className="page-content">
            <div className="container">
              <section className="introduce mb-10 pb-10">
                <h2 className="title title-center">
                  ما بازاریابی اختصاصی هستیم
                  <br />
                  مشاورانی که به رشد کسب و کار شما کمک می کنند
                </h2>
                <p className=" mx-auto text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. با تولید سادگی, مشاورانی که به
                  رشد کسب و کار شما کمک می کنند
                </p>
                {/* <figure className="br-lg">
                  <Image
                    src="assets/images/pages/about_us/1.jpg"
                    alt="Banner"
                    width="1240"
                    height="540"
                    style={{ backgroundColor: "#D0C1AE" }}
                  />
                </figure> */}
              </section>

              <section className="customer-service mb-7">
                <div className="row align-items-center">
                  <div className="col-md-6 pr-lg-8 mb-8">
                    <h2 className="title text-left">
                      ما خدمات مستمر و مهربانی را برای مشتریان ارائه می دهیم
                    </h2>
                    <div className="accordion accordion-simple accordion-plus">
                      <div className="card border-no">
                        <div className="card-header">
                          <Link href="#collapse3-1" className="collapse">
                            خدمات مشتری
                          </Link>
                        </div>
                        <div className="card-body expanded" id="collapse3-1">
                          <p className="mb-0">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد..
                          </p>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <Link href="#collapse3-2" className="expand">
                            مشاوره آنلاین
                          </Link>
                        </div>
                        <div className="card-body collapsed" id="collapse3-2">
                          <p className="mb-0">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد..
                          </p>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <Link href="#collapse3-3" className="expand">
                            مدیریت فروش
                          </Link>
                        </div>
                        <div className="card-body collapsed" id="collapse3-3">
                          <p className="mb-0">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                            لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-8">
                    {/* <figure className="br-lg">
                      <Image
                        src="assets/images/pages/about_us/2.jpg"
                        alt="Banner"
                        width="610"
                        height="500"
                        style={{ backgroundColor: "#CECECC" }}
                      />
                    </figure> */}
                  </div>
                </div>
              </section>

              <section className="count-section mb-10 pb-5">
                <div
                  className="swiper-container swiper-theme"
                  data-swiper-options="{
                         'slidesPerView': 1,
                         'breakpoints': {
                             '768': {
                                 'slidesPerView': 2
                             },
                             '992': {
                                 'slidesPerView': 3
                             }
                         }
                     }"
                >
                  <div className="swiper-wrapper row cols-lg-3 cols-md-2 cols-1">
                    <div className="swiper-slide counter-wrap">
                      <div className="counter text-center">
                        <span className="count-to" data-to="15">
                          0
                        </span>
                        <span>میلیون </span>
                        <h4 className="title title-center">محصول برای فروش</h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است.
                          <br />
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide counter-wrap">
                      <div className="counter text-center">
                        <span>تومان </span>
                        <span className="count-to" data-to="25">
                          0
                        </span>
                        <span>B+</span>
                        <h4 className="title title-center">درآمد جامعه</h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است.
                          <br />
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
                        </p>
                      </div>
                    </div>
                    <div className="swiper-slide counter-wrap">
                      <div className="counter text-center">
                        <span className="count-to" data-to="100">
                          0
                        </span>
                        <span>میلیون </span>
                        <h4 className="title title-center">
                          خریداران در حال رشد
                        </h4>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است.
                          <br />
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </section>
            </div>

            <section className="boost-section pt-10 pb-10">
              <div className="container mt-10 mb-9">
                <div className="row align-items-center mb-10">
                  <div className="col-md-6 mb-8">
                    {/* <figure className="br-lg">
                      <Image
                        src="assets/images/pages/about_us/3.jpg"
                        alt="Banner"
                        width="610"
                        height="450"
                        style={{ backgroundColor: "#9E9DA2" }}
                      />
                    </figure> */}
                  </div>
                  <div className="col-md-6 pl-lg-8 mb-8">
                    <h4 className="title text-left">
                      ما با بهینه‌سازی پتانسیل رشد مشتریان، امتیاز مشتریان خود
                      را تقویت می‌کنیم
                    </h4>
                    <p className="mb-6">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم
                      ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                      استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                      و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                      تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                      کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال
                      و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
                    </p>
                    <Link href="#" className="btn btn-dark btn-rounded">
                      بازدید فروشگاه ما{" "}
                    </Link>
                  </div>
                </div>

                <div className="awards-wrapper">
                  <h4 className="title title-center font-weight-bold mb-10 pb-1 ls-25">
                    جوایز{" "}
                  </h4>
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper-options="{
                             'spaceBetween': 20,
                             'slidesPerView': 1,
                             'breakpoints': {
                                 '768': {
                                     'slidesPerView': 2
                                 },
                                 '992': {
                                     'slidesPerView': 3
                                 },
                                 '1200': {
                                     'slidesPerView': 4
                                 }
                             }
                         }"
                  >
                    <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-md-2 cols-1">
                      <div className="swiper-slide image-box-wrapper">
                        <div className="image-box text-center">
                          {/* <figure>
                            <Image
                              src="assets/images/pages/about_us/1.png"
                              alt="Award Image"
                              width="109"
                              height="105"
                            />
                          </figure> */}
                          <p>
                            برنده سئو اقای راجرر
                            <br />
                            برنده سال 1390
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide image-box-wrapper">
                        <div className="image-box text-center">
                          {/* <figure>
                            <Image
                              src="assets/images/pages/about_us/2.png"
                              alt="Award Image"
                              width="109"
                              height="105"
                            />
                          </figure> */}
                          <p>
                            برترین نمایندگی های سوشیال مدیا
                            <br />
                            برنده سال 1398
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide image-box-wrapper mt-3">
                        <div className="image-box text-center">
                          {/* <figure>
                            <Image
                              src="assets/images/pages/about_us/3.png"
                              alt="Award Image"
                              width="109"
                              height="105"
                            />
                          </figure> */}
                          <p>
                            5 سریعترین رشد چکیده
                            <br />
                            برنده سال 1398
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide image-box-wrapper">
                        <div className="image-box text-center">
                          {/* <figure>
                            <Image
                              src="assets/images/pages/about_us/4.png"
                              alt="Award Image"
                              width="109"
                              height="105"
                            />
                          </figure> */}
                          <p>
                            آژانس تعالی ملی
                            <br />
                            برنده سال 1399
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="member-section mt-10 pt-9 mb-10 pb-4">
              <div className="container">
                <h4 className="title title-center mb-3">
                  با رهبران ما ملاقات کنید
                </h4>
                <p className="text-center mb-8">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. . آلیکام <br />
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
                <div
                  className="swiper-container swiper-theme"
                  data-swiper-options="{
                         'spaceBetween': 20,
                         'slidesPerView': 1,
                         'breakpoints': {
                             '576': {
                                 'slidesPerView': 2
                             },
                             '768': {
                                 'slidesPerView': 3
                             },
                             '992': {
                                 'slidesPerView': 4
                             }
                         }
                     }"
                >
                  <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-sm-2 cols-1">
                    <div className="swiper-slide member-wrap">
                      <figure className="br-lg">
                        {/* <Image
                          src="assets/images/pages/about_us/4.jpg"
                          alt="Member"
                          width="295"
                          height="332"
                        /> */}
                        <div className="overlay">
                          <div className="social-icons">
                            <Link
                              href="#"
                              className="social-icon social-facebook w-icon-facebook"
                            ></Link>
                            <Link
                              href="#"
                              className="social-icon social-twitter w-icon-twitter"
                            ></Link>
                            <Link
                              href="#"
                              className="social-icon social-instagram w-icon-instagram"
                            ></Link>
                          </div>
                        </div>
                      </figure>
                      <div className="member-info text-center">
                        <h4 className="member-name">جان دوو</h4>
                        <p className="text-uppercase">موسس و مدیر عامل</p>
                      </div>
                    </div>
                    <div className="swiper-slide member-wrap">
                      <figure className="br-lg">
                        {/* <Image
                          src="assets/images/pages/about_us/5.jpg"
                          alt="Member"
                          width="295"
                          height="332"
                        /> */}
                        <div className="overlay">
                          <div className="social-icons">
                            <Link
                              href="#"
                              className="social-icon social-facebook w-icon-facebook"
                            ></Link>
                            <Link
                              href="#"
                              className="social-icon social-twitter w-icon-twitter"
                            ></Link>
                            <Link
                              href="#"
                              className="social-icon social-instagram w-icon-instagram"
                            ></Link>
                          </div>
                        </div>
                      </figure>
                      <div className="member-info text-center">
                        <h4 className="member-name">جسیکار ونی</h4>
                        <p className="text-uppercase">بازاریابی </p>
                      </div>
                    </div>
                    <div className="swiper-slide member-wrap">
                      <figure className="br-lg">
                        {/* <Image
                          src="assets/images/pages/about_us/6.jpg"
                          alt="Member"
                          width="295"
                          height="332"
                        /> */}
                        <div className="overlay">
                          <div className="social-icons">
                            <Link
                              href="#"
                              className="social-icon social-facebook w-icon-facebook"
                            ></Link>
                            <Link
                              href="#"
                              className="social-icon social-twitter w-icon-twitter"
                            ></Link>
                            <Link
                              href="#"
                              className="social-icon social-instagram w-icon-instagram"
                            ></Link>
                          </div>
                        </div>
                      </figure>
                      <div className="member-info text-center">
                        <h4 className="member-name">ریک گرایمز</h4>
                        <p className="text-uppercase">توسعه دهنده </p>
                      </div>
                    </div>
                    <div className="swiper-slide member-wrap">
                      <figure className="br-lg">
                        {/* <Image
                          src="assets/images/pages/about_us/7.jpg"
                          alt="Member"
                          width="295"
                          height="332"
                        /> */}
                        <div className="overlay">
                          <div className="social-icons">
                            <Link
                              href="#"
                              className="social-icon social-facebook w-icon-facebook"
                            ></Link>
                            <Link
                              href="#"
                              className="social-icon social-twitter w-icon-twitter"
                            ></Link>
                            <Link
                              href="#"
                              className="social-icon social-instagram w-icon-instagram"
                            ></Link>
                          </div>
                        </div>
                      </figure>
                      <div className="member-info text-center">
                        <h4 className="member-name">ملینا</h4>
                        <p className="text-uppercase">طراح</p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>

      <StickyFooter />

      <Link
        id="scroll-top"
        className="scroll-top"
        href="#top"
        title="بالا"
        role="button"
      >
        {" "}
        <i className="w-icon-angle-up"></i>{" "}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
        >
          {" "}
          <circle
            id="progress-indicator"
            fill="transparent"
            stroke="#000000"
            strokeMiterlimit="10"
            cx="35"
            cy="35"
            r="34"
            style={{ strokeDasharray: "16.4198, 400" }}
          ></circle>{" "}
        </svg>{" "}
      </Link>

      <MobileMenu />
    </>
  );
};

export default AboutUs;
