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
              <Link href="/">خانه </Link>
            </li>
            <li>
              <Link href="#">بلاگ </Link>
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
                  <Link href="post-single.html">
                    <Image src={blog1} width="930" height="500" alt="blog" />
                  </Link>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <Link href="#">مد </Link>
                  </div>
                  <h4 className="">
                    <Link href="post-single.html">
                      لباس مردانه تابستانی جدید پیدا شد
                    </Link>
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
                    <Link
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </Link>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <Link href="#" className="post-author">
                      جان دوو
                    </Link>
                    -{" "}
                    <Link href="#" className="post-date">
                      1401.1.23
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                <figure className="post-media br-sm">
                  <Link href="post-single.html">
                    <Image src={blog2} width="930" height="500" alt="blog" />
                  </Link>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <Link href="#">دیگر </Link>,<Link href="#">تکنولوژی </Link>
                  </div>
                  <h4 className="">
                    <Link href="post-single.html">
                      شناخت نیازها شرط اولیه طراحی است
                    </Link>
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
                    <Link
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </Link>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <Link href="#" className="post-author">
                      جان دوو
                    </Link>
                    -{" "}
                    <Link href="#" className="post-date">
                      1401.1.23
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                <figure className="post-media br-sm">
                  <Link href="post-single.html">
                    <Image src={blog3} width="930" height="500" alt="blog" />
                  </Link>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <Link href="#">لباس ها </Link>
                  </div>
                  <h4 className="">
                    <Link href="post-single.html">
                      گرافیک است. چاپگرها و متون بلکه روزنامه و
                    </Link>
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
                    <Link
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </Link>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <Link href="#" className="post-author">
                      جان دوو
                    </Link>
                    -{" "}
                    <Link href="#" className="post-date">
                      1401.1.23
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                <figure className="post-media br-sm">
                  <Link href="post-single.html">
                    <Image src={blog4} width="930" height="500" alt="blog" />
                  </Link>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <Link href="#">سبک زندگی </Link>
                  </div>
                  <h4 className="">
                    <Link href="post-single.html">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. با تولید سادگی نامفهوم
                      از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    </Link>
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
                    <Link
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </Link>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <Link href="#" className="post-author">
                      جان دوو
                    </Link>
                    -{" "}
                    <Link href="#" className="post-date">
                      1401.1.23
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-4">
                <figure className="post-media br-sm">
                  <Link href="post-single.html">
                    <Image src={blog5} width="930" height="500" alt="blog" />
                  </Link>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <Link href="#">سرگرمی </Link>,
                    <Link href="#">سبک زندگی </Link>,<Link href="#">دیگر </Link>
                  </div>
                  <h4 className="">
                    <Link href="post-single.html">
                      یک پست وبلاگ جالب با تصاویر ارائه می شود
                    </Link>
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
                    <Link
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </Link>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <Link href="#" className="post-author">
                      جان دوو
                    </Link>
                    -{" "}
                    <Link href="#" className="post-date">
                      1401.1.23
                    </Link>
                  </div>
                </div>
              </article>
              <article className="post post-list post-listing mb-md-10 mb-6 pb-2 overlay-zoom mb-2">
                <figure className="post-media br-sm">
                  <Link href="post-single.html">
                    <Image src={blog6} width="930" height="500" alt="blog" />
                  </Link>
                </figure>
                <div className="post-details">
                  <div className="post-cats text-primary">
                    <Link href="#">مد </Link>,<Link href="#">تکنولوژی </Link>
                  </div>
                  <h4 className="">
                    <Link href="post-single.html">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است.
                    </Link>
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
                    <Link
                      href="post-single.html"
                      className="btn btn-link btn-primary"
                    >
                      (ادامه مطلب)
                    </Link>
                  </div>
                  <div className="post-meta">
                    توسط{" "}
                    <Link href="#" className="post-author">
                      جان دوو
                    </Link>
                    -{" "}
                    <Link href="#" className="post-date">
                      1401.1.23
                    </Link>
                  </div>
                </div>
              </article>
              {/* <ul className="pagination justify-content-center">
                <li className="prev disabled">
                  <Link 
                    href="#"
                    aria-label="قبلی"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    <i className="w-icon-long-arrow-right"></i>قبلی
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    2
                  </Link>
                </li>
                <li className="next">
                  <Link href="#" aria-label="بعدی">
                    بعدی <i className="w-icon-long-arrow-left"></i>
                  </Link>
                </li>
              </ul> */}
            </div>

            <aside className="sidebar right-sidebar blog-sidebar sidebar-fixed sticky-sidebar-wrapper">
              <div className="sidebar-overlay">
                <Link href="#" className="sidebar-close">
                  <i className="close-icon"></i>
                </Link>
              </div>
              <Link href="#" className="sidebar-toggle">
                <i className="fas fa-chevron-left"></i>
              </Link>
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
                        <Link href="blog.html">لباس ها </Link>
                      </li>
                      <li>
                        <Link href="blog.html">سرگرمی </Link>
                      </li>
                      <li>
                        <Link href="blog.html">مد </Link>
                      </li>
                      <li>
                        <Link href="blog.html">سبک زندگی </Link>
                      </li>
                      <li>
                        <Link href="blog.html">بیشتر </Link>
                      </li>
                      <li>
                        <Link href="blog.html">کفش ها </Link>
                      </li>
                      <li>
                        <Link href="blog.html">تکتولوژی </Link>
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
