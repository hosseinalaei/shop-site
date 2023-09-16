// "use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductImage from "@/components/Product/ProductImage";
import { useCartContext } from "@/contexts/contex";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import productImage from "../../assets/images/samsung_galaxy_a03_red02_1_1.jpeg";
import Link from "next/link";
import banner from "../../assets/images/banner3.jpeg";

// const moreProduct = [
//   { title: "محصول تست", price: 20000000, cat: "سامسونگ", imgSrc: productImage },
//   { title: "2محصول تست", price: 10000000, cat: "هواوی", imgSrc: productImage },
//   { title: "3محصول تست", price: 35000000, cat: "اپل", imgSrc: productImage },
// ];

const product = () => {
  const [data, setData] = useState(null);
  const [media, setMedia] = useState("");
  const [count, setCount] = useState(1);
  const [relatedData, setRelatedData] = useState([]);
  // const [user, setUser] = useState({});
  const {
    cart,
    clearCart,
    remove,
    changeQuantity,
    total,
    addToCart,
    deduction,
  } = useCartContext();
  const router = useRouter();
  const { id } = router.query;

  // if (typeof window !== "undefined") {
  //   setUser(localStorage.getItem("user"));
  // }

  const getProdctData = async () => {
    try {
      // console.log("process.env.BASE_URL", process.env.BASE_URL);
      const response = await axios.post(
        "https://138.201.167.230:5050/Products/single-product",
        {
          id: id,
        }
      );
      if (response.status === 200) {
        console.log("responseresponse", response.data.data);
        setData(response.data.data);
      }
      // setData(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getMedia = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Get/GetMedia",
        {
          id: id,
          mediaFieldName: "productImageName",
        }
      );
      setMedia(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRelatedProduct = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Products/related-products",
        {
          id: id,
        }
      );
      if (response.status === 200) {
        console.log("responseresponse", response.data.data);
        setRelatedData(response.data.data);
      }
      // setData(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    id && getProdctData() && getMedia();
    id && getRelatedProduct();
  }, [id]);

  const addOrder = async () => {
    // if (typeof window !== "undefined") {
    //   setUser(localStorage.getItem("user"));
    // }
    const user = JSON.parse(localStorage.getItem("user"));

    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Order/add-order",
        {
          ProductId: id,
          count: count,
          userId: user.userId,
          isUser: true,
        }
      );
      if (response.status === 200) {
        console.log(response.data.data.details);
        addToCart(id);
        localStorage.setItem(
          "order",
          JSON.stringify(response.data.data.details)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav class="breadcrumb-nav container">
        <ul class="breadcrumb bb-no">
          <li>
            <a href="demo1.html">خانه </a>
          </li>
          <li>
            <Link href="/shop">محصولات </Link>
          </li>
          <li>{data?.product?.productName}</li>
        </ul>
        {/* <ul class="product-nav list-style-none">
        <li class="product-nav-prev">
            <a href="#">
                <i class="w-icon-angle-right"></i>
            </a>
            <span class="product-nav-popup">
                <img src="assets/images/products/product-nav-prev.jpg" alt="Product" width="110"
                    height="110" />
                <span class="product-name">نرم صدا ساز</span>
            </span>
        </li>
        <li class="product-nav-next">                         <a href="#">                            <i class="w-icon-angle-left"></i>
            </a>
            <span class="product-nav-popup">
                <img src="assets/images/products/product-nav-next.jpg" alt="Product" width="110"
                    height="110" />
                <span class="product-name">بلندگوی صدای فوق العاده</span>
            </span>
        </li>
    </ul> */}
      </nav>
      <div className="page-content">
        <div className="container">
          <div className="row gutter-lg">
            <div className="main-content">
              <div className="product product-single row">
                <div className="col-md-6 mb-6">
                  <div className="product-gallery product-gallery-sticky product-gallery-video">
                    <div
                      className="swiper-container product-single-swiper swiper-theme nav-inner"
                      data-swiper-options="{
                                    'navigation': {
                                        'nextEl': '.swiper-button-next',
                                        'prevEl': '.swiper-button-prev'
                                    }
                                }"
                    >
                      <div className="swiper-wrapper row cols-1 gutter-no">
                        <div className="swiper-slide">
                          <figure className="product-image">
                            <ProductImage src={media} />
                          </figure>
                        </div>
                        {/* <div className="swiper-slide">
                        <figure className="product-image">
                          <Image
                            src="assets/images/products/video/2-800x900.jpg"
                            data-zoom-image="assets/images/products/video/2-800x900.jpg"
                            alt="کفش اسپرت صورتی"
                            width="488"
                            height="549"
                          />
                        </figure>
                      </div>
                      <div className="swiper-slide">
                        <figure className="product-image">
                          <Image
                            src="assets/images/products/video/3-800x900.jpg"
                            data-zoom-image="assets/images/products/video/3-800x900.jpg"
                            alt="کفش اسپرت صورتی"
                            width="800"
                            height="900"
                          />
                        </figure>
                      </div>
                      <div className="swiper-slide">
                        <figure className="product-image">
                          <Image
                            src="assets/images/products/video/4-800x900.jpg"
                            data-zoom-image="assets/images/products/video/4-800x900.jpg"
                            alt="کفش اسپرت صورتی"
                            width="800"
                            height="900"
                          />
                        </figure>
                      </div> */}
                      </div>
                      {/* <button className="swiper-button-next"></button>
                    <button className="swiper-button-prev"></button> */}
                      <a
                        href="#"
                        className="product-gallery-btn product-image-full"
                      >
                        <i className="w-icon-zoom"></i>
                      </a>
                    </div>
                    <div
                      className="product-thumbs-wrap swiper-container"
                      data-swiper-options="{
                                    'navigation': {
                                        'nextEl': '.swiper-button-next',
                                        'prevEl': '.swiper-button-prev'
                                    }
                                }"
                    >
                      {/* <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                      <div className="product-thumb swiper-slide">
                        <Image
                          src="assets/images/products/video/1-800x900.jpg"
                          alt="Product Thumb"
                          width="800"
                          height="900"
                        />
                      </div>
                      <div className="product-thumb swiper-slide">
                        <Image
                          src="assets/images/products/video/2-800x900.jpg"
                          alt="Product Thumb"
                          width="800"
                          height="900"
                        />
                      </div>
                      <div className="product-thumb swiper-slide">
                        <Image
                          src="assets/images/products/video/3-800x900.jpg"
                          alt="Product Thumb"
                          width="800"
                          height="900"
                        />
                      </div>
                      <div className="product-thumb swiper-slide">
                        <Image
                          src="assets/images/products/video/4-800x900.jpg"
                          alt="Product Thumb"
                          width="800"
                          height="900"
                        />
                      </div>
                    </div> */}
                      <button className="swiper-button-next"></button>
                      <button className="swiper-button-prev"></button>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 mb-md-6">
                  <div className="product-details">
                    <h1 className="product-title">
                      {data?.product?.productName}
                    </h1>
                    <div className="product-bm-wrapper">
                      {/* <figure className="brand">
                      <Image
                        src="assets/images/products/brand/brand-4.jpg"
                        alt="Brand"
                        width="105"
                        height="48"
                      />
                    </figure> */}
                      {/* <div className="product-meta">
                      <div className="product-categories">
                        دسته بندی:
                        <span className="product-category">
                          <a href="#">مد </a>
                        </span>
                      </div>
                      <div className="product-sku">
                        کد: <span>MS46891362</span>
                      </div>
                    </div> */}
                    </div>

                    <hr className="product-divider" />

                    <div className="product-price">
                      <ins className="new-price">
                        {data?.product?.price} تومان
                      </ins>
                    </div>

                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "80%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="#product-tab-reviews" className="rating-reviews">
                        (3 نظر )
                      </a>
                    </div>

                    <div className="product-short-desc lh-2">
                      <ul className="list-type-check list-style-none">
                        <li>{data?.product?.shortDescription} </li>
                      </ul>
                    </div>

                    <hr className="product-divider" />

                    <div
                    // className="fix-bottom product-sticky-content sticky-content"
                    >
                      <div className="product-form container">
                        <div className="product-qty-form">
                          <div className="input-group">
                            <input
                              value={count}
                              className="quantity form-control"
                              type="number"
                              min="1"
                              max="10000000"
                            />
                            <button
                              className="quantity-plus w-icon-plus"
                              onClick={() => setCount(count + 1)}
                            ></button>
                            <button
                              className="quantity-minus w-icon-minus"
                              onClick={() => setCount(count - 1)}
                            ></button>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary btn-cart"
                          onClick={addOrder}
                        >
                          <i className="w-icon-cart"></i>
                          <span>افزودن به سبد </span>
                        </button>
                      </div>
                    </div>

                    {/* <div className="sticky-content-wrapper">
                    <div className="fix-bottom product-sticky-content sticky-content">
                      <div className="product-form container">
                        <div className="product product-list-sm mr-auto">
                          {" "}
                          <figure className="product-media">
                            {" "}
                            <ProductImage src={media} />
                          </figure>{" "}
                          <div className="product-details pt-0 pl-2 pr-2">
                            {" "}
                            <h4 className="product-name font-weight-normal mb-1">
                              کفش اسپرت صورتی
                            </h4>{" "}
                            <div className="product-price mb-0">
                              {" "}
                              <ins className="new-price">86000 تومان</ins>
                              <del className="old-price"></del>
                            </div>{" "}
                          </div>
                        </div>
                        <div claclassNamess="product-qty-form">
                          <div className="input-group">
                            <input
                              className="quantity form-control"
                              type="number"
                              min="1"
                              max="10000000"
                            />
                            <button className="quantity-plus w-icon-plus"></button>
                            <button className="quantity-minus w-icon-minus"></button>
                          </div>
                        </div>
                        <button className="btn btn-primary btn-cart">
                          <i className="w-icon-cart"></i>
                          <span>افزودن به سبد </span>
                        </button>
                      </div>
                    </div>
                  </div> */}

                    <div className="social-links-wrapper">
                      <div className="social-links">
                        <div className="social-icons social-no-color border-thin">
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
                            className="social-icon social-pinterest fab fa-pinterest-p"
                          ></a>
                          <a
                            href="#"
                            className="social-icon social-whatsapp fab fa-whatsapp"
                          ></a>
                          <a
                            href="#"
                            className="social-icon social-youtube fab fa-linkedin-in"
                          ></a>
                        </div>
                      </div>
                      <span className="divider d-xs-show"></span>
                      <div className="product-link-wrapper d-flex">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist w-icon-heart"
                        >
                          <span></span>
                        </a>
                        <a
                          href="#"
                          className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                        >
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Tabs>
                <TabList>
                  <Tab>توضیحات</Tab>
                  <Tab>نظرات مشتریان</Tab>
                </TabList>

                <TabPanel>
                  <p>{data?.product?.description}</p>
                </TabPanel>
                <TabPanel style={{ display: "flex" }}>
                  <div className="col-xl-4 col-lg-5 mb-4">
                    <div className="ratings-wrapper">
                      <div className="avg-rating-container">
                        <h4 className="avg-mark font-weight-bolder ls-50">
                          3.3
                        </h4>
                        <div className="avg-rating">
                          <p className="text-dark mb-1">میانگین امتیاز </p>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span
                                className="ratings"
                                style={{ width: "60%" }}
                              ></span>
                              <span className="tooltiptext tooltip-top"></span>
                            </div>
                            <a href="#" className="rating-reviews">
                              (3 نظر )
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="ratings-value d-flex align-items-center text-dark ls-25">
                        <span className="text-dark font-weight-bold">
                          66.7%
                        </span>
                        توصیه شده <span className="count">(2 از 3)</span>
                      </div>
                      <div className="ratings-list">
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <div className="progress-bar progress-bar-sm ">
                            <span></span>
                          </div>
                          <div className="progress-value">
                            <mark>70%</mark>
                          </div>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <div className="progress-bar progress-bar-sm ">
                            <span></span>
                          </div>
                          <div className="progress-value">
                            <mark>30%</mark>
                          </div>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <div className="progress-bar progress-bar-sm ">
                            <span></span>
                          </div>
                          <div className="progress-value">
                            <mark>40%</mark>
                          </div>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "40%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <div className="progress-bar progress-bar-sm ">
                            <span></span>
                          </div>
                          <div className="progress-value">
                            <mark>0%</mark>
                          </div>
                        </div>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "20%" }}
                            ></span>
                            <span className="tooltiptext tooltip-top"></span>
                          </div>
                          <div className="progress-bar progress-bar-sm ">
                            <span></span>
                          </div>
                          <div className="progress-value">
                            <mark>0%</mark>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-lg-7 mb-4">
                    <div className="review-form-wrapper">
                      <h3 className="title tab-pane-title font-weight-bold mb-1">
                        نظر خود را ارسال کنید
                      </h3>
                      <p className="mb-3">
                        آدرس ایمیل شما منتشر نخواهد شد. فیلدهای الزامی مشخص شده
                        اند *
                      </p>
                      <form action="#" method="POST" className="review-form">
                        <div className="rating-form">
                          <label htmlFor="rating">
                            امتیاز شما به این محصول :
                          </label>
                          <span className="rating-stars">
                            <a className="star-1" href="#">
                              1
                            </a>
                            <a className="star-2" href="#">
                              2
                            </a>
                            <a className="star-3" href="#">
                              3
                            </a>
                            <a className="star-4" href="#">
                              4
                            </a>
                            <a className="star-5" href="#">
                              5
                            </a>
                          </span>
                          {/* <select
                          name="rating"
                          id="rating"
                          required=""
                          style="display: none;"
                        >
                          <option value="">امتیاز </option>
                          <option value="5">عالی </option>
                          <option value="4">خوب </option>
                          <option value="3">میانگین </option>
                          <option value="2">بد نیست</option>
                          <option value="1">خیلی بد</option>
                        </select> */}
                        </div>
                        <textarea
                          cols="30"
                          rows="6"
                          placeholder="نظر خود را اینجا بنویسید..."
                          className="form-control"
                          id="review"
                        ></textarea>
                        <div className="row gutter-md">
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="نام شما"
                              id="author"
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ایمیل شما"
                              id="email_1"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            id="save-checkbox"
                          />
                          <label htmlFor="save-checkbox">
                            برای دفعه بعد که نظر می دهم نام، ایمیل و وب سایت من
                            را در این مرورگر ذخیره کنید.
                          </label>
                        </div>
                        <button type="submit" className="btn btn-dark">
                          ارسال نظر
                        </button>
                      </form>
                    </div>
                  </div>
                  <p>{data?.product?.productComments}</p>
                </TabPanel>
              </Tabs>

              {/* <section className="vendor-product-section">
                <div className="title-link-wrapper mb-4">
                  <h4 className="title text-left">
                    محصولات بیشتر از این فروشنده
                  </h4>
                  <a
                    href="#"
                    className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                  >
                    محصولات بیشتر<i className="w-icon-long-arrow-left"></i>
                  </a>
                </div>
                <div
                  className="swiper-container swiper-theme"
                  data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 2,
                            'breakpoints': {
                                '576': {
                                    'slidesPerView': 3
                                },
                                '768': {
                                    'slidesPerView': 4
                                },
                                '992': {
                                    'slidesPerView': 3
                                }
                            }
                        }"
                >
                  <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                    {moreProduct.map((item, index) => {
                      return (
                        <div className="swiper-slide product">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <Image
                                src={item.imgSrc}
                                alt="Product"
                                width="300"
                                height="338"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="افزودن به سبد "
                              ></a>
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="افزودن به علاقه مندیها"
                              ></a>
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="افزودن برای مقایسه"
                              ></a>
                            </div>
                            <div className="product-action">
                              <a
                                href="#"
                                className="btn-product btn-quickview"
                                title="نمایش سریع"
                              >
                                نمایش سریع
                              </a>
                            </div>
                          </figure>
                          <div className="product-details">
                            <div className="product-cat">
                              <a href="shop-banner-sidebar.html">
                                تجهیزات جانبی{" "}
                              </a>
                            </div>
                            <h4 className="product-name">
                              <a href="product-default.html">{item.title}</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 نظر )
                              </a>
                            </div>
                            <div className="product-pa-wrapper">
                              <div className="product-price">
                                {item.price} تومان
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section> */}

              <section className="related-product-section">
                <div className="title-link-wrapper mb-4">
                  <h4 className="title">محصولات اخیر </h4>
                  <a
                    href="#"
                    className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                  >
                    محصولات بیشتر<i className="w-icon-long-arrow-left"></i>
                  </a>
                </div>
                <div
                  className="swiper-container swiper-theme"
                  data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 2,
                            'breakpoints': {
                                '576': {
                                    'slidesPerView': 3
                                },
                                '768': {
                                    'slidesPerView': 4
                                },
                                '992': {
                                    'slidesPerView': 3
                                }
                            }
                        }"
                >
                  <div className="swiper-wrapper row cols-lg-3 cols-md-4 cols-sm-3 cols-2">
                    {relatedData.map((item, index) => {
                      return (
                        <div className="swiper-slide product">
                          <figure className="product-media">
                            <a href="/">
                              <Image
                                src={item.imgSrc}
                                alt="Product"
                                width="300"
                                height="338"
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="افزودن به سبد "
                              ></a>
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="افزودن به علاقه مندیها"
                              ></a>
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="افزودن برای مقایسه"
                              ></a>
                            </div>
                            <div className="product-action">
                              <a
                                href="#"
                                className="btn-product btn-quickview"
                                title="نمایش سریع"
                              >
                                نمایش سریع
                              </a>
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="/">{item.productName} </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                              <a href="/" className="rating-reviews">
                                (3 نظر )
                              </a>
                            </div>
                            <div className="product-pa-wrapper">
                              <div className="product-price">
                                {item.price} تومان
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>

            {/* <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
            <div className="sidebar-overlay"></div>
            <a className="sidebar-close" href="#">
              <i className="close-icon"></i>
            </a>
            <a href="#" className="sidebar-toggle d-flex d-lg-none">
              <i className="fas fa-chevron-left"></i>
            </a>
            <div className="sidebar-content scrollable">
              <div className="sticky-sidebar">
                <div className="widget widget-icon-box mb-6">
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="w-icon-truck"></i>
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">ارسال رایگان و مرجوعی</h4>
                      <p>برای تمام سفارشات بیش از 99 دلار</p>
                    </div>
                  </div>
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="w-icon-bag"></i>
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">پرداخت امن</h4>
                      <p>ما تضمین می کنیم</p>
                    </div>
                  </div>
                  <div className="icon-box icon-box-side">
                    <span className="icon-box-icon text-dark">
                      <i className="w-icon-money"></i>
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title">تضمین بازگشت پول</h4>
                      <p>پس از 30 روز بازگشت</p>
                    </div>
                  </div>
                </div>

                <div className="widget widget-banner mb-9">
                  <div className="banner banner-fixed br-sm">
                    <div className="banner-content">
                      <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                        40<sup className="font-weight-bold">%</sup>
                        <sub className="font-weight-bold text-uppercase ls-25">
                          تخفیف{" "}
                        </sub>
                      </div>
                      <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                        فروش نامحدود{" "}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="widget widget-products">
                  <div className="title-link-wrapper mb-2">
                    <h4 className="title title-link font-weight-bold">
                      محصولات بیشتر{" "}
                    </h4>
                  </div>

                  <div className="swiper nav-top">
                    <div
                      className="swiper-container swiper-theme nav-top"
                      // data-swiper-options = "{
                      //     'slidesPerView': 1,
                      //     'spaceBetween': 20,
                      //     'navigation': {
                      //         'prevEl': '.swiper-button-prev',
                      //         'nextEl': '.swiper-button-next'
                      //     }
                      // }"
                    >
                      <div className="swiper-wrapper">
                        <div className="widget-col swiper-slide">
                          {moreProduct.map((item, index) => {
                            return (
                              <div className="product product-widget">
                                <figure className="product-media">
                                  <Link href="#">
                                    <Image
                                      src={item.imgSrc}
                                      alt="Product"
                                      width="100"
                                      height="113"
                                    />
                                  </Link>
                                </figure>
                                <div className="product-details">
                                  <h4 className="product-name">
                                    <a href="#">{item.title} </a>
                                  </h4>
                                  <div className="ratings-container">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "100%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <div className="product-price">
                                    {item.price} تومان
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <button className="swiper-button-next"></button>
                      <button className="swiper-button-prev"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside> */}

            <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
              {/* <div className="sidebar-overlay"></div> */}
              {/* <a className="sidebar-close" href="#">
              <i className="close-icon"></i>
            </a>
            <a href="#" className="sidebar-toggle d-flex d-lg-none">
              <i className="fas fa-chevron-left"></i>
            </a> */}
              <div className="sidebar-content scrollable">
                <div className="sticky-sidebar">
                  <div className="widget widget-icon-box mb-6">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-truck"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">
                          ارسال رایگان و مرجوعی
                        </h4>
                        <p>برای تمام سفارشات بیش از 99 دلار</p>
                      </div>
                    </div>
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-bag"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">پرداخت امن</h4>
                        <p>ما تضمین می کنیم</p>
                      </div>
                    </div>
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-money"></i>
                      </span>
                      <div className="icon-box-content">
                        <h4 className="icon-box-title">تضمین بازگشت پول</h4>
                        <p>پس از 30 روز بازگشت</p>
                      </div>
                    </div>
                  </div>

                  <div className="widget widget-banner mb-9">
                    <div className="banner banner-fixed br-sm">
                      <figure>
                        <Link href="#">
                          <Image
                            src={banner}
                            alt="Product"
                            width="100"
                            height="113"
                          />
                        </Link>
                      </figure>
                      <div className="banner-content">
                        <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                          40<sup className="font-weight-bold">%</sup>
                          <sub className="font-weight-bold text-uppercase ls-25">
                            تخفیف{" "}
                          </sub>
                        </div>
                        <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                          فروش نامحدود{" "}
                        </h4>
                      </div>
                    </div>
                  </div>

                  <div className="widget widget-products">
                    <div className="title-link-wrapper mb-2">
                      <h4 className="title title-link font-weight-bold">
                        محصولات بیشتر{" "}
                      </h4>
                    </div>

                    <div className="swiper nav-top">
                      <div className="swiper-container swiper-theme nav-top">
                        <div className="swiper-wrapper">
                          <div className="widget-col swiper-slide">
                            <div className="product product-widget">
                              <figure className="product-media">
                                <Link href="#">
                                  {/* <Image
                                  src={item.imgSrc}
                                  alt="Product"
                                  width="100"
                                  height="113"
                                /> */}
                                </Link>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">ساعت هوشمند </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  80000 تومان - 90000 تومان
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <Link href="#">
                                  {/* <Image
                                  src={item.imgSrc}
                                  alt="Product"
                                  width="100"
                                  height="113"
                                /> */}
                                </Link>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">مرکز پزشکی آسمان</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "80%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  220000 تومان
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <Link href="#">
                                  {/* <Image
                                  src={item.imgSrc}
                                  alt="Product"
                                  width="100"
                                  height="113"
                                /> */}
                                </Link>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">موتور بدلکاری مشکی</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "60%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  180000 تومان
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="widget-col swiper-slide">
                            <div className="product product-widget">
                              <figure className="product-media">
                                <Link href="#">
                                  {/* <Image
                                  src={item.imgSrc}
                                  alt="Product"
                                  width="100"
                                  height="113"
                                /> */}
                                </Link>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">اسکیت پان</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  480000 تومان
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <Link href="#">
                                  {/* <Image
                                  src={item.imgSrc}
                                  alt="Product"
                                  width="100"
                                  height="113"
                                /> */}
                                </Link>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">اجاق گاز مدرن</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "80%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  325000 تومان
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <Link href="#">
                                  {/* <Image
                                  src={item.imgSrc}
                                  alt="Product"
                                  width="100"
                                  height="113"
                                /> */}
                                </Link>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="#">دستگاه سی تی</a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    ></span>
                                    <span className="tooltiptext tooltip-top"></span>
                                  </div>
                                </div>
                                <div className="product-price">
                                  220000 تومان
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="swiper-button-next"></button>
                        <button className="swiper-button-prev"></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default product;
