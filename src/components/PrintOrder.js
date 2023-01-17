// import {SimpleForm} from 'react-admin';
import React from "react";
import IRANSansWeb_font_eot from "../assets/fonts/eot/IRANSansWeb.eot";
import IRANSansWeb_font_woff2 from "../assets/fonts/woff2/IRANSansWeb.woff2";
import IRANSansWeb_font_woff from "../assets/fonts/woff/IRANSansWeb.woff";
import IRANSansWeb_font_ttf from "../assets/fonts/ttf/IRANSansWeb.ttf";
// export const logo = require('../assets/img/logo.svg');
import { dateFormat } from "@/functions";

export default (props) => {
  // console.clear();
  // console.log('props',props);
  const divRef = React.useRef();
  const [tel, Stel] = React.useState("02141175");
  // if(!props.record.customer_data){
  //     props.record.customer_data={
  //         firstName:''
  //     }
  // }
  let fname = "", lname = "";
  if (props.record.customer_data) {
    if (props.record.customer_data.firstName) {
      fname = props.record.customer_data.firstName;
    }
    if (props.record.customer_data.lastName) {
      lname = props.record.customer_data.lastName;
    }
  }

  if (props.record.customer) {
    if (props.record.customer.firstName) {
      fname = props.record.customer.firstName;
    }
    if (props.record.customer.lastName) {
      lname = props.record.customer.lastName;
    }
  }

  const [cfirstName, ScfirstName] = React.useState(((fname) + " " + (lname)) || "");
  const [codeMelli, ScodeMelli] = React.useState((props.record.customer_data.internationalCode));
  // const [clastName, SclastName] = React.useState(props.record.customer.lastName);
  const [caddress, Scaddress] = React.useState(props.record.billingAddress.State + "، " + props.record.billingAddress.City + "، " + props.record.billingAddress.StreetAddress);
  const [codeposti, Scodeposti] = React.useState(props.record.billingAddress.PostalCode);
  const [cpackage, Scpackage] = React.useState(props.record.package);
  const [csum, Scsum] = React.useState(props.record.sum || 0);
  const [ersal, Sersal] = React.useState(props.record.deliveryPrice || 0);
  const [total, Stotal] = React.useState(props.record.sum || 0);
  const [amount, Samount] = React.useState(props.record.amount || 0);
  const [deliveryDay, SdeliveryDay] = React.useState(props.record.deliveryDay || 0);
  const [change, SetChange] = React.useState(0);

  const changePackage = (s, t, tyhj) => {
    // console.log('changePackage', s, t.target.value, tyhj);
    cpackage[tyhj][s] = t.target.value;
    if (s == "price") {
      // console.log('t.target.value.toString()',t.target.value.toString().replace(/,/g,'') );
      cpackage[tyhj][s] = t.target.value.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if (s == "total_price") {
      // console.log('t.target.value.toString()',t.target.value.toString().replace(/,/g,'') );
      cpackage[tyhj][s] = t.target.value.toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    let tt = cpackage;
    Scpackage([]);
    Scpackage(tt);
    SetChange(!change);


  };
  const changeInput = (s, t) => {
    // console.log('changeInput', s, t);
    switch (s) {
      case "tel":
        return Stel(t.target.value);
        break;
      case "cfirstName":
        return ScfirstName(t.target.value);
        break;
      case "caddress":
        return Scaddress(t.target.value);
        break;
      case "codeposti":
        return Scodeposti(t.target.value);
        break;
      case "csum":
        return Scsum(t.target.value.toString().replace(/,/g, ""));
        break;
      case "ersal":
        return Sersal(t.target.value.toString().replace(/,/g, ""));
        break;
      case "total":
        return Stotal(t.target.value.toString().replace(/,/g, ""));
        break;
      case "amount":
        return Samount(t.target.value.toString().replace(/,/g, ""));
        break;

    }


  };
  const handleClick = () => {
    // return;
    // console.log('handleClick');


    // QRCode.toCanvas(canvas, '#your-site-link', function (error) {
    // QRCode.toDataURL('http://localhost:3001')
    //     .then(url => {
    //         var canvas = document.getElementById('canvas');
    //
    //         var ctx = canvas.getContext('2d');
    //         var img = new Image;
    //         img.onload = function(){
    //             ctx.drawImage(img,0,0); // Or at whatever offset you like
    //         };
    //         console.log('success!',url);
    //         img.src = url;
    var mywindow = window.open("", "PRINT", "height=400,width=600");

    mywindow.document.write("<html><head><title>" + document.title + "</title>");
    mywindow.document.write(" <style>\n" +
      "        @font-face {\n" +
      "            font-family: IRANSans;\n" +
      "            font-style: normal;\n" +
      "            src: url(" + IRANSansWeb_font_eot + ");\n" +
      "            src: url(" + IRANSansWeb_font_eot + "?#iefix) format(\"embedded-opentype\")," +
      " url(" + IRANSansWeb_font_woff2 + ") format(\"woff2\")," +
      " url(" + IRANSansWeb_font_woff + ") format(\"woff\")," +
      " url(" + IRANSansWeb_font_ttf + ") format(\"truetype\")\n" +
      "        }\n" +
      "\n" +
      "\n" +
      "        .order-details td.product {\n" +
      "            text-align: right;\n" +
      "        }\n" +
      "\n" +
      "        th, td {\n" +
      "            vertical-align: top;\n" +
      "            text-align: center;\n" +
      "        }\n" +
      "\n" +
      "\n" +
      "        table {\n" +
      "            width: 100%;\n" +
      "            text-align: center;\n" +
      "        }\n" +
      "\n" +
      "        body {\n" +
      "            padding: 10px;\n" +
      "            font-family: IRANSans;\n" +
      "            direction: rtl;\n" +
      "            line-height: 20px;\n" +
      "        }\n" +
      "\n" +
      "        p {\n" +
      "            display: inline-block;\n" +
      "        }\n" +
      "\n" +
      "        .order-details th {\n" +
      "            text-align: center;\n" +
      "        }\n" +
      "\n" +
      "\n" +
      "        .shop-name {\n" +
      "            margin-bottom: 0;\n" +
      "        }\n" +
      "\n" +
      "\n" +
      "        .shop-name h3 {\n" +
      "            margin-bottom: 0;\n" +
      "        }\n" +
      "\n" +
      "\n" +
      "        .document-type-label {\n" +
      "            margin-top: 0;\n" +
      "            margin-bottom: 0;\n" +
      "        }\n" +
      "\n" +
      "\n" +
      "        .textAlignR {\n" +
      "            text-align: right;\n" +
      "        }\n" +
      "\n" +
      "        .quantity {\n" +
      "            width: 60px;\n" +
      "        }\n" +
      "\n" +
      "        .order-data-addresses td {\n" +
      "            vertical-align: middle;\n" +
      "            padding: 10px;\n" +
      "        }\n" +
      "\n" +
      "\n" +
      "        .order-data-addresses tr td:nth-child(2) {\n" +
      "            text-align: right;\n" +
      "        }\n" +
      "\n" +
      "        table.order-data-addresses,\n" +
      "        table.order-data-addresses th,\n" +
      "        table.order-data-addresses td,\n" +
      "        table.order-details,\n" +
      "        table.order-details th,\n" +
      "        table.order-details td {\n" +
      "            vertical-align: middle;\n" +
      "            border: 1px solid black;\n" +
      "            border-collapse: collapse;\n" +
      "            font-size: 13px;\n" +
      "            line-height: 19px;\n" +
      "            padding: 2px 5px;\n" +
      "            background-color: #fff;\n" +
      "            color: #000;\n" +
      "        }\n" +
      "\n" +
      "        table.order-details {\n" +
      "\n" +
      "        }\n" +
      "\n" +
      "        .order-data-addresses, .order-details {\n" +
      "            margin-bottom: 0 !important;\n" +
      "        }\n" +
      "\n" +
      "        .order-data-addresses.totals {\n" +
      "            margin-bottom: 0 !important;\n" +
      "            margin-top: 0 !important;\n" +
      "\n" +
      "        }\n" +
      "\n" +

      "\n" +
      "\n" +
      "        table.order-details td.price,table.order-details th.price{\n" +
      "        width:120px !important;" +
      "        }" +
      "        .textAlignR input{\n" +
      "        width:100px !important;" +
      "        }" +
      "        #theprint textarea{\n" +

      "    float: left;\n" +

      "    line-height: 15px;" +
      "       }\n" +
      "        .width80,.textAlignR input.width80{\n" +
      "            width: 80px !important;\n" +
      "        }\n" +
      "        .price input,.quantity input{\n" +
      "            text-align: center !important;\n" +
      "        }\n" +
      "        #theprint input,#theprint textarea{\n" +
      "            border: none;\n" +
      "            width: 100%;\n" +
      "            font-family: IRANSans;\n" +
      "            display: inline-block;\n" +
      "        }\n" +
      "        .d-inline-block{\n" +
      "            display: inline-block !important;\n" +
      "            width: auto !important;" +
      "        }\n" +
      "        #theprint .item-name input{\n" +
      "            width: calc(100vw - 930px) !important;\n" +
      "            min-width: 500px;\n" +
      "        }\n" +
      "\n" +
      "        #theprint .address{\n" +
      "            width: calc(100% - 50px) !important;\n" +
      "        }\n" +
      "\n" +
      "        .kjhgf img {\n" +
      "            width: 65px !important;\n" +
      "        }\n" +

      "        .item-name input {\n" +
      "            width: 100% !important;\n" +
      "        }\n" +
      "        .width300 {\n" +
      "            width: 300px;\n" +
      "\n" +
      "        }\n" +
      "        .width100 , input.width100,#theprint input.width100{\n" +
      "            width: 100px !important;\n" +
      "\n" +
      "        }\n" +
      "        @media print {\n" +
      "        .no-print {\n" +
      "            display: none !important;\n" +
      "        }\n" +
      "        }\n" +
      "    </style>");
    mywindow.document.write("</head><body >");
    // mywindow.document.write('<h1>' + document.title + '</h1>');
    mywindow.document.write(divRef.current.outerHTML);
    mywindow.document.write("</body></html>");
    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    setTimeout(function() {


      mywindow.print();
      // mywindo//w.close();

      return true;
    }, 2000);
    // })


  };
  // handleClick();
  return (
    <div id={"theprint"} ref={divRef}>
      <button onClick={handleClick} className={"no-print"}>print</button>
      <table className="head container">
        <tbody>
        <tr>
          <td className="header">
            <div className="kjhgf">
              {/*<?php*/}
              {/*if ($this->has_header_logo()) {*/}
              {/*$this->header_logo();*/}
              {/*} else {*/}
              {/*echo $this->get_title();*/}
              {/*}*/}
              {/*?>*/}
              {/*<img style={{width: '130px'}} src={logo}/>*/}
            </div>
          </td>
          <td className="shop-info">
            {/*<?php do_action('wpo_wcpdf_before_shop_name', $this->get_type(), $this->order); ?>*/}
            <div className="shop-name">
              <h3> فاکتور
                فروش</h3></div>
            <h1 className="document-type-label">
              فروشگاه گل افشان
            </h1>
          </td>

          <td className="shop-info">
            <div>
              <span>شماره فاکتور:</span>
              <span>{props.record.orderNumber}</span>
            </div>
            <div className="order-number">
              <span>شماره سفارش:</span>
              <span>{props.record.orderNumber}</span>
            </div>
            <div className="invoice-date">
              <span>تاریخ:</span>
              <span>{dateFormat(props.record.createdAt)}</span>
            </div>
          </td>
        </tr>
        </tbody>
      </table>


      <table className="order-data-addresses ">
        <tbody>
        <tr>
          <td>
            ارسال کننده
          </td>
          <td>

            <div>
              <span>شرکت گل افشان</span> <span style={{ padding: "0 5px" }}>  </span>
              <span>سایت: </span>{"golafshan.ir"}<span style={{ padding: "0 5px" }}>  </span>
              <span>شماره اقتصادی: </span>{"411113938696"} <span style={{ padding: "0 5px" }}>  </span>
              <span>شماره ثبت: </span>{"10101531483"}
            </div>
            <div>

              <span>آدرس: </span>{"تهران، پونک جنوبی، ایران زمین شمالی، کوچه شکوفه سوم شرقی، پلاک ۳، طبقه ۲، واحد ۴"}
              <span style={{ padding: "0 5px" }}>  </span>
              <span>تلفن: </span><input className={"d-inline-block width100"} value={tel}
                                        onChange={(e) => changeInput("tel", e)}/>

            </div>
          </td>
        </tr>
        <tr>
          <td>
            دریافت کننده
          </td>
          <td>

            <div>
              <div>
                <span>نام خریدار: </span>
                <input style={{ width: "300px" }} value={cfirstName} onChange={(e) => changeInput("cfirstName", e)}/>

                {codeMelli && [<span>کد ملی: </span>,
                  <input style={{ width: "200px" }} value={codeMelli} onChange={(e) => changeInput("codeMelli", e)}/>]}


              </div>

              <div>
                <span>شماره تماس: </span>
                <span className="billing-phone">
                                    {props.record.customer && props.record.customer.phoneNumber}
                  <span> - </span>
                  {props.record.billingAddress && props.record.billingAddress.PhoneNumber}


                                </span>

              </div>
              {codeposti && <div>
                <span>کد پستی: </span>
                <span><input style={{ width: "400px" }} value={codeposti}
                             onChange={(e) => changeInput("codeposti", e)}/></span>
              </div>}
            </div>
            <div>
              <span>نشانی: </span><span><textarea className={"address"} onChange={(e) => changeInput("caddress", e)}
                                                  value={caddress}/>
                            </span>


              {/*{props.record.billingAddress && props.record.billingAddress.StreetAddress}*/}

              {/*<?php echo $order_data['billing']['city'] . '، ' . $order_data['billing']['address_1']; ?>*/}
            </div>
          </td>
        </tr>
        </tbody>
      </table>

      {/*<?php do_action('wpo_wcpdf_before_order_details', $this->get_type(), $this->order); ?>*/}

      <table className="order-details ">
        <thead>
        <tr>
          <th className="product">ردیف</th>
          <th className="product">نوع کالا</th>
          <th className="quantity">تعداد</th>
          <th className="price">قیمت واحد (تومان)</th>
          <th className="price">قیمت کل (تومان)</th>
        </tr>
        </thead>
        <tbody>
        {/*<?php*/}
        {/*$i = 0;*/}
        {/*foreach ($this->get_order_items() as $item_id => $item) :*/}
        {/*$i++;*/}
        {/*?>*/}
        {props.record.package.map((p, tyhj) => {
          if (cpackage[tyhj])
            return (
              <tr className="" key={tyhj}>
                <td className="therow">
                  {(tyhj + 1)}
                  {/*<?php echo $i; ?>*/}
                </td>
                <td className="product">
                  {/*<?php $description_label = __('توضیحات', 'woocommerce-pdf-invoices-packing-slips'); // registering alternate label translation*/}
                  {/*?>*/}
                  <span className="item-name">
                            {/*{p.product_name}*/}
                    <textarea style={{ height: "auto", minHeight: "25px", float: "right" }}
                              value={cpackage[tyhj].product_name}
                              onChange={(e) => changePackage("product_name", e, tyhj)}/>
                    {/*<?php echo $item['name']; ?>*/}
                        </span>
                  {/*<?php do_action('wpo_wcpdf_before_item_meta', $this->get_type(), $item, $this->order); ?>*/}
                  <span className="item-meta">
                            {/*<?php echo $item['meta']; ?>*/}
                        </span>
                  <dl className="meta">
                    {/*<?php $description_label = __('SKU', 'woocommerce-pdf-invoices-packing-slips'); // registering alternate label translation*/}
                    {/*?>*/}
                    {/*<?php if (!empty($item['sku'])) : ?>*/}
                    <dt className="sku">
                      {/*<?php _e('SKU:', 'woocommerce-pdf-invoices-packing-slips'); ?>*/}
                    </dt>
                    <dd className="sku">
                      {/*<?php echo $item['sku']; ?>*/}
                    </dd>
                    {/*<?php endif; ?>*/}
                    {/*<?php if (!empty($item['weight'])) : ?>*/}
                    <dt className="weight">
                      {/*<?php _e('Weight:', 'woocommerce-pdf-invoices-packing-slips'); ?>*/}
                    </dt>
                    <dd className="weight">
                      {/*<?php echo $item['weight']; ?><?php echo get_option('woocommerce_weight_unit'); ?>*/}
                    </dd>
                    {/*<?php endif; ?>*/}
                  </dl>
                  {/*<?php do_action('wpo_wcpdf_after_item_meta', $this->get_type(), $item, $this->order); ?>*/}
                </td>
                <td className="quantity">
                  {/*{p.quantity}*/}
                  <input value={cpackage[tyhj].quantity}
                         onChange={(e) => changePackage("quantity", e, tyhj)}/>

                  {/*<?php echo $item['quantity']; ?>*/}
                </td>
                <td className="price">
                  <input value={cpackage[tyhj].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                         onChange={(e) => changePackage("price", e, tyhj)}/>
                  {/*{p.price.toString().replace(/\B(?=(\d{3})+(?!\d))//g, ",")}*/}

                  {/*<?php echo $item['order_price']; ?>*/}
                </td>
                <td className="price">
                  <input
                    value={cpackage[tyhj].total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    onChange={(e) => changePackage("total_price", e, tyhj)}/>
                  {/*{p.total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}*/}

                  {/*<?php echo $item['order_price']; ?>*/}
                </td>

              </tr>);
          else
            return <></>;
        })}

        </tbody>

      </table>

      <table className="order-data-addresses totals ">
        <tr>
          <td className={"textAlignR"}>
            <div>
              <span>روش ارسال: </span>
              {deliveryDay.title}
            </div>
            <div>
              <span>روش پرداخت: </span>
              درگاه آنلاین
            </div>
          </td>
          <td className={"textAlignR"}>
            <div>
              <span>جمع کل (تومان): </span>
              <span>
                            <input className={"width80"} value={csum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                   onChange={(e) => changeInput("csum", e)}/>
                               </span>
              <span>

                            </span>
            </div>
            <div>
              <span>تخفیف (تومان): </span>
              <input/>
            </div>

            <div>
              <span>هزینه ارسال (تومان): </span>
              <span>
                            <input className={"width80"} value={ersal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                   onChange={(e) => changeInput("ersal", e)}/>
                            </span>
              <span>

                            </span>
              {/*<?php echo number_format($order_data['shipping_total']) . ' تومان'; ?>*/}
            </div>
            <div>
              <span>قابل پرداخت (تومان): </span>
              <span>

                            <input className={"width80"} value={amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                   onChange={(e) => changeInput("amount", e)}/>
                            </span>
              <span>
                            </span>
              {/*<?php echo number_format($order_data['total']) . ' تومان'; ?>*/}
            </div>
          </td>
          <td className={"textAlignR width300"}>


          </td>
        </tr>


      </table>

      <div className="bottom-spacer "></div>
      {/*{handleClick()}*/}
    </div>
  );
};
