import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Verify = () => {
  const [refNum, setRefNum] = useState(0);
  const router = useRouter();
  const data = router.query;

  const getVerify = async () => {
    try {
      const response = await axios.post(
        "https://138.201.167.230:5050/Payment/payment-result",
        {
          userId: "5cd472c4-1584-45ac-8906-89655742a005",
          amount: 1000,
          authority: data?.Authority,
        }
      );
      if (response.status === 200) {
        setRefNum(response.data.data.refId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    data.Authority && getVerify();
  }, [data]);
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "green" }}>پرداخت با موفقیت انجام شد</h2>
      <h3>شماره پیگیری: {refNum}</h3>
    </div>
  );
};

export default Verify;
