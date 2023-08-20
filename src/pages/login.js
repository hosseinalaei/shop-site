"use client";
import Footer from "@/components/Footer/Footer";
import StickyFooter from "@/components/Footer/StickyFooter";
import LoginComponent from "@/components/Login/LoginComponent";

const Login = () => {
  return (
    <>
      <div className="page-wrapper">
        <main className="main login-page">
          <div className="page-header">
            <div className="container">
              <h1 className="page-title mb-0">حساب کاربری</h1>
            </div>
          </div>

          <nav className="breadcrumb-nav">
            <div className="container">
              <ul className="breadcrumb">
                <li>
                  <a href="demo1.html">خانه </a>
                </li>
                <li>حساب کاربری</li>
              </ul>
            </div>
          </nav>
          <div className="page-content">
            <div className="container">
              <LoginComponent />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
