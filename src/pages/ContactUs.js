import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import StickyFooter from "@/components/Footer/StickyFooter";

const ContactUs = () => {
    return (
        <>
        <div className="page-wrapper">
        <main className="main">
            <div className="page-header">
                <div className="container">
                    <h1 className="page-title mb-0">تماس با ما</h1>
                </div>
            </div>

            <Breadcrumb />

            <div className="page-content contact-us">
                <div className="container">
                    <section className="content-title-section mb-10">
                        <h3 className="title title-center mb-3">اطلاعات تماس
                        </h3>
                        <p className="text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی,
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </section>

                    <section className="contact-information-section mb-10">
                        <div className=" swiper-container swiper-theme " data-swiper-options="{
                            'spaceBetween': 20,
                            'slidesPerView': 1,
                            'breakpoints': {
                                '480': {
                                    'slidesPerView': 2
                                },
                                '768': {
                                    'slidesPerView': 3
                                },
                                '992': {
                                    'slidesPerView': 4
                                }
                            }
                        }">
                            <div className="swiper-wrapper row cols-xl-4 cols-md-3 cols-sm-2 cols-1">
                                <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-email">
                                        <i className="w-icon-envelop-closed"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title">آدرس ایمیل </h4>
                                        <p>mail@example.com</p>
                                    </div>
                                </div>
                                <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-headphone">
                                        <i className="w-icon-headphone"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title">شماره تلفن </h4>
                                        <p>(123) 456-7890 / (123) 456-9870</p>
                                    </div>
                                </div>
                                <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-map-marker">
                                        <i className="w-icon-map-marker"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title">آدرس </h4>
                                        <p>ایران، ارومیه</p>
                                    </div>
                                </div>
                                <div className="swiper-slide icon-box text-center icon-box-primary">
                                    <span className="icon-box-icon icon-fax">
                                        <i className="w-icon-fax"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h4 className="icon-box-title">فکس </h4>
                                        <p>1-800-570-7777</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <hr className="divider mb-10 pb-1"/>

                    <section className="contact-section">
                        <div className="row gutter-lg pb-3">
                            <div className="col-lg-6 mb-8">
                                <h4 className="title mb-3">مردم معمولا اینها را می پرسند</h4>
                                <div className="accordion accordion-bg accordion-gutter-md accordion-border">
                                    <div className="card">
                                        <div className="card-header">
                                            <a href="#collapse1" className="collapse">چگونه می توانم سفارش خود را لغو کنم؟</a>
                                        </div>
                                        <div id="collapse1" className="card-body expanded">
                                            <p className="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <a href="#collapse2" className="expand">چرا ثبت نام من به تاخیر افتاد؟</a>
                                        </div>
                                        <div id="collapse2" className="card-body collapsed">
                                            <p className="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <a href="#collapse3" className="expand">برای خرید محصولات به چه چیزهایی نیاز دارم؟</a>
                                        </div>
                                        <div id="collapse3" className="card-body collapsed">
                                            <p className="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <a href="#collapse4" className="expand">چگونه می توانم سفارش را پیگیری کنم؟</a>
                                        </div>
                                        <div id="collapse4" className="card-body collapsed">
                                            <p className="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <a href="#collapse5" className="expand">چگونه می توانم پول را پس بگیرم؟</a>
                                        </div>
                                        <div id="collapse5" className="card-body collapsed">
                                            <p className="mb-0">
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. با تولید سادگی, لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است .
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-8">
                                <h4 className="title mb-3">ارسال پیام به ما</h4>
                                <form className="form contact-us-form" action="#" method="post">
                                    <div className="form-group">
                                        <label htmlFor="username">نام شما </label>
                                        <input type="text" id="username" name="username"
                                            className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email_1">ایمیل شما</label>
                                        <input type="email" id="email_1" name="email_1"
                                            className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">پیام شما </label>
                                        <textarea id="message" name="message" cols="30" rows="5"
                                            className="form-control"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-dark btn-rounded">اکنون ارسال کنید </button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>

                {/* <div className="google-map contact-google-map" id="googlemaps"></div> */}
            </div>
        </main>
        <Footer />
    </div>
    <StickyFooter />
        </>
      );
}
 
export default ContactUs;