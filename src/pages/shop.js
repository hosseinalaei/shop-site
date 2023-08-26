"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import shopBanner from "../assets/images/shop-banner.jpeg";
import ProductWrap from "@/components/Product/ProductWrap";

const Shop = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch(
        "http://138.201.167.230:5050/Products/getLastProduct"
      );
      const resData = await response.json();
      if (response.status === 200) {
        setData(resData.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="main">
      <nav className="breadcrumb-nav">
        <div className="container-fluid">
          <ul className="breadcrumb bb-no">
            <li>
              <a href="demo15.html">خانه </a>
            </li>
            <li>فروشگاه</li>
          </ul>
        </div>
      </nav>

      <div className="page-content mb-10">
        <div className="container-fluid">
          <div className="shop-default-banner shop-boxed-banner banner d-flex align-items-center mb-6 br-xs">
            <Image src={shopBanner} />
          </div>

          <div className="shop-content row gutter-lg">
            <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
              <div className="sidebar-overlay"></div>
              <a className="sidebar-close" href="#">
                <i className="close-icon"></i>
              </a>

              <div className="sidebar-content scrollable">
                <div className="sticky-sidebar">
                  <div className="filter-actions">
                    <label>فیلتر :</label>
                    <a href="#" className="btn btn-dark btn-link filter-clean">
                      پاک کردن همه{" "}
                    </a>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>تمام دسته بندیها </label>
                    </h3>
                    <ul className="widget-body filter-items search-ul">
                      <li>
                        <a href="#">تجهیزات جانبی </a>
                      </li>
                      <li>
                        <a href="#">کوله پشتی </a>
                      </li>
                      <li>
                        <a href="#">دوربین ها </a>
                      </li>
                      <li>
                        <a href="#">الکترونیکی </a>
                      </li>
                      <li>
                        <a href="#">مدلینگ </a>
                      </li>
                      <li>
                        <a href="#">بچه ها </a>
                      </li>
                      <li>
                        <a href="#">آشپزخانه </a>
                      </li>
                      <li>
                        <a href="#">نورپردازی </a>
                      </li>
                      <li>
                        <a href="#">پیراهن </a>
                      </li>
                      <li>
                        <a href="#">کفش ها </a>
                      </li>
                      <li>
                        <a href="#">لباس ورزشی </a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>قیمت</label>
                    </h3>
                    <div className="widget-body">
                      <ul className="filter-items search-ul">
                        <li>
                          <a href="#">زیر 89000 تومان</a>
                        </li>
                        <li>
                          <a href="#">89000 تومان - 99000 تومان</a>
                        </li>
                        <li>
                          <a href="#">99000 تومان - 100000 تومان</a>
                        </li>
                        <li>
                          <a href="#">100000 تومان - 50000 تومان</a>
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
                        <a href="#" className="btn btn-primary btn-rounded">
                          برو{" "}
                        </a>
                      </form>
                    </div>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>سایز</label>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <a href="#">خبلی بزرگ </a>
                      </li>
                      <li>
                        <a href="#">بزرگ </a>
                      </li>
                      <li>
                        <a href="#">متوسط </a>
                      </li>
                      <li>
                        <a href="#">کوچک </a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>برند </label>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <a href="#">گروه خودرو زیبا </a>
                      </li>
                      <li>
                        <a href="#">علف سبز </a>
                      </li>
                      <li>
                        <a href="#">Node Js</a>
                      </li>
                      <li>
                        <a href="#">NS8</a>
                      </li>
                      <li>
                        <a href="#">Red</a>
                      </li>
                      <li>
                        <a href="#">Sass</a>
                      </li>
                      <li>
                        <a href="#">Skysuite Tech</a>
                      </li>
                      <li>
                        <a href="#">Sterling</a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>رنگ </label>
                    </h3>
                    <ul className="widget-body filter-items item-check">
                      <li>
                        <a href="#">سیاه</a>
                      </li>
                      <li>
                        <a href="#">آبی</a>
                      </li>
                      <li>
                        <a href="#">قهوه ای</a>
                      </li>
                      <li>
                        <a href="#">سبز </a>
                      </li>
                      <li>
                        <a href="#">خاکستری </a>
                      </li>
                      <li>
                        <a href="#">نارنجی </a>
                      </li>
                      <li>
                        <a href="#">صورتی </a>
                      </li>
                      <li>
                        <a href="#">زرد </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>

            <div className="main-content">
              <nav className="toolbox sticky-toolbox sticky-content fix-top">
                <div className="toolbox-left">
                  <a
                    href="#"
                    className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                    btn-icon-left d-block d-lg-none"
                  >
                    <i className="w-icon-category"></i>
                    <span>فیلتر ها </span>
                  </a>
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
                  <div className="toolbox-item toolbox-show select-box mr-0">
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
                    <a
                      href="shop-boxed-banner.html"
                      className="icon-mode-grid btn-layout active"
                    >
                      <i className="w-icon-grid"></i>
                    </a>
                    <a
                      href="shop-list.html"
                      className="icon-mode-list btn-layout"
                    >
                      <i className="w-icon-list"></i>
                    </a>
                  </div>
                </div>
              </nav>
              <div className="product-wrapper row cols-xl-6 cols-lg-4 cols-md-3 cols-2">
                {data.length > 0 &&
                  data.map((item) => {
                    return (
                      <ProductWrap
                        key={item.id}
                        id={item.id}
                        productName={item.productName}
                        price={item.price}
                      />
                      // <div className="product-wrap">
                      //   <div className="product text-center">
                      //     <figure className="product-media">
                      //       <Link href={`/product/${item.id}`}>
                      //         <Image
                      //           src={`data:image/jpeg;base64,${media}`}
                      //           alt="Product"
                      //           width="300"
                      //           height="338"
                      //         />
                      //       </Link>
                      //       {/* <div className="product-label-group">
                      //   <label className="product-label label-hot">
                      //     داغ{" "}
                      //   </label>
                      // </div> */}
                      //       <div className="product-action-horizontal">
                      //         <a
                      //           href="#"
                      //           className="btn-product-icon btn-cart w-icon-cart"
                      //           title="افزودن به سبد "
                      //         ></a>
                      //         <a
                      //           href="#"
                      //           className="btn-product-icon btn-wishlist w-icon-heart"
                      //           title="علاقه مندیها"
                      //         ></a>
                      //         <a
                      //           href="#"
                      //           className="btn-product-icon btn-compare w-icon-compare"
                      //           title="مقایسه"
                      //         ></a>
                      //         <a
                      //           href="#"
                      //           className="btn-product-icon btn-quickview w-icon-search"
                      //           title="نمایش سریع"
                      //         ></a>
                      //       </div>
                      //     </figure>
                      //     <div className="product-details">
                      //       <h4 className="product-name">
                      //         <a href="product-default.html">
                      //           {item.productName}
                      //         </a>
                      //       </h4>
                      //       <div className="product-price">
                      //         <ins className="new-price">
                      //           {item.price} تومان
                      //         </ins>
                      //         {/* <del className="old-price">64000 تومان</del> */}
                      //       </div>
                      //     </div>
                      //   </div>
                      // </div>
                    );
                  })}
              </div>

              <div className="toolbox toolbox-pagination justify-content-between">
                <p className="showing-info mb-2 mb-sm-0">
                  نمایش <span>1-12 از 60</span>محصولات
                </p>
                <ul className="pagination">
                  <li className="prev disabled">
                    <a
                      href="#"
                      aria-label="Previous"
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      <i className="w-icon-long-arrow-right"></i>قبلی
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="next">
                    <a href="#" aria-label="Next">
                      بعدی <i className="w-icon-long-arrow-left"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
