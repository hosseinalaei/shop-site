// "use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCartContext } from "@/contexts/contex";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import banner from "../../assets/images/banner_ProductListPageBanner_bGm6F9.webp";
import { ToastContainer, toast } from "react-toastify";
import defaultAvatar from "../../assets/images/default-avatar.webp";
import defaultImage from "../../assets/images/defaultImage.png";
import ProductRelatedWrap from "@/components/Product/ProductRelatedWrap";
import ProductSlider from "@/components/Slider/ProductSlider";
import PageLoader from "@/components/PageLoader/PageLoader";
import { separate } from "@/utils/helper";
import ShowBrief from "@/components/ShowBrief/ShowBrief";
import Modal from "@/components/Modal/Modal";
import parse from "html-react-parser";

const product = () => {
  const [data, setData] = useState(null);
  const [media, setMedia] = useState("");
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("black");
  const [relatedData, setRelatedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [price, setPrice] = useState();
  const [comment, setComment] = useState(null);
  const [publishedComment, setPublishedComment] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const {
    cart,
    clearCart,
    remove,
    changeQuantity,
    total,
    addToCart,
    deduction,
    cartUpdate,
  } = useCartContext();
  const router = useRouter();
  const { id } = router.query;

  const getProdctData = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Products/single-product",
        {
          id: id,
        }
      );
      if (response.status === 200) {
        setData(response.data.data);
        setIsLoading(false);
        setPrice(response.data.data.product.productColor[0].price);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const getMedia = async () => {
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
        setRelatedData(response.data.data);
      }
      // setData(response.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const addComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/comment/add-product-comment",
        {
          productId: id,
          userId: localStorage.getItem("user").userId,
          text: comment,
        }
      );
      if (response.status === 200) {
        toast.success("نظر شما با موفقیت انجام شد", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const getComment = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/comment/get-product-comments",
        {
          id: id,
        }
      );
      if (response.status === 200) {
        setPublishedComment(
          response.data.data.filter((item) => item.isPublish)
        );
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    id && getProdctData();
    id && getRelatedProduct();
    id && getComment();
  }, [id]);

  // const getAttGroup = async()=>{
  //   try{
  //     const response = await axios.post("https://138.201.167.230:5050/Specification/getAttributegroupById")

  //   } catch(error){
  //     console.log(error);
  //   }
  // }

  // useEffect(()=>{
  //   data.attributeCategoryId && getAttGroup()
  // }, [data.attributeCategoryId])

  const addOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("uuuuuuserrrrrr", user);
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Order/add-order",
        {
          ProductId: id,
          count: count,
          userId: user.userId,
          isUser: true,
          color: color,
          productPrice: price,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.status === 200) {
        console.log(response.data.data.details);
        addToCart(id);

        localStorage.setItem(
          "order",
          JSON.stringify(response.data.data.details)
        );
        toast.success(response.data.data.message, {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("لطفا ابتدا وارد سایت شوید", {
        position: toast.POSITION.TOP_CENTER,
        theme: "colored",
      });
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const productColorPrice = data?.product.productColor?.find(
  //     (item) => item.colorName === color
  //   );
  //   console.log(productColorPrice);
  //   setPrice(productColorPrice?.price);
  // }, [color]);

  const handleColor = () => {
    console.log("hello");
    setColor(e.target.value);
    const productColorPrice = data.product.productColor.filter(
      (item) => item.colorName === color
    );
    setPrice(productColorPrice[0].price);
    console.log(productColorPrice);
  };

  return isLoading ? (
    <PageLoader />
  ) : (
    <>
      <nav className="breadcrumb-nav container">
        <ul className="breadcrumb bb-no">
          <li>
            <Link href="/">خانه </Link>
          </li>
          <li>
            <Link href="/shop">محصولات </Link>
          </li>
          <li>{data?.product?.productName}</li>
        </ul>
      </nav>
      <div className="page-content">
        <div className="container">
          <div className="row gutter-lg">
            <div className="main-content">
              <div className="product product-single row">
                <div className="col-md-6 mb-6">
                  <ProductSlider data={data?.product?.productGalleries} />
                </div>
                <div className="col-md-6 mb-4 mb-md-6">
                  <div className="product-details">
                    <h1 className="product-title">
                      {data?.product?.productName}
                    </h1>
                    <hr className="product-divider" />
                    <div className="product-price">
                      <ins className="new-price">
                        {data?.product?.isExists ? (
                          `${separate(
                            price ?? data?.product?.productColor[0].price
                          )} تومان`
                        ) : (
                          <span className="text-error">ناموجود</span>
                        )}
                      </ins>
                    </div>

                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "80%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top">4</span>
                      </div>
                      <Link
                        href="#product-tab-reviews"
                        className="rating-reviews"
                      >
                        (3 نظر )
                        <span className="tooltiptext tooltip-top">4</span>
                      </Link>
                    </div>

                    <div className="product-short-desc lh-2">
                      <ul className="list-type-check list-style-none">
                        <li>{data?.product?.shortDescription} </li>
                      </ul>
                    </div>

                    <hr className="product-divider" />
                    {/* <div className="product-form product-variation-form product-color-swatch">
                      <label>رنگ :</label>
                      <div className="d-flex align-items-center product-variations">
                        <Link 
                          href="#"
                          className="color"
                          style="background-color: #ffcc01"
                        ></Link>
                        <Link 
                          href="#"
                          className="color"
                          style="background-color: #ca6d00"
                        ></Link>
                        <Link 
                          href="#"
                          className="color"
                          style="background-color: #1c93cb"
                        ></Link>
                        <Link 
                          href="#"
                          className="color"
                          style="background-color: #ccc"
                        ></Link>
                        <Link 
                          href="#"
                          className="color"
                          style="background-color: #333"
                        ></Link>
                      </div>
                    </div> */}

                    <div className="product-form product-variation-form product-color-swatch">
                      <label>رنگ :</label>
                      <div className="d-flex align-items-center product-variations">
                        {data?.product?.productColor?.map((item, index) => {
                          return (
                            <div className="roundRadio mr-5" key={index}>
                              <input
                                name="color"
                                type="radio"
                                id={`radio ${index}`}
                                value={item.colorName}
                                onChange={(e) => {
                                  setColor(e.target.value);
                                  setPrice(item.price);
                                }}
                                defaultChecked={index === 0 && true}
                              />
                              <label
                                htmlFor={`radio ${index}`}
                                style={{ backgroundColor: item.colorCode }}
                              ></label>
                            </div>
                            // <Link
                            //   href="#"
                            //   className="color"
                            //   style={{ backgroundColor: "#ffcc01" }}
                            // ></Link>
                          );
                        })}
                      </div>
                    </div>

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
                              onChange={(e) => {
                                setCounte.target.value;
                              }}
                            />
                            <button
                              className="quantity-plus w-icon-plus"
                              onClick={() => setCount(count + 1)}
                              disabled={count === data.product.productCount}
                            ></button>
                            <button
                              className="quantity-minus w-icon-minus"
                              onClick={() => setCount(count - 1)}
                              disabled={count <= 1}
                            ></button>
                          </div>
                        </div>
                        <button
                          className={`btn btn-primary btn-cart ${
                            !data?.product?.isExists && "disabled"
                          }`}
                          onClick={addOrder}
                          disabled={!data?.product?.isExists}
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
                            className="social-icon social-pinterest fab fa-pinterest-p"
                          ></Link>
                          <Link
                            href="#"
                            className="social-icon social-whatsapp fab fa-whatsapp"
                          ></Link>
                          <Link
                            href="#"
                            className="social-icon social-youtube fab fa-linkedin-in"
                          ></Link>
                        </div>
                      </div>
                      <span className="divider d-xs-show"></span>
                      <div className="product-link-wrapper d-flex">
                        <div className="tooltips">
                          <Link
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                          >
                            <span></span>
                            <span className="mytooltiptext">
                              افزودن به علاقه‌مندی
                            </span>
                          </Link>
                        </div>
                        <div className="tooltips">
                          <Link
                            href="#"
                            className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                          >
                            <span></span>
                            <span className="mytooltiptext">مقایسه</span>
                          </Link>
                        </div>
                      </div>
                      {/* <div className="tooltips">
                        Hover over me
                        <span className="mytooltiptext">Tooltip text</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <Tabs>
                <TabList>
                  <Tab>توضیحات</Tab>
                  {data?.product?.productSpecific?.spec?.length > 0 && (
                    <Tab>ویژگی ها</Tab>
                  )}
                  <Tab>نظرات مشتریان</Tab>
                </TabList>

                <TabPanel>
                  <p>{parse(data?.product?.description)}</p>
                </TabPanel>
                <TabPanel>
                  {data?.product?.productSpecific?.spec.map((item) => (
                    <div key={item.value}>
                      <h4>{item.groupName}:</h4>
                      <p>{item.valueName}</p>
                    </div>
                  ))}
                </TabPanel>
                <TabPanel style={{ display: "flex" }}>
                  {/* <div className="col-xl-4 col-lg-5 mb-4">
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
                            <Link href="#" className="rating-reviews">
                              (3 نظر )
                            </Link>
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
                  </div> */}
                  <div className="col-xl-8 col-lg-7 mb-4 mt-4">
                    <div className="review-form-wrapper">
                      <h3 className="title tab-pane-title font-weight-bold mb-1 mt-2">
                        نظر خود را ارسال کنید
                      </h3>
                      <p className="mb-3">
                        {!localStorage.getItem("user") &&
                          "برای ثبت نظر ابتدا باید وارد سایت شوید *"}
                      </p>
                      <form onSubmit={addComment} className="review-form">
                        <div className="rating-form">
                          <label htmlFor="rating">
                            امتیاز شما به این محصول :
                          </label>
                          <span className="rating-stars">
                            <Link className="star-1" href="#">
                              1
                            </Link>
                            <Link className="star-2" href="#">
                              2
                            </Link>
                            <Link className="star-3" href="#">
                              3
                            </Link>
                            <Link className="star-4" href="#">
                              4
                            </Link>
                            <Link className="star-5" href="#">
                              5
                            </Link>
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
                          onChange={(e) => setComment(e.target.value)}
                          cols="30"
                          rows="6"
                          placeholder="نظر خود را اینجا بنویسید..."
                          className="form-control"
                          id="review"
                        ></textarea>
                        {/* <div className="row gutter-md mt-4 mb-4">
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
                        </div> */}
                        <div className="form-group mt-4">
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
                        <button
                          type="submit"
                          className={`btn btn-dark mt-4 ${
                            (!localStorage.getItem("user") || !comment) &&
                            "disabled"
                          }`}
                          disabled={!localStorage.getItem("user") || !comment}
                        >
                          ارسال نظر
                        </button>
                      </form>
                    </div>

                    <hr className="divider mt-4" />

                    <div className="tab-pane active" id="show-all">
                      <ul className="comments list-style-none">
                        {publishedComment.map((item) => {
                          return (
                            <li className="comment" key={item.id}>
                              <div
                                className="comment-body"
                                style={{ display: "flex" }}
                              >
                                <figure className="comment-avatar">
                                  <Image
                                    src={defaultAvatar}
                                    width="90"
                                    height="90"
                                    alt="avatar"
                                  />
                                </figure>
                                <div className="comment-content">
                                  <h4 className="comment-author">
                                    <span>کاربر جدید</span>
                                    <span
                                      className="comment-date"
                                      style={{
                                        fontSize: "1.2rem",
                                        fontWeight: "400",
                                        letterSpacing: "0",
                                        color: "#999",
                                        marginRight: "10px",
                                      }}
                                    >
                                      {/* {item.createDate} */}
                                      اردیبهشت 1402
                                    </span>
                                  </h4>
                                  <div className="ratings-container comment-rating">
                                    <div className="ratings-full">
                                      <span
                                        className="ratings"
                                        style={{ width: "60%" }}
                                      ></span>
                                      <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                  </div>
                                  <p>{item.text}</p>
                                  {/* <div className="comment-action">
                                  <Link 
                                    href="#"
                                    className="btn btn-secondary btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                  >
                                    <i className="far fa-thumbs-up"></i>مفید (1)
                                  </Link>
                                  <Link 
                                    href="#"
                                    className="btn btn-dark btn-link btn-underline sm btn-icon-left font-weight-normal text-capitalize"
                                  >
                                    <i className="far fa-thumbs-down"></i>ضرر (0)
                                  </Link>
                                  <div className="review-image">
                                    <Link href="#">
                                      <figure>
                                        <img
                                          src="assets/images/products/default/review-img-1.jpg"
                                          width="60"
                                          height="60"
                                          alt="تصویر ضمیمه نقد جان دو در ساعت مچی مشکی الکترونیکی"
                                          data-zoom-image="assets/images/products/default/review-img-1-800x900.jpg"
                                        />
                                      </figure>
                                    </Link>
                                  </div>
                                </div> */}
                                </div>
                              </div>
                              <hr className="divider mt-4" />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </TabPanel>
              </Tabs>

              {/* <section className="vendor-product-section">
                <div className="title-link-wrapper mb-4">
                  <h4 className="title text-left">
                    محصولات بیشتر از این فروشنده
                  </h4>
                  <Link 
                    href="#"
                    className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                  >
                    محصولات بیشتر<i className="w-icon-long-arrow-left"></i>
                  </Link>
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
                            <Link href="product-default.html">
                              <Image
                                src={item.imgSrc}
                                alt="Product"
                                width="300"
                                height="338"
                              />
                            </Link>
                            <div className="product-action-vertical">
                              <Link 
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="افزودن به سبد "
                              ></Link>
                              <Link 
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="افزودن به علاقه مندیها"
                              ></Link>
                              <Link 
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="افزودن برای مقایسه"
                              ></Link>
                            </div>
                            <div className="product-action">
                              <Link 
                                href="#"
                                className="btn-product btn-quickview"
                                title="نمایش سریع"
                              >
                                نمایش سریع
                              </Link>
                            </div>
                          </figure>
                          <div className="product-details">
                            <div className="product-cat">
                              <Link href="shop-banner-sidebar.html">
                                تجهیزات جانبی{" "}
                              </Link>
                            </div>
                            <h4 className="product-name">
                              <Link href="product-default.html">{item.title}</Link>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                ></span>
                                <span className="tooltiptext tooltip-top"></span>
                              </div>
                              <Link 
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 نظر )
                              </Link>
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

              <section className="related-product-section mb-4">
                <div className="title-link-wrapper mb-4">
                  <h4 className="title">محصولات اخیر </h4>
                  <Link
                    href="#"
                    className="btn btn-dark btn-link btn-slide-right btn-icon-right"
                  >
                    محصولات بیشتر<i className="w-icon-long-arrow-left"></i>
                  </Link>
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
                    {relatedData
                      ?.filter((item) => !item.isDelete)
                      .slice(0, 3)
                      .map((item, index) => {
                        return (
                          <ProductRelatedWrap
                            id={id}
                            item={item}
                            key={index}
                            setShowModal={setShowModal}
                          />
                          // <div className="swiper-slide product">
                          //   <figure className="product-media">
                          //     <Link href="/">
                          //       <Image
                          //         src={item.imgSrc}
                          //         alt="Product"
                          //         width="300"
                          //         height="338"
                          //       <Link
                          //     </Link>
                          //     <div className="product-action-vertical">
                          //       <a
                          //         href="#"
                          //       <Link className="btn-product-icon btn-cart w-icon-cart"
                          //         title="افزودن به سبد "
                          //       ></Link>
                          //       <a
                          //         href="#"
                          //       <Link className="btn-product-icon btn-wishlist w-icon-heart"
                          //         title="افزودن به علاقه مندیها"
                          //       ></Link>
                          //       <a
                          //         href="#"
                          //         className="btn-product-icon btn-compare w-icon-compare"
                          //         title="افزودن برای مقایسه"
                          //       <Link /Link>
                          //     </div>
                          //     <div className="product-action">
                          //       <a
                          //         href="#"
                          //         className="btn-product btn-quickview"
                          //         title="نمایش سریع"
                          //       >
                          //         نمایش سریع
                          //       </Link>
                          //     </div>
                          //   </figure>
                          //   <div className="product-details">
                          //     <h4 className="product-name">
                          //       <Link href="/">{item.productName} </Link>
                          //     </h4>
                          //     <div className="ratings-container">
                          //       <div className="ratings-full">
                          //         <span
                          //           className="ratings"
                          //           style={{ width: "100%" }}
                          //         ></span>
                          //         <span className="tooltiptext tooltip-top"></span>
                          //       </div>
                          //       <Link href="/" className="rating-reviews">
                          //         (3 نظر )
                          //       </Link>
                          //     </div>
                          //     <div className="product-pa-wrapper">
                          //       <div className="product-price">
                          //         {item.price} تومان
                          //       </div>
                          //     </div>
                          //   </div>
                          // </div>
                        );
                      })}
                  </div>
                </div>
              </section>
            </div>

            {/* <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
            <div className="sidebar-overlay"></div>
            <Link className="sidebar-close" href="#">
              <i className="close-icon"></i>
            </Link>
            <Link href="#" className="sidebar-toggle d-flex d-lg-none">
              <i className="fas fa-chevron-left"></i>
            </Link>
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
                                  <Link  href="#">
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
                                    <Link href="#">{item.title} </Link>
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
              {/* <Link className="sidebar-close" href="#">
              <i className="close-icon"></i>
            </Link>
            <Link href="#" className="sidebar-toggle d-flex d-lg-none">
              <i className="fas fa-chevron-left"></i>
            </Link> */}
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
                                  <Image
                                    src={defaultImage}
                                    alt="Product"
                                    width="100"
                                    height="113"
                                  />
                                </Link>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <Link href="#">ساعت هوشمند2 </Link>
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
                                  <Image
                                    src={defaultImage}
                                    alt="Product"
                                    width="100"
                                    height="113"
                                  />
                                </Link>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <Link href="#">مرکز پزشکی آسمان</Link>
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
                                  <Image
                                    src={defaultImage}
                                    alt="Product"
                                    width="100"
                                    height="113"
                                  />
                                </Link>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <Link href="#">موتور بدلکاری مشکی</Link>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal show={showModal} modalClosed={() => setShowModal(false)}>
          <ShowBrief />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
};

export default product;
