import Image from "next/image";
import Link from "next/link";
import shopBanner from "../assets/images/17030857725319.jpeg";
import { useState } from "react";
import ProductWrap from "@/components/Product/ProductWrap";
import FiltersDrawer from "@/components/FiltersDrawer/FiltersDrawer";
import Backdrop from "@/components/FiltersDrawer/Backdrop";
// import PageLoader from "@/components/PageLoader/PageLoader";

const shop = ({ pageData: data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //   const ids = filteredData.map(({ title }) => title);
  // const filtered = books.filter(({ title }, index) =>
  //     !ids.includes(title, index + 1));

  console.log("aaaaAAaAA", data);
  console.log("shop filteredData", filteredData);
  return (
    <div className="page-content mb-10">
      <div className="container">
        <div
          className="mb-6"
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
          <Link 
            href="shop-banner-sidebar.html"
            className="btn btn-dark btn-rounded btn-icon-right"
          >
            کاووش کنید<i className="w-icon-long-arrow-left"></i>
          </Link>
        </div> */}
        </div>

        <div className="shop-content">
          <div className="main-content">
            <nav className="toolbox sticky-toolbox sticky-content fix-top">
              <div className="toolbox-left">
                <div
                  onClick={() => setShowFilters(!showFilters)}
                  className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle btn-icon-left"
                >
                  <i className="w-icon-category"></i>
                  <span>فیلتر ها </span>
                </div>
                <div className="toolbox-item toolbox-sort select-box text-dark">
                  <label>مرتب سازی با اساس :</label>
                  <select name="orderby" className="form-control">
                    <option value="default">مرتب سازی پیش فرض </option>
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
              {/* <div className="toolbox-right">
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
                    href="shop-fullwidth-banner.html"
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
              </div> */}
            </nav>
            <div
              className="product-wrapper row product-wrap-row"
              style={{ justifyContent: "flex-start" }}
            >
              {filteredData?.length > 0
                ? filteredData.map((item) => {
                    return <ProductWrap data={item} />;
                  })
                : data?.length > 0 &&
                  data.map((item) => {
                    return <ProductWrap data={item} />;
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
                    tabIndex="-1"
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
          <FiltersDrawer
            showFilters={showFilters}
            setFilteredData={setFilteredData}
            setShowFilters={setShowFilters}
          />
          {showFilters && (
            <>
              <Backdrop close={() => setShowFilters(false)} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default shop;

export const getServerSideProps = async () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  // Fetch data from external API

  const res = await fetch(
    `https://138.201.167.230:5050/Products/getAllactiveproducts`
  );
  const errorCode = res.status === 200 ? false : res.status;

  //handling redirect
  if (errorCode === 301) {
    const data = await res.json();
    return {
      redirect: {
        destination: data.payload.to,
      },
    };
  }

  const data = await res.json();
  const pageData = data.data.reverse();

  return { props: { pageData, errorCode } };
};
