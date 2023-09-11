import Image from "next/image";
import productImage from "../../assets/images/samsung_galaxy_a03_red02_1_1.jpeg";

const product = () => {
  return (
    <main className="main mb-10 pb-1">
      <nav className="breadcrumb-nav container">
        <ul className="breadcrumb bb-no">
          <li>
            <a href="demo1.html">خانه </a>
          </li>
          <li>
            <a href="product-default.html">محصولات </a>
          </li>
          <li>شست عمودی</li>
        </ul>
        <ul className="product-nav list-style-none">
          <li className="product-nav-prev">
            <a href="#">
              <i className="w-icon-angle-right"></i>
            </a>
            <span className="product-nav-popup">
              {/* <Image
                src={productImage}
                alt="Product"
                width="110"
                height="110"
              /> */}
              <span className="product-name">نرم صدا ساز</span>
            </span>
          </li>
          <li className="product-nav-next">
            {" "}
            <a href="#">
              {" "}
              <i className="w-icon-angle-left"></i>
            </a>
            <span className="product-nav-popup">
              {/* <Image
                src={productImage}
                alt="Product"
                width="110"
                height="110"
              /> */}
              <span className="product-name">بلندگوی صدای فوق العاده</span>
            </span>
          </li>
        </ul>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="row gutter-lg">
            <div className="main-content">
              <div className="product product-single row">
                <div className="col-md-6 mb-6">
                  <div className="product-gallery product-gallery-sticky product-gallery-video">
                    <div
                      className="swiper-container product-single-swiper swiper-theme nav-inner"
                      // data-swiper-options="{
                      //                   'navigation': {
                      //                       'nextEl': '.swiper-button-next',
                      //                       'prevEl': '.swiper-button-prev'
                      //                   }
                      //               }"
                    >
                      <div className="swiper-wrapper row cols-1 gutter-no">
                        <div className="swiper-slide">
                          <figure className="product-image">
                            <Image
                              src={productImage}
                              alt="کفش اسپرت صورتی"
                              width="800"
                              height="900"
                            />
                          </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure className="product-image">
                            <Image
                              src={productImage}
                              alt="کفش اسپرت صورتی"
                              width="488"
                              height="549"
                            />
                          </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure className="product-image">
                            <Image
                              src={productImage}
                              alt="کفش اسپرت صورتی"
                              width="800"
                              height="900"
                            />
                          </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure className="product-image">
                            <Image
                              src={productImage}
                              alt="کفش اسپرت صورتی"
                              width="800"
                              height="900"
                            />
                          </figure>
                        </div>
                      </div>
                      <button className="swiper-button-next"></button>
                      <button className="swiper-button-prev"></button>
                      <a
                        href="#"
                        className="product-gallery-btn product-image-full"
                      >
                        <i className="w-icon-zoom"></i>
                      </a>
                    </div>
                    <div
                      className="product-thumbs-wrap swiper-container"
                      // data-swiper-options="{
                      //                   'navigation': {
                      //                       'nextEl': '.swiper-button-next',
                      //                       'prevEl': '.swiper-button-prev'
                      //                   }
                      //               }"
                    >
                      <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                        <div className="product-thumb swiper-slide">
                          <Image
                            src={productImage}
                            alt="Product Thumb"
                            width="800"
                            height="900"
                          />
                        </div>
                        <div className="product-thumb swiper-slide">
                          <Image
                            src={productImage}
                            alt="Product Thumb"
                            width="800"
                            height="900"
                          />
                        </div>
                        <div className="product-thumb swiper-slide">
                          <Image
                            src={productImage}
                            alt="Product Thumb"
                            width="800"
                            height="900"
                          />
                        </div>
                        <div className="product-thumb swiper-slide">
                          <Image
                            src={productImage}
                            alt="Product Thumb"
                            width="800"
                            height="900"
                          />
                        </div>
                      </div>
                      <button className="swiper-button-next"></button>
                      <button className="swiper-button-prev"></button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 mb-md-6">
                  <div className="product-details">
                    <h1 className="product-title">کفش اسپرت صورتی</h1>
                    <div className="product-bm-wrapper">
                      <figure className="brand">
                        <Image
                          src={productImage}
                          alt="Brand"
                          width="105"
                          height="48"
                        />
                      </figure>
                      <div className="product-meta">
                        <div className="product-categories">
                          دسته بندی:
                          <span className="product-category">
                            <a href="#">مد </a>
                          </span>
                        </div>
                        <div className="product-sku">
                          کد: <span>MS46891362</span>
                        </div>
                      </div>
                    </div>

                    <hr className="product-divider" />

                    <div className="product-price">
                      <ins className="new-price">86000 تومان</ins>
                    </div>

                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "80%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="#product-tab-reviews" className="rating-reviews">
                        (3 نظر )
                      </a>
                    </div>

                    <div className="product-short-desc lh-2">
                      <ul className="list-type-check list-style-none">
                        <li>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی
                          نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                          است..
                        </li>
                        <li>
                          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                          که لازم است و برای شرایط فعلی.
                        </li>
                        <li>
                          مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                          قرار گیرد..
                        </li>
                      </ul>
                    </div>

                    <hr className="product-divider" />

                    <div className="fix-bottom product-sticky-content sticky-content">
                      <div className="product-form container">
                        <div className="product-qty-form">
                          <div className="input-group">
                            <input
                              className="quantity form-control"
                              type="number"
                              min="1"
                              max="10000000"
                            />
                            <button className="quantity-plus w-icon-plus"></button>
                            <button className="quantity-minus w-icon-minus"></button>
                          </div>
                        </div>
                        <button className="btn btn-primary btn-cart">
                          <i className="w-icon-cart"></i>
                          <span>افزودن به سبد </span>
                        </button>
                      </div>
                    </div>

                    <div className="social-links-wrapper">
                      <div className="social-links">
                        <div className="social-icons social-no-color border-thin">
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
                            className="social-icon social-pinterest fab fa-pinterest-p"
                          ></a>
                          <a
                            href="#"
                            className="social-icon social-whatsapp fab fa-whatsapp"
                          ></a>
                          <a
                            href="#"
                            className="social-icon social-youtube fab fa-linkedin-in"
                          ></a>
                        </div>
                      </div>
                      <span className="divider d-xs-show"></span>
                      <div className="product-link-wrapper d-flex">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                        >
                          <span></span>
                        </a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                        >
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab tab-nav-boxed tab-nav-underline product-tabs mt-3">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      href="#product-tab-description"
                      className="nav-link active"
                    >
                      توضیحات
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#product-tab-reviews" className="nav-link">
                      نظرات مشتریان (3)
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="product-tab-description">
                    <div className="row mb-4">
                      <div className="col-md-6 mb-5">
                        <h4 className="title tab-pane-title font-weight-bold mb-2">
                          جزئیات{" "}
                        </h4>
                        <p className="mb-4">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی
                          نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
                          که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                          .
                        </p>
                        <ul className="list-type-check">
                          <li>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید
                            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است.
                          </li>
                          <li>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید
                            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است.
                          </li>
                          <li>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید
                            سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                            گرافیک است.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 mb-5">
                        <div className="banner banner-video product-video br-xs">
                          <figure className="banner-media">
                            <a href="#">
                              <Image
                                src={productImage}
                                alt="banner"
                                width="610"
                                height="300"
                                style={{ backgroundColor: "#bebebe" }}
                              />
                            </a>
                            <a
                              className="btn-play-video btn-iframe"
                              href="assets/video/memory-of-a-woman.mp4"
                            ></a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="row cols-md-3">
                      <div className="mb-3">
                        <h5 className="sub-title font-weight-bold">
                          <span className="mr-3">1.</span>ارسال رایگان و برگشت
                        </h5>
                        <p className="detail pl-5">
                          ما برای سفارش های بالای 50 دلار ارسال رایگان برای
                          محصولات ارائه می دهیم و برای همه سفارش ها در ایالات
                          متحده تحویل رایگان ارائه می دهیم.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h5 className="sub-title font-weight-bold">
                          <span>2.</span>بازگشت رایگان و آسان
                        </h5>
                        <p className="detail pl-5">
                          ما محصولات خود را تضمین می کنیم و شما می توانید در 30
                          روز هر زمان که بخواهید تمام پول خود را پس بگیرید.
                        </p>
                      </div>
                      <div className="mb-3">
                        <h5 className="sub-title font-weight-bold">
                          <span>3.</span>تامین مالی ویژه
                        </h5>
                        <p className="detail pl-5">
                          با کارت اعتباری ویژه ما اقلام تخفیف 20 تا 50 درصدی بیش
                          از 50 دلار برای یک ماه یا بیش از 250 دلار برای یک سال
                          دریافت کنید..
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="product-tab-reviews">
                    <div className="row mb-4">
                      <div className="col-xl-4 col-lg-5 mb-4">
                        <div className="ratings-wrapper">
                          <div className="avg-rating-container">
                            <h4 className="avg-mark font-weight-bolder ls-50">
                              3.3
                            </h4>
                            <div className="avg-rating">
                              <p className="text-dark mb-1">میانگین امتیاز </p>
                              <div className="ratings-container">
                                <div className="ratings-full">
                                  <span
                                    className="ratings"
                                    style={{ width: "60%" }}
                                  ></span>
                                  <span className="tooltiptext tooltip-top"></span>
                                </div>
                                <a href="#" className="rating-reviews">
                                  (3 نظر )
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="ratings-value d-flex align-items-center text-dark ls-25">
                            <span className="text-dark font-weight-bold">
                              66.7%
                            </span>
                            توصیه شده <span className="count">(2 از 3)</span>
                          </div>
                          <div className="ratings-list">
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                              <div className="progress-bar progress-bar-sm ">
                                <span></span>
                              </div>
                              <div className="progress-value">
                                <mark>70%</mark>
                              </div>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "80%" }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                              <div className="progress-bar progress-bar-sm ">
                                <span></span>
                              </div>
                              <div className="progress-value">
                                <mark>30%</mark>
                              </div>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                              <div className="progress-bar progress-bar-sm ">
                                <span></span>
                              </div>
                              <div className="progress-value">
                                <mark>40%</mark>
                              </div>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "40%" }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                              <div className="progress-bar progress-bar-sm ">
                                <span></span>
                              </div>
                              <div className="progress-value">
                                <mark>0%</mark>
                              </div>
                            </div>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "20%" }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                              <div className="progress-bar progress-bar-sm ">
                                <span></span>
                              </div>
                              <div className="progress-value">
                                <mark>0%</mark>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7 mb-4">
                        <div className="review-form-wrapper">
                          <h3 className="title tab-pane-title font-weight-bold mb-1">
                            نظر خود را ارسال کنید
                          </h3>
                          <p className="mb-3">
                            آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی مشخص
                            شده اند *
                          </p>
                          <form
                            action="#"
                            method="POST"
                            className="review-form"
                          >
                            <div className="rating-form">
                              <label htmlFor="rating">
                                امتیاز شما به این محصول :
                              </label>
                              <span className="rating-stars">
                                <a className="star-1" href="#">
                                  1
                                </a>
                                <a className="star-2" href="#">
                                  2
                                </a>
                                <a className="star-3" href="#">
                                  3
                                </a>
                                <a className="star-4" href="#">
                                  4
                                </a>
                                <a className="star-5" href="#">
                                  5
                                </a>
                              </span>
                              {/* <select
                                name="rating"
                                id="rating"
                                required=""
                                style="display: none;"
                              >
                                <option value="">امتیاز </option>
                                <option value="5">عالی </option>
                                <option value="4">خوب </option>
                                <option value="3">میانگین </option>
                                <option value="2">بد نیست</option>
                                <option value="1">خیلی بد</option>
                              </select> */}
                            </div>
                            <textarea
                              cols="30"
                              rows="6"
                              placeholder="نظر خود را اینجا بنویسید..."
                              className="form-control"
                              id="review"
                            ></textarea>
                            <div className="row gutter-md">
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="نام شما"
                                  id="author"
                                />
                              </div>
                              <div className="col-md-6">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="ایمیل شما"
                                  id="email_1"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <input
                                type="checkbox"
                                className="custom-checkbox"
                                id="save-checkbox"
                              />
                              <label htmlFor="save-checkbox">
                                برای دفعه بعد که نظر می دهم نام، ایمیل و وب سایت
                                من را در این مرورگر ذخیره کنید.
                              </label>
                            </div>
                            <button type="submit" className="btn btn-dark">
                              ارسال نظر
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="tab tab-nav-boxed tab-nav-outline tab-nav-center">
                      <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a href="#show-all" className="nav-link active">
                            نمایش همه{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#helpful-positive" className="nav-link">
                            مفیدترین نکته مثبت
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#helpful-negative" className="nav-link">
                            مفیدترین منفی
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#highest-rating" className="nav-link">
                            بالاترین امتیاز
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#lowest-rating" className="nav-link">
                            کمترین رتبه
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane active" id="show-all">
                          <ul className="comments list-style-none">
                            <li className="comment">
                              <div className="comment-body">
                                <figure className="comment-avatar">
                                  <Image
                                    src={productImage}
                                    alt="Commenter Avatar"
                                    width="90"
                                    height="90"
                                  />
                                </figure>
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="#">جان دوو</a>
                                    <span className="comment-date">
                                      اردیبهشت 1401
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "60%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد. کتابهای
                                    زیادی در شصت و سه درصد گذشته، حال و آینده
                                    شناخت فراوان جامعه و متخصصان را می طلبد تا
                                    با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد. در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در
                                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                                    وزمان مورد نیاز شامل حروفچینی دستاوردهای
                                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد..
                                  </p>
                                  <div className="comment-action">
                                    <a
                                      href="#"
                                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-up"></i>مفید
                                      (1)
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-down"></i>ضرر
                                      (0)
                                    </a>
                                    <div className="review-image">
                                      <a href="#">
                                        <figure>
                                          <Image
                                            src={productImage}
                                            width="60"
                                            height="60"
                                            alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          />
                                        </figure>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="comment">
                              <div className="comment-body">
                                <figure className="comment-avatar">
                                  <Image
                                    src={productImage}
                                    alt="Commenter Avatar"
                                    width="90"
                                    height="90"
                                  />
                                </figure>
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="#">جان دوو</a>
                                    <span className="comment-date">
                                      اردیبهشت 1401
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "80%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد. کتابهای
                                    زیادی در شصت و سه درصد گذشته، حال و آینده
                                    شناخت فراوان جامعه و متخصصان را می طلبد تا
                                    با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد. در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در
                                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                                    وزمان مورد نیاز شامل حروفچینی دستاوردهای
                                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد..
                                  </p>
                                  <div className="comment-action">
                                    <a
                                      href="#"
                                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-up"></i>مفید
                                      (1)
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-down"></i>ضرر
                                      (0)
                                    </a>
                                    <div className="review-image">
                                      <a href="#">
                                        <figure>
                                          <Image
                                            src={productImage}
                                            width="60"
                                            height="60"
                                            alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          />
                                        </figure>
                                      </a>
                                      <a href="#">
                                        <figure>
                                          <Image
                                            src={productImage}
                                            width="60"
                                            height="60"
                                            alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          />
                                        </figure>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="comment">
                              <div className="comment-body">
                                <figure className="comment-avatar">
                                  <Image
                                    src={productImage}
                                    alt="Commenter Avatar"
                                    width="90"
                                    height="90"
                                  />
                                </figure>
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="#">جان دوو</a>
                                    <span className="comment-date">
                                      اردیبهشت 1401
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "60%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد. کتابهای
                                    زیادی در شصت و سه درصد گذشته، حال و آینده
                                    شناخت فراوان جامعه و متخصصان را می طلبد تا
                                    با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد. در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در
                                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                                    وزمان مورد نیاز شامل حروفچینی دستاوردهای
                                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد..
                                  </p>
                                  <div className="comment-action">
                                    <a
                                      href="#"
                                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-up"></i>مفید
                                      (0)
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-down"></i>ضرر
                                      (1)
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane" id="helpful-positive">
                          <ul className="comments list-style-none">
                            <li className="comment">
                              <div className="comment-body">
                                <figure className="comment-avatar">
                                  <Image
                                    src={productImage}
                                    alt="Commenter Avatar"
                                    width="90"
                                    height="90"
                                  />
                                </figure>
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="#">جان دوو</a>
                                    <span className="comment-date">
                                      اردیبهشت 1401
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "60%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد. کتابهای
                                    زیادی در شصت و سه درصد گذشته، حال و آینده
                                    شناخت فراوان جامعه و متخصصان را می طلبد تا
                                    با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد. در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در
                                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                                    وزمان مورد نیاز شامل حروفچینی دستاوردهای
                                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد..
                                  </p>
                                  <div className="comment-action">
                                    <a
                                      href="#"
                                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-up"></i>مفید
                                      (1)
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-down"></i>ضرر
                                      (0)
                                    </a>
                                    <div className="review-image">
                                      <a href="#">
                                        <figure>
                                          <Image
                                            src={productImage}
                                            width="60"
                                            height="60"
                                            alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          />
                                        </figure>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li className="comment">
                              <div className="comment-body">
                                <figure className="comment-avatar">
                                  <Image
                                    src={productImage}
                                    alt="Commenter Avatar"
                                    width="90"
                                    height="90"
                                  />
                                </figure>
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="#">جان دوو</a>
                                    <span className="comment-date">
                                      اردیبهشت 1401
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "80%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد. کتابهای
                                    زیادی در شصت و سه درصد گذشته، حال و آینده
                                    شناخت فراوان جامعه و متخصصان را می طلبد تا
                                    با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد. در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در
                                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                                    وزمان مورد نیاز شامل حروفچینی دستاوردهای
                                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد..
                                  </p>
                                  <div className="comment-action">
                                    <a
                                      href="#"
                                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-up"></i>مفید
                                      (1)
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-down"></i>ضرر
                                      (0)
                                    </a>
                                    <div className="review-image">
                                      <a href="#">
                                        <figure>
                                          <Image
                                            src={productImage}
                                            width="60"
                                            height="60"
                                            alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          />
                                        </figure>
                                      </a>
                                      <a href="#">
                                        <figure>
                                          <Image
                                            src={productImage}
                                            width="60"
                                            height="60"
                                            alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          />
                                        </figure>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane" id="helpful-negative">
                          <ul className="comments list-style-none">
                            <li className="comment">
                              <div className="comment-body">
                                <figure className="comment-avatar">
                                  <Image
                                    src={productImage}
                                    alt="Commenter Avatar"
                                    width="90"
                                    height="90"
                                  />
                                </figure>
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="#">جان دوو</a>
                                    <span className="comment-date">
                                      اردیبهشت 1401
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "60%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد. کتابهای
                                    زیادی در شصت و سه درصد گذشته، حال و آینده
                                    شناخت فراوان جامعه و متخصصان را می طلبد تا
                                    با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد. در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در
                                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                                    وزمان مورد نیاز شامل حروفچینی دستاوردهای
                                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد..
                                  </p>
                                  <div className="comment-action">
                                    <a
                                      href="#"
                                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-up"></i>مفید
                                      (0)
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-down"></i>ضرر
                                      (1)
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane" id="highest-rating">
                          <ul className="comments list-style-none">
                            <li className="comment">
                              <div className="comment-body">
                                <figure className="comment-avatar">
                                  <Image
                                    src={productImage}
                                    alt="Commenter Avatar"
                                    width="90"
                                    height="90"
                                  />
                                </figure>
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="#">جان دوو</a>
                                    <span className="comment-date">
                                      اردیبهشت 1401
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "80%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد. کتابهای
                                    زیادی در شصت و سه درصد گذشته، حال و آینده
                                    شناخت فراوان جامعه و متخصصان را می طلبد تا
                                    با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد. در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در
                                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                                    وزمان مورد نیاز شامل حروفچینی دستاوردهای
                                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد..
                                  </p>
                                  <div className="comment-action">
                                    <a
                                      href="#"
                                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-up"></i>مفید
                                      (1)
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-down"></i>ضرر
                                      (0)
                                    </a>
                                    <div className="review-image">
                                      <a href="#">
                                        <figure>
                                          <Image
                                            src={productImage}
                                            width="60"
                                            height="60"
                                            alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          />
                                        </figure>
                                      </a>
                                      <a href="#">
                                        <figure>
                                          <Image
                                            src={productImage}
                                            width="60"
                                            height="60"
                                            alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          />
                                        </figure>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="tab-pane" id="lowest-rating">
                          <ul className="comments list-style-none">
                            <li className="comment">
                              <div className="comment-body">
                                <figure className="comment-avatar">
                                  <Image
                                    src={productImage}
                                    alt="Commenter Avatar"
                                    width="90"
                                    height="90"
                                  />
                                </figure>
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <a href="#">جان دوو</a>
                                    <span className="comment-date">
                                      اردیبهشت 1401
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "60%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی
                                    نامفهوم از صنعت چاپ و با استفاده از طراحان
                                    گرافیک است. با تولید سادگی نامفهوم از صنعت
                                    چاپ و با استفاده از طراحان گرافیک است.
                                    چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                    سطرآنچنان که لازم است و برای شرایط فعلی
                                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                    بهبود ابزارهای کاربردی می باشد. کتابهای
                                    زیادی در شصت و سه درصد گذشته، حال و آینده
                                    شناخت فراوان جامعه و متخصصان را می طلبد تا
                                    با نرم افزارها شناخت بیشتری را برای طراحان
                                    رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
                                    پیشرو در زبان فارسی ایجاد کرد. در این صورت
                                    می توان امید داشت که تمام و دشواری موجود در
                                    ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                                    وزمان مورد نیاز شامل حروفچینی دستاوردهای
                                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود
                                    طراحی اساسا مورد استفاده قرار گیرد..
                                  </p>
                                  <div className="comment-action">
                                    <a
                                      href="#"
                                      className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-up"></i>مفید
                                      (1)
                                    </a>
                                    <a
                                      href="#"
                                      className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                    >
                                      <i className="far fa-thumbs-down"></i>ضرر
                                      (0)
                                    </a>
                                    <div className="review-image">
                                      <a href="#">
                                        <figure>
                                          <Image
                                            src={productImage}
                                            width="60"
                                            height="60"
                                            alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          />
                                        </figure>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section className="vendor-product-section">
                <div className="title-link-wrapper mb-4">
                  <h4 className="title text-left">
                    محصولات بیشتر از این فروشنده
                  </h4>
                  <a
                    href="#"
                    className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                  >
                    محصولات بیشتر<i className="w-icon-long-arrow-left"></i>
                  </a>
                </div>
                <div
                  className="swiper-container swiper-theme"
                  data-swiper-options="{
                                'spaceBetween': 20,
                                'slidesPerView': 2,
                                'breakpoints': {
                                    '576': {
                                        'slidesPerView': 3
                                    },
                                    '768': {
                                        'slidesPerView': 4
                                    },
                                    '992': {
                                        'slidesPerView': 3
                                    }
                                }
                            }"
                >
                  <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                    <div className="swiper-slide product">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="افزودن به سبد "
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="افزودن به علاقه مندیها"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="افزودن برای مقایسه"
                          ></a>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="نمایش سریع"
                          >
                            نمایش سریع
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">تجهیزات جانبی </a>
                        </div>
                        <h4 className="product-name">
                          <a href="product-default.html">مداد چسبناک</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 نظر )
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">40000 تومان</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="افزودن به سبد "
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="افزودن به علاقه مندیها"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="افزودن برای مقایسه"
                          ></a>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="نمایش سریع"
                          >
                            نمایش سریع
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">الکترونیکی </a>
                        </div>
                        <h4 className="product-name">
                          <a href="product-default.html">
                            مینی اجاق گاز چند کاره
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (5 نظر )
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">480000 تومان</ins>
                            <del className="old-price">580000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="افزودن به سبد "
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="افزودن به علاقه مندیها"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="افزودن برای مقایسه"
                          ></a>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="نمایش سریع"
                          >
                            نمایش سریع
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">ورزشی </a>
                        </div>
                        <h4 className="product-name">
                          <a href="product-default.html">اسکیت پان</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 نظر )
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">480000 تومان</ins>
                            <del className="old-price">580000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="افزودن به سبد "
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="افزودن به علاقه مندیها"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="افزودن برای مقایسه"
                          ></a>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="نمایش سریع"
                          >
                            نمایش سریع
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <div className="product-cat">
                          <a href="shop-banner-sidebar.html">تجهیزات جانبی </a>
                        </div>
                        <h4 className="product-name">
                          <a href="product-default.html">پیوست کلیپ</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (5 نظر )
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">80000 تومان </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="related-product-section">
                <div className="title-link-wrapper mb-4">
                  <h4 className="title">محصولات اخیر </h4>
                  <a
                    href="#"
                    className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                  >
                    محصولات بیشتر<i className="w-icon-long-arrow-left"></i>
                  </a>
                </div>
                <div
                  className="swiper-container swiper-theme"
                  data-swiper-options="{
                                'spaceBetween': 20,
                                'slidesPerView': 2,
                                'breakpoints': {
                                    '576': {
                                        'slidesPerView': 3
                                    },
                                    '768': {
                                        'slidesPerView': 4
                                    },
                                    '992': {
                                        'slidesPerView': 3
                                    }
                                }
                            }"
                >
                  <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                    <div className="swiper-slide product">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="افزودن به سبد "
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="افزودن به علاقه مندیها"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="افزودن برای مقایسه"
                          ></a>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="نمایش سریع"
                          >
                            نمایش سریع
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">درون </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 نظر )
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">480000 تومان</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="افزودن به سبد "
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="افزودن به علاقه مندیها"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="افزودن برای مقایسه"
                          ></a>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="نمایش سریع"
                          >
                            نمایش سریع
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">دوربین رسمی </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 نظر )
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">
                            <ins className="new-price">180000 تومان</ins>
                            <del className="old-price">220000 تومان</del>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="افزودن به سبد "
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="افزودن به علاقه مندیها"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="افزودن برای مقایسه"
                          ></a>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="نمایش سریع"
                          >
                            نمایش سریع
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">پد شارژ گوشی</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (8 نظر )
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">230000 تومان</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <Image
                            src={productImage}
                            alt="Product"
                            width="300"
                            height="338"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="افزودن به سبد "
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="افزودن به علاقه مندیها"
                          ></a>
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="افزودن برای مقایسه"
                          ></a>
                        </div>
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-quickview"
                            title="نمایش سریع"
                          >
                            نمایش سریع
                          </a>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">مداد مد روز</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (9 نظر )
                          </a>
                        </div>
                        <div className="product-pa-wrapper">
                          <div className="product-price">99000 تومان</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
              <div className="sidebar-overlay"></div>
              <a className="sidebar-close" href="#">
                <i className="close-icon"></i>
              </a>
              <a href="#" className="sidebar-toggle d-flex d-lg-none">
                <i className="fas fa-chevron-left"></i>
              </a>
              <div className="sidebar-content scrollable">
                <div className="sticky-sidebar">
                  <div className="widget widget-icon-box mb-6">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-truck"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">
                          ارسال رایگان و مرجوعی
                        </h4>
                        <p>برای تمام سفارشات بیش از 99 دلار</p>
                      </div>
                    </div>
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-bag"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">پرداخت امن</h4>
                        <p>ما تضمین می کنیم</p>
                      </div>
                    </div>
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-money"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">تضمین بازگشت پول</h4>
                        <p>پس از 30 روز بازگشت</p>
                      </div>
                    </div>
                  </div>

                  <div className="widget widget-banner mb-9">
                    <div className="banner banner-fixed br-sm">
                      <figure>
                        <Image
                          src={productImage}
                          alt="Banner"
                          width="266"
                          height="220"
                          style={{ backgroundColor: "#1D2D44" }}
                        />
                      </figure>
                      <div className="banner-content">
                        <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                          40<sup className="font-weight-bold">%</sup>
                          <sub className="font-weight-bold text-uppercase ls-25">
                            تخفیف{" "}
                          </sub>
                        </div>
                        <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                          فروش نامحدود{" "}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="widget widget-products">
                    <div className="title-link-wrapper mb-2">
                      <h4 className="title title-link font-weight-bold">
                        محصولات بیشتر{" "}
                      </h4>
                    </div>

                    <div className="swiper nav-top">
                      <div
                        className="swiper-container swiper-theme nav-top"
                        data-swiper-options="{
                                            'slidesPerView': 1,
                                            'spaceBetween': 20,
                                            'navigation': {
                                                'prevEl': '.swiper-button-prev',
                                                'nextEl': '.swiper-button-next'
                                            }
                                        }"
                      >
                        <div className="swiper-wrapper">
                          <div className="widget-col swiper-slide">
                            <div className="product product-widget">
                              <figure className="product-media">
                                <a href="#">
                                  <Image
                                    src={productImage}
                                    alt="Product"
                                    width="100"
                                    height="113"
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">ساعت هوشمند </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  80000 تومان - 90000 تومان
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <a href="#">
                                  <Image
                                    src={productImage}
                                    alt="Product"
                                    width="100"
                                    height="113"
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">مرکز پزشکی آسمان</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "80%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  220000 تومان
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <a href="#">
                                  <Image
                                    src={productImage}
                                    alt="Product"
                                    width="100"
                                    height="113"
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">موتور بدلکاری مشکی</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "60%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  180000 تومان
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="widget-col swiper-slide">
                            <div className="product product-widget">
                              <figure className="product-media">
                                <a href="#">
                                  <Image
                                    src={productImage}
                                    alt="Product"
                                    width="100"
                                    height="113"
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">اسکیت پان</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  480000 تومان
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <a href="#">
                                  <Image
                                    src={productImage}
                                    alt="Product"
                                    width="100"
                                    height="113"
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">اجاق گاز مدرن</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "80%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  325000 تومان
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <a href="#">
                                  <Image
                                    src={productImage}
                                    alt="Product"
                                    width="100"
                                    height="113"
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">دستگاه سی تی</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  220000 تومان
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="swiper-button-next"></button>
                        <button className="swiper-button-prev"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default product;