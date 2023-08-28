import Link from "next/link";

const TopHeader = () => {
  return (
    <div className="header-top">
      <div className="container-fluid">
        <div className="header-left mr-4">
          <a href="#" className="d-flex mr-2 mr-lg-6">
            <i className="w-icon-map-marker"></i>
            <span className="d-md-show">فروشگاه شاپ.آی آر</span>
          </a>
          <a href="#" className="d-flex">
            <i className="w-icon-info"></i>
            <span className="d-md-show">حمل و نقل استاندارد رایگان</span>
          </a>
        </div>
        <div className="header-right pr-0">
          <div className="dropdown">
            <a href="#currency">تومان </a>
            <div className="dropdown-box">
              <a href="#USD">تومان </a>
              <a href="#EUR">یورو </a>
            </div>
          </div>

          <div className="dropdown">
            <a href="#language">
              <img
                src="assets/images/flags/eng.png"
                alt="ENG Flag"
                width="14"
                height="8"
                className="dropdown-image"
              />{" "}
              انگلیسی
            </a>
            <div className="dropdown-box">
              <a href="#ENG">
                <img
                  src="assets/images/flags/eng.png"
                  alt="ENG Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                />
                انگلیسی{" "}
              </a>
              <a href="#FRA">
                <img
                  src="assets/images/flags/fra.png"
                  alt="FRA Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                />
                فرانسوی{" "}
              </a>
            </div>
          </div>

          <span className="divider d-lg-show"></span>
          <a href="blog.html" className="d-lg-show">
            بلاگ{" "}
          </a>
          <a href="become-a-vendor.html" className="d-lg-show">
            فروشنده شوید{" "}
          </a>
          <a href="contact-us.html" className="d-lg-show">
            تماس با ما{" "}
          </a>
          <Link href="/login" className="d-lg-show login sign-in">
            <i className="w-icon-account mr-1"></i>ورود{" "}
          </Link>
          {/* <span className="delimiter d-lg-show bg-">/</span>
          <a
            href="assets/ajax/login.html"
            className="ml-0 d-lg-show login register"
          >
            ثبت نام{" "}
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
