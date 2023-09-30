import { useCartContext } from "@/contexts/contex";
import FooterCartThumbs from "./FooterCartThumbs";
import Link from "next/link";
// import ProductImage from "../Product/ProductImage";

const StickyFooter = () => {
  const { cart, remove } = useCartContext();
  return (
    <div className="sticky-footer sticky-content fix-bottom">
      <Link prefetch={false} href={`/`} className="sticky-link active">
        <i className="w-icon-home"></i>
        <p>خانه</p>
      </Link>
      <Link prefetch={false} href={`/shop`} className="sticky-link">
        <i className="w-icon-category"></i>
        <p>فروشگاه </p>
      </Link>
      <Link prefetch={false} href={`/my-account`} className="sticky-link">
        <i className="w-icon-account"></i>
        <p>حساب کاربری </p>
      </Link>
      <div className="cart-dropdown dir-up">
        <Link prefetch={false} href="#" className="sticky-link">
          <i className="w-icon-cart"> </i>
          <p>
            سبد خرید{" "}
            <span className="cart-count" style={{ top: "10px", left: "10px" }}>
              {cart?.length}
            </span>
          </p>
        </Link>
        <div className="dropdown-box">
          <div className="products">
            {cart?.map((item) => (
              <div className="product product-cart" key={item.id}>
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">{item.title}</a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">
                      {item.productPrice} تومان
                    </span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="#">
                    {cart && <FooterCartThumbs src={item.productId} />}
                  </a>
                </figure>
                <button
                  className="btn btn-link btn-close"
                  aria-label="button"
                  onClick={() => remove(item.productId)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ))}

            {/* <div className="product product-cart">
              <div className="product-detail">
                <h3 className="product-name">
                  <a href="#">
                    پینا کاربردی آبی
                    <br />
                    لباس جین جلو
                  </a>
                </h3>
                <div className="price-box">
                  <span className="product-quantity">1</span>
                  <span className="product-price">32000 تومان</span>
                </div>
              </div>
              <figure className="product-media">
                <a href="#">
                  <img
                    src="assets/images/cart/product-2.jpg"
                    alt="product"
                    width="84"
                    height="94"
                  />
                </a>
              </figure>
              <button className="btn btn-link btn-close" aria-label="button">
                <i className="fas fa-times"></i>
              </button>
            </div> */}
          </div>

          <div className="cart-total">
            <label>مجموع: </label>
            <span className="price">58000 تومان</span>
          </div>

          <div className="cart-action">
            <Link
              href={`/cart`}
              className="btn btn-dark btn-outline btn-rounded"
            >
              سبد خرید{" "}
            </Link>
            <a href="checkout.html" className="btn btn-primary  btn-rounded">
              پرداخت{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="header-search hs-toggle dir-up">
        <a href="#" className="search-toggle sticky-link">
          <i className="w-icon-search"></i>
          <p>جستجو </p>
        </a>
        <form action="#" className="input-wrapper">
          <input
            type="text"
            className="form-control"
            name="search"
            autoComplete="off"
            placeholder="جستجو"
            required
          />
          <button className="btn btn-search" type="submit">
            <i className="w-icon-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default StickyFooter;
