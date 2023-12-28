import { useCallback, useRef, useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import SearchResult from "./SearchResult";
import Spinner from "../Loading/Spinner";

const search = () => {
  const [active, setActive] = useState(false);
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const searchRequest = async () => {
      setActive(true);
      try {
        setLoading(true);
        const response = await axios.post(
          "https://138.201.167.230:5050/Search/simpleSearch",
          {
            text: query,
          }
        );
        if (response.data.status === "Success") {
          setSearchData(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    query?.length > 2 && searchRequest();
    query?.length === 0 && setActive(false);
  }, [query]);

  const onFocus = () => {
    setActive(true);
    window.addEventListener("click", onClick);
  };
  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      setQuery("");
      setSearchData([]);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <>
      <div
        className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
        ref={searchRef}
      >
        {/* <div className="select-box">
          <select id="category" name="category" className="pb-0">
            <option value="">دسته بندیها </option>
            <option value="4">مدل </option>
            <option value="5">مبلمان </option>
            <option value="6">کفش </option>
            <option value="7">ورزشی </option>
            <option value="8">بازی </option>
            <option value="9">کامپیوتر </option>
            <option value="10">الکترونیکی </option>
            <option value="11">آشپرخانه </option>
            <option value="12">لباس </option>
          </select>
        </div> */}
        <input
          type="text"
          className="form-control"
          name="search"
          id="search"
          placeholder="جستجو کنید ..."
          required
          onChange={(e) => setQuery(e.target.value)}
          onFocus={onFocus}
        />

        <button className="btn btn-search" type="submit">
          <i className="w-icon-search"></i>
        </button>
        {active && searchData.length > 0 && (
          <SearchResult
            result={searchData}
            loading={loading}
            onClick={onClick}
          />
        )}
      </div>
    </>
  );
};

export default search;
