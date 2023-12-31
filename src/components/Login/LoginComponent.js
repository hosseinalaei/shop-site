import useToken from "@/hooks/useToken";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../components/shared/Button";

const LoginComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [loading, setLoading] = useState(false);
  // const [storedValue, setToken] = useToken();
  const router = useRouter();

  const submitPhoneNumber = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch(
        "https://138.201.167.230:5050/user/checkMobile",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            Mobile: phoneNumber,
          }),
        }
      );

      const resData = await response.json();
      if (response.status === 200) {
        toast.success(resData.data.message, {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        setPhoneSubmitted(true);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  const submitVerifyCode = async (e) => {
    setLoading(true);

    e.preventDefault();
    try {
      const response = await fetch("https://138.201.167.230:5050/user/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          mobile: phoneNumber,
          verifyCode: verifyCode,
        }),
      });
      const resData = await response.json();
      if (response.status === 200) {
        toast.success("ورود با موفقیت انجام شد", {
          position: toast.POSITION.TOP_CENTER,
          theme: "colored",
        });
        setLoading(false);

        console.log(resData.data);
        localStorage.setItem("user", JSON.stringify(resData.data));
        // setToken(resData.data)
        router.push("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="login-popup" style={{ margin: "0 auto" }}>
      <div className="tab tab-nav-boxed tab-nav-center tab-nav-underline">
        <ul className="nav nav-tabs text-uppercase" role="tablist">
          <li className="nav-item">
            <span href="#" className="nav-link active">
              ورود{" "}
            </span>
          </li>
        </ul>
        <form
          className="tab-content"
          onSubmit={!phoneSubmitted ? submitPhoneNumber : submitVerifyCode}
        >
          <div className="tab-pane active" id="sign-in">
            <div className="form-group">
              {!phoneSubmitted ? (
                <>
                  <label>شماره موبایل:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mobile"
                    id="mobile"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                  />
                </>
              ) : (
                <>
                  <label>کد ارسال شده:</label>
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    id="mobile"
                    onChange={(e) => setVerifyCode(e.target.value)}
                    value={verifyCode}
                  />
                </>
              )}
            </div>
            {/* <div className="form-group mb-0">
              <label>رمز عبور *</label>
              <input
                type="text"
                className="form-control"
                name="password"
                id="password"
                required
              />
            </div> */}
            <div className="form-checkbox d-flex align-items-center justify-content-between">
              <input
                type="checkbox"
                className="custom-checkbox"
                id="remember1"
                name="remember1"
                required=""
              />
              {/* <label htmlFor="remember1">مرا به خاطر بسپار </label>
              <Link href="#">فراموشی رمز عبور؟</Link> */}
            </div>
            <Link
              href="#"
              // onClick={!phoneSubmitted ? submitPhoneNumber : submitVerifyCode}
              className={`btn btn-primary ${loading ? "button-loading" : ""}`}
              onClick={!phoneSubmitted ? submitPhoneNumber : submitVerifyCode}
            >
              ارسال
            </Link>
            {/* <Button isLoading={true}>ارسال</Button> */}
          </div>
        </form>
        {/* <p className="text-center">ورود با حساب اجتماعی</p>
        <div className="social-icons social-icon-border-color d-flex justify-content-center">
          <Link 
            href="#"
            className="social-icon social-facebook w-icon-facebook"
          ></Link>
          <Link href="#" className="social-icon social-twitter w-icon-twitter"></Link>
          <Link href="#" className="social-icon social-google fab fa-google"></Link>
        </div> */}
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginComponent;
