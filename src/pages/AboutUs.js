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
                  <a href="demo1.html">خانه </a>
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
                <figure className="br-lg">
                  <img
                    src="assets/images/pages/about_us/1.jpg"
                    alt="Banner"
                    width="1240"
                    height="540"
                    style={{ backgroundColor: "#D0C1AE" }}
                  />
                </figure>
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
                          <a href="#collapse3-1" className="collapse">
                            خدمات مشتری
                          </a>
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
                          <a href="#collapse3-2" className="expand">
                            مشاوره آنلاین
                          </a>
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
                          <a href="#collapse3-3" className="expand">
                            مدیریت فروش
                          </a>
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
                    <figure className="br-lg">
                      <img
                        src="assets/images/pages/about_us/2.jpg"
                        alt="Banner"
                        width="610"
                        height="500"
                        style={{ backgroundColor: "#CECECC" }}
                      />
                    </figure>
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
                    <figure className="br-lg">
                      <img
                        src="assets/images/pages/about_us/3.jpg"
                        alt="Banner"
                        width="610"
                        height="450"
                        style={{ backgroundColor: "#9E9DA2" }}
                      />
                    </figure>
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
                    <a href="#" className="btn btn-dark btn-rounded">
                      بازدید فروشگاه ما{" "}
                    </a>
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
                          <figure>
                            <img
                              src="assets/images/pages/about_us/1.png"
                              alt="Award Image"
                              width="109"
                              height="105"
                            />
                          </figure>
                          <p>
                            برنده سئو اقای راجرر
                            <br />
                            برنده سال 1390
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide image-box-wrapper">
                        <div className="image-box text-center">
                          <figure>
                            <img
                              src="assets/images/pages/about_us/2.png"
                              alt="Award Image"
                              width="109"
                              height="105"
                            />
                          </figure>
                          <p>
                            برترین نمایندگی های سوشیال مدیا
                            <br />
                            برنده سال 1398
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide image-box-wrapper mt-3">
                        <div className="image-box text-center">
                          <figure>
                            <img
                              src="assets/images/pages/about_us/3.png"
                              alt="Award Image"
                              width="109"
                              height="105"
                            />
                          </figure>
                          <p>
                            5 سریعترین رشد چکیده
                            <br />
                            برنده سال 1398
                          </p>
                        </div>
                      </div>
                      <div className="swiper-slide image-box-wrapper">
                        <div className="image-box text-center">
                          <figure>
                            <img
                              src="assets/images/pages/about_us/4.png"
                              alt="Award Image"
                              width="109"
                              height="105"
                            />
                          </figure>
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
                        <img
                          src="assets/images/pages/about_us/4.jpg"
                          alt="Member"
                          width="295"
                          height="332"
                        />
                        <div className="overlay">
                          <div className="social-icons">
                            <a
                              href="#"
                              className="social-icon social-facebook w-icon-facebook"
                            ></a>
                            <a
                              href="#"
                              className="social-icon social-twitter w-icon-twitter"
                            ></a>
                            <a
                              href="#"
                              className="social-icon social-instagram w-icon-instagram"
                            ></a>
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
                        <img
                          src="assets/images/pages/about_us/5.jpg"
                          alt="Member"
                          width="295"
                          height="332"
                        />
                        <div className="overlay">
                          <div className="social-icons">
                            <a
                              href="#"
                              className="social-icon social-facebook w-icon-facebook"
                            ></a>
                            <a
                              href="#"
                              className="social-icon social-twitter w-icon-twitter"
                            ></a>
                            <a
                              href="#"
                              className="social-icon social-instagram w-icon-instagram"
                            ></a>
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
                        <img
                          src="assets/images/pages/about_us/6.jpg"
                          alt="Member"
                          width="295"
                          height="332"
                        />
                        <div className="overlay">
                          <div className="social-icons">
                            <a
                              href="#"
                              className="social-icon social-facebook w-icon-facebook"
                            ></a>
                            <a
                              href="#"
                              className="social-icon social-twitter w-icon-twitter"
                            ></a>
                            <a
                              href="#"
                              className="social-icon social-instagram w-icon-instagram"
                            ></a>
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
                        <img
                          src="assets/images/pages/about_us/7.jpg"
                          alt="Member"
                          width="295"
                          height="332"
                        />
                        <div className="overlay">
                          <div className="social-icons">
                            <a
                              href="#"
                              className="social-icon social-facebook w-icon-facebook"
                            ></a>
                            <a
                              href="#"
                              className="social-icon social-twitter w-icon-twitter"
                            ></a>
                            <a
                              href="#"
                              className="social-icon social-instagram w-icon-instagram"
                            ></a>
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

        <footer className="footer">
          <div className="footer-newsletter bg-primary pt-6 pb-6">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="icon-box icon-box-side text-white">
                    <div className="icon-box-icon d-inline-flex">
                      <i className="w-icon-envelop3"></i>
                    </div>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title text-white text-uppercase mb-0">
                        مشترک شدن در خبرنامه ما
                      </h4>
                      <p className="text-white">
                        تمام آخرین اطلاعات در مورد رویدادها، فروش ها و پیشنهادات
                        را دریافت کنید.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                  <form
                    action="#"
                    method="get"
                    className="input-wrapper input-wrapper-inline input-wrapper-rounded"
                  >
                    <input
                      type="email"
                      className="form-control mr-2 bg-white"
                      name="email"
                      id="email"
                      placeholder="آدرس ایمیل "
                    />
                    <button className="btn btn-dark btn-rounded" type="submit">
                      اشتراک در <i className="w-icon-long-arrow-left"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="widget widget-about">
                    <a href="demo1.html" className="logo-footer">
                      <img
                        src="assets/images/logo_footer.png"
                        alt="logo-footer"
                        width="144"
                        height="45"
                      />
                    </a>
                    <div className="widget-body">
                      <p className="widget-about-title">
                        سوالی دارید؟ تماس بگیرید
                      </p>
                      <a href="tel:18005707777" className="widget-about-call">
                        1-800-570-7777
                      </a>
                      <p className="widget-about-desc">
                        برای دریافت بروز رسانی با ما هماهنگ شوید.
                      </p>

                      <div className="social-icons social-icons-colored">
                        <a
                          href="#"
                          className="social-icon social-facebook w-icon-facebook"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-twitter w-icon-twitter"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-instagram w-icon-instagram"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-youtube w-icon-youtube"
                        ></a>
                        <a
                          href="#"
                          className="social-icon social-pinterest w-icon-pinterest"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="widget">
                    <h3 className="widget-title">کمپانی </h3>
                    <ul className="widget-body">
                      <li>
                        <a href="about-us.html">درباره ما </a>
                      </li>
                      <li>
                        <a href="#">اعضای تیم </a>
                      </li>
                      <li>
                        <a href="#">شغل </a>
                      </li>
                      <li>
                        <a href="contact-us.html">تماس با ما </a>
                      </li>
                      <li>
                        <a href="#">وابسته </a>
                      </li>
                      <li>
                        <a href="#">تاریخچه سفارش ها </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="widget">
                    <h4 className="widget-title">حساب کاربری </h4>
                    <ul className="widget-body">
                      <li>
                        <a href="#">پیگیر سفارشات من </a>
                      </li>
                      <li>
                        <a href="cart.html">سبد خرید </a>
                      </li>
                      <li>
                        <a href="login.html">ورود </a>
                      </li>
                      <li>
                        <a href="#">راهنما </a>
                      </li>
                      <li>
                        <a href="wishlist.html">علاقه مندیهای من </a>
                      </li>
                      <li>
                        <a href="#">سیاست حفظ حریم خصوصی </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="widget">
                    <h4 className="widget-title">خدمات مشتری </h4>
                    <ul className="widget-body">
                      <li>
                        <a href="#">روش های پرداخت </a>
                      </li>
                      <li>
                        <a href="#">تضمین بازگشت پول! </a>
                      </li>
                      <li>
                        <a href="#">محصول بازگشتی </a>
                      </li>
                      <li>
                        <a href="#">مرکز پشتیبانی </a>
                      </li>
                      <li>
                        <a href="#">حمل دریایی </a>
                      </li>
                      <li>
                        <a href="#">مدت و شرایط</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-middle">
              <div className="widget widget-category">
                <div className="category-box">
                  <h6 className="category-name">مصرف کننده برق:</h6>
                  <a href="#">تلویزیون</a>
                  <a href="#">وضعیت هوا </a>
                  <a href="#">یخچال </a>
                  <a href="#">ماشین لباسشویی </a>
                  <a href="#">بلندگوی صوتی </a>
                  <a href="#">دوربین امنیتی </a>
                  <a href="#">نمایش همه </a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">پوشاک و لباس:</h6>
                  <a href="#">تیشرت مردانه</a>
                  <a href="#">لباس </a>
                  <a href="#">کفش ورزشی مردانه </a>
                  <a href="#">کوله پشتی چرمی </a>
                  <a href="#">ساعت </a>
                  <a href="#">شلوار جین </a>
                  <a href="#">عینک آفتابی </a>
                  <a href="#">چکمه </a>
                  <a href="#">ریبان </a>
                  <a href="#">تجهیزات جانبی </a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">خانه، باغ و آشپزخانه:</h6>
                  <a href="#">کاناپه </a>
                  <a href="#">صندلی </a>
                  <a href="#">اتاق خواب </a>
                  <a href="#">هال </a>
                  <a href="#">وسایل آشپزی </a>
                  <a href="#">وسایل آشپزی </a>
                  <a href="#">مخلوط کن </a>
                  <a href="#"> تجهیزات باغبانی </a>
                  <a href="#">دکور </a>
                  <a href="#">کتابخانه </a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">سلامت و زیبایی:</h6>
                  <a href="#">مراقبت از پوست </a>
                  <a href="#">دوش بدن </a>
                  <a href="#">آرایش </a>
                  <a href="#">مراقبت از مو </a>
                  <a href="#">رژ لب </a>
                  <a href="#">عطر </a>
                  <a href="#">نمایش همه </a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">جواهرات و ساعت:</h6>
                  <a href="#">گردن بند </a>
                  <a href="#">آویز </a>
                  <a href="#">حلقه الماس </a>
                  <a href="#">گوشواره نقره </a>
                  <a href="#">ناظر چرم </a>
                  <a href="#">رولکس </a>
                  <a href="#">گوچی </a>
                  <a href="#">عقیق استرالیایی </a>
                  <a href="#">آمولیت </a>
                  <a href="#">خورشید پیریت </a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">کامپیوتر و فناوری:</h6>
                  <a href="#">لپ تاپ </a>
                  <a href="#">ایمک </a>
                  <a href="#">گوشی هوشمند </a>
                  <a href="#">تبلت </a>
                  <a href="#">اپل </a>
                  <a href="#">ایسوس </a>
                  <a href="#">درون </a>
                  <a href="#">اسپیکر بی سیم </a>
                  <a href="#">کنترل کننده بازی </a>
                  <a href="#">نمایش همه </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-left">
                <p className="copyright">
                  کپی رایت © 1401 فروشگاه وولمارت. تمامی حقوق محفوظ است..
                </p>
              </div>
              <div className="footer-right">
                <span className="payment-label mr-lg-8">
                  ما از پرداخت مطمئن استفاده می کنیم
                </span>
                <figure className="payment">
                  <img
                    src="assets/images/payment.png"
                    alt="payment"
                    width="159"
                    height="25"
                  />
                </figure>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="sticky-footer sticky-content fix-bottom">
        <a href="demo1.html" className="sticky-link active">
          <i className="w-icon-home"></i>
          <p>خانه</p>
        </a>
        <a href="shop-banner-sidebar.html" className="sticky-link">
          <i className="w-icon-category"></i>
          <p>فروشگاه </p>
        </a>
        <a href="my-account.html" className="sticky-link">
          <i className="w-icon-account"></i>
          <p>حساب کاربری </p>
        </a>
        <div className="cart-dropdown dir-up">
          <a href="cart.html" className="sticky-link">
            <i className="w-icon-cart"></i>
            <p>سبد خرید </p>
          </a>
          <div className="dropdown-box">
            <div className="products">
              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">
                      ما از پرداخت مطمئن استفاده می کنیم
                      <br />
                      کفش دونده تیک
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">25600 تومان</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="#">
                    <img
                      src="assets/images/cart/product-1.jpg"
                      alt="product"
                      height="84"
                      width="94"
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="#">
                      پینا کاربردی آبی
                      <br />
                      لباس جین جلو
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">32000 تومان</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="#">
                    <img
                      src="assets/images/cart/product-2.jpg"
                      alt="product"
                      width="84"
                      height="94"
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            <div className="cart-total">
              <label>مجموع: </label>
              <span className="price">58000 تومان</span>
            </div>

            <div className="cart-action">
              <a
                href="cart.html"
                className="btn btn-dark btn-outline btn-rounded"
              >
                سبد خرید{" "}
              </a>
              <a href="checkout.html" className="btn btn-primary  btn-rounded">
                پرداخت{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="header-search hs-toggle dir-up">
          <a href="#" className="search-toggle sticky-link">
            <i className="w-icon-search"></i>
            <p>جستجو </p>
          </a>
          <form action="#" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="جستجو"
              required
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search"></i>
            </button>
          </form>
        </div>
      </div>

      <a
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
            style={{ "stroke-dasharray": "16.4198, 400" }}
          ></circle>{" "}
        </svg>{" "}
      </a>

      <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay"></div>

        <a href="#" className="mobile-menu-close">
          <i className="close-icon"></i>
        </a>

        <div className="mobile-menu-container scrollable">
          <form action="#" method="get" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              autoComplete="off"
              placeholder="جستجو"
              required
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search"></i>
            </button>
          </form>

          <div className="tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a href="#main-menu" className="nav-link active">
                  منوی اصلی{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="#categories" className="nav-link">
                  دسته بندیها{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="main-menu">
              <ul className="mobile-menu">
                <li>
                  <a href="demo1.html">خانه </a>
                </li>
                <li>
                  <a href="shop-banner-sidebar.html">فروشگاه </a>
                  <ul>
                    <li>
                      <a href="#">صفحات فروشگاه </a>
                      <ul>
                        <li>
                          <a href="shop-banner-sidebar.html">
                            بنر با نوار کناری
                          </a>
                        </li>
                        <li>
                          <a href="shop-boxed-banner.html">بنر باکسی </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">بنر تمام عرض </a>
                        </li>
                        <li>
                          <a href="shop-horizontal-filter.html">
                            فیلتر افقی <span className="tip tip-hot">داغ </span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-off-canvas.html">
                            بدون نوار کناری{" "}
                            <span className="tip tip-new">جدید </span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-infinite-scroll.html">
                            {" "}
                            اسکرول بی نهایت آژاکس
                          </a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar.html">سایدبار چپ </a>
                        </li>
                        <li>
                          <a href="shop-both-sidebar.html">هر دو نوار کناری </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">چیدمان فروشگاه </a>
                      <ul>
                        <li>
                          <a href="shop-grid-3cols.html">3 حالت ستون ها </a>
                        </li>
                        <li>
                          <a href="shop-grid-4cols.html">4 حالت ستون ها </a>
                        </li>
                        <li>
                          <a href="shop-grid-5cols.html">5 حالت ستون ها </a>
                        </li>
                        <li>
                          <a href="shop-grid-6cols.html">6 حالت ستون ها </a>
                        </li>
                        <li>
                          <a href="shop-grid-7cols.html">7 حالت ستون ها </a>
                        </li>
                        <li>
                          <a href="shop-grid-8cols.html">8 حالت ستون ها </a>
                        </li>
                        <li>
                          <a href="shop-list.html">حالت فهرست</a>
                        </li>
                        <li>
                          <a href="shop-list-sidebar.html">
                            حالت فهرست با نوار کناری
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">صفحات محصول </a>
                      <ul>
                        <li>
                          <a href="product-variable.html">محصول متغیر </a>
                        </li>
                        <li>
                          <a href="product-featured.html">ویژه و جذاب </a>
                        </li>
                        <li>
                          <a href="product-accordion.html">
                            داده ها در آکاردئون
                          </a>
                        </li>
                        <li>
                          <a href="product-section.html">داده ها در بخش ها </a>
                        </li>
                        <li>
                          <a href="product-swatch.html">نمونه تصویر </a>
                        </li>
                        <li>
                          <a href="product-extended.html">اطلاعات گسترده </a>
                        </li>
                        <li>
                          <a href="product-without-sidebar.html">
                            بدون نوار کناری{" "}
                          </a>
                        </li>
                        <li>
                          <a href="product-video.html">
                            360<sup>درجه </sup> ویدئو{" "}
                            <span className="tip tip-new">جدید </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">چیدمان محصول </a>
                      <ul>
                        <li>
                          <a href="product-default.html">
                            پیشفرض <span className="tip tip-hot">داغ </span>
                          </a>
                        </li>
                        <li>
                          <a href="product-vertical.html">شست عمودی </a>
                        </li>
                        <li>
                          <a href="product-grid.html">تصاویر شبکه ای </a>
                        </li>
                        <li>
                          <a href="product-masonry.html">ساختمانی </a>
                        </li>
                        <li>
                          <a href="product-gallery.html">گالری </a>
                        </li>
                        <li>
                          <a href="product-sticky-info.html">اطلاعات چسبناک </a>
                        </li>
                        <li>
                          <a href="product-sticky-thumb.html">تصویر چسبناک </a>
                        </li>
                        <li>
                          <a href="product-sticky-both.html">هردو چسبناک </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="vendor-dokan-store.html">فروشنده </a>
                  <ul>
                    <li>
                      <a href="#">لیست فروشگاه </a>
                      <ul>
                        <li>
                          <a href="vendor-dokan-store-list.html">
                            فهرست فروشگاه 1
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcfm-store-list.html">
                            فهرست فروشگاه 2
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcmp-store-list.html">
                            فهرست فروشگاه 3
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wc-store-list.html">
                            فهرست فروشگاه 4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">فروشگاه فروشنده </a>
                      <ul>
                        <li>
                          <a href="vendor-dokan-store.html">
                            فروشگاه فروشنده 1
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcfm-store-product-grid.html">
                            فروشگاه فروشنده 2
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcmp-store-product-grid.html">
                            فروشگاه فروشنده 3
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wc-store-product-grid.html">
                            فروشگاه فروشنده 4
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">بلاگ </a>
                  <ul>
                    <li>
                      <a href="blog.html">کلاسیک </a>
                    </li>
                    <li>
                      <a href="blog-listing.html">لیستی </a>
                    </li>
                    <li>
                      <a href="#">گرید </a>
                      <ul>
                        <li>
                          <a href="blog-grid-2cols.html">شبکه 2 ستون</a>
                        </li>
                        <li>
                          <a href="blog-grid-3cols.html">شبکه 3 ستون</a>
                        </li>
                        <li>
                          <a href="blog-grid-4cols.html">شبکه 4ستون</a>
                        </li>
                        <li>
                          <a href="blog-grid-sidebar.html">سایدبار شبکه ای </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">ساختمانی </a>
                      <ul>
                        <li>
                          <a href="blog-masonry-2cols.html">ساختمانی 2 ستون </a>
                        </li>
                        <li>
                          <a href="blog-masonry-3cols.html">ساختمانی 3 ستون </a>
                        </li>
                        <li>
                          <a href="blog-masonry-4cols.html">ساختمانی 4ستون </a>
                        </li>
                        <li>
                          <a href="blog-masonry-sidebar.html">
                            نوار کناری ساختمانی{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">ماسک </a>
                      <ul>
                        <li>
                          <a href="blog-mask-grid.html">ماسک وبلاگ گرید </a>
                        </li>
                        <li>
                          <a href="blog-mask-masonry.html">
                            ماسک وبلاگ ساختمانی{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="post-single.html">تک نوشته </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about-us.html">صفحات </a>
                  <ul>
                    <li>
                      <a href="about-us.html">درباره ما </a>
                    </li>
                    <li>
                      <a href="become-a-vendor.html">فروشنده شوید </a>
                    </li>
                    <li>
                      <a href="contact-us.html">تماس با ما </a>
                    </li>
                    <li>
                      <a href="login.html">ورود </a>
                    </li>
                    <li>
                      <a href="faq.html">نقل و قل </a>
                    </li>
                    <li>
                      <a href="error-404.html">ارور 404</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">به زودی </a>
                    </li>
                    <li>
                      <a href="wishlist.html">علاقه مندیها </a>
                    </li>
                    <li>
                      <a href="cart.html">سبد خرید </a>
                    </li>
                    <li>
                      <a href="checkout.html">پرداخت </a>
                    </li>
                    <li>
                      <a href="my-account.html">حساب من </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="elements.html">المنت ها </a>
                  <ul>
                    <li>
                      <a href="element-products.html">محصولات </a>
                    </li>
                    <li>
                      <a href="element-titles.html">عناوین </a>
                    </li>
                    <li>
                      <a href="element-typography.html">تایپوگرافی </a>
                    </li>
                    <li>
                      <a href="element-categories.html">دسته بندی محصول </a>
                    </li>
                    <li>
                      <a href="element-buttons.html">دکمه ها </a>
                    </li>
                    <li>
                      <a href="element-accordions.html">آکاردئون </a>
                    </li>
                    <li>
                      <a href="element-alerts.html">هشدار و اعلان</a>
                    </li>
                    <li>
                      <a href="element-tabs.html">زبانه ها </a>
                    </li>
                    <li>
                      <a href="element-testimonials.html">مشتریان </a>
                    </li>
                    <li>
                      <a href="element-blog-posts.html">پست های وبلاگ </a>
                    </li>
                    <li>
                      <a href="element-instagrams.html">اینستاگرام </a>
                    </li>
                    <li>
                      <a href="element-cta.html">دکمه اقدام تماس</a>
                    </li>
                    <li>
                      <a href="element-vendors.html">فروشندگان </a>
                    </li>
                    <li>
                      <a href="element-icon-boxes.html">آیکن باکس </a>
                    </li>
                    <li>
                      <a href="element-icons.html">آیکن ها </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="tab-pane" id="categories">
              <ul className="mobile-menu">
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-tshirt2"></i>مدل
                  </a>
                  <ul>
                    <li>
                      <a href="#">زنانه </a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            تازه رسیده ها{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            پرفروش ترین ها{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">پر طرفدار </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">تن پوش </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">کفش ها </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">کیسه ها </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            تجهیزات جانبی{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">جواهر و ساعت </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">ویژه </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">زنانه </a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            تازه رسیده ها{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            پرفروش ترین ها{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">پر طرفدار </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">تن پوش </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">کفش ها </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">کیسه ها </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            تجهیزات جانبی{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">جواهر و ساعت </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-home"></i>خانه و باغ
                  </a>
                  <ul>
                    <li>
                      <a href="#">اتاق خواب </a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            تخت، قاب و پایه
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">کمد </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html"> میزهای خواب </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            تخت و تخت کودک
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">اسلحه </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">هال </a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">میز های قهوه </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">صندلی </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">جداول </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            فوتون و مبل تختخواب شو
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            کابینت و صندوقچه
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">دفتر </a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            صندلی های اداری{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">میز </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            قفسه های کتاب{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">قفسه پوشه ها </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            {" "}
                            اتاق استراحت جداول{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">آشپزخانه و غذاخوری</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            ست های غذاخوری{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            کابینت های نگهداری آشپزخانه
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            قفسه های بشرز{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            صندلی های غذاخوری{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            اتاق غذاخوری جداول{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">چهارپایه بار </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-electronics"></i>الکترونیک
                  </a>
                  <ul>
                    <li>
                      <a href="#">لپ تاپ و کامپیوتر</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            کامپیوترهای رومیزی
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">مانیتور </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">لپ تاپ </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            هارد دیسک و فضای ذخیره سازی
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            کامپیوتر تجهیزات جانبی{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">تلویزیون و ویدئو</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">تلویزیون ها </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            بلندگوهای صوتی خانگی
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">پروژکتورها </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            دستگاه های پخش رسانه
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">دوربین های دیجیتال</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            دوربین های دیجیتال SLR
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            دوربین های ورزشی و اکشن
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            لنزهای دوربین{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">چاپگر عکس </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            کارت های حافظه دیجیتال
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">تلفن های همراه </a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            تلفن های حامل{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            گوشی های قفل نشده{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            قاب های گوشی و موبایل
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            شارژر تلفن همراه
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-furniture"></i> مبلمان
                  </a>
                  <ul>
                    <li>
                      <a href="#">مبلمان </a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">مبل و کاناپه</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">صندلی </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            چارچوب های تخت{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            میزهای کنار تخت{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">میز آرایش</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">نورپردازی </a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">لامپ </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">لامپ ها </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            چراغ های سقفی{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            چراغ های دیواری{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            حمام نورپردازی{" "}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">خانه تجهیزات جانبی </a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            تجهیزات جانبی تزئینی{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            شمع و نگهدارنده
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">عطر خانگی </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">آینه </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">ساعت ها </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">باغ و فضای باز</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">مبلمان باغ </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            ماشین های چمن زنی{" "}
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            واشرهای تحت فشار
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            تمام ابزار باغبانی
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            غذاخوری در فضای باز
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-heartbeat"></i>سلامت و زیبایی
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-gift"></i>ایده های هدیه
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-gamepad"></i>اسباب بازی و بازی
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ice-cream"></i>آشپزی
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ios"></i>گوشی های هوشمند
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-camera"></i>دوربین و عکس
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ruby"></i>تجهیزات جانبی
                  </a>
                </li>
                <li>
                  <a
                    href="shop-banner-sidebar.html"
                    className="font-weight-bold text-primary text-uppercase ls-25"
                  >
                    نمایش همه دسته بندیها <i className="w-icon-angle-left"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
