const { default: Footer } = require("@/components/Footer/Footer");
const { default: StickyFooter } = require("@/components/Footer/StickyFooter");

const OrderView = () => {
  return (
    <div className="my-account">
      <div class="page-wrapper">
        <main class="main">
          <div class="page-header">
            <div class="container">
              <h1 class="page-title mb-0">حساب کاربری</h1>
            </div>
          </div>

          <nav class="breadcrumb-nav">
            <div class="container">
              <ul class="breadcrumb">
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

          <div class="page-content pt-2">
            <div class="container">
              <div class="tab tab-vertical row gutter-lg">
                <ul class="nav nav-tabs mb-6" role="tablist">
                  <li class="nav-item">
                    <a href="#account-dashboard" class="nav-link">
                      داشبرد
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#account-orders" class="nav-link">
                      سفارشات{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#account-downloads" class="nav-link">
                      دانلودها{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#account-addresses" class="nav-link">
                      آدرس ها{" "}
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#account-details" class="nav-link">
                      جزئیات حساب{" "}
                    </a>
                  </li>
                  <li class="link-item">
                    <a href="wishlist.html">علاقه مندیها </a>
                  </li>
                  <li class="link-item">
                    <a href="login.html">خروج </a>
                  </li>
                </ul>

                <div class="tab-content mb-6">
                  <div class="tab-pane" id="account-dashboard">
                    <p class="greeting">
                      سلام
                      <span class="text-dark font-weight-bold">
                        جعفر عباسی{" "}
                      </span>
                      ( شما نیستید آقای
                      <span class="text-dark font-weight-bold">
                        جعفر عباسی{" "}
                      </span>
                      ?
                      <a href="#" class="text-primary">
                        خروج{" "}
                      </a>
                      )
                    </p>

                    <p class="mb-4">
                      از داشبورد حساب خود می توانید خود را مشاهده کنید{" "}
                      <a
                        href="#account-orders"
                        class="text-primary link-to-tab"
                      >
                        سفارشات اخیر{" "}
                      </a>
                      , مدیریت شما روی{" "}
                      <a
                        href="#account-addresses"
                        class="text-primary link-to-tab"
                      >
                        آدرس حمل و نقلها{" "}
                      </a>
                      , و
                      <a
                        href="#account-details"
                        class="text-primary link-to-tab"
                      >
                        رمز عبور و جزئیات حساب خود را ویرایش کنید.
                      </a>
                    </p>

                    <div class="row">
                      <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-orders" class="link-to-tab">
                          <div class="icon-box text-center">
                            <span class="icon-box-icon icon-orders">
                              <i class="w-icon-orders"></i>
                            </span>
                            <div class="icon-box-content">
                              <p class="text-uppercase mb-0">سفارشات </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-downloads" class="link-to-tab">
                          <div class="icon-box text-center">
                            <span class="icon-box-icon icon-download">
                              <i class="w-icon-download"></i>
                            </span>
                            <div class="icon-box-content">
                              <p class="text-uppercase mb-0">دانلود ها </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-addresses" class="link-to-tab">
                          <div class="icon-box text-center">
                            <span class="icon-box-icon icon-address">
                              <i class="w-icon-map-marker"></i>
                            </span>
                            <div class="icon-box-content">
                              <p class="text-uppercase mb-0">آدرس ها </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#account-details" class="link-to-tab">
                          <div class="icon-box text-center">
                            <span class="icon-box-icon icon-account">
                              <i class="w-icon-user"></i>
                            </span>
                            <div class="icon-box-content">
                              <p class="text-uppercase mb-0">جزئیات حساب </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="wishlist.html" class="link-to-tab">
                          <div class="icon-box text-center">
                            <span class="icon-box-icon icon-wishlist">
                              <i class="w-icon-heart"></i>
                            </span>
                            <div class="icon-box-content">
                              <p class="text-uppercase mb-0">علاقه مندیها </p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                        <a href="#">
                          <div class="icon-box text-center">
                            <span class="icon-box-icon icon-logout">
                              <i class="w-icon-logout"></i>
                            </span>
                            <div class="icon-box-content">
                              <p class="text-uppercase mb-0">خروج </p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane mb-4" id="account-orders">
                    <div class="icon-box icon-box-side icon-box-light">
                      <span class="icon-box-icon icon-orders">
                        <i class="w-icon-orders"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title text-capitalize ls-normal mb-0">
                          سفارشات{" "}
                        </h4>
                      </div>
                    </div>

                    <table class="shop-table account-orders-table mb-6">
                      <thead>
                        <tr>
                          <th class="order-id">سفارش </th>
                          <th class="order-date">تاریخ </th>
                          <th class="order-status">وضعیت </th>
                          <th class="order-total">مجموع </th>
                          <th class="order-actions">اقدامات </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="order-id">#2321</td>
                          <td class="order-date">خرداد 5</td>
                          <td class="order-status">در حال پردازش </td>
                          <td class="order-total">
                            <span class="order-price">780000 تومان</span> برای
                            <span class="order-quantity"> 1</span> آیتم
                          </td>
                          <td class="order-action">
                            <a
                              href="#"
                              class="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                            >
                              نمایش{" "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="order-id">#2321</td>
                          <td class="order-date">خرداد 5</td>
                          <td class="order-status">در حال پردازش </td>
                          <td class="order-total">
                            <span class="order-price">15000 تومان</span> برای
                            <span class="order-quantity"> 1</span> آیتم
                          </td>
                          <td class="order-action">
                            <a
                              href="#"
                              class="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                            >
                              نمایش{" "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="order-id">#2319</td>
                          <td class="order-date">خرداد 5</td>
                          <td class="order-status">در حال پردازش </td>
                          <td class="order-total">
                            <span class="order-price">450000 تومان</span> برای
                            <span class="order-quantity"> 1</span> آیتم
                          </td>
                          <td class="order-action">
                            <a
                              href="#"
                              class="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                            >
                              نمایش{" "}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="order-id">#2318</td>
                          <td class="order-date">خرداد 5</td>
                          <td class="order-status">در حال پردازش </td>
                          <td class="order-total">
                            <span class="order-price">720000 تومان</span> برای
                            <span class="order-quantity"> 1</span> آیتم
                          </td>
                          <td class="order-action">
                            <a
                              href="#"
                              class="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                            >
                              نمایش{" "}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <a
                      href="shop-banner-sidebar.html"
                      class="btn btn-dark btn-rounded btn-icon-right"
                    >
                      برو فروشگاه <i class="w-icon-long-arrow-left"></i>
                    </a>
                  </div>

                  <div class="tab-pane" id="account-downloads">
                    <div class="icon-box icon-box-side icon-box-light">
                      <span class="icon-box-icon icon-downloads mr-2">
                        <i class="w-icon-download"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title ls-normal">دانلود ها </h4>
                      </div>
                    </div>
                    <p class="mb-4">هنوز دانلودی در دسترس نیست.</p>
                    <a
                      href="shop-banner-sidebar.html"
                      class="btn btn-dark btn-rounded btn-icon-right"
                    >
                      برو فروشگاه <i class="w-icon-long-arrow-left"></i>
                    </a>
                  </div>

                  <div class="tab-pane" id="account-addresses">
                    <div class="icon-box icon-box-side icon-box-light">
                      <span class="icon-box-icon icon-map-marker">
                        <i class="w-icon-map-marker"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title mb-0 ls-normal">آدرس ها </h4>
                      </div>
                    </div>
                    <p>
                      آدرس های زیر به طور پیش فرض در صفحه پرداخت استفاده می شود.
                    </p>
                    <div class="row">
                      <div class="col-sm-6 mb-6">
                        <div class="ecommerce-address billing-address pr-lg-8">
                          <h4 class="title title-underline ls-25 font-weight-bold">
                            آدرس قبض{" "}
                          </h4>
                          <address class="mb-4">
                            <table class="address-table">
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
                            class="btn btn-link btn-underline btn-icon-right text-primary"
                          >
                            آدرس صورتحساب خود را ویرایش کنید
                            <i class="w-icon-long-arrow-left"></i>
                          </a>
                        </div>
                      </div>
                      <div class="col-sm-6 mb-6">
                        <div class="ecommerce-address shipping-address pr-lg-8">
                          <h4 class="title title-underline ls-25 font-weight-bold">
                            آدرس حمل و نقل
                          </h4>
                          <address class="mb-4">
                            <table class="address-table">
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
                            class="btn btn-link btn-underline btn-icon-right text-primary"
                          >
                            آدرس حمل و نقل خود را ویرایش کنید
                            <i class="w-icon-long-arrow-left"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="tab-pane" id="account-details">
                    <div class="icon-box icon-box-side icon-box-light">
                      <span class="icon-box-icon icon-account mr-2">
                        <i class="w-icon-user"></i>
                      </span>
                      <div class="icon-box-content">
                        <h4 class="icon-box-title mb-0 ls-normal">
                          جزئیات حساب{" "}
                        </h4>
                      </div>
                    </div>
                    <form class="form account-details-form">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label htmlFor="firstname"> نام کوچک*</label>
                            <input
                              type="text"
                              id="firstname"
                              name="firstname"
                              placeholder="John"
                              class="form-control form-control-md"
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label htmlFor="lastname"> نام خانوادگی *</label>
                            <input
                              type="text"
                              id="lastname"
                              name="lastname"
                              placeholder="Doe"
                              class="form-control form-control-md"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-group mb-3">
                        <label htmlFor="display-name">نام نمایشی *</label>
                        <input
                          type="text"
                          id="display-name"
                          name="display_name"
                          placeholder="جعفر خان"
                          class="form-control form-control-md mb-0"
                        />
                        <p>
                          به این ترتیب نام شما در بخش حساب و در بررسی ها نمایش
                          داده می شود
                        </p>
                      </div>

                      <div class="form-group mb-6">
                        <label htmlFor="email_1">آدرس ایمیل*</label>
                        <input
                          type="email"
                          id="email_1"
                          name="email_1"
                          class="form-control form-control-md"
                        />
                      </div>

                      <h4 class="title title-password ls-25 font-weight-bold">
                        تغییر رمز{" "}
                      </h4>
                      <div class="form-group">
                        <label class="text-dark" htmlFor="cur-password">
                          رمز عبور فعلی را خالی بگذارید تا بدون تغییر باقی بماند
                        </label>
                        <input
                          type="password"
                          class="form-control form-control-md"
                          id="cur-password"
                          name="cur_password"
                        />
                      </div>
                      <div class="form-group">
                        <label class="text-dark" htmlFor="new-password">
                          رمز عبور جدید را خالی بگذارید تا بدون تغییر باقی بماند
                        </label>
                        <input
                          type="password"
                          class="form-control form-control-md"
                          id="new-password"
                          name="new_password"
                        />
                      </div>
                      <div class="form-group mb-10">
                        <label class="text-dark" htmlFor="conf-password">
                          تایید رمز عبور{" "}
                        </label>
                        <input
                          type="password"
                          class="form-control form-control-md"
                          id="conf-password"
                          name="conf_password"
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-dark btn-rounded btn-sm mb-4"
                      >
                        ذخیره تغییرات{" "}
                      </button>
                    </form>
                  </div>

                  <div class="tab-pane active order">
                    <p class="mb-7">
                      سفارش #962 در تاریخ 1 خرداد ثبت شد و در حال حاضر در حالت
                      انتظار می باشد.
                    </p>
                    <div class="order-details-wrapper mb-5">
                      <h4 class="title text-uppercase ls-25 mb-5">
                        جزئیات سفارش{" "}
                      </h4>
                      <table class="order-table">
                        <thead>
                          <tr>
                            <th class="text-dark">محصول </th>
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
                          <tr class="total">
                            <th class="border-no">مجموع:</th>
                            <td class="border-no">100000 تومان</td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    <div class="sub-orders mb-10">
                      <h4 class="title mb-5 font-weight-bold ls-25">
                        زیر سفارش ها{" "}
                      </h4>
                      <div class="alert alert-icon alert-inline mb-5">
                        <i class="w-icon-exclamation-triangle"></i>
                        <strong>یادداشت: </strong>این سفارش دارای محصولاتی از
                        چندین فروشنده است. بنابراین ما این سفارش را به چند سفارش
                        فروشنده تقسیم کردیم. هر سفارش به طور مستقل توسط فروشنده
                        مربوطه انجام می شود.
                      </div>
                      <table class="order-subtable">
                        <thead>
                          <tr>
                            <th class="order">سفارش </th>
                            <th class="date">تاریخ </th>
                            <th class="status">وضعیت </th>
                            <th class="total">مجموع </th>
                            <th class="action"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="order">950</td>
                            <td class="date">خرداد 5</td>
                            <td class="status">در انتظار </td>
                            <td class="total">80000 تومان برای 1 آیتم</td>
                            <td class="action">
                              <a href="order-view.html" class="btn btn-rounded">
                                نمایش{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td class="order">951</td>
                            <td class="date">خرداد 5</td>
                            <td class="status">در انتظار </td>
                            <td class="total">50000 تومان برای 1 آیتم</td>
                            <td class="action">
                              <a href="order-view.html" class="btn btn-rounded">
                                نمایش{" "}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div id="billing-account-addresses">
                      <div class="row">
                        <div class="col-sm-6 mb-8">
                          <div class="ecommerce-address billing-address">
                            <h4 class="title title-underline ls-25 font-weight-bold">
                              آدرس قبض{" "}
                            </h4>
                            <address class="mb-4">
                              <table class="address-table">
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
                                  <tr class="email">
                                    <td>nicework125@gmail.com</td>
                                  </tr>
                                </tbody>
                              </table>
                            </address>
                          </div>
                        </div>
                        <div class="col-sm-6 mb-8">
                          <div class="ecommerce-address shipping-address">
                            <h4 class="title title-underline ls-25 font-weight-bold">
                              آدرس حمل و نقل
                            </h4>
                            <address class="mb-4">
                              <table class="address-table">
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
                      class="btn btn-dark btn-rounded btn-icon-left btn-back mt-6 mb-6"
                    >
                      <i class="w-icon-long-arrow-left"></i>بازگشت به فهرست
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
