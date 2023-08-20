const { default: Footer } = require("@/components/Footer/Footer")

const Order = () => {
    return ( 
        <div class="page-wrapper">
        <h1 class="d-none">قالب فروشگاهی چند فروشندگی وولمارت</h1>


        <main class="main order">
            <nav class="breadcrumb-nav">
                <div class="container">
                    <ul class="breadcrumb shop-breadcrumb bb-no">
                        <li class="passed"><a href="cart.html">فروشگاه پینگ سبد خرید </a></li>
                        <li class="passed"><a href="checkout.html">پرداخت </a></li>
                        <li class="active"><a href="order.html">سفارش کامل شد</a></li>
                    </ul>
                </div>
            </nav>

            <div class="page-content mb-10 pb-2">
                <div class="container">
                    <div class="order-success text-center font-weight-bolder text-dark">
                        <i class="fas fa-check"></i>
                        متشکرم. سفارش شما دریافت شد.
                    </div>

                    <ul class="order-view list-style-none">
                        <li>
                            <label>شماره سفارش </label>
                            <strong>945</strong>
                        </li>
                        <li>
                            <label>وضعیت </label>
                            <strong>در حال آماده</strong>
                        </li>
                        <li>
                            <label>تاریخ</label>
                            <strong>خرداد 5</strong>
                        </li>
                        <li>
                            <label>مجموع</label>
                            <strong>1850000 تومان</strong>
                        </li>
                        <li>
                            <label>روش پرداخت </label>
                            <strong>انتقال مستقیم بانکی</strong>
                        </li>
                    </ul>

                    <div class="order-details-wrapper mb-5">
                        <h4 class="title text-uppercase ls-25 mb-5">جزئیات سفارش </h4>
                        <table class="order-table">
                            <thead>
                                <tr>
                                    <th class="text-dark">محصول </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="#">کت چاپ نخل </a>&nbsp;<strong>x 1</strong><br/>
                                        فروشنده :  <a href="#"> فروشنده  1</a>
                                    </td>
                                    <td>80000 تومان </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a href="#">کوله پشتی قهوه ای</a>&nbsp;<strong>x 1</strong><br/>
                                        فروشنده :  <a href="#"> فروشنده  1</a>
                                    </td>
                                    <td>50000 تومان</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>مجموع: </th>
                                    <td>100000 تومان</td>
                                </tr>
                                <tr>
                                    <th>حمل و نقل:</th>
                                    <td>نرخ ثابت </td>
                                </tr>
                                <tr>
                                    <th>روش پرداخت:</th>
                                    <td>انتقال مستقیم بانکی</td>
                                </tr>
                                <tr class="total">
                                    <th class="border-no">مجموع:</th>
                                    <td class="border-no">100000 تومان</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div class="sub-orders mb-10">
                        <h4 class="title mb-5 font-weight-bold ls-25">زیر سفارش ها  </h4>
                        <div class="alert alert-icon alert-inline mb-5">
                            <i class="w-icon-exclamation-triangle"></i>
                            <strong>یادداشت:  </strong>این سفارش دارای محصولاتی از چندین فروشنده است. بنابراین ما این سفارش را به چند سفارش فروشنده تقسیم کردیم. هر سفارش به طور مستقل توسط فروشنده مربوطه انجام می شود.
                        </div>
                        <table class="order-subtable">
                            <thead>
                                <tr>
                                    <th class="order">سفارش </th>
                                    <th class="date">تاریخ </th>
                                    <th class="status">وضعیت </th>
                                    <th class="total">مجموع </th>
                                    <th class="action"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="order">950</td>
                                    <td class="date">خرداد 5</td>
                                    <td class="status">در انتظار </td>
                                    <td class="total">80000 تومان  برای 1 آیتم</td>
                                    <td class="action"><a href="order-view.html" class="btn btn-rounded">نمایش </a></td>
                                </tr>
                                <tr>
                                    <td class="order">951</td>
                                    <td class="date">خرداد 5</td>
                                    <td class="status">در انتظار </td>
                                    <td class="total">50000 تومان برای 1 آیتم</td>
                                    <td class="action"><a href="order-view.html" class="btn btn-rounded">نمایش </a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div id="account-addresses">
                        <div class="row">
                            <div class="col-sm-6 mb-8">
                                <div class="ecommerce-address billing-address">
                                    <h4 class="title title-underline ls-25 font-weight-bold">آدرس قبض </h4>
                                    <address class="mb-4">
                                        <table class="address-table">
                                            <tbody>
                                                <tr>
                                                    <td>جعفر خان </td>
                                                </tr>
                                                <tr>
                                                    <td>راست چین </td>
                                                </tr>
                                                <tr>
                                                    <td>پاناما </td>
                                                </tr>
                                                <tr>
                                                    <td>پاناما </td>
                                                </tr>
                                                <tr>
                                                    <td>پاناما </td>
                                                </tr>
                                                <tr>
                                                    <td>92020</td>
                                                </tr>
                                                <tr>
                                                    <td>1112223334</td>
                                                </tr>
                                                <tr class="email">
                                                    <td>nicework125@gmail.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </address>
                                </div>
                            </div>
                            <div class="col-sm-6 mb-8">
                                <div class="ecommerce-address shipping-address">
                                    <h4 class="title title-underline ls-25 font-weight-bold">آدرس حمل و نقل</h4>
                                    <address class="mb-4">
                                        <table class="address-table">
                                            <tbody>
                                                <tr>
                                                    <td>جعفر خان </td>
                                                </tr>
                                                <tr>
                                                    <td>راست چین </td>
                                                </tr>
                                                <tr>
                                                    <td>پاناما </td>
                                                </tr>
                                                <tr>
                                                    <td>پاناما </td>
                                                </tr>
                                                <tr>
                                                    <td>پاناما </td>
                                                </tr>
                                                <tr>
                                                    <td>92020</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#" class="btn btn-dark btn-rounded btn-icon-left btn-back mt-6"><i class="w-icon-long-arrow-left"></i>بازگشت به فهرست</a>
                </div>
            </div>
        </main>
        <Footer />
    </div>
     );
}
 
export default Order;