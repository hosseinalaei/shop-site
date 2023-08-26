const MiddleBanner = () => {
    return ( 
        <div
          className="banner banner-fashion appear-animate mb-8"
          style={{ backgroundColor: "#D3D3D4" }}
        >
          <div className="banner-content align-items-center">
            <div className="content-left d-flex align-items-center mb-2">
              <div className="banner-price-info text-primary text-uppercase font-weight-bolder lh-1">
                25
                <sup className="font-weight-bold">%</sup>
                <sub className="font-weight-bold ls-25">تخفیف </sub>
              </div>
              <hr className="banner-divider mt-0 mb-0" />
            </div>
            <div className="content-right d-flex align-items-center flex-1 flex-wrap">
              <div className="banner-info mr-auto pr-4">
                <h3 className="banner-title text-dark text-uppercase ls-25">
                  برای مد امروزی
                </h3>
                <p className="mb-0">
                  استفاده از کد
                  <span className="text-white bg-dark font-weight-bold ls-50 d-inline-block">
                    مشکی 12345
                  </span>{" "}
                  برای دریافت بهترین پیشنهاد.
                </p>
              </div>
              <a
                href="demo15-shop.html"
                className="btn btn-white btn-rounded btn-icon-right mb-3"
              >
                اکنون بخرید <i className="w-icon-long-arrow-left"></i>
              </a>
            </div>
          </div>
          <figure className="banner-media skrollable">
            <img
              src="assets/images/demos/demo15/banner/floating.png"
              alt="Banner"
              width="431"
              height="610"
              style={{ backgroundColor: "#D3D3D3" }}
              data-bottom-top="transform: translateY(4vh);"
              data-top-bottom="transform: translateY(-4vh);"
            />
          </figure>
        </div>
     );
}
 
export default MiddleBanner;