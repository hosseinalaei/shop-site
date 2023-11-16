import { useCartContext } from "@/contexts/contex";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ mobileMenu }) => {
  const { setMobileMenu, subMenu, catMenu } = useCartContext();

  const [menuState, setMenuState] = useState("main");

  let drawerClasses = "mobile-side-drawer";
  if (mobileMenu) {
    drawerClasses = "mobile-side-drawer open";
  }
  return (
    <div
      className={`sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper ${drawerClasses}`}
    >
      {
        <Link
          href="#"
          className={!mobileMenu ? "mobile-menu-close" : "mmenu-active"}
          onClick={() => {
            setMobileMenu(false);
          }}
        >
          <i className="close-icon"></i>
        </Link>
      }

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
              <Link
                href="#main-menu"
                className={`nav-link ${menuState === "main" ? "active" : ""}`}
                onClick={() => {
                  setMenuState("main");
                }}
              >
                منوی اصلی{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="#categories"
                className={`nav-link ${menuState === "cat" ? "active" : ""}`}
                onClick={() => {
                  setMenuState("cat");
                }}
              >
                دسته بندیها{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div
            className={`tab-pane ${menuState === "main" ? "active" : ""}`}
            id="main-menu"
          >
            <ul className="mobile-menu">
              <li>
                <Link
                  href={`/`}
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  خانه{" "}
                </Link>
              </li>
              <li>
                <Link
                  href={`/shop`}
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  فروشگاه{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="#">صفحات فروشگاه </Link>
                    <ul>
                      <li>
                        <Link href="shop-banner-sidebar.html">
                          بنر با نوار کناری
                        </Link>
                      </li>
                      <li>
                        <Link href="shop-boxed-banner.html">بنر باکسی </Link>
                      </li>
                      <li>
                        <Link href="shop-fullwidth-banner.html">
                          بنر تمام عرض{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="shop-horizontal-filter.html">
                          فیلتر افقی <span className="tip tip-hot">داغ </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="shop-off-canvas.html">
                          بدون نوار کناری{" "}
                          <span className="tip tip-new">جدید </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="shop-infinite-scroll.html">
                          {" "}
                          اسکرول بی نهایت آژاکس
                        </Link>
                      </li>
                      <li>
                        <Link href="shop-right-sidebar.html">سایدبار چپ </Link>
                      </li>
                      <li>
                        <Link href="shop-both-sidebar.html">
                          هر دو نوار کناری{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">چیدمان فروشگاه </Link>
                    <ul>
                      <li>
                        <Link href="shop-grid-3cols.html">3 حالت ستون ها </Link>
                      </li>
                      <li>
                        <Link href="shop-grid-4cols.html">4 حالت ستون ها </Link>
                      </li>
                      <li>
                        <Link href="shop-grid-5cols.html">5 حالت ستون ها </Link>
                      </li>
                      <li>
                        <Link href="shop-grid-6cols.html">6 حالت ستون ها </Link>
                      </li>
                      <li>
                        <Link href="shop-grid-7cols.html">7 حالت ستون ها </Link>
                      </li>
                      <li>
                        <Link href="shop-grid-8cols.html">8 حالت ستون ها </Link>
                      </li>
                      <li>
                        <Link href="shop-list.html">حالت فهرست</Link>
                      </li>
                      <li>
                        <Link href="shop-list-sidebar.html">
                          حالت فهرست با نوار کناری
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">صفحات محصول </Link>
                    <ul>
                      <li>
                        <Link href="product-variable.html">محصول متغیر </Link>
                      </li>
                      <li>
                        <Link href="product-featured.html">ویژه و جذاب </Link>
                      </li>
                      <li>
                        <Link href="product-accordion.html">
                          داده ها در آکاردئون
                        </Link>
                      </li>
                      <li>
                        <Link href="product-section.html">
                          داده ها در بخش ها{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="product-swatch.html">نمونه تصویر </Link>
                      </li>
                      <li>
                        <Link href="product-extended.html">
                          اطلاعات گسترده{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="product-without-sidebar.html">
                          بدون نوار کناری{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="product-video.html">
                          360<sup>درجه </sup> ویدئو{" "}
                          <span className="tip tip-new">جدید </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">چیدمان محصول </Link>
                    <ul>
                      <li>
                        <Link href="product-default.html">
                          پیشفرض <span className="tip tip-hot">داغ </span>
                        </Link>
                      </li>
                      <li>
                        <Link href="product-vertical.html">شست عمودی </Link>
                      </li>
                      <li>
                        <Link href="product-grid.html">تصاویر شبکه ای </Link>
                      </li>
                      <li>
                        <Link href="product-masonry.html">ساختمانی </Link>
                      </li>
                      <li>
                        <Link href="product-gallery.html">گالری </Link>
                      </li>
                      <li>
                        <Link href="product-sticky-info.html">
                          اطلاعات چسبناک{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="product-sticky-thumb.html">
                          تصویر چسبناک{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="product-sticky-both.html">
                          هردو چسبناک{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              {/* <li>
                  <Link href="vendor-dokan-store.html">فروشنده </Link>
                  <ul>
                    <li>
                      <Link href="#">لیست فروشگاه </Link>
                      <ul>
                        <li>
                          <Link href="vendor-dokan-store-list.html">
                            فهرست فروشگاه 1
                          </Link>
                        </li>
                        <li>
                          <Link href="vendor-wcfm-store-list.html">
                            فهرست فروشگاه 2
                          </Link>
                        </li>
                        <li>
                          <Link href="vendor-wcmp-store-list.html">
                            فهرست فروشگاه 3
                          </Link>
                        </li>
                        <li>
                          <Link href="vendor-wc-store-list.html">
                            فهرست فروشگاه 4
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">فروشگاه فروشنده </Link>
                      <ul>
                        <li>
                          <Link href="vendor-dokan-store.html">
                            فروشگاه فروشنده 1
                          </Link>
                        </li>
                        <li>
                          <Link href="vendor-wcfm-store-product-grid.html">
                            فروشگاه فروشنده 2
                          </Link>
                        </li>
                        <li>
                          <Link href="vendor-wcmp-store-product-grid.html">
                            فروشگاه فروشنده 3
                          </Link>
                        </li>
                        <li>
                          <Link href="vendor-wc-store-product-grid.html">
                            فروشگاه فروشنده 4
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li> */}
              <li>
                <Link
                  href={`/blog`}
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  بلاگ{" "}
                </Link>
                <ul>
                  <li>
                    <Link href="blog.html">کلاسیک </Link>
                  </li>
                  <li>
                    <Link href="blog-listing.html">لیستی </Link>
                  </li>
                  <li>
                    <Link href="#">گرید </Link>
                    <ul>
                      <li>
                        <Link href="blog-grid-2cols.html">شبکه 2 ستون</Link>
                      </li>
                      <li>
                        <Link href="blog-grid-3cols.html">شبکه 3 ستون</Link>
                      </li>
                      <li>
                        <Link href="blog-grid-4cols.html">شبکه 4ستون</Link>
                      </li>
                      <li>
                        <Link href="blog-grid-sidebar.html">
                          سایدبار شبکه ای{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">ساختمانی </Link>
                    <ul>
                      <li>
                        <Link href="blog-masonry-2cols.html">
                          ساختمانی 2 ستون{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-masonry-3cols.html">
                          ساختمانی 3 ستون{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-masonry-4cols.html">
                          ساختمانی 4ستون{" "}
                        </Link>
                      </li>
                      <li>
                        <Link href="blog-masonry-sidebar.html">
                          نوار کناری ساختمانی{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">ماسک </Link>
                    <ul>
                      <li>
                        <Link href="blog-mask-grid.html">ماسک وبلاگ گرید </Link>
                      </li>
                      <li>
                        <Link href="blog-mask-masonry.html">
                          ماسک وبلاگ ساختمانی{" "}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="post-single.html">تک نوشته </Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                  <Link href="about-us.html">صفحات </Link>
                  <ul>
                    <li>
                      <Link href="about-us.html">درباره ما </Link>
                    </li>
                    <li>
                      <Link href="become-a-vendor.html">فروشنده شوید </Link>
                    </li>
                    <li>
                      <Link href="contact-us.html">تماس با ما </Link>
                    </li>
                    <li>
                      <Link href="login.html">ورود </Link>
                    </li>
                    <li>
                      <Link href="faq.html">نقل و قل </Link>
                    </li>
                    <li>
                      <Link href="error-404.html">ارور 404</Link>
                    </li>
                    <li>
                      <Link href="coming-soon.html">به زودی </Link>
                    </li>
                    <li>
                      <Link href="wishlist.html">علاقه مندیها </Link>
                    </li>
                    <li>
                      <Link href="cart.html">سبد خرید </Link>
                    </li>
                    <li>
                      <Link href="checkout.html">پرداخت </Link>
                    </li>
                    <li>
                      <Link href="my-account.html">حساب من </Link>
                    </li>
                  </ul>
                </li> */}
              <li>
                <Link
                  href={`/cart`}
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  سبد خرید
                </Link>
                <ul>
                  <li>
                    <Link href="element-products.html">محصولات </Link>
                  </li>
                  <li>
                    <Link href="element-titles.html">عناوین </Link>
                  </li>
                  <li>
                    <Link href="element-typography.html">تایپوگرافی </Link>
                  </li>
                  <li>
                    <Link href="element-categories.html">دسته بندی محصول </Link>
                  </li>
                  <li>
                    <Link href="element-buttons.html">دکمه ها </Link>
                  </li>
                  <li>
                    <Link href="element-accordions.html">آکاردئون </Link>
                  </li>
                  <li>
                    <Link href="element-alerts.html">هشدار و اعلان</Link>
                  </li>
                  <li>
                    <Link href="element-tabs.html">زبانه ها </Link>
                  </li>
                  <li>
                    <Link href="element-testimonials.html">مشتریان </Link>
                  </li>
                  <li>
                    <Link href="element-blog-posts.html">پست های وبلاگ </Link>
                  </li>
                  <li>
                    <Link href="element-instagrams.html">اینستاگرام </Link>
                  </li>
                  <li>
                    <Link href="element-cta.html">دکمه اقدام تماس</Link>
                  </li>
                  <li>
                    <Link href="element-vendors.html">فروشندگان </Link>
                  </li>
                  <li>
                    <Link href="element-icon-boxes.html">آیکن باکس </Link>
                  </li>
                  <li>
                    <Link href="element-icons.html">آیکن ها </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div
            className={`tab-pane ${menuState === "cat" ? "active" : ""}`}
            id="categories"
          >
            <ul className="mobile-menu">
              {catMenu?.map((item) => (
                <li>
                  <Link
                    href={`/category/${item.id}`}
                    onClick={() => {
                      setMobileMenu(false);
                    }}
                  >
                    <i className="w-icon-electronics"></i>
                    {item.title} <span class="toggle-btn"></span>
                  </Link>
                </li>
              ))}
              {/* <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-tshirt2"></i>مدل
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">زنانه </Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            تازه رسیده ها{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            پرفروش ترین ها{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">پر طرفدار </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">تن پوش </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">کفش ها </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">کیسه ها </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            تجهیزات جانبی{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">جواهر و ساعت </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">ویژه </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">زنانه </Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            تازه رسیده ها{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            پرفروش ترین ها{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">پر طرفدار </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">تن پوش </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">کفش ها </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">کیسه ها </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            تجهیزات جانبی{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">جواهر و ساعت </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-home"></i>خانه و باغ
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">اتاق خواب </Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            تخت، قاب و پایه
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">کمد </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html"> میزهای خواب </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            تخت و تخت کودک
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">اسلحه </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">هال </Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">میز های قهوه </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">صندلی </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">جداول </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            فوتون و مبل تختخواب شو
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            کابینت و صندوقچه
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">دفتر </Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            صندلی های اداری{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">میز </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            قفسه های کتاب{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">قفسه پوشه ها </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            {" "}
                            اتاق استراحت جداول{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">آشپزخانه و غذاخوری</Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            ست های غذاخوری{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            کابینت های نگهداری آشپزخانه
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            قفسه های بشرز{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            صندلی های غذاخوری{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            اتاق غذاخوری جداول{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">چهارپایه بار </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-electronics"></i>الکترونیک
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">لپ تاپ و کامپیوتر</Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            کامپیوترهای رومیزی
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">مانیتور </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">لپ تاپ </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            هارد دیسک و فضای ذخیره سازی
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            کامپیوتر تجهیزات جانبی{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">تلویزیون و ویدئو</Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">تلویزیون ها </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            بلندگوهای صوتی خانگی
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">پروژکتورها </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            دستگاه های پخش رسانه
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">دوربین های دیجیتال</Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            دوربین های دیجیتال SLR
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            دوربین های ورزشی و اکشن
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            لنزهای دوربین{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">چاپگر عکس </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            کارت های حافظه دیجیتال
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">تلفن های همراه </Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            تلفن های حامل{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            گوشی های قفل نشده{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            قاب های گوشی و موبایل
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            شارژر تلفن همراه
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-furniture"></i> مبلمان
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">مبلمان </Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">مبل و کاناپه</Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">صندلی </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            چارچوب های تخت{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            میزهای کنار تخت{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">میز آرایش</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">نورپردازی </Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">لامپ </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">لامپ ها </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            چراغ های سقفی{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            چراغ های دیواری{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            حمام نورپردازی{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">خانه تجهیزات جانبی </Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            تجهیزات جانبی تزئینی{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            شمع و نگهدارنده
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">عطر خانگی </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">آینه </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">ساعت ها </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="#">باغ و فضای باز</Link>
                      <ul>
                        <li>
                          <Link href="shop-fullwidth-banner.html">مبلمان باغ </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            ماشین های چمن زنی{" "}
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            واشرهای تحت فشار
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            تمام ابزار باغبانی
                          </Link>
                        </li>
                        <li>
                          <Link href="shop-fullwidth-banner.html">
                            غذاخوری در فضای باز
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-heartbeat"></i>سلامت و زیبایی
                  </Link>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-gift"></i>ایده های هدیه
                  </Link>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-gamepad"></i>اسباب بازی و بازی
                  </Link>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-ice-cream"></i>آشپزی
                  </Link>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-ios"></i>گوشی های هوشمند
                  </Link>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-camera"></i>دوربین و عکس
                  </Link>
                </li>
                <li>
                  <Link href="shop-fullwidth-banner.html">
                    <i className="w-icon-ruby"></i>تجهیزات جانبی
                  </Link>
                </li>
                <li>
                  <Link 
                    href="shop-banner-sidebar.html"
                    className="font-weight-bold text-primary text-uppercase ls-25"
                  >
                    نمایش همه دسته بندیها <i className="w-icon-angle-left"></i>
                  </Link>
                </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
