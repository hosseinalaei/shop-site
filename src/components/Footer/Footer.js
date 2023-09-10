import Image from "next/image";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    // <footer className="footer">
    //   {/* <div className="footer-newsletter bg-primary pt-6 pb-6">
    //         <div className="container">
    //           <div className="row justify-content-center align-items-center">
    //             <div className="col-xl-5 col-lg-6">
    //               <div className="icon-box icon-box-side text-white">
    //                 <div className="icon-box-icon d-inline-flex">
    //                   <i className="w-icon-envelop3"></i>
    //                 </div>
    //                 <div className="icon-box-content">
    //                   <h4 className="icon-box-title text-white text-uppercase mb-0">
    //                     مشترک شدن در خبرنامه ما
    //                   </h4>
    //                   <p className="text-white">
    //                     تمام آخرین اطلاعات در مورد رویدادها، فروش ها و پیشنهادات
    //                     را دریافت کنید.
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
    //               <form
    //                 action="#"
    //                 method="get"
    //                 className="input-wrapper input-wrapper-inline input-wrapper-rounded"
    //               >
    //                 <input
    //                   type="email"
    //                   className="form-control mr-2 bg-white"
    //                   name="email"
    //                   id="email"
    //                   placeholder="آدرس ایمیل "
    //                 />
    //                 <button className="btn btn-dark btn-rounded" type="submit">
    //                   اشتراک در <i className="w-icon-long-arrow-left"></i>
    //                 </button>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}
    //   <div className="container">
    //     <div className="footer-top">
    //       <div className="row">
    //         <div className="col-lg-4 col-sm-6">
    //           <div className="widget widget-about">
    //             <a href="demo1.html" className="logo-footer">
    //               <Image src={logo} alt="logo-footer" width="144" height="45" />
    //             </a>
    //             <div className="widget-body">
    //               <p className="widget-about-title">سوالی دارید؟ تماس بگیرید</p>
    //               <a href="tel:18005707777" className="widget-about-call">
    //                 1-800-570-7777
    //               </a>
    //               <p className="widget-about-desc">
    //                 برای دریافت بروز رسانی با ما هماهنگ شوید.
    //               </p>

    //               <div className="social-icons social-icons-colored">
    //                 <a
    //                   href="#"
    //                   className="social-icon social-facebook w-icon-facebook"
    //                 ></a>
    //                 <a
    //                   href="#"
    //                   className="social-icon social-twitter w-icon-twitter"
    //                 ></a>
    //                 <a
    //                   href="#"
    //                   className="social-icon social-instagram w-icon-instagram"
    //                 ></a>
    //                 <a
    //                   href="#"
    //                   className="social-icon social-youtube w-icon-youtube"
    //                 ></a>
    //                 <a
    //                   href="#"
    //                   className="social-icon social-pinterest w-icon-pinterest"
    //                 ></a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-sm-6">
    //           <div className="widget">
    //             <h3 className="widget-title">کمپانی </h3>
    //             <ul className="widget-body">
    //               <li>
    //                 <a href="about-us.html">درباره ما </a>
    //               </li>
    //               <li>
    //                 <a href="#">اعضای تیم </a>
    //               </li>
    //               <li>
    //                 <a href="#">شغل </a>
    //               </li>
    //               <li>
    //                 <a href="contact-us.html">تماس با ما </a>
    //               </li>
    //               <li>
    //                 <a href="#">وابسته </a>
    //               </li>
    //               <li>
    //                 <a href="#">تاریخچه سفارش ها </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-sm-6">
    //           <div className="widget">
    //             <h4 className="widget-title">حساب کاربری </h4>
    //             <ul className="widget-body">
    //               <li>
    //                 <a href="#">پیگیر سفارشات من </a>
    //               </li>
    //               <li>
    //                 <a href="cart.html">سبد خرید </a>
    //               </li>
    //               <li>
    //                 <a href="login.html">ورود </a>
    //               </li>
    //               <li>
    //                 <a href="#">راهنما </a>
    //               </li>
    //               <li>
    //                 <a href="wishlist.html">علاقه مندیهای من </a>
    //               </li>
    //               <li>
    //                 <a href="#">سیاست حفظ حریم خصوصی </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-lg-3 col-sm-6">
    //           <div className="widget">
    //             <h4 className="widget-title">خدمات مشتری </h4>
    //             <ul className="widget-body">
    //               <li>
    //                 <a href="#">روش های پرداخت </a>
    //               </li>
    //               <li>
    //                 <a href="#">تضمین بازگشت پول! </a>
    //               </li>
    //               <li>
    //                 <a href="#">محصول بازگشتی </a>
    //               </li>
    //               <li>
    //                 <a href="#">مرکز پشتیبانی </a>
    //               </li>
    //               <li>
    //                 <a href="#">حمل دریایی </a>
    //               </li>
    //               <li>
    //                 <a href="#">مدت و شرایط</a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="footer-bottom">
    //       <div className="footer-left">
    //         <p className="copyright">
    //           کپی رایت © 1401 فروشگاه وولمارت. تمامی حقوق محفوظ است..
    //         </p>
    //       </div>
    //       <div className="footer-right">
    //         <span className="payment-label mr-lg-8">
    //           ما از پرداخت مطمئن استفاده می کنیم
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <div dir="rtl">
      <div class="container-fluid bg-primary">
        <div class="row">
          <div class="col d-none d-lg-flex justify-content-around">
            <div class="d-flex text-white align-items-center">
              <span class="material-symbols-outlined fs-1 align-self-centericon mx-1">
                mail
              </span>
              <div class="d-flex font mt-3 flex-column">
                <p class="lh-1">عضویت در خبرنامه ما</p>
                <p class="lh-1">
                  تمام آخرین اطلاعات در مورد رویدادها، فروش ها و پیشنهادات را
                  دریافت کنید
                </p>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <input type="email" placeholder="آدرس ایمیل" class="input p-2" />
              <button class="input btn-outline-secondary">
                <span class="material-symbols-outlined pt-2">search</span>
              </button>
            </div>
          </div>
          <div class="col d-lg-none d-xl-none d-flex flex-column">
            <div class="d-flex text-white flex-column align-items-center">
              <span class="material-symbols-outlined fs-1 align-self-centericon mx-1 pt-3">
                mail
              </span>
              <div class="d-flex font mt-3 flex-column ">
                <p class="lh-1 text-center">عضویت در خبرنامه ما</p>
                <p class="lh-1 text-center">
                  تمام آخرین اطلاعات در مورد رویدادها، فروش ها و پیشنهادات را
                  دریافت کنید
                </p>
              </div>
              <div class="d-flex align-items-center pb-4">
                <input
                  type="email"
                  placeholder="آدرس ایمیل"
                  class="input-2 p-2"
                />
                <button class="input btn-outline-secondary">
                  <span class="material-symbols-outlined pt-2">search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col d-flex flex-lg-row flex-column justify-content-around align-content-center">
            <div class="d-flex flex-column flex-lg-row">
              <div class="d-flex flex-column mx-0 mx-lg-4">
                <div>
                  <Image src={logo} alt="logo-footer" width="144" height="45" />
                </div>
                <p class="fs-normal mt-3">سوالی دارید؟ تماس بگیرید</p>
                <p
                  dir="ltr"
                  class="link-4 d-flex justify-content-end align-items-center"
                >
                  <span class="material-symbols-outlined mx-1">call</span>
                  1-800-570-7777
                </p>
                <p class="fs-normal">
                  برای دریافت بروز رسانی با ما هماهنگ شوید.
                </p>
                <div class="d-flex">
                  <i class="bi bi-facebook icon px-2"></i>
                  <i class="bi bi-twitter icon px-2"></i>
                  <i class="bi bi-instagram icon px-2"></i>
                  <i class="bi bi-youtube icon px-2"></i>
                  <i class="bi bi-pinterest icon px-2"></i>
                </div>
              </div>
              <div class="d-flex flex-column mx-0 mx-lg-4 mt-4 mt-lg-0">
                <b class="mb-1">کمپانی</b>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  درباره ما
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  اعضای تیم
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  شغل
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  تماس با ما
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  وابسته
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  تاریخچه سفارش ها
                </a>
              </div>
            </div>
            <div class="d-flex flex-column flex-lg-row">
              <div class="d-flex flex-column mx-0 mx-lg-4 mt-4 mt-lg-0">
                <b class="mb-1">حساب کاربری</b>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  پیگیر سفارشات من
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  بنر باکسی
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  بنر تمام عرض
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  فیلتر افقی
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  بدون نوار کناری
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  اسکرول بی نهایت آژاکس
                </a>
              </div>
              <div class="d-flex flex-column mx-0 mx-lg-4 mt-4 mt-lg-0">
                <b class="mb-1">صفحات فروشگاه</b>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  بنر با نوار کناری
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  بنر باکسی
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  بنر تمام عرض
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  فیلتر افقی
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  بدون نوار کناری
                </a>
                <a href="#" class="link-2 text-decoration-none py-1 lh-lg">
                  اسکرول بی نهایت آژاکس
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col d-flex flex-column">
            <div class="d-flex flex-lg-column flex-row mx-0 mx-lg-4 mt-4 justify-content-around mt-lg-0">
              <div class="d-flex flex-column ">
                <div class="d-flex flex-column flex-lg-row mt-4 mt-lg-0">
                  <b class="mb-1">حساب کاربری:</b>
                  <a href="#" class="link-2 text-decoration-none me-3">
                    پیگیر سفارشات من
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر باکسی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر تمام عرض
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    فیلتر افقی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بدون نوار کناری
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    اسکرول بی نهایت آژاکس
                  </a>
                </div>
                <div class="d-flex flex-column flex-lg-row mt-4 mt-lg-0">
                  <b class="mb-1">حساب کاربری:</b>
                  <a href="#" class="link-2 text-decoration-none me-3">
                    پیگیر سفارشات من
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر باکسی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر تمام عرض
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    فیلتر افقی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بدون نوار کناری
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    اسکرول بی نهایت آژاکس
                  </a>
                </div>
                <div class="d-flex flex-column flex-lg-row mt-4 mt-lg-0">
                  <b class="mb-1">حساب کاربری:</b>
                  <a href="#" class="link-2 text-decoration-none me-3">
                    پیگیر سفارشات من
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر باکسی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر تمام عرض
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    فیلتر افقی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بدون نوار کناری
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    اسکرول بی نهایت آژاکس
                  </a>
                </div>
              </div>
              <div class="d-flex flex-column ">
                <div class="d-flex flex-column flex-lg-row mt-4 mt-lg-0">
                  <b class="mb-1">حساب کاربری:</b>
                  <a href="#" class="link-2 text-decoration-none me-3">
                    پیگیر سفارشات من
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر باکسی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر تمام عرض
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    فیلتر افقی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بدون نوار کناری
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    اسکرول بی نهایت آژاکس
                  </a>
                </div>
                <div class="d-flex flex-column flex-lg-row mt-4 mt-lg-0">
                  <b class="mb-1">حساب کاربری:</b>
                  <a href="#" class="link-2 text-decoration-none me-3">
                    پیگیر سفارشات من
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر باکسی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر تمام عرض
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    فیلتر افقی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بدون نوار کناری
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    اسکرول بی نهایت آژاکس
                  </a>
                </div>
                <div class="d-flex flex-column flex-lg-row mt-4 mt-lg-0">
                  <b class="mb-1">حساب کاربری:</b>
                  <a href="#" class="link-2 text-decoration-none me-3">
                    پیگیر سفارشات من
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر باکسی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بنر تمام عرض
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    فیلتر افقی
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    بدون نوار کناری
                  </a>
                  <p class="text-muted font-head mx-3 d-none d-lg-block">|</p>
                  <a href="#" class="link-2 text-decoration-none">
                    اسکرول بی نهایت آژاکس
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col d-flex flex-lg-row flex-column justify-content-around">
            <div>
              <p>کپی رایت © 1401 فروشگاه وولمارت. تمامی حقوق محفوظ است...</p>
            </div>
            <div class="d-flex flex-lg-row flex-column">
              <p>ما از پرداخت مطمئن استفاده می کنیم</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
