"use client";
import { useEffect, useState } from "react";
import { useCartContext } from "@/contexts/contex";
import axios from "axios";
import Link from "next/link";
import ProductImage from "@/components/Product/ProductImage";
import PageLoader from "@/components/PageLoader/PageLoader";
// import useAxios from "@/hooks/useAxios";

const Cart = () => {
  const [data, setData] = useState([]);
  // const [order, setOrder] = useState("");
  const [user, setUser] = useState("");
  const [media, setMedia] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // const userOrder = JSON.parse(localStorage.getItem("order"));
    const userName = JSON.parse(localStorage.getItem("user"));
    setUser(userName);
  }, []);

  const {
    cart,
    clearCart,
    remove,
    changeQuantity,
    totalPrice,
    addToCart,
    deduction,
    cartUpdate,
  } = useCartContext();

  console.log("cart", cart);
  // const httpRequest = useAxios()

  // httpRequest({
  //   method: 'GET',
  //   url: `/Order/get-order-details/${order.id}?userId=${user.userId}`
  // })
  const getOrderDetail = async () => {
    // const order = JSON.parse(localStorage.getItem("order"));
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Order/get-order",
        { id: user.userId },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.status === 200 && response.data.status) {
        response.data.data !== {} ? setData(response.data.data) : setData([]);
        response.data.data !== {}
          ? cartUpdate(response.data.data.orderDetails)
          : cartUpdate([]);
        setIsLoading(false);

        // setTotalPrice(total)
      } else {
        setData([]);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("eror cart", error);
    }
  };
  const getMedia = async (id) => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/media/getmedia",
        [
          {
            id: id,
            mediaFieldName: "productImageName",
          },
        ]
      );
      setMedia(response.data.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    user && getOrderDetail();
    // getTotalPrice();
  }, []);

  // const getTotalPrice = () =>{
  //   let total = 0
  //   data.orderDetails.map(item =>{
  //     total+= (item.productPrice*item.count)
  //   })
  //   setTotalPrice(total)
  // }

  // console.log(cart);

  let renderedContent = (
    <>
      <h5>هیچ آیتمی در سبد خرید وجود ندارد</h5>
    </>
  );
  if (data.length && data.orderDetails.length > 0) {
    renderedContent = (
      <>
        {/* <div className="col-lg-8 col-md-7 pt-sm-2">
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <div className="col-lg-4 col-md-5 pt-3 pt-sm-4 border-end">
            <div className="text-center mb-4 pb-3 border-bottom">
              <h3 className="h5 mb-3 pb-1">جمع کل</h3>
              <h4 className="fw-normal">{total.toLocaleString()} تومان</h4>
            </div>
            <Link 
              onClick={clearCart}
              className="btn btn-primary btn-shadow d-block w-100 mt-4"
            >
              حذف همه آیتم ها
            </Link>
          </div> */}

        <div className="col-lg-8 pr-lg-4 mb-6">
          <table className="shop-table cart-table">
            <thead>
              <tr>
                <th className="product-name">
                  <span>محصول </span>
                </th>
                <th></th>
                <th className="product-price">
                  <span>قیمت </span>
                </th>
                {/* <th className="product-quantity">
                  <span>تعداد </span>
                </th> */}
                <th className="product-subtotal">
                  <span>جمع فرعی </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* {cart.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="product-thumbnail">
                      <div className="p-relative">
                        <Link href="product-default.html">
                          <figure>
                            <img
                              src={item.img}
                              alt="product"
                              width="300"
                              height="338"
                            />
                          </figure>
                        </Link>
                        <button
                          type="submit"
                          className="btn btn-close"
                          onClick={() => remove(item.id)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    </td>
                    <td className="product-name">
                      <Link href="product-default.html">{item.title}</Link>
                    </td>
                    <td className="product-price">
                      <span className="amount">{item.price} تومان </span>
                    </td>
                    <td className="product-quantity">
                      <div className="input-group">
                        <input
                          value={item.quantity}
                          className="quantity form-control"
                          type="number"
                          min="1"
                          max="100000"
                          onChange={(e) =>
                            changeQuantity({
                              id: item.id,
                              quantity: +e.target.value,
                            })
                          }
                        />
                        <button
                          className="quantity-plus w-icon-plus"
                          onClick={() => {
                            addToCart(item);
                          }}
                        ></button>
                        <button
                          className="quantity-minus w-icon-minus"
                          onClick={() => {
                            deduction(item);
                          }}
                        ></button>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">{item.price} تومان </span>
                    </td>
                  </tr>
                );
              })} */}
              {cart?.orderDetails?.map((item) => {
                getMedia(item.productId);
                return (
                  <tr key={item.productId}>
                    <td className="product-thumbnail">
                      <div className="p-relative">
                        <span>
                          <figure>
                            <ProductImage src={media} />
                          </figure>
                        </span>
                        <button
                          // type="submit"
                          className="btn btn-close"
                          onClick={(e) => {
                            e.preventDefault();
                            console.log("remove");
                          }}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    </td>
                    <td className="product-name">
                      <span>{item.title}</span>
                    </td>
                    <td className="product-price">
                      <span className="amount">{item.productPrice} تومان </span>
                    </td>
                    {/* <td className="product-quantity">
                      <div className="input-group">
                        <input
                          value={item.count}
                          className="quantity form-control"
                          type="number"
                          min="1"
                          max="100000"
                          // onChange={(e) =>
                          //   changeQuantity({
                          //     id: item.id,
                          //     quantity: +e.target.value,
                          //   })
                          // }
                        />
                        <button
                          className="quantity-plus w-icon-plus"
                          onClick={() => {
                            addToCart(item);
                            // setTotalPrice( prevState => prevState - item.productPrice)
                          }}
                        ></button>
                        <button
                          className="quantity-minus w-icon-minus"
                          onClick={() => {
                            deduction(item);
                          }}
                        ></button>
                      </div>
                    </td> */}
                    <td className="product-subtotal">
                      <span className="amount">{item.productPrice} تومان </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="cart-action mb-6">
            <Link
              href="#"
              className="btn btn-primary btn-rounded btn-icon-left btn-shopping mr-auto"
            >
              <i className="w-icon-long-arrow-left"></i>ادامه خرید کردن{" "}
            </Link>
            <button
              // onClick={clearCart}
              type="submit"
              className="btn btn-rounded btn-default btn-clear"
              name="clear_cart"
              value="پاک کردن سبد "
            >
              پاک کردن سبد{" "}
            </button>
            <button
              type="submit"
              className="btn btn-rounded btn-update disabled"
              name="update_cart"
              value="بروز کردن سبد"
            >
              بروز کردن سبد
            </button>
          </div>

          {/* <form className="coupon">
                <h5 className="title coupon-title font-weight-bold text-uppercase">
                  جشنواره کوپن با{" "}
                </h5>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="کد تخفیف را وارد کنید..."
                  required
                />
                <button className="btn btn-dark btn-outline btn-rounded">
                  اعمال کد
                </button>
              </form> */}
        </div>
      </>
    );
  }
  return isLoading ? (
    <PageLoader />
  ) : (
    <main className="main cart">
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb shop-breadcrumb bb-no">
            <li className="active">
              <Link href="/cart">سبد خرید </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: "/checkout",
                  query: data,
                }}
              >
                پرداخت
              </Link>
            </li>
            <li>
              <Link href="#">سفارش کامل شد</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="page-content">
        <div className="container">
          <div className="row gutter-lg mb-10">
            {/* {renderedContent} */}

            {/* <div className="col-lg-8 col-md-7 pt-sm-2">
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <div className="col-lg-4 col-md-5 pt-3 pt-sm-4 border-end">
            <div className="text-center mb-4 pb-3 border-bottom">
              <h3 className="h5 mb-3 pb-1">جمع کل</h3>
              <h4 className="fw-normal">{total.toLocaleString()} تومان</h4>
            </div>
            <Link 
              onClick={clearCart}
              className="btn btn-primary btn-shadow d-block w-100 mt-4"
            >
              حذف همه آیتم ها
            </Link>
          </div> */}

            <div className="col-lg-8 pr-lg-4 mb-6">
              <table className="shop-table cart-table">
                <thead>
                  <tr>
                    <th className="product-name">
                      <span>محصول </span>
                    </th>
                    <th></th>
                    <th className="product-price">
                      <span>قیمت </span>
                    </th>
                    {/* <th className="product-quantity">
                      <span>تعداد </span>
                    </th> */}
                    <th className="product-subtotal">
                      <span>جمع فرعی </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {cart.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="product-thumbnail">
                      <div className="p-relative">
                        <Link href="product-default.html">
                          <figure>
                            <img
                              src={item.img}
                              alt="product"
                              width="300"
                              height="338"
                            />
                          </figure>
                        </Link>
                        <button
                          type="submit"
                          className="btn btn-close"
                          onClick={() => remove(item.id)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    </td>
                    <td className="product-name">
                      <Link href="product-default.html">{item.title}</Link>
                    </td>
                    <td className="product-price">
                      <span className="amount">{item.price} تومان </span>
                    </td>
                    <td className="product-quantity">
                      <div className="input-group">
                        <input
                          value={item.quantity}
                          className="quantity form-control"
                          type="number"
                          min="1"
                          max="100000"
                          onChange={(e) =>
                            changeQuantity({
                              id: item.id,
                              quantity: +e.target.value,
                            })
                          }
                        />
                        <button
                          className="quantity-plus w-icon-plus"
                          onClick={() => {
                            addToCart(item);
                          }}
                        ></button>
                        <button
                          className="quantity-minus w-icon-minus"
                          onClick={() => {
                            deduction(item);
                          }}
                        ></button>
                      </div>
                    </td>
                    <td className="product-subtotal">
                      <span className="amount">{item.price} تومان </span>
                    </td>
                  </tr>
                );
              })} */}
                  {cart?.map((item) => {
                    // getMedia(item.productId);
                    return (
                      <tr key={item.productId}>
                        <td className="product-thumbnail">
                          <div className="p-relative">
                            <Link href={`/product/${item.productId}`}>
                              <figure>
                                <ProductImage src={item.productId} />
                              </figure>
                            </Link>
                            <button
                              type="submit"
                              className="btn btn-close"
                              onClick={() => remove(item.productId)}
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        </td>
                        <td
                          className="product-name"
                          // style={{ wordWrap: "break-word" }}
                        >
                          <span>{item.title}</span>
                        </td>
                        <td className="product-price">
                          <span className="amount pl-2">
                            {item.productPrice} تومان{" "}
                          </span>
                        </td>
                        {/* <td className="product-quantity">
                          <div className="input-group">
                            <input
                              value={item.count}
                              className="quantity form-control"
                              type="number"
                              min="1"
                              max="100000"
                              onChange={(e) =>
                                changeQuantity({
                                  id: item.productId,
                                  quantity: +e.target.value,
                                })
                              }
                            />
                            <button
                              className="quantity-plus w-icon-plus"
                              onClick={() => {
                                addToCart(item);
                              }}
                            ></button>
                            <button
                              className="quantity-minus w-icon-minus"
                              onClick={() => {
                                deduction(item);
                              }}
                            ></button>
                          </div>
                        </td> */}
                        <td className="product-subtotal">
                          <span className="amount">
                            {item.productPrice} تومان{" "}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="cart-action mb-6">
                <Link
                  href={{
                    pathname: "/checkout",
                    query: data,
                  }}
                  className="btn btn-primary btn-rounded btn-icon-left btn-shopping mr-auto"
                >
                  <i className="w-icon-long-arrow-left"></i>ادامه خرید کردن
                </Link>
                <button
                  onClick={clearCart}
                  type="submit"
                  className="btn btn-rounded btn-default btn-clear"
                  name="clear_cart"
                  value="پاک کردن سبد "
                >
                  پاک کردن سبد{" "}
                </button>
                <button
                  type="submit"
                  className="btn btn-rounded btn-update disabled"
                  name="update_cart"
                  value="بروز کردن سبد"
                >
                  بروز کردن سبد
                </button>
              </div>

              {/* <form className="coupon">
                <h5 className="title coupon-title font-weight-bold text-uppercase">
                  جشنواره کوپن با{" "}
                </h5>
                <input
                  type="text"
                  className="form-control mb-4"
                  placeholder="کد تخفیف را وارد کنید..."
                  required
                />
                <button className="btn btn-dark btn-outline btn-rounded">
                  اعمال کد
                </button>
              </form> */}
            </div>

            <div className="col-lg-4 sticky-sidebar-wrapper">
              <div className="sticky-sidebar">
                <div className="cart-summary mb-4">
                  <h3 className="cart-title text-uppercase">مجموع سبد </h3>
                  <div className="cart-subtotal d-flex align-items-center justify-content-between">
                    <label className="ls-25">جمع فرعی </label>
                    {cart?.length && <span>{totalPrice} تومان</span>}
                  </div>

                  <hr className="divider" />

                  {/* <ul className="shipping-methods mb-2">
                    <li>
                      <label className="shipping-title text-dark font-weight-bold">
                        حمل و نقل
                      </label>
                    </li>
                    <li>
                      <div className="custom-radio">
                        <input
                          type="radio"
                          id="free-shipping"
                          className="custom-control-input"
                          name="shipping"
                        />
                        <label
                          htmlFor="free-shipping"
                          className="custom-control-label color-dark"
                        >
                          حمل و نقل رایگان
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-radio">
                        <input
                          type="radio"
                          id="local-pickup"
                          className="custom-control-input"
                          name="shipping"
                        />
                        <label
                          for="local-pickup"
                          className="custom-control-label color-dark"
                        >
                          وانت محلی
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="custom-radio">
                        <input
                          type="radio"
                          id="flat-rate"
                          className="custom-control-input"
                          name="shipping"
                        />
                        <label
                          for="flat-rate"
                          className="custom-control-label color-dark"
                        >
                          نرخ ثابت: 78000 تومان
                        </label>
                      </div>
                    </li>
                  </ul>

                  <div className="shipping-calculator">
                    <p className="shipping-destination lh-1">
                      حمل و نقل به <strong>CA</strong>.
                    </p>

                    <form className="shipping-calculator-form">
                      <div className="form-group">
                        <div className="select-box">
                          <select
                            name="country"
                            className="form-control form-control-md"
                          >
                            <option value="default" selected="selected">
                              ایالات متحده (US)
                            </option>
                            <option value="us">ایالات متحده</option>
                            <option value="uk">انگلستان</option>
                            <option value="fr">فرانسه </option>
                            <option value="aus">استرالیا </option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="select-box">
                          <select
                            name="state"
                            className="form-control form-control-md"
                          >
                            <option value="default" selected="selected">
                              {" "}
                              کالیفرنیا
                            </option>
                            <option value="ohaio">اوهایو</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control form-control-md"
                          type="text"
                          name="town-city"
                          placeholder="خانه / شهر"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control form-control-md"
                          type="text"
                          name="zipcode"
                          placeholder="کد پستی"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark btn-outline btn-rounded"
                      >
                        آپدیت مجموع
                      </button>
                    </form>
                  </div> */}

                  <hr className="divider mb-6" />
                  <div className="order-total d-flex justify-content-between align-items-center">
                    <label>مجموع</label>
                    <span className="ls-50">
                      {/* {total.toLocaleString()} تومان */}
                    </span>
                  </div>
                  <Link
                    href={{
                      pathname: "/checkout",
                      query: data,
                    }}
                    className="btn btn-block btn-primary btn-icon-right btn-rounded  btn-checkout"
                  >
                    پردازش و پرداخت<i className="w-icon-long-arrow-left"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
