import Link from "next/link";
import ProductImage from "./ProductImage";

const ProductWrap = ({ data }) => {
  return (
    <div className="product-wrap" key={data?.id}>
      <div className="product text-center">
        <figure
          className="product-media"
          // style={{ width: "250px", height: "250px" }}
        >
          <Link prefetch={false} href={`/product/${data?.id}`}>
            <ProductImage src={data?.id} />
          </Link>
          <div className="product-action-horizontal">
            <Link
              href="#"
              className="btn-product-icon btn-cart w-icon-cart"
              title="افزودن به سبد "
            ></Link>
            <Link
              href="#"
              className="btn-product-icon btn-wishlist w-icon-heart"
              title="علاقه مندیها"
            ></Link>
            <Link
              href="#"
              className="btn-product-icon btn-compare w-icon-compare"
              title="مقایسه"
            ></Link>
            <Link
              href="#"
              className="btn-product-icon btn-quickview w-icon-search"
              title="نمایش سریع"
            ></Link>
          </div>
        </figure>
        <div className="product-details">
          {/* <div className="product-cat">
                              <Link href="shop-banner-sidebar.html">الکترونیکی </Link>
                            </div> */}
          <h3 className="product-name">
            <Link href={`/product/${data?.id}`}>{data?.productName}</Link>
          </h3>
          {/* <div className="ratings-container">
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
                            </div> */}
          <div className="product-pa-wrapper">
            <div className="product-price">
              {data?.isExists ? (
                `${data?.productColor[0]?.price} تومان`
              ) : (
                <span className="text-error">ناموجود</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWrap;
