const LoginComponent = () => {
    return ( 
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
     );
}
 
export default LoginComponent;