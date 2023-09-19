import useToken from "@/hooks/useToken";
import Link from "next/link";
import { useEffect, useState } from "react";

const TopHeader = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [ storedValue, setToken] = useToken()

  useEffect(() => {
    setUserInfo(storedValue);
  }, []);

  // const [ storedValue, setToken] = useToken()
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left mr-4">
          {/* <a href="#" className="d-flex mr-2 mr-lg-6">
            <i className="w-icon-map-marker"></i>
            <span className="d-md-show">فروشگاه شاپ.آی آر</span>
          </a>
          <a href="#" className="d-flex">
            <i className="w-icon-info"></i>
            <span className="d-md-show">
              پیام فروشگاه لغو کنید. به فروشگاه ما خوش آمدید!
            </span>
          </a> */}
          <span className="d-md-show">به فروشگاه ما خوش آمدید!</span>
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
              {/* <img
                src="assets/images/flags/eng.png"
                alt="ENG Flag"
                width="14"
                height="8"
                className="dropdown-image"
              />{" "} */}
              انگلیسی
            </a>
            <div className="dropdown-box">
              <a href="#ENG">
                {/* <img
                  src="assets/images/flags/eng.png"
                  alt="ENG Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                /> */}
                انگلیسی{" "}
              </a>
              <a href="#FRA">
                {/* <img
                  src="assets/images/flags/fra.png"
                  alt="FRA Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                /> */}
                فرانسوی{" "}
              </a>
            </div>
          </div>

          <span className="divider d-lg-show"></span>
          <a href="/blog" className="d-lg-show">
            بلاگ
          </a>
          <a href="#" className="d-lg-show">
            فروشنده شوید
          </a>
          <a href="/contact-us" className="d-lg-show">
            تماس با ما{" "}
          </a>
<<<<<<< HEAD
          {userInfo?.token ? (
=======
          {userInfo?.token &&
>>>>>>> c1857b2d10bad2e122dff0defe741d1867061d58
            <Link href="/my-account" className="d-lg-show login sign-in">
              <i className="w-icon-account mr-1"></i>داشبورد{" "}
            </Link>}
          
            {!userInfo?.token && <Link href="/login" className="d-lg-show login sign-in">
              <i className="w-icon-account mr-1"></i>ورود{" "}
            </Link>
          }
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
