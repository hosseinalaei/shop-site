import useToken from "@/hooks/useToken";
import Link from "next/link";
import { useEffect, useState } from "react";

const TopHeader = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [storedValue, setToken] = useToken();

  useEffect(() => {
    setUserInfo(storedValue);
  }, []);

  // const [ storedValue, setToken] = useToken()
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left mr-4">
          {/* <Link href="#" className="d-flex mr-2 mr-lg-6">
            <i className="w-icon-map-marker"></i>
            <span className="d-md-show">فروشگاه شاپ.آی آر</span>
          </Link>
          <Link href="#" className="d-flex">
            <i className="w-icon-info"></i>
            <span className="d-md-show">
              پیام فروشگاه لغو کنید. به فروشگاه ما خوش آمدید!
            </span>
          </Link> */}
          {/* <span className="d-md-show">به فروشگاه ما خوش آمدید!</span> */}
        </div>
        <div className="header-right pr-0 pt-1 pb-1">
          {/* <div className="dropdown">
            <Link href="#currency">تومان </Link>
            <div className="dropdown-box">
              <Link href="#USD">تومان </Link>
              <Link href="#EUR">یورو </Link>
            </div>
          </div> */}

          {/* <div className="dropdown">
            <Link href="#language">
              <img
                src="assets/images/flags/eng.png"
                alt="ENG Flag"
                width="14"
                height="8"
                className="dropdown-image"
              />
              انگلیسی
            </Link>
            <div className="dropdown-box">
              <Link href="#ENG">
                <img
                  src="assets/images/flags/eng.png"
                  alt="ENG Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                />
                انگلیسی
              </Link>
              <Link href="#FRA">
                <img
                  src="assets/images/flags/fra.png"
                  alt="FRA Flag"
                  width="14"
                  height="8"
                  className="dropdown-image"
                />
                فرانسوی{" "}
              </Link>
            </div>
          </div> */}

          <span className="divider d-lg-show"></span>
          <Link href="/blog" className="d-lg-show">
            بلاگ
          </Link>
          <Link href="#" className="d-lg-show">
            فروشنده شوید
          </Link>
          <Link href="/contact-us" className="d-lg-show">
            ارتباط با ما{" "}
          </Link>
          {userInfo?.token && (
            <Link href="/my-account" className="d-lg-show login sign-in">
              <i className="w-icon-account mr-1"></i>داشبورد{" "}
            </Link>
          )}

          {!userInfo?.token && (
            <Link href="/login" className=" login sign-in">
              <i className="w-icon-account mr-1"></i>ورود{" "}
            </Link>
          )}
          {/* <span className="delimiter d-lg-show bg-">/</span>
          <Link 
            href="assets/ajax/login.html"
            className="ml-0 d-lg-show login register"
          >
            ثبت نام{" "}
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
