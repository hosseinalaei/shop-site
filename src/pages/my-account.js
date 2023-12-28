import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const MyAccount = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserInfo(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  console.log("userInfo", userInfo);
  const handleLogout = () => {
    router.push("/login");
    localStorage.removeItem("user");
  };
  const router = useRouter();
  return (
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
              <Link href="demo1.html">خانه </Link>
            </li>
            <li>حساب کاربری</li>
          </ul>
        </div>
      </nav>

      <div className="page-content pt-2">
        <div className="container">
          <Tabs style={{ display: "flex" }}>
            <TabList
              style={{
                display: "flex",
                flexDirection: "column",
                width: "250px",
                marginLeft: "20px",
              }}
            >
              <Tab style={{ fontSize: "20px" }}>داشبورد</Tab>
              <Tab style={{ fontSize: "20px" }}>سفارشات</Tab>
              <Tab style={{ fontSize: "20px" }}>آدرسها</Tab>
              <Tab style={{ fontSize: "20px" }}>جزییات حساب</Tab>
              <Tab style={{ fontSize: "20px" }} onClick={handleLogout}>
                خروج
              </Tab>
            </TabList>

            <TabPanel>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                  <Link href="#" className="link-to-tab">
                    <div
                      className="icon-box text-center"
                      style={{
                        padding: "4rem 2rem",
                        border: "1px solid #eee",
                        borderRadius: "3px",
                        WebkitTransition: "all 0.4s",
                        transition: "all 0.4s",
                      }}
                    >
                      <span className="icon-box-icon icon-orders">
                        <i className="w-icon-orders"></i>
                      </span>
                      <div className="icon-box-content">
                        <p className="text-uppercase mb-0">سفارشات </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                  <Link href="#" className="link-to-tab">
                    <div
                      className="icon-box text-center"
                      style={{
                        padding: "4rem 2rem",
                        border: "1px solid #eee",
                        borderRadius: "3px",
                        WebkitTransition: "all 0.4s",
                        transition: "all 0.4s",
                      }}
                    >
                      <span className="icon-box-icon icon-download">
                        <i className="w-icon-download"></i>
                      </span>
                      <div className="icon-box-content">
                        <p className="text-uppercase mb-0">دانلود ها </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                  <Link href="#" className="link-to-tab">
                    <div
                      className="icon-box text-center"
                      style={{
                        padding: "4rem 2rem",
                        border: "1px solid #eee",
                        borderRadius: "3px",
                        WebkitTransition: "all 0.4s",
                        transition: "all 0.4s",
                      }}
                    >
                      <span className="icon-box-icon icon-address">
                        <i className="w-icon-map-marker"></i>
                      </span>
                      <div className="icon-box-content">
                        <p className="text-uppercase mb-0">آدرس ها </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                  <Link href="#" className="link-to-tab">
                    <div
                      className="icon-box text-center"
                      style={{
                        padding: "4rem 2rem",
                        border: "1px solid #eee",
                        borderRadius: "3px",
                        WebkitTransition: "all 0.4s",
                        transition: "all 0.4s",
                      }}
                    >
                      <span className="icon-box-icon icon-account">
                        <i className="w-icon-user"></i>
                      </span>
                      <div className="icon-box-content">
                        <p className="text-uppercase mb-0">جزئیات حساب </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                  <Link href="#" className="link-to-tab">
                    <div
                      className="icon-box text-center"
                      style={{
                        padding: "4rem 2rem",
                        border: "1px solid #eee",
                        borderRadius: "3px",
                        WebkitTransition: "all 0.4s",
                        transition: "all 0.4s",
                      }}
                    >
                      <span className="icon-box-icon icon-wishlist">
                        <i className="w-icon-heart"></i>
                      </span>
                      <div className="icon-box-content">
                        <p className="text-uppercase mb-0">علاقه مندیها </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                  <Link href="#">
                    <div
                      className="icon-box text-center"
                      style={{
                        padding: "4rem 2rem",
                        border: "1px solid #eee",
                        borderRadius: "3px",
                        WebkitTransition: "all 0.4s",
                        transition: "all 0.4s",
                      }}
                    >
                      <span className="icon-box-icon icon-logout">
                        <i className="w-icon-logout"></i>
                      </span>
                      <div className="icon-box-content">
                        <p className="text-uppercase mb-0">خروج </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h3>سفارشات</h3>
            </TabPanel>
            <TabPanel>
              <h3>آدرسها</h3>
            </TabPanel>
            <TabPanel>
              <h3>جزئیات حساب</h3>
              {userInfo && (
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
                  <form
                    className="form account-details-form"
                    action="#"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="firstname"> نام*</label>
                          <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder={userInfo?.firstName}
                            className="form-control form-control-md"
                            // value={userInfo?.firstName}
                            // onChange={() => console.log("aaa")}
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
                            placeholder={userInfo?.lastName}
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
                        placeholder={
                          userInfo?.firstName + " " + userInfo?.lastName
                        }
                        className="form-control form-control-md mb-0"
                      />
                      <p>
                        به این ترتیب نام شما در بخش حساب و در بررسی ها نمایش
                        داده می شود
                      </p>
                    </div>

                    <div className="form-group mb-6">
                      <label htmlFor="address">آدرس پستی*</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-control form-control-md"
                        value={userInfo?.address}
                      />
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

                    {/* <h4 className="title title-password ls-25 font-weight-bold">
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
                    </div> */}
                    <button
                      type="submit"
                      className="btn btn-dark btn-rounded btn-sm mb-4"
                    >
                      ذخیره تغییرات{" "}
                    </button>
                  </form>
                </div>
              )}
            </TabPanel>
          </Tabs>
          <div className="tab tab-vertical row gutter-lg">
            {/* <ul className="nav nav-tabs mb-6" role="tablist">
              <li className="nav-item">
                <Link href="#account-dashboard" className="nav-link active">
                  داشبرد
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#account-orders" className="nav-link">
                  سفارشات{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#account-downloads" className="nav-link">
                  دانلودها{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#account-addresses" className="nav-link">
                  آدرس ها{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#account-details" className="nav-link">
                  جزئیات حساب{" "}
                </Link>
              </li>
              <li className="link-item">
                <Link href="wishlist.html">علاقه مندیها </Link>
              </li>
              <li className="link-item">
                <Link href="login.html">خروج </Link>
              </li>
            </ul> */}

            {/* <div className="tab-content mb-6">
              <div className="tab-pane active in" id="account-dashboard">
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
                  <Link href="#" className="text-primary">
                    خروج{" "}
                  </Link>
                  )
                </p>

                <p className="mb-4">
                  از داشبورد حساب خود می توانید خود را مشاهده کنید{" "}
                  <Link 
                    href="#account-orders"
                    className="text-primary link-to-tab"
                  >
                    سفارشات اخیر{" "}
                  </Link>
                  , مدیریت شما روی{" "}
                  <Link 
                    href="#account-addresses"
                    className="text-primary link-to-tab"
                  >
                    آدرس حمل و نقلها{" "}
                  </Link>
                  , و
                  <Link 
                    href="#account-details"
                    className="text-primary link-to-tab"
                  >
                    رمز عبور و جزئیات حساب خود را ویرایش کنید.
                  </Link>
                </p>
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
                        <Link 
                          href="#"
                          className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                        >
                          نمایش{" "}
                        </Link>
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
                        <Link 
                          href="#"
                          className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                        >
                          نمایش{" "}
                        </Link>
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
                        <Link 
                          href="#"
                          className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                        >
                          نمایش{" "}
                        </Link>
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
                        <Link 
                          href="#"
                          className="btn btn-outline btn-default btn-block btn-sm btn-rounded"
                        >
                          نمایش{" "}
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <Link 
                  href="shop-banner-sidebar.html"
                  className="btn btn-dark btn-rounded btn-icon-right"
                >
                  برو فروشگاه <i className="w-icon-long-arrow-left"></i>
                </Link>
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
                <Link 
                  href="shop-banner-sidebar.html"
                  className="btn btn-dark btn-rounded btn-icon-right"
                >
                  برو فروشگاه <i className="w-icon-long-arrow-left"></i>
                </Link>
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
                      <Link 
                        href="#"
                        className="btn btn-link btn-underline btn-icon-right text-primary"
                      >
                        آدرس صورتحساب خود را ویرایش کنید
                        <i className="w-icon-long-arrow-left"></i>
                      </Link>
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
                      <Link 
                        href="#"
                        className="btn btn-link btn-underline btn-icon-right text-primary"
                      >
                        آدرس حمل و نقل خود را ویرایش کنید
                        <i className="w-icon-long-arrow-left"></i>
                      </Link>
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
                <form
                  className="form account-details-form"
                  action="#"
                  method="post"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstname"> نام کوچک*</label>
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="جعفر"
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
                          placeholder="عباسی"
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
                      به این ترتیب نام شما در بخش حساب و در بررسی ها نمایش داده
                      می شود
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
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyAccount;
