import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Spinner from "../Loading/Spinner";

const SearchResult = ({ result, loading, onClick }) => {
  //   const [media, setMedia] = useState("");
  //   const getMedia = async (imageId) => {
  //     try {
  //       const response = await axios.post(
  //         "https://138.201.167.230:5050/media/getmedia",
  //         {
  //           id: imageId,
  //           mediaFieldName: "productImageName",
  //         }
  //       );
  //       if (response.data.status === "Success") {
  //         setMedia(response.data.data);
  //         console.log("mediiiiiaaaaa", response.data.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     // return <Image src={media} />;
  //   };
  return (
    <>
      <ul
        className="bg-white"
        style={{
          listStyle: "none",
          overflow: "hidden",
          margin: "9px 0 0",
          padding: "0",
          position: "absolute",
          top: "100%",
          left: "0",
          right: "0",
          zIndex: "1000",
          border: "1px solid #ccc",
        }}
      >
        {/* {loading && <Spinner />} */}
        {result?.map((item) => {
          //   {
          //     getMedia(item.id);
          //   }
          return (
            <li
              className="mt-1 mb-1 pl-4"
              key={item.id}
              //   onClick={window.removeEventListener("click", onClick)}
            >
              <Link href={`/product/${item.id}`} className="text-sm">
                {/* <Image src={media} width={100} height={100} /> */}
                {item.productName}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SearchResult;
