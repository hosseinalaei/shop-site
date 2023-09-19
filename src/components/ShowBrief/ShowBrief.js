const ShowBrief = () => {
  return (
    <div className="product product-single product-popup">
      <div className="row gutter-lg">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="product-gallery product-gallery-sticky">
            <div className="swiper-container product-single-swiper swiper-theme nav-inner">
              <div className="swiper-wrapper row cols-1 gutter-no">
                <div className="swiper-slide">
                  <figure className="product-image">
                    <img
                      src="assets/images/products/popup/1-440x494.jpg"
                      data-zoom-image="assets/images/products/popup/1-800x900.jpg"
                      alt="Water Boil Black Utensil"
                      width="800"
                      height="900"
                    />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure className="product-image">
                    <img
                      src="assets/images/products/popup/2-440x494.jpg"
                      data-zoom-image="assets/images/products/popup/2-800x900.jpg"
                      alt="Water Boil Black Utensil"
                      width="800"
                      height="900"
                    />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure className="product-image">
                    <img
                      src="assets/images/products/popup/3-440x494.jpg"
                      data-zoom-image="assets/images/products/popup/3-800x900.jpg"
                      alt="Water Boil Black Utensil"
                      width="800"
                      height="900"
                    />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure className="product-image">
                    <img
                      src="assets/images/products/popup/4-440x494.jpg"
                      data-zoom-image="assets/images/products/popup/4-800x900.jpg"
                      alt="Water Boil Black Utensil"
                      width="800"
                      height="900"
                    />
                  </figure>
                </div>
              </div>
              <button className="swiper-button-next"></button>
              <button className="swiper-button-prev"></button>
            </div>
            <div
              className="product-thumbs-wrap swiper-container"
              data-swiper-options="{
                      'navigation': {
                          'nextEl': '.swiper-button-next',
                          'prevEl': '.swiper-button-prev'
                      }
                  }"
            >
              <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                <div className="product-thumb swiper-slide">
                  <img
                    src="assets/images/products/popup/1-103x116.jpg"
                    alt="Product Thumb"
                    width="103"
                    height="116"
                  />
                </div>
                <div className="product-thumb swiper-slide">
                  <img
                    src="assets/images/products/popup/2-103x116.jpg"
                    alt="Product Thumb"
                    width="103"
                    height="116"
                  />
                </div>
                <div className="product-thumb swiper-slide">
                  <img
                    src="assets/images/products/popup/3-103x116.jpg"
                    alt="Product Thumb"
                    width="103"
                    height="116"
                  />
                </div>
                <div className="product-thumb swiper-slide">
                  <img
                    src="assets/images/products/popup/4-103x116.jpg"
                    alt="Product Thumb"
                    width="103"
                    height="116"
                  />
                </div>
              </div>
              <button className="swiper-button-next"></button>
              <button className="swiper-button-prev"></button>
            </div>
          </div>
        </div>
        <div className="col-md-6 overflow-hidden p-relative">
          <div className="product-details scrollable pl-0">
            <h2 className="product-title">ساعت مچی مشکی الکترونیکی</h2>
            <div className="product-bm-wrapper">
              <figure className="brand">
                <img
                  src="assets/images/products/brand/brand-1.jpg"
                  alt="Brand"
                  width="102"
                  height="48"
                />
              </figure>
              <div className="product-meta">
                <div className="product-categories">
                  دسته بندی:
                  <span className="product-category">
                    <a href="#">الکترونیک </a>
                  </span>
                </div>
                <div className="product-sku">
                  کد: <span>MS46891340</span>
                </div>
              </div>
            </div>

            <hr className="product-divider" />

            <div className="product-price">80000 تومان</div>

            <div className="ratings-container">
              <div className="ratings-full">
                <span className="ratings" style="width: 80%"></span>
                <span className="tooltiptext tooltip-top"></span>
              </div>
              <a href="#" className="rating-reviews">
                (3 نظر )
              </a>
            </div>

            <div className="product-short-desc">
              <ul className="list-type-check list-style-none">
                <li>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. با تولید سادگی نامفهوم از صنعت
                  چاپ و با استفاده از طراحان گرافیک است..
                </li>
                <li>
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است و برای شرایط فعلی.
                </li>
                <li>
                  مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات
                  پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد..
                </li>
              </ul>
            </div>

            <hr className="product-divider" />

            <div className="product-form product-variation-form product-color-swatch">
              <label>رنگ :</label>
              <div className="d-flex align-items-center product-variations">
                <a
                  href="#"
                  className="color"
                  style={{ backgroundColor: "#ffcc01" }}
                ></a>
                <a
                  href="#"
                  className="color"
                  style={{ backgroundColor: "#ca6d00" }}
                ></a>
                <a
                  href="#"
                  className="color"
                  style={{ backgroundColor: "#1c93cb" }}
                ></a>
                <a
                  href="#"
                  className="color"
                  style={{ backgroundColor: "#ccc" }}
                ></a>
                <a
                  href="#"
                  className="color"
                  style="background-color: #333"
                ></a>
              </div>
            </div>
            <div className="product-form product-variation-form product-size-swatch">
              <label className="mb-1">سایز :</label>
              <div className="flex-wrap d-flex align-items-center product-variations">
                <a href="#" className="size">
                  کوچک{" "}
                </a>
                <a href="#" className="size">
                  متوسط{" "}
                </a>
                <a href="#" className="size">
                  بزرگ{" "}
                </a>
                <a href="#" className="size">
                  خبلی بزرگ{" "}
                </a>
              </div>
              <a href="#" className="product-variation-clean">
                پاک کردن همه{" "}
              </a>
            </div>

            <div className="product-variation-price">
              <span></span>
            </div>

            <div className="product-form">
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
    </div>
  );
};

export default ShowBrief;
