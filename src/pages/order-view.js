const { default: Footer } = require("@/components/Footer/Footer");
const { default: StickyFooter } = require("@/components/Footer/StickyFooter");

const OrderView = () => {
  return (
    <div className="my-account">
      <div className="page-wrapper">
        <main className="main">
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
                <li>
                  <a href="my-account.html">حساب من </a>
                </li>
                <li>سفارش #962</li>
              </ul>
            </div>
          </nav>

          <div className="page-content pt-2">
            <div className="container">
              <div className="tab tab-vertical row gutter-lg">
                <ul className="nav nav-tabs mb-6" role="tablist">
                  <li className="nav-item">
                    <a href="#account-dashboard" className="nav-link">
                      داشبرد
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#account-orders" className="nav-link">
                      سفارشات{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#account-downloads" className="nav-link">
                      دانلودها{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#account-addresses" className="nav-link">
                      آدرس ها{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#account-details" className="nav-link">
                      جزئیات حساب{" "}
                    </a>
                  </li>
                  <li className="link-item">
                    <a href="wishlist.html">علاقه مندیها </a>
                  </li>
                  <li className="link-item">
                    <a href="login.html">خروج </a>
                  </li>
                </ul>

                <div className="tab-content mb-6">
                  <div className="tab-pane" id="account-dashboard">
                    <p className="greeting">
                      سلام
                      <span className="text-dark font-weight-bold">
                        جعفر عباسی{" "}
                      </span>
                      ( شما نیستید آقای
                      <span className="text-dark font-weight-bold">
                        جعفر عباسی{" "}
                      </span>
                      ?
                      <a href="#" className="text-primary">
                        خروج{" "}
                      </a>
                      )
                    </p>

                    <p className="mb-4">
                      از داشبورد حساب خود می توانید خود را مشاهده کنید{" "}
                      <a
                        href="#account-orders"
                        className="text-primary link-to-tab"
                      >
                        سفارشات اخیر{" "}
                      </a>
                      , مدیریت شما روی{" "}
                      <a
                        href="#account-addresses"
                        className="text-primary link-to-tab"
                      >
                        آدرس حمل و نقلها{" "}
                      </a>
                      , و
                      <a
                        href="#account-details"
                        className="text-primary link-to-tab"
                      >
                        رمز عبور و جزئیات حساب خود را ویرایش کنید.
                      </a>
                    </p>

                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-orders" className="link-to-tab">
                          <div className="icon-box text-center">
                            <span className="icon-box-icon icon-orders">
                              <i className="w-icon-orders"></i>
                            </span>
                            <div className="icon-box-content">
                              <p className="text-uppercase mb-0">سفارشات </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-downloads" className="link-to-tab">
                          <div className="icon-box text-center">
                            <span className="icon-box-icon icon-download">
                              <i className="w-icon-download"></i>
                            </span>
                            <div className="icon-box-content">
                              <p className="text-uppercase mb-0">دانلود ها </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-addresses" className="link-to-tab">
                          <div className="icon-box text-center">
                            <span className="icon-box-icon icon-address">
                              <i className="w-icon-map-marker"></i>
                            </span>
                            <div className="icon-box-content">
                              <p className="text-uppercase mb-0">آدرس ها </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-details" className="link-to-tab">
                          <div className="icon-box text-center">
                            <span className="icon-box-icon icon-account">
                              <i className="w-icon-user"></i>
                            </span>
                            <div className="icon-box-content">
                              <p className="text-uppercase mb-0">جزئیات حساب </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="wishlist.html" className="link-to-tab">
                          <div className="icon-box text-center">
                            <span className="icon-box-icon icon-wishlist">
                              <i className="w-icon-heart"></i>
                            </span>
                            <div className="icon-box-content">
                              <p className="text-uppercase mb-0">علاقه مندیها </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#">
                          <div className="icon-box text-center">
                            <span className="icon-box-icon icon-logout">
                              <i className="w-icon-logout"></i>
                            </span>
                            <div className="icon-box-content">
                              <p className="text-uppercase mb-0">خروج </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane mb-4" id="account-orders">
                    <div className="icon-box icon-box-side icon-box-light">
                      <span className="icon-box-icon icon-orders">
                        <i className="w-icon-orders"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title text-capitalize ls-normal mb-0">
                          سفارشات{" "}
                        </h4>
                      </div>
                    </div>

                    <table className="shop-table account-orders-table mb-6">
                      <thead>
                        <tr>
                          <th className="order-id">سفارش </th>
                          <th className="order-date">تاریخ </th>
                          <th className="order-status">وضعیت </th>
                          <th className="order-total">مجموع </th>
                          <th className="order-actions">اقدامات </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="order-id">#2321</td>
                          <td className="order-date">خرداد 5</td>
                          <td className="order-status">در حال پردازش </td>
                          <td className="order-total">
                            <span className="order-price">780000 تومان</span> برای
                            <span className="order-quantity"> 1</span> آیتم
                          </td>
                          <td className="order-action">
                            <a
                              href="#"
                              className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                            >
                              نمایش{" "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="order-id">#2321</td>
                          <td className="order-date">خرداد 5</td>
                          <td className="order-status">در حال پردازش </td>
                          <td className="order-total">
                            <span className="order-price">15000 تومان</span> برای
                            <span className="order-quantity"> 1</span> آیتم
                          </td>
                          <td className="order-action">
                            <a
                              href="#"
                              className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                            >
                              نمایش{" "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="order-id">#2319</td>
                          <td className="order-date">خرداد 5</td>
                          <td className="order-status">در حال پردازش </td>
                          <td className="order-total">
                            <span className="order-price">450000 تومان</span> برای
                            <span className="order-quantity"> 1</span> آیتم
                          </td>
                          <td className="order-action">
                            <a
                              href="#"
                              className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                            >
                              نمایش{" "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="order-id">#2318</td>
                          <td className="order-date">خرداد 5</td>
                          <td className="order-status">در حال پردازش </td>
                          <td className="order-total">
                            <span className="order-price">720000 تومان</span> برای
                            <span className="order-quantity"> 1</span> آیتم
                          </td>
                          <td className="order-action">
                            <a
                              href="#"
                              className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                            >
                              نمایش{" "}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <a
                      href="shop-banner-sidebar.html"
                      className="btn btn-dark btn-rounded btn-icon-right"
                    >
                      برو فروشگاه <i className="w-icon-long-arrow-left"></i>
                    </a>
                  </div>

                  <div className="tab-pane" id="account-downloads">
                    <div className="icon-box icon-box-side icon-box-light">
                      <span className="icon-box-icon icon-downloads mr-2">
                        <i className="w-icon-download"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title ls-normal">دانلود ها </h4>
                      </div>
                    </div>
                    <p className="mb-4">هنوز دانلودی در دسترس نیست.</p>
                    <a
                      href="shop-banner-sidebar.html"
                      className="btn btn-dark btn-rounded btn-icon-right"
                    >
                      برو فروشگاه <i className="w-icon-long-arrow-left"></i>
                    </a>
                  </div>

                  <div className="tab-pane" id="account-addresses">
                    <div className="icon-box icon-box-side icon-box-light">
                      <span className="icon-box-icon icon-map-marker">
                        <i className="w-icon-map-marker"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title mb-0 ls-normal">آدرس ها </h4>
                      </div>
                    </div>
                    <p>
                      آدرس های زیر به طور پیش فرض در صفحه پرداخت استفاده می شود.
                    </p>
                    <div className="row">
                      <div className="col-sm-6 mb-6">
                        <div className="ecommerce-address billing-address pr-lg-8">
                          <h4 className="title title-underline ls-25 font-weight-bold">
                            آدرس قبض{" "}
                          </h4>
                          <address className="mb-4">
                            <table className="address-table">
                              <tbody>
                                <tr>
                                  <th>نام:</th>
                                  <td>جعفر خان </td>
                                </tr>
                                <tr>
                                  <th>شرکت: </th>
                                  <td>راست چین </td>
                                </tr>
                                <tr>
                                  <th>آدرس: </th>
                                  <td>پاناما </td>
                                </tr>
                                <tr>
                                  <th>شهر:</th>
                                  <td>پاناما </td>
                                </tr>
                                <tr>
                                  <th>کشور:</th>
                                  <td>پاناما </td>
                                </tr>
                                <tr>
                                  <th>کد پستی :</th>
                                  <td>92020</td>
                                </tr>
                                <tr>
                                  <th>تلفن: </th>
                                  <td>1112223334</td>
                                </tr>
                              </tbody>
                            </table>
                          </address>
                          <a
                            href="#"
                            className="btn btn-link btn-underline btn-icon-right text-primary"
                          >
                            آدرس صورتحساب خود را ویرایش کنید
                            <i className="w-icon-long-arrow-left"></i>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 mb-6">
                        <div className="ecommerce-address shipping-address pr-lg-8">
                          <h4 className="title title-underline ls-25 font-weight-bold">
                            آدرس حمل و نقل
                          </h4>
                          <address className="mb-4">
                            <table className="address-table">
                              <tbody>
                                <tr>
                                  <th>نام:</th>
                                  <td>جعفر خان </td>
                                </tr>
                                <tr>
                                  <th>شرکت: </th>
                                  <td>راست چین </td>
                                </tr>
                                <tr>
                                  <th>آدرس: </th>
                                  <td>پاناما </td>
                                </tr>
                                <tr>
                                  <th>شهر:</th>
                                  <td>پاناما </td>
                                </tr>
                                <tr>
                                  <th>کشور:</th>
                                  <td>پاناما </td>
                                </tr>
                                <tr>
                                  <th>کد پستی :</th>
                                  <td>92020</td>
                                </tr>
                              </tbody>
                            </table>
                          </address>
                          <a
                            href="#"
                            className="btn btn-link btn-underline btn-icon-right text-primary"
                          >
                            آدرس حمل و نقل خود را ویرایش کنید
                            <i className="w-icon-long-arrow-left"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane" id="account-details">
                    <div className="icon-box icon-box-side icon-box-light">
                      <span className="icon-box-icon icon-account mr-2">
                        <i className="w-icon-user"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title mb-0 ls-normal">
                          جزئیات حساب{" "}
                        </h4>
                      </div>
                    </div>
                    <form className="form account-details-form">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="firstname"> نام کوچک*</label>
                            <input
                              type="text"
                              id="firstname"
                              name="firstname"
                              placeholder="John"
                              className="form-control form-control-md"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="lastname"> نام خانوادگی *</label>
                            <input
                              type="text"
                              id="lastname"
                              name="lastname"
                              placeholder="Doe"
                              className="form-control form-control-md"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group mb-3">
                        <label htmlFor="display-name">نام نمایشی *</label>
                        <input
                          type="text"
                          id="display-name"
                          name="display_name"
                          placeholder="جعفر خان"
                          className="form-control form-control-md mb-0"
                        />
                        <p>
                          به این ترتیب نام شما در بخش حساب و در بررسی ها نمایش
                          داده می شود
                        </p>
                      </div>

                      <div className="form-group mb-6">
                        <label htmlFor="email_1">آدرس ایمیل*</label>
                        <input
                          type="email"
                          id="email_1"
                          name="email_1"
                          className="form-control form-control-md"
                        />
                      </div>

                      <h4 className="title title-password ls-25 font-weight-bold">
                        تغییر رمز{" "}
                      </h4>
                      <div className="form-group">
                        <label className="text-dark" htmlFor="cur-password">
                          رمز عبور فعلی را خالی بگذارید تا بدون تغییر باقی بماند
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-md"
                          id="cur-password"
                          name="cur_password"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-dark" htmlFor="new-password">
                          رمز عبور جدید را خالی بگذارید تا بدون تغییر باقی بماند
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-md"
                          id="new-password"
                          name="new_password"
                        />
                      </div>
                      <div className="form-group mb-10">
                        <label className="text-dark" htmlFor="conf-password">
                          تایید رمز عبور{" "}
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-md"
                          id="conf-password"
                          name="conf_password"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark btn-rounded btn-sm mb-4"
                      >
                        ذخیره تغییرات{" "}
                      </button>
                    </form>
                  </div>

                  <div className="tab-pane active order">
                    <p className="mb-7">
                      سفارش #962 در تاریخ 1 خرداد ثبت شد و در حال حاضر در حالت
                      انتظار می باشد.
                    </p>
                    <div className="order-details-wrapper mb-5">
                      <h4 className="title text-uppercase ls-25 mb-5">
                        جزئیات سفارش{" "}
                      </h4>
                      <table className="order-table">
                        <thead>
                          <tr>
                            <th className="text-dark">محصول </th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="#">کت چاپ نخل </a>&nbsp;
                              <strong>x 1</strong>
                              <br />
                              فروشنده : <a href="#"> فروشنده 1</a>
                            </td>
                            <td>80000 تومان </td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">کوله پشتی قهوه ای</a>&nbsp;
                              <strong>x 1</strong>
                              <br />
                              فروشنده : <a href="#"> فروشنده 1</a>
                            </td>
                            <td>50000 تومان</td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <th>مجموع: </th>
                            <td>100000 تومان</td>
                          </tr>
                          <tr>
                            <th>حمل و نقل:</th>
                            <td>نرخ ثابت </td>
                          </tr>
                          <tr>
                            <th>روش پرداخت:</th>
                            <td>انتقال مستقیم بانکی</td>
                          </tr>
                          <tr className="total">
                            <th className="border-no">مجموع:</th>
                            <td className="border-no">100000 تومان</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    <div className="sub-orders mb-10">
                      <h4 className="title mb-5 font-weight-bold ls-25">
                        زیر سفارش ها{" "}
                      </h4>
                      <div className="alert alert-icon alert-inline mb-5">
                        <i className="w-icon-exclamation-triangle"></i>
                        <strong>یادداشت: </strong>این سفارش دارای محصولاتی از
                        چندین فروشنده است. بنابراین ما این سفارش را به چند سفارش
                        فروشنده تقسیم کردیم. هر سفارش به طور مستقل توسط فروشنده
                        مربوطه انجام می شود.
                      </div>
                      <table className="order-subtable">
                        <thead>
                          <tr>
                            <th className="order">سفارش </th>
                            <th className="date">تاریخ </th>
                            <th className="status">وضعیت </th>
                            <th className="total">مجموع </th>
                            <th className="action"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="order">950</td>
                            <td className="date">خرداد 5</td>
                            <td className="status">در انتظار </td>
                            <td className="total">80000 تومان برای 1 آیتم</td>
                            <td className="action">
                              <a href="order-view.html" className="btn btn-rounded">
                                نمایش{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="order">951</td>
                            <td className="date">خرداد 5</td>
                            <td className="status">در انتظار </td>
                            <td className="total">50000 تومان برای 1 آیتم</td>
                            <td className="action">
                              <a href="order-view.html" className="btn btn-rounded">
                                نمایش{" "}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div id="billing-account-addresses">
                      <div className="row">
                        <div className="col-sm-6 mb-8">
                          <div className="ecommerce-address billing-address">
                            <h4 className="title title-underline ls-25 font-weight-bold">
                              آدرس قبض{" "}
                            </h4>
                            <address className="mb-4">
                              <table className="address-table">
                                <tbody>
                                  <tr>
                                    <td>جعفر خان </td>
                                  </tr>
                                  <tr>
                                    <td>راست چین </td>
                                  </tr>
                                  <tr>
                                    <td>پاناما </td>
                                  </tr>
                                  <tr>
                                    <td>پاناما </td>
                                  </tr>
                                  <tr>
                                    <td>پاناما </td>
                                  </tr>
                                  <tr>
                                    <td>92020</td>
                                  </tr>
                                  <tr>
                                    <td>1112223334</td>
                                  </tr>
                                  <tr className="email">
                                    <td>nicework125@gmail.com</td>
                                  </tr>
                                </tbody>
                              </table>
                            </address>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-8">
                          <div className="ecommerce-address shipping-address">
                            <h4 className="title title-underline ls-25 font-weight-bold">
                              آدرس حمل و نقل
                            </h4>
                            <address className="mb-4">
                              <table className="address-table">
                                <tbody>
                                  <tr>
                                    <td>جعفر خان </td>
                                  </tr>
                                  <tr>
                                    <td>راست چین </td>
                                  </tr>
                                  <tr>
                                    <td>پاناما </td>
                                  </tr>
                                  <tr>
                                    <td>پاناما </td>
                                  </tr>
                                  <tr>
                                    <td>پاناما </td>
                                  </tr>
                                  <tr>
                                    <td>92020</td>
                                  </tr>
                                </tbody>
                              </table>
                            </address>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6"
                    >
                      <i className="w-icon-long-arrow-left"></i>بازگشت به فهرست
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <StickyFooter />
    </div>
  );
};

export default OrderView;
