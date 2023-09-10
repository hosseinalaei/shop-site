import TopHeader from "./TopHeader";
import logo from "../../assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartContext } from "@/contexts/contex";
import Modal from "../Modal/Modal";

const Header = () => {
  const [catMenu, setCatMenu] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { cart } = useCartContext();

  const getCategories = async () => {
    try {
      const response = await fetch(
        "https://138.201.167.230:5050/Products/product-active-categories"
      );
      const resData = await response.json();
      const categoryData = await resData.data.filter(
        (item) => item.parentId === null
      );
      const subCategory = await resData.data.filter(
        (item) => item.parentId !== null
      );
      setCatMenu(categoryData);
      setSubMenu(subCategory);
    } catch (error) {
      console.log("getCategories error", error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    // <header className="header">
    //   <TopHeader />
    //   <div className="header-middle">
    //     <div className="container-fluid">
    //       <div className="header-left mr-md-4">
    //         <a href="#" className="mobile-menu-toggle  w-icon-hamburger"></a>
    //         <a href="/" className="logo ml-lg-0">
    //           <Image src={logo} alt="logo" width="144" height="45" />
    //         </a>
    //         <form
    //           method="get"
    //           action="#"
    //           className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
    //         >
    //           <div className="select-box">
    //             <select id="category" name="category" className="pb-0">
    //               <option value="">دسته بندیها </option>
    //               <option value="4">مدل </option>
    //               <option value="5">مبلمان </option>
    //               <option value="6">کفش </option>
    //               <option value="7">ورزشی </option>
    //               <option value="8">بازی </option>
    //               <option value="9">کامپیوتر </option>
    //               <option value="10">الکترونیکی </option>
    //               <option value="11">آشپرخانه </option>
    //               <option value="12">لباس </option>
    //             </select>
    //           </div>
    //           <input
    //             type="text"
    //             className="form-control"
    //             name="search"
    //             id="search"
    //             placeholder="جستجو کنید ..."
    //             required
    //           />
    //           <button className="btn btn-search" type="submit">
    //             <i className="w-icon-search"></i>
    //           </button>
    //         </form>
    //       </div>
    //       <div className="header-right ml-4">
    //         <div className="header-call d-xs-show d-lg-flex align-items-center">
    //           <a href="tel:#" className="w-icon-call"></a>
    //           <div className="call-info d-lg-show">
    //             <h4 className="chat font-weight-normal font-size-md text-normal text-light mb-0">
    //               <a href="mailto:#">
    //                 پشتیبانی
    //                 <span className="ls-normal">:</span>
    //               </a>
    //             </h4>
    //             <a
    //               href="tel:#"
    //               className="phone-number font-weight-bolder ls-50"
    //             >
    //               021-43000470
    //             </a>
    //           </div>
    //         </div>
    //         <a
    //           className="compare label-down link d-xs-show"
    //           href="compare.html"
    //         >
    //           <i className="w-icon-compare"></i>
    //         </a>
    //         <a
    //           className="wishlist label-down link d-xs-show"
    //           href="wishlist.html"
    //         >
    //           <i className="w-icon-heart"></i>
    //         </a>
    //         <div className="dropdown cart-dropdown cart-offcanvas d-flex mr-0 mr-lg-2">
    //           <div className="cart-overlay"></div>
    //           <Link href="/cart" className="cart-toggle label-down link">
    //             <span className="cart-label d-flex flex-column justify-content-center text-right d-lg-show">
    //               سبد خرید
    //               <b className="cart-price d-block font-weight-bolder">
    //                 0 تومان{" "}
    //               </b>
    //             </span>
    //             <i className="w-icon-cart">
    //               <span className="cart-count">{cart.length}</span>
    //             </i>
    //           </Link>
    //           {/* <div className="dropdown-box">
    //             <div className="cart-header">
    //               <span>سبد خرید </span>
    //               <a href="#" className="btn-close">
    //                 بستن <i className="w-icon-long-arrow-left"></i>
    //               </a>
    //             </div>

    //             <div className="products">
    //               <div className="product product-cart">
    //                 <div className="product-detail">
    //                   <a href="product-default.html" className="product-name">
    //                     الیس بافتنی بژ
    //                     <br />
    //                     کفش دونده تیک
    //                   </a>
    //                   <div className="price-box">
    //                     <span className="product-quantity">1</span>
    //                     <span className="product-price">25600 تومان</span>
    //                   </div>
    //                 </div>
    //                 <figure className="product-media">
    //                   <a href="product-default.html">
    //                     <img
    //                       src="assets/images/cart/product-1.jpg"
    //                       alt="product"
    //                       height="84"
    //                       width="94"
    //                     />
    //                   </a>
    //                 </figure>
    //                 <button className="btn btn-link btn-close">
    //                   <i className="fas fa-times"></i>
    //                 </button>
    //               </div>

    //               <div className="product product-cart">
    //                 <div className="product-detail">
    //                   <a href="product-default.html" className="product-name">
    //                     پینا کاربردی آبی
    //                     <br />
    //                     لباس جین جلویی پینا
    //                   </a>
    //                   <div className="price-box">
    //                     <span className="product-quantity">1</span>
    //                     <span className="product-price">32000 تومان</span>
    //                   </div>
    //                 </div>
    //                 <figure className="product-media">
    //                   <a href="product-default.html">
    //                     <img
    //                       src="assets/images/cart/product-2.jpg"
    //                       alt="product"
    //                       width="84"
    //                       height="94"
    //                     />
    //                   </a>
    //                 </figure>
    //                 <button className="btn btn-link btn-close">
    //                   <i className="fas fa-times"></i>
    //                 </button>
    //               </div>
    //             </div>

    //             <div className="cart-total">
    //               <label>مجموع: </label>
    //               <span className="price">58000 تومان</span>
    //             </div>

    //             <div className="cart-action">
    //               <a
    //                 href="cart.html"
    //                 className="btn btn-dark btn-outline btn-rounded"
    //               >
    //                 سبد خرید{" "}
    //               </a>
    //               <a
    //                 href="checkout.html"
    //                 className="btn btn-primary  btn-rounded"
    //               >
    //                 پرداخت{" "}
    //               </a>
    //             </div>
    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
    //     <div className="container-fluid">
    //       <div className="inner-wrap">
    //         <div className="header-left">
    //           <div className="dropdown category-dropdown">
    //             <a
    //               href="#"
    //               className="category-toggle text-capitalize pl-0 bg-white"
    //               role="button"
    //               data-toggle="dropdown"
    //               aria-haspopup="true"
    //               aria-expanded="true"
    //               data-display="static"
    //               title="کاوش دسته بندیها "
    //             >
    //               <i className="w-icon-category"></i>
    //               <span>همه بخش ها</span>
    //             </a>

    //             <div className="dropdown-box text-default">
    //               <ul className="menu vertical-menu category-menu">
    //                 <li>
    //                   {catMenu?.map((item) => {
    //                     return (
    //                       <Link
    //                         href={`/category/${item.urlTitle}`}
    //                         key={item.id}
    //                       >
    //                         {item.title}
    //                       </Link>
    //                     );
    //                   })}

    //                   <ul className="megamenu">
    //                     <li>
    //                       <h4 className="menu-title">براساس برند </h4>
    //                       <hr className="divider" />
    //                       <ul>
    //                         {subMenu?.map((item) => {
    //                           return (
    //                             <li key={item.id}>
    //                               <Link
    //                                 href={`/category/${item.urlTitle}/${item.id}/`}
    //                               >
    //                                 {item.title}
    //                               </Link>
    //                             </li>
    //                           );
    //                         })}
    //                       </ul>
    //                     </li>
    //                     <li>
    //                       {/* <h4 className="menu-title">براساس قیمت </h4>
    //                       <hr className="divider" />
    //                       <ul>
    //                         <li>
    //                           <a href="shop-fullwidth-banner.html">
    //                             کمتر از ۵ میلیون
    //                           </a>
    //                         </li>
    //                       </ul> */}
    //                     </li>
    //                   </ul>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //           <nav className="main-nav ml-0">
    //             <ul className="menu">
    //               <li className="active">
    //                 <Link href="/">خانه </Link>
    //               </li>
    //               <li>
    //                 <Link href="/shop">فروشگاه </Link>
    //                 {/* <ul className="megamenu">
    //                   <li>
    //                     <h4 className="menu-title">صفحات فروشگاه </h4>
    //                     <ul>
    //                       <li>
    //                         <a href="shop-banner-sidebar.html">
    //                           بنر با نوار کناری
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-boxed-banner.html">بنر باکسی </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-fullwidth-banner.html">
    //                           بنر تمام عرض{" "}
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-horizontal-filter.html">
    //                           فیلتر افقی{" "}
    //                           <span className="tip tip-hot">داغ </span>
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-off-canvas.html">
    //                           بدون نوار کناری{" "}
    //                           <span className="tip tip-new">جدید </span>
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-infinite-scroll.html">
    //                           {" "}
    //                           اسکرول بی نهایت آژاکس
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-right-sidebar.html">سایدبار چپ </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-both-sidebar.html">
    //                           هر دو نوار کناری{" "}
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li>
    //                     <h4 className="menu-title">چیدمان فروشگاه </h4>
    //                     <ul>
    //                       <li>
    //                         <a href="shop-grid-3cols.html">3 حالت ستون ها </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-grid-4cols.html">4 حالت ستون ها </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-grid-5cols.html">5 حالت ستون ها </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-grid-6cols.html">6 حالت ستون ها </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-grid-7cols.html">7 حالت ستون ها </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-grid-8cols.html">8 حالت ستون ها </a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-list.html">حالت فهرست</a>
    //                       </li>
    //                       <li>
    //                         <a href="shop-list-sidebar.html">
    //                           حالت فهرست با نوار کناری
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li>
    //                     <h4 className="menu-title">صفحات محصول </h4>
    //                     <ul>
    //                       <li>
    //                         <a href="product-variable.html">محصول متغیر </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-featured.html">ویژه و جذاب </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-accordion.html">
    //                           داده ها در آکاردئون
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-section.html">
    //                           داده ها در بخش ها{" "}
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-swatch.html">نمونه تصویر </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-extended.html">اطلاعات گسترده </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-without-sidebar.html">
    //                           بدون نوار کناری{" "}
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-video.html">
    //                           360<sup>درجه </sup> ویدئو{" "}
    //                           <span className="tip tip-new">جدید </span>
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li>
    //                     <h4 className="menu-title">چیدمان محصولات </h4>
    //                     <ul>
    //                       <li>
    //                         <a href="product-default.html">
    //                           پیشفرض <span className="tip tip-hot">داغ </span>
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-vertical.html">شست عمودی </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-grid.html">تصاویر شبکه ای </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-masonry.html">ساختمانی </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-gallery.html">گالری </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-sticky-info.html">
    //                           اطلاعات چسبناک{" "}
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-sticky-thumb.html">
    //                           تصویر چسبناک{" "}
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="product-sticky-both.html">هردو چسبناک </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                 </ul> */}
    //               </li>
    //               <li>
    //                 <Link href="/blog">بلاگ </Link>
    //                 {/* <ul>
    //                   <li>
    //                     <a href="blog.html">کلاسیک </a>
    //                   </li>
    //                   <li>
    //                     <a href="blog-listing.html">لیستی </a>
    //                   </li>
    //                   <li>
    //                     <a href="blog-grid-3cols.html">گرید </a>
    //                     <ul>
    //                       <li>
    //                         <a href="blog-grid-2cols.html">شبکه 2 ستون</a>
    //                       </li>
    //                       <li>
    //                         <a href="blog-grid-3cols.html">شبکه 3 ستون</a>
    //                       </li>
    //                       <li>
    //                         <a href="blog-grid-4cols.html">شبکه 4ستون</a>
    //                       </li>
    //                       <li>
    //                         <a href="blog-grid-sidebar.html">
    //                           سایدبار شبکه ای{" "}
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li>
    //                     <a href="blog-masonry-3cols.html">ساختمانی </a>
    //                     <ul>
    //                       <li>
    //                         <a href="blog-masonry-2cols.html">
    //                           ساختمانی 2 ستون{" "}
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="blog-masonry-3cols.html">
    //                           ساختمانی 3 ستون{" "}
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="blog-masonry-4cols.html">
    //                           ساختمانی 4ستون{" "}
    //                         </a>
    //                       </li>
    //                       <li>
    //                         <a href="blog-masonry-sidebar.html">
    //                           نوار کناری ساختمانی{" "}
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li>
    //                     <a href="blog-mask-grid.html">ماسک </a>
    //                     <ul>
    //                       <li>
    //                         <a href="blog-mask-grid.html">ماسک وبلاگ گرید </a>
    //                       </li>
    //                       <li>
    //                         <a href="blog-mask-masonry.html">
    //                           ماسک وبلاگ ساختمانی{" "}
    //                         </a>
    //                       </li>
    //                     </ul>
    //                   </li>
    //                   <li>
    //                     <a href="post-single.html">تک نوشته </a>
    //                   </li>
    //                 </ul> */}
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //         <div
    //           className="header-right pr-0"
    //           onClick={() => setShowModal(true)}
    //         >
    //           <a href="#">
    //             <i className="w-icon-sale"></i>
    //             <span>پیشنهادهای ویژه</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {showModal && (
    //     <Modal show={showModal} modalClosed={closeModal}>
    //       <p>پیشنهادهای شگفت انگیز</p>
    //     </Modal>
    //   )}
    // </header>
    <div dir="rtl">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 d-flex justify-content-between align-items-center head">
            <p class="font-head mt-1 mt-lg-0">
              پیام فروشگاه لغو کنید. به فروشگاه ما خوش آمدید!
            </p>
            <div class="d-flex header-right align-items-center">
              <div class="down mx-2">
                <a
                  href="#currency"
                  class="link d-flex text-decoration-none mt-1"
                >
                  تومان
                </a>
                <div class="txt mt-1">
                  <a href="#USD" class="link-down">
                    تومان
                  </a>
                  <a href="#EUR" class="link-down">
                    یورو
                  </a>
                </div>
              </div>
              <div class="down d-flex mt-1">
                <a href="#currency" class="link text-decoration-none d-flex">
                  <img
                    src="./assets/images/flags/eng.png"
                    class="flag mt-1 ps-1"
                  />
                  انگلیسی
                </a>
                <div class="txt">
                  <a href="#USD" class="d-flex link-down">
                    <img
                      src="./assets/images/flags/eng.png"
                      class="flag mt-1 ps-1"
                    />
                    انگلیسی
                  </a>
                  <a href="#USD" class="d-flex link-down">
                    <img
                      src="./assets/images/flags/fra.png"
                      class="flag mt-1 ps-1"
                    />
                    فرانسوی
                  </a>
                </div>
              </div>

              <div class="col d-none d-lg-block">
                <div class="d-flex justify-content-evenly align-items-center">
                  <p class="text-muted font-head pt-1 me-3">|</p>
                  <p class="link mt-3 text-decoration-none mx-3">
                    فروش ویژه وولمارت
                  </p>
                  <p class="link mt-3 text-decoration-none mx-3">حساب من</p>
                  <div class=" d-flex justify-content-evenly align-items-center">
                    <p class="link d-flex align-items-center mt-3 mx-2">
                      <span class="material-symbols-outlined font-icon mx-1">
                        person
                      </span>{" "}
                      ورود
                    </p>
                    <p class="mt-1 font-head text-muted">/</p>
                    <p class="link mt-3 text-decoration-none mx-2">ثبت نام</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-white d-lg-block d-sm-none mt-3">
        <div class="row">
          <div class="col d-flex justify-content-evenly align-items-center">
            <div>
              <Image src={logo} alt="logo-footer" width="144" height="45" />
            </div>
            <div class="d-flex border border-2 rounded-1 border-primary">
              <div class="border d-flex">
                <div class="dropdown align-self-center">
                  <button
                    class="input bg-body text-muted font"
                    data-bs-toggle="dropdown"
                  >
                    دسته بندیها
                    <span class="align-self-center font text-muted me-3 ms-1 dropdown-toggle"></span>
                  </button>
                  <ul class="dropdown-menu font z-1">
                    <li>
                      <a
                        class="dropdown-item text-muted text-decoration-none d-flex"
                        href="#"
                      >
                        دسته بندیها
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-decoration-none text-muted d-flex"
                        href="#"
                      >
                        مدل
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-decoration-none text-muted d-flex"
                        href="#"
                      >
                        مبلمان
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-decoration-none text-muted d-flex"
                        href="#"
                      >
                        کفش
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-decoration-none text-muted d-flex"
                        href="#"
                      >
                        ورزشی
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-decoration-none text-muted d-flex"
                        href="#"
                      >
                        بازی
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-decoration-none text-muted d-flex"
                        href="#"
                      >
                        کامپیوتر
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-decoration-none text-muted d-flex"
                        href="#"
                      >
                        الکترونیکی
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-decoration-none text-muted d-flex"
                        href="#"
                      >
                        آشپزخانه
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-decoration-none text-muted d-flex"
                        href="#"
                      >
                        لباس
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <input
                type="email"
                placeholder="جستجو کنید ..."
                class="input p-2"
              />
              <button class="input bg-body text-muted">
                <span class="material-symbols-outlined text-decoration-none pt-2">
                  search
                </span>
              </button>
            </div>
            <div class="d-flex link-2">
              <span class="material-symbols-outlined align-self-center icon mx-1">
                call
              </span>
              <div class="d-flex lh-1 flex-column">
                <p>
                  چت زنده <span class="text-muted"> تومان: </span>
                </p>
                <b dir="ltr">123-4567(800)0</b>
              </div>
            </div>
            <div class="text-muted mx-2">|</div>
            <div class="d-flex flex-column text-center link-2">
              <span class="material-symbols-outlined icon">favorite</span>
              <a href="#" class="font link-2 text-decoration-none">
                علاقه مندیها
              </a>
            </div>
            <div class="d-flex flex-column text-center link-2">
              <span class="material-symbols-outlined icon">balance</span>
              <a href="#" class="font link-2 text-decoration-none">
                مقایسه کردن
              </a>
            </div>
            <div class="d-flex flex-column text-center position-relative link-2">
              <span class="material-symbols-outlined icon">shopping_bag</span>
              <span class="position-absolute position translate-middle badge rounded-pill bg-primary">
                2
              </span>
              <a href="#" class="font link-2 text-decoration-none">
                سبد
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid  bg-white d-none d-sm-block d-md-block d-lg-none mt-3">
        <div class="row">
          <div class="col d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <span class="material-symbols-outlined link-2 icon ms-2">
                menu
              </span>
              <img
                src="assets/images/demos/demo9/header-logo.png"
                class="logo img-fluid"
              />
            </div>
            <div class="d-flex justify-content-evenly">
              <span class="material-symbols-outlined link-2 icon ms-3">
                call
              </span>
              <span class="material-symbols-outlined link-2 icon ms-3">
                favorite
              </span>
              <span class="material-symbols-outlined link-2 icon ms-3">
                balance
              </span>
              <div class="position-relative link-2">
                <span class="material-symbols-outlined icon ms-3">
                  shopping_bag
                </span>
                <span class="position-absolute position translate-middle badge rounded-pill bg-primary">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-white d-block d-sm-none mt-3">
        <div class="row">
          <div class="col d-flex justify-content-between align-items-center">
            <div>
              <span class="material-symbols-outlined link-2 icon ms-2">
                menu
              </span>
            </div>
            <div>
              <img
                src="assets/images/demos/demo9/header-logo.png"
                class="logo img-fluid"
              />
            </div>
            <div>
              <div class="position-relative link-2">
                <span class="material-symbols-outlined icon ms-3">
                  shopping_bag
                </span>
                <span class="position-absolute position translate-middle badge rounded-pill bg-primary">
                  2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-4 px-4 bg-white d-none d-lg-block">
        <div class="row">
          <div class="d-flex justify-content-between align-items-center">
            <div class="col-6 d-flex justify-content-around align-items-center">
              <a href="#" class="link-2 text-decoration-none">
                خانه
              </a>
              <div class="down-2">
                <a href="#" class="link-2 text-decoration-none">
                  فروشگاه
                </a>
                <div class="txt-2 col-12 mt-2">
                  <div class="pe-1 pt-4 pb-3 ps-2 d-flex flex-column col-3">
                    <b class="mb-1">صفحات فروشگاه</b>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر با نوار کناری
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر باکسی
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر تمام عرض
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      فیلتر افقی
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بدون نوار کناری
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      اسکرول بی نهایت آژاکس
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      سایدبار چپ
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      هر دو نوار کناری
                    </a>
                  </div>
                  <div class="px-2 pt-4 d-flex flex-column col-3">
                    <b class="mb-1">صفحات فروشگاه</b>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر با نوار کناری
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر باکسی
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر تمام عرض
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      فیلتر افقی
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بدون نوار کناری
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      اسکرول بی نهایت آژاکس
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      سایدبار چپ
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      هر دو نوار کناری
                    </a>
                  </div>
                  <div class="px-2 pt-4 d-flex flex-column col-3">
                    <b class="mb-1">صفحات فروشگاه</b>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر با نوار کناری
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر باکسی
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر تمام عرض
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      فیلتر افقی
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بدون نوار کناری
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      اسکرول بی نهایت آژاکس
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      سایدبار چپ
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      هر دو نوار کناری
                    </a>
                  </div>
                  <div class="pe-2 pt-4 d-flex flex-column col-3">
                    <b class="mb-1">صفحات فروشگاه</b>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر با نوار کناری
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر باکسی
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بنر تمام عرض
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      فیلتر افقی
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      بدون نوار کناری
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      اسکرول بی نهایت آژاکس
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      سایدبار چپ
                    </a>
                    <a href="#" class="link-2 text-decoration-none">
                      هر دو نوار کناری
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" class="link-2 text-decoration-none">
                فروشنده
              </a>
              <a href="#" class="link-2 text-decoration-none">
                بلاگ
              </a>
              <a href="#" class="link-2 text-decoration-none">
                صفحات
              </a>
              <a href="#" class="link-2 text-decoration-none">
                المنت ها
              </a>
              <a href="#" class="link-2 text-decoration-none">
                ویژگی ها
              </a>
              <a href="#" class="link-2 text-decoration-none">
                خرید وولمارت
              </a>
            </div>
            <div>
              <a href="#" class="link-2 text-decoration-none d-flex">
                <span class="material-symbols-outlined font-icon align-self-center text-decoration-none">
                  sell
                </span>
                معاملات روزانه
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-2 d-none d-lg-block">
        <div class="row justify-content-center">
          <div class="col-lg-11 d-flex bg-icon p-3 justify-content-around align-items-center rounded">
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">computer</span>
              <a href="#" class="font link-3 text-decoration-none">
                کامپیوتر
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">laundry</span>
              <a href="#" class="font link-3 text-decoration-none">
                لباس
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">chair</span>
              <a href="#" class="font link-3 text-decoration-none">
                مبلمان
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">light</span>
              <a href="#" class="font link-3 text-decoration-none">
                برق
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">headphones</span>
              <a href="#" class="font link-3 text-decoration-none">
                هدفون
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">work</span>
              <a href="#" class="font link-3 text-decoration-none">
                دفتر
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">photo_camera</span>
              <a href="#" class="font link-3 text-decoration-none">
                الکترونیک
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">
                stay_current_portrait
              </span>
              <a href="#" class="font link-3 text-decoration-none">
                گوشی هوشمند
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">stockpot</span>
              <a href="#" class="font link-3 text-decoration-none">
                اجاق گاز
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">package_2</span>
              <a href="#" class="font link-3 text-decoration-none">
                تجهیزات جانبی
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">kitchen</span>
              <a href="#" class="font link-3 text-decoration-none">
                فریزر
              </a>
            </div>
            <div class="d-flex flex-column text-center link-3">
              <span class="material-symbols-outlined icon-2">more</span>
              <a href="#" class="font link-3 text-decoration-none">
                همه دسته بندیها
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
