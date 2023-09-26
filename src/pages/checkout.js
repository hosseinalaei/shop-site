import Footer from "@/components/Footer/Footer";
import StickyFooter from "@/components/Footer/StickyFooter";
import MobileMenu from "@/components/Menu/MobileMenu";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useCartContext } from "@/contexts/contex";

const Checkout = () => {
  const { cart } = useCartContext();
  const [nationalCode, setNationalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [estelam, setEstelam] = useState("");
  const router = useRouter();
  const data = router.query;

  const getEstelam = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Inquiry/Inquiry",
        {
          id: "5cd472c4-1584-45ac-8906-89655742a005",
          isDelete: false,
          createDate: "2023-09-05T13:03:42.869Z",
          lastUpdateDate: "2023-09-05T13:03:42.869Z",
          phoneNumber: phoneNumber,
          nationalId: nationalCode,
        }
      );
      if (response.status === 200) {
        setEstelam(response.data.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const estelamFunc = () => {
    setShowModal(true);
    getEstelam();
  };

  const payment = async () => {
    const body = {
      amount: 1000,
      description: "test",
      userId: "5cd472c4-1584-45ac-8906-89655742a005",
    };
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/payment/pay-order",
        body
      );
      if (response.status === 200) {
        console.log(response.data.data.redirectUrl);
        router.push(response.data.data.redirectUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="page-wrapper">
        <h1 class="d-none">قالب فروشگاهی چند فروشندگی وولمارت</h1>

        <main class="main checkout">
          <nav class="breadcrumb-nav">
            <div class="container">
              <ul class="breadcrumb shop-breadcrumb bb-no">
                <li class="passed">
                  <a href="cart.html">فروشگاه پینگ سبد خرید </a>
                </li>
                <li class="active">
                  <a href="checkout.html">پرداخت </a>
                </li>
                <li>
                  <a href="order.html">سفارش کامل شد</a>
                </li>
              </ul>
            </div>
          </nav>

          <div class="page-content">
            <div class="container">
              {/* <div class="login-toggle">
                مشتری بازگشتی؟{" "}
                <a
                  href="#"
                  class="show-login font-weight-bold text-uppercase text-dark"
                >
                  ورود{" "}
                </a>
              </div>
              <form class="login-content">
                <p>
                  اگر قبلا از ما خرید کرده اید، لطفا مشخصات خود را در زیر وارد
                  کنید. اگر مشتری جدید هستید، لطفاً به بخش صورت‌حساب بروید.
                </p>
                <div class="row">
                  <div class="col-xs-6">
                    <div class="form-group">
                      <label>ایمیل یا نام کاربری *</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        name="name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-xs-6">
                    <div class="form-group">
                      <label>رمز عبور *</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        name="password"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div class="form-group checkbox">
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    id="remember"
                    name="remember"
                  />
                  <label for="remember" class="mb-0 lh-2">
                    مرا به خاطر بسپار{" "}
                  </label>
                  <a href="#" class="ml-3">
                    فراموشی رمز عبور؟
                  </a>
                </div>
                <button class="btn btn-rounded btn-login">ورود </button>
              </form>
              <div class="coupon-toggle">
                کد تخفیف دارید؟{" "}
                <a
                  href="#"
                  class="show-coupon font-weight-bold text-uppercase text-dark"
                >
                  کد را وارد کنید{" "}
                </a>
              </div>
              <div class="coupon-content mb-4">
                <p>اگر کد کوپن دارید، لطفاً آن را در زیر اعمال کنید.</p>
                <div class="input-wrapper-inline">
                  <input
                    type="text"
                    name="coupon_code"
                    class="form-control form-control-md mr-1 mb-2"
                    placeholder="کد تخفیف"
                    id="coupon_code"
                  />
                  <button
                    type="submit"
                    class="btn button btn-rounded btn-coupon mb-2"
                    name="apply_coupon"
                    value="اعمال کد"
                  >
                    اعمال کد
                  </button>
                </div>
              </div> */}
              <div>
                <div class="row mb-9">
                  <div class="col-lg-7 pr-lg-4 mb-4">
                    <h3 class="title billing-title text-uppercase ls-10 pt-1 pb-3 mb-0">
                      جزئیات صورتحساب
                    </h3>
                    <div class="row gutter-sm">
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label>نام کوچک *</label>
                          <input
                            type="text"
                            class="form-control form-control-md"
                            name="firstname"
                          />
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label> نام خانوادگی *</label>
                          <input
                            type="text"
                            class="form-control form-control-md"
                            name="lastname"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row gutter-sm">
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label>شماره تلفن *</label>
                          <input
                            type="text"
                            class="form-control form-control-md"
                            name="firstname"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <div class="form-group">
                          <label> کد ملی *</label>
                          <input
                            type="text"
                            class="form-control form-control-md"
                            name="lastname"
                            onChange={(e) => setNationalCode(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div class="form-group">
                      <label>نام شرکت (اختیاری)</label>
                      <input
                        type="text"
                        class="form-control form-control-md"
                        name="company-name"
                      />
                    </div> */}
                    {/* <div class="form-group">
                      <label>کشور / منطقه *</label>
                      <div class="select-box">
                        <select
                          name="country"
                          class="form-control form-control-md"
                        >
                          <option value="default" selected="selected">
                            ایالات متحده آمریکا (ایالات متحده آمریکا)
                          </option>
                          <option value="uk">بریتانیا (بریتانیا)</option>
                          <option value="us">ایالات متحده</option>
                          <option value="fr">فرانسه </option>
                          <option value="aus">استرالیا </option>
                        </select>
                      </div>
                    </div> */}
                    {/* <div class="form-group">
                      <label>آدرس خیابان *</label>
                      <input
                        type="text"
                        placeholder="شماره خانه و نام خیابان"
                        class="form-control form-control-md mb-2"
                        name="street-address-1"
                        required
                      />
                      <input
                        type="text"
                        placeholder="آپارتمان، سوئیت، واحد و غیره (اختیاری)"
                        class="form-control form-control-md"
                        name="street-address-2"
                        required
                      />
                    </div> */}
                    {/* <div class="row gutter-sm">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label>خانه / شهر *</label>
                          <input
                            type="text"
                            class="form-control form-control-md"
                            name="town"
                            required
                          />
                        </div>
                        <div class="form-group">
                          <label> کد پستی *</label>
                          <input
                            type="text"
                            class="form-control form-control-md"
                            name="zip"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label> دولت *</label>
                          <div class="select-box">
                            <select
                              name="country"
                              class="form-control form-control-md"
                            >
                              <option value="default" selected="selected">
                                کالیفرنیا{" "}
                              </option>
                              <option value="uk">بریتانیا (بریتانیا)</option>
                              <option value="us">ایالات متحده</option>
                              <option value="fr">فرانسه </option>
                              <option value="aus">استرالیا </option>
                            </select>
                          </div>
                        </div>
                        <div class="form-group">
                          <label> تلفن *</label>
                          <input
                            type="text"
                            class="form-control form-control-md"
                            name="phone"
                            required
                          />
                        </div>
                      </div>
                    </div> */}
                    <div class="form-group mb-7">
                      <label>آدرس ایمیل *</label>
                      <input
                        type="email"
                        class="form-control form-control-md"
                        name="email"
                      />
                    </div>
                    {/* <div class="form-group checkbox-toggle pb-2">
                      <input
                        type="checkbox"
                        class="custom-checkbox"
                        id="shipping-toggle"
                        name="shipping-toggle"
                      />
                      <label for="shipping-toggle">
                        به آدرس دیگری ارسال شود؟
                      </label>
                    </div> */}
                    {/* <div class="checkbox-content">
                      <div class="row gutter-sm">
                        <div class="col-xs-6">
                          <div class="form-group">
                            <label>نام کوچک *</label>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              name="firstname"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-xs-6">
                          <div class="form-group">
                            <label> نام خانوادگی *</label>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              name="lastname"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>نام شرکت (اختیاری)</label>
                        <input
                          type="text"
                          class="form-control form-control-md"
                          name="company-name"
                        />
                      </div>
                      <div class="form-group">
                        <label>کشور / منطقه *</label>
                        <div class="select-box">
                          <select
                            name="country"
                            class="form-control form-control-md"
                          >
                            <option value="default" selected="selected">
                              ایالات متحده (US)
                            </option>
                            <option value="uk">بریتانیا (بریتانیا)</option>
                            <option value="us">ایالات متحده</option>
                            <option value="fr">فرانسه </option>
                            <option value="aus">استرالیا </option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>آدرس خیابان *</label>
                        <input
                          type="text"
                          placeholder="شماره خانه و نام خیابان"
                          class="form-control form-control-md mb-2"
                          name="street-address-1"
                          required
                        />
                        <input
                          type="text"
                          placeholder="آپارتمان، سوئیت، واحد و غیره (اختیاری)"
                          class="form-control form-control-md"
                          name="street-address-2"
                          required
                        />
                      </div>
                      <div class="row gutter-sm">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>خانه / شهر *</label>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              name="town"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label>کد پستی *</label>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              name="postcode"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>کشور (اختیاری)</label>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              name="zip"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}

                    <div class="form-group mt-3">
                      <label for="order-notes">
                        یادداشت های سفارش (اختیاری)
                      </label>
                      <textarea
                        class="form-control mb-0"
                        id="order-notes"
                        name="order-notes"
                        cols="30"
                        rows="4"
                        placeholder="یادداشتی بنویسید شاید لازم شد."
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-lg-5 mb-4 sticky-sidebar-wrapper">
                    <div class="order-summary-wrapper sticky-sidebar">
                      <h3 class="title text-uppercase ls-10">سفارش شما</h3>
                      <div class="order-summary">
                        <table class="order-table">
                          <thead>
                            <tr>
                              <th colspan="2">
                                <b>محصول</b>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {cart?.map( item =>(
                              <tr class="bb-no">
                              <td class="product-name">
                                {item.title}<i class="fas fa-times"></i>{" "}
                                <span class="product-quantity">1</span>
                              </td>
                              <td class="product-total">{item.productPrice}</td>
                            </tr>
                            ))}
                            {/* <tr class="bb-no">
                              <td class="product-name">
                                گلکسی s21 <i class="fas fa-times"></i>{" "}
                                <span class="product-quantity">1</span>
                              </td>
                              <td class="product-total">25000000 تومان </td>
                            </tr>
                            <tr class="bb-no">
                              <td class="product-name">
                                ایفون ۱۳ پرو<i class="fas fa-times"></i>
                                <span class="product-quantity">1</span>
                              </td>
                              <td class="product-total">50000000 تومان</td>
                            </tr> */}
                            <tr class="cart-subtotal bb-no">
                              <td>
                                <b>مجموع</b>
                              </td>
                              <td>
                                <b>{data?.totalPrice} تومان</b>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr class="shipping-methods">
                              <td colspan="2" class="text-left">
                                <h4 class="title title-simple bb-no mb-1 pb-0 pt-3">
                                  حمل و نقل
                                </h4>
                                <ul id="shipping-method" class="mb-4">
                                  <li>
                                    <div class="custom-radio">
                                      <input
                                        type="radio"
                                        id="free-shipping"
                                        class="custom-control-input"
                                        name="shipping"
                                      />
                                      <label
                                        for="free-shipping"
                                        class="custom-control-label color-dark"
                                      >
                                        ارسال رایگان
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="custom-radio">
                                      <input
                                        type="radio"
                                        id="local-pickup"
                                        class="custom-control-input"
                                        name="shipping"
                                      />
                                      <label
                                        for="local-pickup"
                                        class="custom-control-label color-dark"
                                      >
                                        وانت محلی
                                      </label>
                                    </div>
                                  </li>
                                  <li>
                                    <div class="custom-radio">
                                      <input
                                        type="radio"
                                        id="flat-rate"
                                        class="custom-control-input"
                                        name="shipping"
                                      />
                                      <label
                                        for="flat-rate"
                                        class="custom-control-label color-dark"
                                      >
                                        نرخ ثابت: 78000 تومان
                                      </label>
                                    </div>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr class="order-total">
                              <th>
                                <b>جمع کل</b>
                              </th>
                              <td>
                                <b>100000 تومان</b>
                              </td>
                            </tr>
                          </tfoot>
                        </table>

                        {/* <div class="payment-methods" id="payment_method">
                          <h4 class="title font-weight-bold ls-25 pb-0 mb-1">
                            روش های پرداخت{" "}
                          </h4>
                          <div class="accordion payment-accordion">
                            <div class="card">
                              <div class="card-header">
                                <a href="#cash-on-delivery" class="collapse">
                                  انتقال مستقیم بانکی
                                </a>
                              </div>
                              <div
                                id="cash-on-delivery"
                                class="card-body expanded"
                              >
                                <p class="mb-0">
                                  پرداخت خود را مستقیماً به حساب بانکی ما انجام
                                  دهید. لطفا از شناسه سفارش خود به عنوان مرجع
                                  پرداخت استفاده کنید. سفارش شما تا زمانی که
                                  وجوه در حساب ما تسویه نشده باشد ارسال نخواهد
                                  شد.
                                </p>
                              </div>
                            </div>
                            <div class="card">
                              <div class="card-header">
                                <a href="#payment" class="expand">
                                  پرداخت ها را چک کنید{" "}
                                </a>
                              </div>
                              <div id="payment" class="card-body collapsed">
                                <p class="mb-0">
                                  لطفا یک چک به نام فروشگاه، خیابان فروشگاه،
                                  شهرک فروشگاه، ایالت/شهرستان فروشگاه، کدپستی
                                  فروشگاه ارسال کنید.
                                </p>
                              </div>
                            </div>
                            <div class="card">
                              <div class="card-header">
                                <a href="#delivery" class="expand">
                                  پرداخت نقدی هنگام تحویل
                                </a>
                              </div>
                              <div id="delivery" class="card-body collapsed">
                                <p class="mb-0">پرداخت نقدی هنگام تحویل.</p>
                              </div>
                            </div>
                            <div class="card p-relative">
                              <div class="card-header">
                                <a href="#paypal" class="expand">
                                  پی پال{" "}
                                </a>
                              </div>
                              <a
                                href="https://www.paypal.com/us/webapps/mpp/paypal-popup"
                                class="text-primary paypal-que"
                                onclick="javascript:window.open('https://www.paypal.com/us/webapps/mpp/paypal-popup','WIPaypal',
                                                        'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); 
                                                        return false;"
                              >
                                پی پال چیست؟
                              </a>
                              <div id="paypal" class="card-body collapsed">
                                <p class="mb-0">
                                  پرداخت از طریق پی پال، اگر حساب پی پال ندارید،
                                  می توانید با کارت اعتباری خود پرداخت کنید.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        <div class="form-group place-order pt-6">
                          <button
                            type="submit"
                            class="btn btn-dark btn-block btn-rounded"
                            onClick={estelamFunc}
                          >
                            سفارش
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showModal && (
            <Modal show={showModal} modalClosed={() => setShowModal(false)}>
              <div style={{ textAlign: "center" }}>
                <h2>:وضعیت استعلام</h2>
                <h4>{estelam}</h4>
                {estelam && (
                  <button
                    class="btn btn-primary btn-block btn-rounded"
                    onClick={payment}
                  >
                    پرداخت
                  </button>
                )}
              </div>
            </Modal>
          )}
        </main>

        <Footer />
      </div>

      <StickyFooter />
      <a
        id="scroll-top"
        className="scroll-top"
        href="#top"
        title="بالا"
        role="button"
      >
        {" "}
        <i className="w-icon-angle-up"></i>{" "}
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
        >
          {" "}
          <circle
            id="progress-indicator"
            fill="transparent"
            stroke="#000000"
            strokeMiterlimit="10"
            cx="35"
            cy="35"
            r="34"
            style={{ "stroke-dasharray": "16.4198, 400" }}
          ></circle>{" "}
        </svg>{" "}
      </a>

      <MobileMenu />
    </>
  );
};

export default Checkout;
