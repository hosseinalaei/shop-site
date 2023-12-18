"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductWrap from "@/components/Product/ProductWrap";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import shopBanner from "../../assets/images/apple-banner.jpeg";
import appleLogo from "../../assets/images/apple_logo_1988.webp";
import sumsungLogo from "../../assets/images/Samsung-Logo.jpeg";
import xiaomiLogo from "../../assets/images/xiaomi-logo.jpeg";
import huaweiLogo from "../../assets/images/huawei-logo.jpeg";
import dariaLogo from "../../assets/images/daria-logo.webp";
import onePlus from "../../assets/images/Oneplus-logo.webp";
import nokia from "../../assets/images/nokia-logo.webp";
import FiltersDrawer from "@/components/FiltersDrawer/FiltersDrawer";
import Backdrop from "@/components/FiltersDrawer/Backdrop";

const categoryProducts = () => {
  const [data, setData] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [banner, setBanner] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  const getProdcts = async () => {
    try {
      setData([]);
      const response = await axios.post(
        "https://138.201.167.230:5050/Products/product-by-categories",
        { id: id[1] ? id[1] : id[0] }
      );

      if (response.status === 200) {
        console.log("pppppppp", response.data);
        setData(response.data);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const getMedia = async (src) => {
    try {
      // setBanner(null);
      const response = await axios.post(
        "https://138.201.167.230:5050/media/getmedia",
        [
          {
            id: id[1] ? id[1] : id[0],
            mediaFieldName: "categoryImageName",
          },
        ]
      );
      setBanner(response.data.data[0]);
      console.log("response.data.data[0] ", response.data.data[0]);
    } catch (error) {}
  };

  useEffect(() => {
    id && getMedia();
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

      <div className="page-content mb-10">
        <div className="container">
          <div
            className="mb-6"
            // style="background-image: url(assets/images/shop/banner2.jpg); background-color: #FFC74E;"
          >
            <div
              className="container banner-content"
              style={{
                background: `url(data:image/jpeg;base64,${banner?.mediaFieldName}) no-repeat center`,
                height: "200px",
              }}
            ></div>
            {/* <Image src={shopBanner} /> */}
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
                </div>
              </nav>
              <div className="product-wrapper row cols-xl-5 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                {data.status === "Success" ? (
                  data.data
                    .filter((item) => !item.isDelete)
                    .map((item) => {
                      return (
                        <ProductWrap
                          data={item}
                          key={item.id}
                          id={item.id}
                          productName={item.productName}
                          price={item.productColor[0]?.price}
                        />
                      );
                    })
                ) : (
                  <div className="text-center">محصولی یافت نشد</div>
                )}
              </div>

              <div className="toolbox toolbox-pagination justify-content-between">
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
              </div>
            </div>
            <FiltersDrawer showFilters={showFilters} />
            {showFilters && (
              <>
                <Backdrop close={() => setShowFilters(false)} />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default categoryProducts;
