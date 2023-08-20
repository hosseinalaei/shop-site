const Register = () => {
    return ( 
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
     );
}
 
export default Register;