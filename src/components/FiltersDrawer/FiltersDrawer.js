const FiltersDrawer = ({ showFilters }) => {
  let drawerClasses = "side-drawer";
  if (showFilters) {
    drawerClasses = "side-drawer open";
  }
  return (
    <aside
      className={`sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper ${drawerClasses}`}
    >
      {/* <div className="sidebar-overlay"></div>
      <a className="sidebar-close" href="#">
        <i className="close-icon"></i>
      </a> */}

      <div
        className="sidebar-content scrollable"
        style={{
          webkitTransform: " translateX(0)",
          transform: "translateX(0)",
          opacity: 1,
        }}
      >
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
  );
};

export default FiltersDrawer;
