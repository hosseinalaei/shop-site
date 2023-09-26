import { useCartContext } from "@/contexts/contex";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({mobileMenu}) => {

  const {setMobileMenu, subMenu, catMenu} = useCartContext();

  const [menuState, setMenuState] = useState('main')

  let drawerClasses = "mobile-side-drawer";
  if (mobileMenu) {
    drawerClasses = "mobile-side-drawer open";
  }
    return ( 
        <div className={`sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper ${drawerClasses}`}>

        { <a href="#" className={!mobileMenu ? "mobile-menu-close": 'mmenu-active'} onClick={() =>{setMobileMenu(false)}}>
          <i className="close-icon"></i>
        </a>}

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
              <li className="nav-item" >
                <a href="#main-menu" className={`nav-link ${menuState === 'main' ? 'active' : ''}`} onClick={() =>{setMenuState('main')}}>
                  منوی اصلی{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="#categories" className={`nav-link ${menuState === 'cat' ? 'active' : ''}`} onClick={() =>{setMenuState('cat')}}>
                  دسته بندیها{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className={`tab-pane ${menuState === 'main' ? 'active' : ''}`} id="main-menu">
              <ul className="mobile-menu">
                <li>
                  <Link href={`/`} onClick={() =>{setMobileMenu(false)}}>خانه </Link>
                </li>
                <li>
                  <Link href={`/shop`} onClick={() =>{setMobileMenu(false)}}>فروشگاه </Link>
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
                {/* <li>
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
                </li> */}
                <li>
                  <Link href={`/blog`} onClick={() =>{setMobileMenu(false)}}>بلاگ </Link>
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
                {/* <li>
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
                </li> */}
                <li>
                  <Link href={`/cart`} onClick={() =>{setMobileMenu(false)}}>سبد خرید</Link>
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
            <div className={`tab-pane ${menuState === 'cat' ? 'active' : ''}`} id="categories">
              <ul className="mobile-menu">
                {catMenu?.map(item =>(
                  <li>
                  <Link href={`/category/${item.id}`} onClick={() =>{setMobileMenu(false)}}>
                  <i className="w-icon-electronics"></i>
                    {item.title} <span class="toggle-btn"></span></Link>
                    
                  </li>
                ))}
                {/* <li>
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
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default MobileMenu;