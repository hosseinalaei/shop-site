import Image from "next/image";
import Link from "next/link";
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
                <Link href="demo1.html" className="logo-footer">
                  <Image src={logo} alt="logo-footer" width="144" height="45" />
                </Link>
                <div className="widget-body">
                  <p className="widget-about-title">سوالی دارید؟ تماس بگیرید</p>
                  <Link href="tel:18005707777" className="widget-about-call">
                    021-43000470
                  </Link>
                  <p className="widget-about-desc">
                    ارتباط با ما در شبکه‌های اجتماعی
                  </p>

                  <div className="social-icons social-icons-colored">
                    <Link
                      href="#"
                      className="social-icon social-facebook w-icon-facebook"
                    ></Link>
                    <Link
                      href="#"
                      className="social-icon social-twitter w-icon-twitter"
                    ></Link>
                    <Link
                      href="#"
                      className="social-icon social-instagram w-icon-instagram"
                    ></Link>
                    <Link
                      href="#"
                      className="social-icon social-youtube w-icon-youtube"
                    ></Link>
                    <Link
                      href="#"
                      className="social-icon social-pinterest w-icon-pinterest"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h3 className="widget-title">شاپ آی‌آر </h3>
                <ul className="widget-body">
                  <li>
                    <Link href="/about-us">درباره ما </Link>
                  </li>
                  <li>
                    <Link href="#">اعضای تیم </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">ارتباط با ما </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">حساب کاربری </h4>
                <ul className="widget-body">
                  <li>
                    <Link href="#">پیگیر سفارشات من </Link>
                  </li>
                  <li>
                    <Link href="/cart">سبد خرید </Link>
                  </li>
                  <li>
                    <Link href="/login">ورود </Link>
                  </li>
                  <li>
                    <Link href="#">راهنما </Link>
                  </li>
                  <li>
                    <Link href="/wishlist">علاقه مندیهای من </Link>
                  </li>
                  <li>
                    <Link href="#">سیاست حفظ حریم خصوصی </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="widget">
                <h4 className="widget-title">خدمات مشتری </h4>
                <ul className="widget-body">
                  <li>
                    <Link href="#">روش های پرداخت </Link>
                  </li>
                  <li>
                    <Link href="#">تضمین بازگشت پول! </Link>
                  </li>
                  <li>
                    <Link href="#">محصول بازگشتی </Link>
                  </li>
                  <li>
                    <Link href="#">مرکز پشتیبانی </Link>
                  </li>
                  <li>
                    <Link href="#">حمل دریایی </Link>
                  </li>
                  <li>
                    <Link href="#">مدت و شرایط</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <p className="copyright">
              کپی رایت © 1401 فروشگاه شاپ آی‌آر. تمامی حقوق محفوظ است..
            </p>
          </div>
          <div className="footer-right">
            {/* <span className="payment-label mr-lg-8">
              ما از پرداخت مطمئن استفاده می کنیم
            </span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
