import Footer from "@/components/Footer/Footer";
import StickyFooter from "@/components/Footer/StickyFooter";

const Login = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="main login-page">
          <div className="page-header">
            <div className="container">
              <h1 className="page-title mb-0">حساب کاربری</h1>
            </div>
          </div>

          <nav className="breadcrumb-nav">
            <div className="container">
              <ul className="breadcrumb">
                <li>
                  <a href="demo1.html">خانه </a>
                </li>
                <li>حساب کاربری</li>
              </ul>
            </div>
          </nav>
          <div className="page-content">
            <div className="container">
              <div className="login-popup">
                <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
                  <ul className="nav nav-tabs text-uppercase" role="tablist">
                    <li className="nav-item">
                      <a href="#sign-in" className="nav-link active">
                        ورود{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#sign-up" className="nav-link">
                        ثبت نام
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="sign-in">
                      <div className="form-group">
                        <label>ایمیل یا نام کاربری *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          id="username"
                          required
                        />
                      </div>
                      <div className="form-group mb-0">
                        <label>رمز عبور *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="password"
                          id="password"
                          required
                        />
                      </div>
                      <div className="form-checkbox d-flex align-items-center justify-content-between">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          id="remember1"
                          name="remember1"
                          required=""
                        />
                        <label htmlFor="remember1">مرا به خاطر بسپار </label>
                        <a href="#">فراموشی رمز عبور؟</a>
                      </div>
                      <a href="#" className="btn btn-primary">
                        ورود{" "}
                      </a>
                    </div>
                    <div className="tab-pane" id="sign-up">
                      <div className="form-group">
                        <label>آدرس ایمیل شما *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email_1"
                          id="email_1"
                          required
                        />
                      </div>
                      <div className="form-group mb-5">
                        <label>رمز عبور *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="password_1"
                          id="password_1"
                          required
                        />
                      </div>
                      <div className="checkbox-content login-vendor">
                        <div className="form-group mb-5">
                          <label>نام کوچک *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="first-name"
                            id="first-name"
                            required
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label> نام خانوادگی *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="last-name"
                            id="last-name"
                            required
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label>نام فروشچ *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="shop-name"
                            id="shop-name"
                            required
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label>آدرس فروشگاه *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="shop-url"
                            id="shop-url"
                            required
                          />
                          <small>#</small>
                        </div>
                        <div className="form-group mb-5">
                          <label> تلفن *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="phone-number"
                            id="phone-number"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-checkbox user-checkbox mt-0">
                        <input
                          type="checkbox"
                          className="custom-checkbox checkbox-round active"
                          id="check-customer"
                          name="check-customer"
                          required=""
                        />
                        <label htmlFor="check-customer" className="check-customer mb-1">
                          من مشتری هستم
                        </label>
                        <br />
                        <input
                          type="checkbox"
                          className="custom-checkbox checkbox-round"
                          id="check-seller"
                          name="check-seller"
                          required=""
                        />
                        <label htmlFor="check-seller" className="check-seller">
                          من فروشنده هستم
                        </label>
                      </div>
                      <p>
                        داده های شخصی شما برای پشتیبانی از تجربه شما در سراسر
                        این وب سایت، مدیریت دسترسی به حساب شما، و برای اهداف
                        دیگری که در ما توضیح داده شده است، استفاده خواهد شد.{" "}
                        <a href="#" className="text-primary">
                          سیاست حفظ حریم خصوصی{" "}
                        </a>
                        .
                      </p>
                      <a href="#" className="d-block mb-5 text-primary">
                        به عنوان فروشنده ثبت نام کنید؟
                      </a>
                      <div className="form-checkbox d-flex align-items-center justify-content-between mb-5">
                        <input
                          type="checkbox"
                          className="custom-checkbox"
                          id="remember"
                          name="remember"
                          required=""
                        />
                        <label htmlFor="remember" className="font-size-md">
                          من موافقم با
                          <a href="#" className="text-primary font-size-md">
                            {" "}
                            سیاست حفظ حریم خصوصی{" "}
                          </a>
                        </label>
                      </div>
                      <a href="#" className="btn btn-primary">
                        ورود{" "}
                      </a>
                    </div>
                  </div>
                  <p className="text-center">ورود با حساب اجتماعی</p>
                  <div className="social-icons social-icon-border-color d-flex justify-content-center">
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
                      className="social-icon social-google fab fa-google"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <StickyFooter />
    </>
  );
};

export default Login;
