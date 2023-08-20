const StickyFooter = () => {
    return ( 
        <div className="sticky-footer sticky-content fix-bottom">
        <a href="demo1.html" className="sticky-link active">
          <i className="w-icon-home"></i>
          <p>خانه</p>
        </a>
        <a href="shop-banner-sidebar.html" className="sticky-link">
          <i className="w-icon-category"></i>
          <p>فروشگاه </p>
        </a>
        <a href="my-account.html" className="sticky-link">
          <i className="w-icon-account"></i>
          <p>حساب کاربری </p>
        </a>
        <div className="cart-dropdown dir-up">
          <a href="cart.html" className="sticky-link">
            <i className="w-icon-cart"></i>
            <p>سبد خرید </p>
          </a>
          <div className="dropdown-box">
            <div className="products">
              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">
                      ما از پرداخت مطمئن استفاده می کنیم
                      <br />
                      کفش دونده تیک
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">25600 تومان</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="#">
                    <img
                      src="assets/images/cart/product-1.jpg"
                      alt="product"
                      height="84"
                      width="94"
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="product product-cart">
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
              </div>
            </div>

            <div className="cart-total">
              <label>مجموع: </label>
              <span className="price">58000 تومان</span>
            </div>

            <div className="cart-action">
              <a
                href="cart.html"
                className="btn btn-dark btn-outline btn-rounded"
              >
                سبد خرید{" "}
              </a>
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
}
 
export default StickyFooter;