"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductWrap from "@/components/Product/ProductWrap";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import appleLogo from "../../assets/images/apple_logo_1988.webp";
import sumsungLogo from "../../assets/images/Samsung-Logo.jpeg";
import xiaomiLogo from "../../assets/images/xiaomi-logo.jpeg";
import huaweiLogo from "../../assets/images/huawei-logo.jpeg";
import dariaLogo from "../../assets/images/daria-logo.webp";
import onePlus from "../../assets/images/Oneplus-logo.webp";
import nokia from "../../assets/images/nokia-logo.webp";

const categoryProducts = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getProdcts = async () => {
    try {
      setData([]);
      const response = await axios.post(
        "https://138.201.167.230:5050/Products/product-by-categories",
        { id: id[0] }
      );

      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    id && getProdcts();
  }, [id]);

  const mobileCompany = [
    { name: "اپل", logo: appleLogo },
    { name: "سامسونگ", logo: sumsungLogo },
    { name: "شیائومی", logo: xiaomiLogo },
    { name: "هوآوی", logo: huaweiLogo },
    { name: "داریا", logo: dariaLogo },
    { name: "ریلمی", logo: xiaomiLogo },
    { name: "وان پلاس", logo: onePlus },
    { name: "نوکیا", logo: nokia },
  ];
  return (
    <main className="main">
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb bb-no">
            <li>
              <Link href="/">خانه </Link>
            </li>
            {/* <li>
              <Link href="/">فروشگاه </Link>
            </li> */}
          </ul>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          {/* <div
            className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
            style={{
              backgroundImage: "url(../../assets/images/product1.jpeg)",
              backgroundColor: "#FFC74E",
            }}
          >
            <div className="banner-content">
              <h4 className="banner-subtitle font-weight-bold">
                مجموعه لوازم جانبی{" "}
              </h4>
              <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">
                ساعت مچی هوشمند
              </h3>
              <Link 
                href="shop-banner-sidebar.html"
                className="btn btn-dark btn-rounded btn-icon-right"
              >
                اکنون کشف کنید<i className="w-icon-long-arrow-left"></i>
              </Link>
            </div>
          </div> */}

          {/* <div className="shop-default-brands mb-5">
            <div
              className="brands-swiper swiper-container swiper-theme "
              data-swiper-options="{
                        'slidesPerView': 2,
                        'breakpoints': {
                            '576': {
                                'slidesPerView': 3
                            },
                            '768': {
                                'slidesPerView': 4
                            },
                            '992': {
                                'slidesPerView': 6
                            },
                            '1200': {
                                'slidesPerView': 7
                            }
                        },
                        'autoplay': {
                            'delay': 4000,
                            'disableOnInteraction': false
                        }
                    }"
            >
              <div className="swiper-wrapper row gutter-no cols-xl-7 cols-lg-6 cols-md-4 cols-sm-3 cols-2">
                <div className="swiper-slide">
                  <figure>
                    <img
                      src="assets/images/brands/category/1.png"
                      alt="Brand"
                      width="160"
                      height="90"
                    />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure>
                    <img
                      src="assets/images/brands/category/2.png"
                      alt="Brand"
                      width="160"
                      height="90"
                    />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure>
                    <img
                      src="assets/images/brands/category/3.png"
                      alt="Brand"
                      width="160"
                      height="90"
                    />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure>
                    <img
                      src="assets/images/brands/category/4.png"
                      alt="Brand"
                      width="160"
                      height="90"
                    />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure>
                    <img
                      src="assets/images/brands/category/5.png"
                      alt="Brand"
                      width="160"
                      height="90"
                    />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure>
                    <img
                      src="assets/images/brands/category/6.png"
                      alt="Brand"
                      width="160"
                      height="90"
                    />
                  </figure>
                </div>
                <div className="swiper-slide">
                  <figure>
                    <img
                      src="assets/images/brands/category/7.png"
                      alt="Brand"
                      width="160"
                      height="90"
                    />
                  </figure>
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div> */}

          <div className="shop-default-category category-ellipse-section mb-6">
            <div
              className="swiper-container swiper-theme shadow-swiper"
              data-swiper-options="{
                    'spaceBetween': 20,
                    'slidesPerView': 2,
                    'breakpoints': {
                        '480': {
                            'slidesPerView': 3
                        },
                        '576': {
                            'slidesPerView': 4
                        },
                        '768': {
                            'slidesPerView': 6
                        },
                        '992': {
                            'slidesPerView': 7
                        },
                        '1200': {
                            'slidesPerView': 8,
                            'spaceBetween': 30
                        }
                    }
                }"
            >
              <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
                {mobileCompany.map((item) => {
                  return (
                    <div className="swiper-slide category-wrap" key={item.name}>
                      <div className="category category-ellipse">
                        <figure className="category-media">
                          <Link href="#">
                            <Image
                              src={item.logo}
                              alt="Categroy"
                              width="190"
                              height="190"
                              style={{ backgroundColor: "#5C92C0" }}
                            />
                          </Link>
                        </figure>
                        <div className="category-content">
                          <h4 className="category-name">
                            <Link href="#">{item.name}</Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="shop-content row gutter-lg mb-10">
            <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
              <div className="sidebar-overlay"></div>
              <Link className="sidebar-close" href="#">
                <i className="close-icon"></i>
              </Link>

              <div className="sidebar-content scrollable">
                <div className="sticky-sidebar">
                  <div className="filter-actions">
                    <label>فیلتر :</label>
                    <Link
                      href="#"
                      className="btn btn-dark btn-link filter-clean"
                    >
                      پاک کردن همه{" "}
                    </Link>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>تمام دسته بندیها</span>
                    </h3>
                    <ul className="widget-body filter-items search-ul">
                      <li>
                        <Link href="#">تجهیزات جانبی </Link>
                      </li>
                      <li>
                        <Link href="#">نوزادان </Link>
                      </li>
                      <li>
                        <Link href="#">زیبایی </Link>
                      </li>
                      <li>
                        <Link href="#">تزیین </Link>
                      </li>
                      <li>
                        <Link href="#">الکترونیکی </Link>
                      </li>
                      <li>
                        <Link href="#">مد </Link>
                      </li>
                      <li>
                        <Link href="#">غذا </Link>
                      </li>
                      <li>
                        <Link href="#">مبلمان </Link>
                      </li>
                      <li>
                        <Link href="#">آشپزخانه </Link>
                      </li>
                      <li>
                        <Link href="#">مدیکال </Link>
                      </li>
                      <li>
                        <Link href="#">ورزشی </Link>
                      </li>
                      <li>
                        <Link href="#">ساعت </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>قیمت </span>
                    </h3>
                    <div className="widget-body">
                      <ul className="filter-items search-ul">
                        <li>
                          <Link href="#">0 - 99000 تومان</Link>
                        </li>
                        <li>
                          <Link href="#">100000 - 500000 تومان</Link>
                        </li>
                        <li>
                          <Link href="#">500000 - 1000000 تومان</Link>
                        </li>
                        <li>
                          <Link href="#">1000000 - 5000000 تومان</Link>
                        </li>
                        <li>
                          <Link href="#">5000000 تومان +</Link>
                        </li>
                      </ul>
                      <form className="price-range">
                        <input
                          type="number"
                          name="min_price"
                          className="min_price text-center"
                          placeholder="$min"
                        />
                        <span className="delimiter">-</span>
                        <input
                          type="number"
                          name="max_price"
                          className="max_price text-center"
                          placeholder="$max"
                        />
                        <Link href="#" className="btn btn-primary btn-rounded">
                          برو{" "}
                        </Link>
                      </form>
                    </div>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>سایز </span>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <Link href="#">خبلی بزرگ </Link>
                      </li>
                      <li>
                        <Link href="#">بزرگ </Link>
                      </li>
                      <li>
                        <Link href="#">متوسط </Link>
                      </li>
                      <li>
                        <Link href="#">کوچک </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>برند </span>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <Link href="#">گروه خودرو زیبا </Link>
                      </li>
                      <li>
                        <Link href="#">علف سبز </Link>
                      </li>
                      <li>
                        <Link href="#">Node Js</Link>
                      </li>
                      <li>
                        <Link href="#">NS8</Link>
                      </li>
                      <li>
                        <Link href="#">Red</Link>
                      </li>
                      <li>
                        <Link href="#">Skysuite Tech</Link>
                      </li>
                      <li>
                        <Link href="#">Sterling</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <span>رنگ </span>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <Link href="#">سیاه</Link>
                      </li>
                      <li>
                        <Link href="#">آبی</Link>
                      </li>
                      <li>
                        <Link href="#">قهوه ای</Link>
                      </li>
                      <li>
                        <Link href="#">سبز </Link>
                      </li>
                      <li>
                        <Link href="#">خاکستری </Link>
                      </li>
                      <li>
                        <Link href="#">نارنجی </Link>
                      </li>
                      <li>
                        <Link href="#">زرد </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>

            <div className="main-content">
              <nav className="toolbox sticky-toolbox sticky-content fix-top">
                <div className="toolbox-left">
                  <Link
                    href="#"
                    className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                btn-icon-left d-block d-lg-none"
                  >
                    <i className="w-icon-category"></i>
                    <span>فیلتر ها </span>
                  </Link>
                  <div className="toolbox-item toolbox-sort select-box text-dark">
                    <label>مرتب سازی با اساس :</label>
                    <select name="orderby" className="form-control">
                      <option value="default" selected="selected">
                        مرتب سازی پیش فرض{" "}
                      </option>
                      <option value="popularity">
                        مرتب سازی با اساس محبوبیت{" "}
                      </option>
                      <option value="rating">
                        مرتب سازی با اساس میانگین امتیاز{" "}
                      </option>
                      <option value="date">مرتب سازی با اساس اخیر </option>
                      <option value="price-low">
                        مرتب سازی با اساس قیمت پایین به بالا
                      </option>
                      <option value="price-high">
                        مرتب سازی با اساس قیمت بالا به پایین
                      </option>
                    </select>
                  </div>
                </div>
                <div className="toolbox-right">
                  <div className="toolbox-item toolbox-show select-box">
                    <select name="count" className="form-control">
                      <option value="9">نمایش 9</option>
                      <option value="12" selected="selected">
                        نمایش 12
                      </option>
                      <option value="24">نمایش 24</option>
                      <option value="36">نمایش 36</option>
                    </select>
                  </div>
                  <div className="toolbox-item toolbox-layout">
                    <Link
                      href="shop-banner-sidebar.html"
                      className="icon-mode-grid btn-layout active"
                    >
                      <i className="w-icon-grid"></i>
                    </Link>
                    <Link
                      href="shop-list.html"
                      className="icon-mode-list btn-layout"
                    >
                      <i className="w-icon-list"></i>
                    </Link>
                  </div>
                </div>
              </nav>
              <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                {data.length > 0 &&
                  data.map((item) => {
                    return (
                      <ProductWrap
                        key={item.id}
                        id={item.id}
                        productName={item.productName}
                        price={item.price}
                      />
                      // <div className="product-wrap" key={item.id}>
                      //   <div className="product text-center">
                      //     <figure className="product-media">
                      //       <Link  href={`/product/${item.id}`}>
                      //         <ProductImage src={media} />
                      //       </Link>
                      //       <div className="product-action-horizontal">
                      //         <Link
                      //           href="#"
                      //           className="btn-product-icon btn-cart w-icon-cart"
                      //           title="افزودن به سبد "
                      //         ></Link>
                      //         <Link
                      //           href="#"
                      //           className="btn-product-icon btn-wishlist w-icon-heart"
                      //           title="علاقه مندیها"
                      //         ></Link>
                      //         <Link
                      //           href="#"
                      //           className="btn-product-icon btn-compare w-icon-compare"
                      //           title="مقایسه"
                      //         ></Link>
                      //         <Link
                      //           href="#"
                      //           className="btn-product-icon btn-quickview w-icon-search"
                      //           title="نمایش سریع"
                      //         ></Link>
                      //       </div>
                      //     </figure>
                      //     <div className="product-details">
                      //       {/* <div className="product-cat">
                      //         <Link href="shop-banner-sidebar.html">الکترونیکی </Link>
                      //       </div> */}
                      //       <h3 className="product-name">
                      //         <Link  href={`/product/${item.id}`}>
                      //           {item.productName}
                      //         </Link>
                      //       </h3>
                      //       {/* <div className="ratings-container">
                      //         <div className="ratings-full">
                      //           <span
                      //             className="ratings"
                      //             style={{ width: "100%" }}
                      //           ></span>
                      //           <span className="tooltiptext tooltip-top"></span>
                      //         </div>
                      //         <Link
                      //           href="product-default.html"
                      //           className="rating-reviews"
                      //         >
                      //           (3 نظر )
                      //         </Link>
                      //       </div> */}
                      //       <div className="product-pa-wrapper">
                      //         <div className="product-price">
                      //           {item.price} تومان
                      //         </div>
                      //       </div>
                      //     </div>
                      //   </div>
                      // </div>
                    );
                  })}
              </div>

              {/* <div className="toolbox toolbox-pagination justify-content-between">
                <p className="showing-info mb-2 mb-sm-0">
                  نمایش <span>1-12 از 60</span>محصولات
                </p>
                <ul className="pagination">
                  <li className="prev disabled">
                    <Link 
                      href="#"
                      aria-label="Previous"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <i className="w-icon-long-arrow-right"></i>قبلی
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" href="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      2
                    </Link>
                  </li>
                  <li className="next">
                    <Link href="#" aria-label="Next">
                      بعدی <i className="w-icon-long-arrow-left"></i>
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default categoryProducts;
