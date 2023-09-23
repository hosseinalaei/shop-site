import { useEffect, useState } from "react";
import Link from "next/link";

const DropdownBox = () => {
  const [catMenu, setCatMenu] = useState([]);
  const [subMenu, setSubMenu] = useState([]);
  const getCategories = async () => {
    try {
      const response = await fetch(
        "https://138.201.167.230:5050/Category/product-active-categories"
      );
      const resData = await response.json();
      const categoryData = await resData.data.filter(
        (item) => item.parentId === null
      );
      const subCategory = await resData.data.filter(
        (item) => item.parentId !== null
      );
      setCatMenu(categoryData);
      setSubMenu(subCategory);
    } catch (error) {
      console.log("getCategories error", error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="dropdown-box text-default">
      <ul className="menu vertical-menu category-menu">
        {catMenu?.map((item) => {
          const sub = subMenu.filter((el) => el.parentId === item.id);
          return (
            <li key={item.id}>
              <Link href={`/category/${item.id}`}>{item.title}</Link>
              {sub.length !== 0 && (
                <ul className="megamenu">
                  <li>
                    <h4 className="menu-title">براساس برند </h4>
                    <hr className="divider" />
                    <ul>
                      {sub.map((item) => {
                        return (
                          <li key={item.id}>
                            <Link
                              href={`/category/${item.parentId}/${item.id}/`}
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownBox;
