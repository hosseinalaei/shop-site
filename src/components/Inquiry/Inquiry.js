import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import okGif from "../../assets/images/check.gif";
import errorGif from "../../assets/images/cancel.gif";
import { useRouter } from "next/router";

const Inquiry = () => {
  const [nationalCode, setNationalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [estelam, setEstelam] = useState(null);
  const router = useRouter();

  const submitInquiry = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Inquiry/Inquiry",
        {
          //   id: "5cd472c4-1584-45ac-8906-89655742a005",
          //   isDelete: false,
          //   createDate: "2023-09-05T13:03:42.869Z",
          //   lastUpdateDate: "2023-09-05T13:03:42.869Z",
          phoneNumber: phoneNumber,
          nationalId: nationalCode,
        }
      );
      if (response.status === 200) {
        setEstelam(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const payment = async () => {
    const body = {
      amount: 1000,
      description: "test",
      userId: "5cd472c4-1584-45ac-8906-89655742a005",
    };
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/payment/pay-order",
        body
      );
      if (response.status === 200) {
        console.log(response.data.data.redirectUrl);
        router.push(response.data.data.redirectUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center text-center">
      <h3>فرم استعلام</h3>
      {(!estelam || estelam.status === "Error") && (
        <form onSubmit={submitInquiry}>
          <div className="">
            <div className="form-group">
              {/* <label htmlFor="firstname">کدملی:</label> */}
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="کدملی"
                className="form-control form-control-md"
                // value={userInfo?.firstName}
                onChange={(e) => setNationalCode(e.target.value)}
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="firstname">موبایل:</label> */}
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="موبایل"
                className="form-control form-control-md"
                // value={userInfo?.firstName}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button className="btn btn-primary btn-rounded">ارسال</button>
            </div>
          </div>
        </form>
      )}
      <div className="text-center">
        {estelam?.status === "Error" && <Image src={errorGif} />}
        {estelam?.status === "Success" && <Image src={okGif} />}
      </div>
      <h4 className="pt-4">{estelam?.data?.message}</h4>
      {estelam?.status === "Success" && (
        <button class="btn btn-primary btn-block btn-rounded" onClick={payment}>
          پرداخت
        </button>
      )}
    </div>
  );
};

export default Inquiry;
