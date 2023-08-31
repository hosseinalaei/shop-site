import Image from "next/image";
import shopBanner from "../assets/images/shop-banner.jpeg";

const shop2 = () => {
  return (
    <div className="page-content mb-10">
      <div
        className="shop-default-banner shop-boxed-banner banner d-flex align-items-center mb-6"
        // style="background-image: url(assets/images/shop/banner2.jpg); background-color: #FFC74E;"
      >
        <Image src={shopBanner} />
        {/* <div className="container banner-content">
          <h4 className="banner-subtitle font-weight-bold">
            مجموعه لوازم جانبی{" "}
          </h4>
          <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-10">
            ساعت هوشمند
          </h3>
          <a
            href="shop-banner-sidebar.html"
            className="btn btn-dark btn-rounded btn-icon-right"
          >
            کاووش کنید<i className="w-icon-long-arrow-left"></i>
          </a>
        </div> */}
      </div>

      <div className="container-fluid">
        <div className="shop-content">
          <div className="main-content">
            <nav className="toolbox sticky-toolbox sticky-content fix-top">
              <div className="toolbox-left">
                <a
                  href="#"
                  className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                        btn-icon-left"
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
                  <a
                    href="shop-fullwidth-banner.html"
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
            <div className="product-wrapper row cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
              <div className="product-wrap">
                <div className="product text-center">
                  <figure className="product-media">
                    <a href="product-default.html">
                      <img
                        src="assets/images/shop/1.jpg"
                        alt="Product"
                        width="300"
                        height="338"
                      />
                    </a>
                    <div className="product-action-horizontal">
                      <a
                        href="#"
                        className="btn-product-icon btn-cart w-icon-cart"
                        title="افزودن به سبد "
                      ></a>
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist w-icon-heart"
                        title="علاقه مندیها"
                      ></a>
                      <a
                        href="#"
                        className="btn-product-icon btn-compare w-icon-compare"
                        title="مقایسه"
                      ></a>
                      <a
                        href="#"
                        className="btn-product-icon btn-quickview w-icon-search"
                        title="نمایش سریع"
                      ></a>
                    </div>
                  </figure>
                  <div className="product-details">
                    <div className="product-cat">
                      <a href="shop-banner-sidebar.html">الکترونیکی </a>
                    </div>
                    <h3 className="product-name">
                      <a href="product-default.html">تلویزیون 3 بعدی</a>
                    </h3>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span
                          className="ratings"
                          style={{ width: "100%" }}
                        ></span>
                        <span className="tooltiptext tooltip-top"></span>
                      </div>
                      <a href="product-default.html" className="rating-reviews">
                        (3 نظر )
                      </a>
                    </div>
                    <div className="product-pa-wrapper">
                      <div className="product-price">480000 - 850000 تومان</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product text-center">
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/shop/4.jpg"
                      alt="Product"
                      width="300"
                      height="338"
                    />
                  </a>
                  <div className="product-action-horizontal">
                    <a
                      href="#"
                      className="btn-product-icon btn-cart w-icon-cart"
                      title="افزودن به سبد "
                    ></a>
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist w-icon-heart"
                      title="علاقه مندیها"
                    ></a>
                    <a
                      href="#"
                      className="btn-product-icon btn-compare w-icon-compare"
                      title="مقایسه"
                    ></a>
                    <a
                      href="#"
                      className="btn-product-icon btn-quickview w-icon-search"
                      title="نمایش سریع"
                    ></a>
                  </div>
                </figure>
                <div className="product-details">
                  <div className="product-cat">
                    <a href="shop-banner-sidebar.html">الکترونیکی </a>
                  </div>
                  <h3 className="product-name">
                    <a href="product-default.html">هشدار شارژ قابل اتصال</a>
                  </h3>
                  <div className="ratings-container">
                    <div className="ratings-full">
                      <span className="ratings" style={{ width: "60%" }}></span>
                      <span className="tooltiptext tooltip-top"></span>
                    </div>
                    <a href="product-default.html" className="rating-reviews">
                      (7 نظر )
                    </a>
                  </div>
                  <div className="product-pa-wrapper">
                    <div className="product-price">78000 تومان</div>
                  </div>
                </div>
              </div>
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

          <aside className="sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper">
            <div className="sidebar-overlay"></div>
            <a className="sidebar-close" href="#">
              <i className="close-icon"></i>
            </a>

            <div className="sidebar-content scrollable">
              <div className="filter-actions">
                <label>فیلتر :</label>
                <a href="#" className="btn btn-dark btn-link filter-clean">
                  پاک کردن همه{" "}
                </a>
              </div>

              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <span>تمام دسته بندیها</span>
                </h3>
                <ul className="widget-body filter-items search-ul">
                  <li>
                    <a href="#">تجهیزات جانبی </a>
                  </li>
                  <li>
                    <a href="#">نوزادان </a>
                  </li>
                  <li>
                    <a href="#">زیبایی </a>
                  </li>
                  <li>
                    <a href="#">تزیین </a>
                  </li>
                  <li>
                    <a href="#">الکترونیکی </a>
                  </li>
                  <li>
                    <a href="#">مد </a>
                  </li>
                  <li>
                    <a href="#">غذا </a>
                  </li>
                  <li>
                    <a href="#">مبلمان </a>
                  </li>
                  <li>
                    <a href="#">آشپزخانه </a>
                  </li>
                  <li>
                    <a href="#">مدیکال </a>
                  </li>
                  <li>
                    <a href="#">ورزشی </a>
                  </li>
                  <li>
                    <a href="#">ساعت </a>
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
                      <a href="#">0 - 99000 تومان</a>
                    </li>
                    <li>
                      <a href="#">100000 - 500000 تومان</a>
                    </li>
                    <li>
                      <a href="#">500000 - 1000000 تومان</a>
                    </li>
                    <li>
                      <a href="#">1000000 - 5000000 تومان</a>
                    </li>
                    <li>
                      <a href="#">5000000 تومان +</a>
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
                  <span>سایز </span>
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
                  <span>برند </span>
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
                    <a href="#">Skysuite Tech</a>
                  </li>
                  <li>
                    <a href="#">Sterling</a>
                  </li>
                </ul>
              </div>

              <div className="widget widget-collapsible">
                <h3 className="widget-title">
                  <span>رنگ </span>
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
                    <a href="#">زرد </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default shop2;