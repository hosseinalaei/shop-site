import Link from "next/link";
import ProductImage from "./ProductImage";

const ProductWrap = (props) => {
  return (
    <div className="product-wrap" key={props.key}>
      <div className="product text-center">
        <figure className="product-media">
          <Link href={`/product/${props.id}`}>
            <ProductImage src={props.media} />
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
