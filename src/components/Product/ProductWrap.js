// "use client";

import Link from "next/link";
import ProductImage from "./ProductImage";
import { useEffect, useState } from "react";

const ProductWrap = (props) => {
  // const [media, setMedia] = useState(null);

  // const getMedia = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://138.201.167.230:5050/media/getmedia",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           id: props.id,
  //           mediaFieldName: "productImageName",
  //         }),
  //       }
  //     );
  //     const resData = await response.json();
  //     if (response.status === 200) {
  //       setMedia(resData.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getMedia();
  // }, [props.id]);
  return (
    <div className="product-wrap" key={props.key}>
      <div className="product text-center">
        <figure
          className="product-media"
          style={{ width: "250px", height: "250px" }}
        >
          <Link href={`/product/${props.id}`}>
            <ProductImage src={props.id} />
          </Link>
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
          {/* <div className="product-cat">
                              <a href="shop-banner-sidebar.html">الکترونیکی </a>
                            </div> */}
          <h3 className="product-name">
            <Link href={`/product/${props.id}`}>{props.productName}</Link>
          </h3>
          {/* <div className="ratings-container">
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
                            </div> */}
          <div className="product-pa-wrapper">
            <div className="product-price">{props.price} تومان</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWrap;
