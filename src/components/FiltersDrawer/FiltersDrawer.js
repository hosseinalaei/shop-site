import { separate } from "@/utils/helper";
import axios from "axios";
import { useEffect, useState } from "react";

const FiltersDrawer = ({ showFilters }) => {
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);
  const [attributes, setAttributes] = useState([]);
  const [productspecs, setProductspecs] = useState([
    {
      specName: "string",
      specValue: "string",
    },
  ]);

  const getAttributes = async () => {
    try {
      const response = await axios.get(
        "https://138.201.167.230:5050/Specification/getActiveAttributes"
      );
      setAttributes(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log("get att error", error);
    }
  };

  useEffect(() => {
    getAttributes();
  }, []);

  const submitFilter = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Search/filter-products",
        {
          startPrice: +startPrice,
          endPrice: +endPrice,
          productspecs: productspecs,
        }
      );
      console.log("response filter", response);
    } catch (error) {
      console.log("filter submit error", error);
    }
  };

  let drawerClasses = "side-drawer";
  if (showFilters) {
    drawerClasses = "side-drawer open";
  }
  const openStyle = showFilters
    ? {
        webkitTransform: " translateX(0)",
        transform: "translateX(0)",
        opacity: 1,
      }
    : {};

  const filterHandler = (e) => {
    setEndPrice(e.target.value);
  };
  console.log("setProductspecs", productspecs);
  return (
    <aside
      className={`sidebar shop-sidebar left-sidebar sticky-sidebar-wrapper ${drawerClasses}`}
    >
      {/* <div className="sidebar-overlay"></div>
      <Link className="sidebar-close" href="#">
        <i className="close-icon"></i>
      </LinkclassName=> */}
      <form onSubmit={submitFilter}>
        <div className="sidebar-content scrollable" style={openStyle}>
          <div className="filter-actions">
            <label>فیلترها:</label>
            {/* <Link href="#" className="btn btn-dark btn-link filter-clean">
            پاک کردن همه{" "}
          </Linkhref=> */}
          </div>

          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <span>قیمت </span>
            </h3>
            <div className="widget-body">
              <div className="d-flex w-full">
                <span className="pr-1">از 0</span>
                <input
                  type="range"
                  min={0}
                  max={100000000}
                  onChange={filterHandler}
                />
                <span className="pl-1">تا {separate(100000000)}</span>
              </div>
              <div className="mt-2">
                <span>قیمت انتخاب شده {separate(endPrice)} تومان</span>
              </div>
              {/* <form className="price-range">
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
              <Link href="#" className="btn btn-primary btn-rounded">
                برو{" "}
              </Linkhref=>
            </form> */}
            </div>
          </div>

          {attributes.map((att) => {
            return (
              <div className="widget widget-collapsible" key={att.id}>
                <h3 className="widget-title">
                  <span>{att.name} </span>
                </h3>
                <ul className="widget-body filter-items item-check">
                  {att.value.map((attValue) => {
                    return (
                      <li key={attValue.id}>
                        <div className="form-group checkbox d-flex align-items-center">
                          <input
                            value={attValue.id}
                            type="checkbox"
                            className=" checkbox-round mr-1"
                            // onChange={() =>
                            //   setProductspecs([
                            //     ...productspecs,
                            //     {
                            //       specName: attValue.name,
                            //       specValue: attValue.id,
                            //     },
                            //   ])
                            // }
                          />
                          {attValue.name}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          <div>
            <button
              type="submit"
              className="btn btn-primary btn-block btn-rounded"
            >
              فیلتر
            </button>
          </div>
        </div>
      </form>
    </aside>
  );
};

export default FiltersDrawer;
