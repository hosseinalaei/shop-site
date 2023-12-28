import TopHeader from "./TopHeader";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "@/contexts/contex";
import DropdownBox from "./DropdownBox";
import Search from "./Search";
import Spinner from "../Loading/Spinner";

const Header = () => {
  const { cart, setMobileMenu } = useCartContext();

  return (
    <header className="header">
      <TopHeader />
      <div className="header-middle">
        <div className="container">
          <div className="header-left mr-md-4">
            <Link
              href="#"
              className="mobile-menu-toggle  w-icon-hamburger"
              onClick={() => {
                setMobileMenu(true);
              }}
            ></Link>
            <Link href="/" className="logo ml-lg-0">
              <Image src={logo} alt="logo" width="144" height="45" />
            </Link>
            <Search />
          </div>
          {/* <div className="header-right ml-4">
            <div className="header-call d-xs-show d-lg-flex align-items-center">
              <Link href="tel:#" className="w-icon-call"></Link>
              <div className="call-info d-lg-show">
                <h4 className="chat font-weight-normal font-size-md text-normal text-light mb-0">
                  <Link href="mailto:#">
                    پشتیبانی
                    <span className="ls-normal">:</span>
                  </Link>
                </h4>
                <Link 
                  href="tel:#"
                  className="phone-number font-weight-bolder ls-50"
                >
                  021-43000470
                </Link>
              </div>
            </div>
            <Link 
              className="compare label-down link d-xs-show"
              href="compare.html"
            >
              <i className="w-icon-compare"></i>
            </Link>
            <Link 
              className="wishlist label-down link d-xs-show"
              href="wishlist.html"
            >
              <i className="w-icon-heart"></i>
            </Link>
            <div className="dropdown cart-dropdown cart-offcanvas d-flex mr-0 mr-lg-2">
              <div className="cart-overlay"></div>
              <Link  href="/cart" className="cart-toggle label-down link">
                <span className="cart-label d-flex flex-column justify-content-center text-right d-lg-show">
                  سبد خرید
                  <b className="cart-price d-block font-weight-bolder">
                    0 تومان{" "}
                  </b>
                </span>
                <i className="w-icon-cart">
                  <span className="cart-count">{cart.length}</span>
                </i>
              </Link>
            </div>
          </div> */}
          <div className="header-right ml-4">
            <div className="header-call d-xs-show d-lg-flex align-items-center">
              <Link href="tel:#" className="w-icon-call"></Link>
              <div className="call-info d-lg-show">
                <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                  <Link href="tel:+982143000470" className="text-capitalize">
                    تماس با شاپ آی‌آر:
                  </Link>
                </h4>
                <Link
                  href="tel:#"
                  className="phone-number font-weight-bolder ls-50"
                >
                  021-43000470
                </Link>
              </div>
            </div>
            {/* <Link className="wishlist label-down link d-xs-show" href="/wishlist">
              <i className="w-icon-heart"></i>
              <span className="wishlist-label d-lg-show">علاقه مندیها </span>
            </Link> */}
            <Link className="compare label-down link d-xs-show" href="#">
              <i className="w-icon-compare"></i>
              <span className="compare-label d-lg-show">مقایسه کردن </span>
            </Link>
            <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
              <div className="cart-overlay"></div>
              <Link
                prefetch={false}
                href="/cart"
                className="cart-toggle label-down link"
              >
                <i className="w-icon-cart">
                  <span className="cart-count">{cart?.length}</span>
                </i>
                <span className="cart-label">سبد </span>
              </Link>
              <div className="dropdown-box">
                <div className="cart-header">
                  <span>سبد خرید </span>
                  <Link href="#" className="btn-close">
                    بستن <i className="w-icon-long-arrow-left"></i>
                  </Link>
                </div>

                {/* <div className="products">
                  <div className="product product-cart">
                    <div className="product-detail">
                      <Link href="product-default.html" className="product-name">
                        الیس بافتنی بژ
                        <br />
                        کفش دونده تیک
                      </Link>
                      <div className="price-box">
                        <span className="product-quantity">1</span>
                        <span className="product-price">25600 تومان</span>
                      </div>
                    </div>
                    <figure className="product-media">
                      <Link href="product-default.html">
                        <img
                          src="assets/images/cart/product-1.jpg"
                          alt="product"
                          height="84"
                          width="94"
                        />
                      </Link>
                    </figure>
                    <button
                      className="btn btn-link btn-close"
                      aria-label="button"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>

                  <div className="product product-cart">
                    <div className="product-detail">
                      <Link href="product-default.html" className="product-name">
                        پینا کاربردی آبی
                        <br />
                        لباس جین جلویی پینا
                      </Link>
                      <div className="price-box">
                        <span className="product-quantity">1</span>
                        <span className="product-price">32000 تومان</span>
                      </div>
                    </div>
                    <figure className="product-media">
                      <Link href="product-default.html">
                        <img
                          src="assets/images/cart/product-2.jpg"
                          alt="product"
                          width="84"
                          height="94"
                        />
                      </Link>
                    </figure>
                    <button
                      className="btn btn-link btn-close"
                      aria-label="button"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div> */}

                <div className="cart-total">
                  <label>مجموع: </label>
                  <span className="price">58000 تومان</span>
                </div>

                <div className="cart-action">
                  <Link
                    href="#"
                    className="btn btn-dark btn-outline btn-rounded"
                  >
                    سبد خرید{" "}
                  </Link>
                  <Link href="#" className="btn btn-primary  btn-rounded">
                    پرداخت{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
        <div className="container">
          <div className="inner-wrap">
            <div className="header-left">
              <div className="dropdown category-dropdown">
                <Link
                  href="#"
                  className="category-toggle text-capitalize"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="true"
                  data-display="static"
                  title="کاوش دسته بندیها "
                >
                  <i className="w-icon-category"></i>
                  <span>همه بخش ها</span>
                </Link>

                <DropdownBox />
              </div>
              <nav className="main-nav">
                <ul className="menu">
                  <li className="active">
                    <Link prefetch={false} href="/">
                      خانه{" "}
                    </Link>
                  </li>
                  <li>
                    <Link prefetch={false} href="/shop">
                      فروشگاه{" "}
                    </Link>
                  </li>
                  <li>
                    <Link prefetch={false} href="/blog">
                      بلاگ{" "}
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right pr-0">
              <Link href="#">
                <i className="w-icon-sale"></i>
                <span>پیشنهادهای ویژه</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
