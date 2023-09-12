import Image from "next/image";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer footer-dark">
      {/* <div className="footer-newsletter bg-primary pt-6 pb-6">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="icon-box icon-box-side text-white">
                    <div className="icon-box-icon d-inline-flex">
                      <i className="w-icon-envelop3"></i>
                    </div>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title text-white text-uppercase mb-0">
                        مشترک شدن در خبرنامه ما
                      </h4>
                      <p className="text-white">
                        تمام آخرین اطلاعات در مورد رویدادها، فروش ها و پیشنهادات
                        را دریافت کنید.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                  <form
                    action="#"
                    method="get"
                    className="input-wrapper input-wrapper-inline input-wrapper-rounded"
                  >
                    <input
                      type="email"
                      className="form-control mr-2 bg-white"
                      name="email"
                      id="email"
                      placeholder="آدرس ایمیل "
                    />
                    <button className="btn btn-dark btn-rounded" type="submit">
                      اشتراک در <i className="w-icon-long-arrow-left"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget widget-about">
                <a href="demo1.html" className="logo-footer">
                  <Image src={logo} alt="logo-footer" width="144" height="45" />
                </a>
                <div className="widget-body">
                  <p className="widget-about-title">سوالی دارید؟ تماس بگیرید</p>
                  <a href="tel:18005707777" className="widget-about-call">
                    1-800-570-7777
                  </a>
                  <p className="widget-about-desc">
                    برای دریافت بروز رسانی با ما هماهنگ شوید.
                  </p>

                  <div className="social-icons social-icons-colored">
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
                      className="social-icon social-instagram w-icon-instagram"
                    ></a>
                    <a
                      href="#"
                      className="social-icon social-youtube w-icon-youtube"
                    ></a>
                    <a
                      href="#"
                      className="social-icon social-pinterest w-icon-pinterest"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h3 className="widget-title">کمپانی </h3>
                <ul className="widget-body">
                  <li>
                    <a href="about-us.html">درباره ما </a>
                  </li>
                  <li>
                    <a href="#">اعضای تیم </a>
                  </li>
                  <li>
                    <a href="#">شغل </a>
                  </li>
                  <li>
                    <a href="contact-us.html">تماس با ما </a>
                  </li>
                  <li>
                    <a href="#">وابسته </a>
                  </li>
                  <li>
                    <a href="#">تاریخچه سفارش ها </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">حساب کاربری </h4>
                <ul className="widget-body">
                  <li>
                    <a href="#">پیگیر سفارشات من </a>
                  </li>
                  <li>
                    <a href="cart.html">سبد خرید </a>
                  </li>
                  <li>
                    <a href="login.html">ورود </a>
                  </li>
                  <li>
                    <a href="#">راهنما </a>
                  </li>
                  <li>
                    <a href="wishlist.html">علاقه مندیهای من </a>
                  </li>
                  <li>
                    <a href="#">سیاست حفظ حریم خصوصی </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">خدمات مشتری </h4>
                <ul className="widget-body">
                  <li>
                    <a href="#">روش های پرداخت </a>
                  </li>
                  <li>
                    <a href="#">تضمین بازگشت پول! </a>
                  </li>
                  <li>
                    <a href="#">محصول بازگشتی </a>
                  </li>
                  <li>
                    <a href="#">مرکز پشتیبانی </a>
                  </li>
                  <li>
                    <a href="#">حمل دریایی </a>
                  </li>
                  <li>
                    <a href="#">مدت و شرایط</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <p className="copyright">
              کپی رایت © 1401 فروشگاه وولمارت. تمامی حقوق محفوظ است..
            </p>
          </div>
          <div className="footer-right">
            <span className="payment-label mr-lg-8">
              ما از پرداخت مطمئن استفاده می کنیم
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
