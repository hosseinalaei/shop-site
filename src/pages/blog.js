import Image from "next/image";
import blog1 from "../assets/images/blog/1.jpg";
import blog2 from "../assets/images/blog/2.jpg";
import blog3 from "../assets/images/blog/3.jpg";
import blog4 from "../assets/images/blog/4.jpg";
import blog5 from "../assets/images/blog/5.jpg";
import blog6 from "../assets/images/blog/6.jpg";

const Blog = () => {
  return (
    <main className="main">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title mb-0">بلاگ</h1>
        </div>
      </div>

      <nav className="breadcrumb-nav mb-6">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <a href="/">خانه </a>
            </li>
            <li>
              <a href="#">بلاگ </a>
            </li>
            {/* <li>لیستی</li> */}
          </ul>
        </div>
      </nav>

      <div className="page-content mb-10 pb-2">
        <div className="container">
          <div className="row gutter-lg">
            <div className="main-content">
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <Image src={blog1} width="930" height="500" alt="blog" />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="#">مد </a>
                  </div>
                  <h4 className="">
                    <a href="post-single.html">
                      لباس مردانه تابستانی جدید پیدا شد
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                      در ستون و سطرآنچنان که لازم است …
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </a>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <a href="#" className="post-author">
                      جان دوو
                    </a>
                    -{" "}
                    <a href="#" className="post-date">
                      1401.1.23
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <Image src={blog2} width="930" height="500" alt="blog" />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="#">دیگر </a>,<a href="#">تکنولوژی </a>
                  </div>
                  <h4 className="">
                    <a href="post-single.html">
                      شناخت نیازها شرط اولیه طراحی است
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                      در ستون و سطرآنچنان که لازم است …
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </a>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <a href="#" className="post-author">
                      جان دوو
                    </a>
                    -{" "}
                    <a href="#" className="post-date">
                      1401.1.23
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <Image src={blog3} width="930" height="500" alt="blog" />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="#">لباس ها </a>
                  </div>
                  <h4 className="">
                    <a href="post-single.html">
                      گرافیک است. چاپگرها و متون بلکه روزنامه و
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                      در ستون و سطرآنچنان که لازم است …
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </a>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <a href="#" className="post-author">
                      جان دوو
                    </a>
                    -{" "}
                    <a href="#" className="post-date">
                      1401.1.23
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <Image src={blog4} width="930" height="500" alt="blog" />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="#">سبک زندگی </a>
                  </div>
                  <h4 className="">
                    <a href="post-single.html">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. با تولید سادگی نامفهوم
                      از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                      در ستون و سطرآنچنان که لازم است …
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </a>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <a href="#" className="post-author">
                      جان دوو
                    </a>
                    -{" "}
                    <a href="#" className="post-date">
                      1401.1.23
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <Image src={blog5} width="930" height="500" alt="blog" />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="#">سرگرمی </a>,<a href="#">سبک زندگی </a>,
                    <a href="#">دیگر </a>
                  </div>
                  <h4 className="">
                    <a href="post-single.html">
                      یک پست وبلاگ جالب با تصاویر ارائه می شود
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                      در ستون و سطرآنچنان که لازم است …
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </a>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <a href="#" className="post-author">
                      جان دوو
                    </a>
                    -{" "}
                    <a href="#" className="post-date">
                      1401.1.23
                    </a>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-2">
                <figure className="post-media br-sm">
                  <a href="post-single.html">
                    <Image src={blog6} width="930" height="500" alt="blog" />
                  </a>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <a href="#">مد </a>,<a href="#">تکنولوژی </a>
                  </div>
                  <h4 className="">
                    <a href="post-single.html">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </a>
                  </h4>
                  <div className="post-content">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
                      متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                      از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                      در ستون و سطرآنچنان که لازم است …
                    </p>
                    <a
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </a>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <a href="#" className="post-author">
                      جان دوو
                    </a>
                    -{" "}
                    <a href="#" className="post-date">
                      1401.1.23
                    </a>
                  </div>
                </div>
              </article>
              {/* <ul className="pagination justify-content-center">
                <li className="prev disabled">
                  <a
                    href="#"
                    aria-label="قبلی"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <i className="w-icon-long-arrow-right"></i>قبلی
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="next">
                  <a href="#" aria-label="بعدی">
                    بعدی <i className="w-icon-long-arrow-left"></i>
                  </a>
                </li>
              </ul> */}
            </div>

            <aside className="sidebar right-sidebar blog-sidebar sidebar-fixed sticky-sidebar-wrapper">
              <div className="sidebar-overlay">
                <a href="#" className="sidebar-close">
                  <i className="close-icon"></i>
                </a>
              </div>
              <a href="#" className="sidebar-toggle">
                <i className="fas fa-chevron-left"></i>
              </a>
              <div className="sidebar-content">
                <div className="sticky-sidebar">
                  <div className="widget widget-search-form">
                    <div className="widget-body">
                      <form
                        action="#"
                        method="GET"
                        className="input-wrapper input-wrapper-inline"
                      >
                        <input
                          type="text"
                          className="form-control"
                          placeholder="در بلاگ جستجو کنید"
                          autocomplete="off"
                          required
                        />
                        <button className="btn btn-search">
                          <i className="w-icon-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>

                  <div className="widget widget-categories">
                    <h3 className="widget-title bb-no mb-0">دسته بندیها </h3>
                    <ul className="widget-body filter-items search-ul">
                      <li>
                        <a href="blog.html">لباس ها </a>
                      </li>
                      <li>
                        <a href="blog.html">سرگرمی </a>
                      </li>
                      <li>
                        <a href="blog.html">مد </a>
                      </li>
                      <li>
                        <a href="blog.html">سبک زندگی </a>
                      </li>
                      <li>
                        <a href="blog.html">بیشتر </a>
                      </li>
                      <li>
                        <a href="blog.html">کفش ها </a>
                      </li>
                      <li>
                        <a href="blog.html">تکتولوژی </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
