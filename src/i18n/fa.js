import farsiMessages from "ra-language-farsi";

console.log("running farsi language...");

const customFarsiMessages = {
  ...farsiMessages,
  logoutMessage: "برای خروج مطمئن هستید؟",
  sign_out: "خروج",
  notpaid: "پرداخت نشده",
  unsuccessful: "پرداخت ناموفق",
  "saved successfully.": "ذخیره شد",
  paid: "پرداخت شده",
  cart: "سبد خرید",
  checkout: "تسویه حساب",
  processing: "در دست بررسی",
  confirmed: "تایید شده",
  indoing: "تایید شده",
  makingready: "درحال آماده سازی",
  inpeyk: "ارسال شده",
  complete: "تحویل شده",
  cancel: "لغو شده",

  websiteName: "arvandshop",
  _id: "شناسه",
  lan: "fa",
  dir: "rtl",
  saved: "ذخیره شد",
  comma: ",",
  undefined: "مشخص نشده",
  pos: {
    search: "جستجو",
    configuration: "تنظیمات",
    language: "زبان",
    title: "عنوان",
    theme: {
      name: "پوسته",
      light: "روشن",
      dark: "تاریک"
    },
    dashboard: {
      monthly_revenue: "Monthly Revenue",
      month_history: "30 Day Revenue History",
      new_orders: "New Orders",
      pending_reviews: "Pending Reviews",
      all_reviews: "See all reviews",
      new_customers: "New Customers",
      all_customers: "See all customers",
      pending_orders: "Pending Orders",
      order: {
        items:
          "by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items"
      },
      welcome: {
        title: "Welcome to the react-admin e-commerce demo",
        subtitle:
          "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
        ra_button: "react-admin site",
        demo_button: "Source for this demo"
      }
    },
    menu: {
      shop: "فروشگاه",
      category: "دسته بندی",
      discount: "کد تخفیف",
      menu: "فهرست",
      gateways: "درگاه ها",
      addMenu: "افزودن فهرست",
      allMenus: "همه فهرست ها",
      customerGroups: "گروه های مشتری",
      templates: "قالب ها",
      allDiscounts: "همه کدهای تخفیف",
      addDiscount: "افزودن کد تخفیف",
      allGateways: "همه درگاه ها",
      addGateway: "افزودن درگاه",
      addCustomerGroup: "افزودن گروه مشتری",
      allCustomerGroup: "همه گروه های مشتری",
      attributes: "ویژگی ها",
      categories: "دسته ها",
      discounts: "کد های تخفیف",
      slug: "نامک",
      name: "نام فهرست",
      order: "sort",
      createPost: "ساخت نوشته",
      createPage: "ساخت برگه",
      settings: "تنظیمات",
      actions: "فعالیت ها",
      dashboard: "داشبرد",
      sections: "بخش ها",
      addAttribute: "افزودن ویژگی",
      allAttributes: "همه ویژگی ها",
      addCategory: "افزودن دسته",
      allCategories: "همه دسته ها",
      medias: "رسانه ها",
      addMedia: "افزودن رسانه",
      allMedias: "همه رسانه ها",
      products: "محصولات",
      addProduct: "افزودن محصول",
      allProducts: "همه محصولات",
      allOrders: "همه سفارشات",
      cart: "سبد خرید رها شده",
      addOrder: "افزودن سفارش",
      addCustomer: "افزودن مشتری",
      customers: "مشتریان",
      allCustomers: "همه مشتریان",
      orders: "سفارشات",
      transactions: "تراکنش ها",
      allTransactions: "همه تراکنش ها",
      allSms: "همه پیامک ها",
      allNotification: "همه اعلان ها",
      sendSms: "ارسال پیامک",
      sendNotification: "ارسال اعلان",
      sms: "پیامک",
      notification: "اعلان",
      post: "نوشته/برگه",
      posts: "نوشته ها/برگه ها",
      allPost: "همه نوشته ها",
      allPage: "همه برگه ها",
      more: "بیشتر",
      users: "کاربران",
      allUsers: "همه کاربران",
      addUser: "افزودن کاربر",
      siteActions: "فعالیت های سایت",
      siteSettings: "تنظیمات سایت"

    },
    currency: {
      toman: "تومان",
      rial: "ریال",
      dollar: "دلار"
    },
    paymentStatus: {
      SuccessfulOperation: "عملیات موفق",
      CanceledByTheUser: "لغو شده توسط کاربر",
      UnsuccessfulPayment: "پرداخت ناموفق",
      ExcessiveEffortInAShortPeriodOfTime: "در مدت زمان کوتاه درخواست زیاد ارسال شده",
      ValidationError: "خطا در احراز اطلاعات",
      PaidApproved: "پرداخت تایید شده",
      PaidNotApproved: "پرداخت شده و تایید نشده",
      InternalError: "خطای داخلی",
      WaitingForPayment: "در انتظار پرداخت"
    },
    OrderPaymentStatus: {
      notpaid: "پرداخت نشده",
      unsuccessful: "پرداخت ناموفق",
      paid: "پرداخت شده"

    },
    OrderStatus: {
      cart: "سبد خرید",
      checkout: "تسویه حساب",
      processing: "در دست بررسی",
      confirmed: "تایید شده",
      indoing: "تایید شده",
      makingready: "درحال آماده سازی",
      inpeyk: "ارسال شده",
      complete: "تحویل شده",
      cancel: "لغو شده"

    }
  },
  components: {
    JsonDiffer: {
      fieldName: "نام فیلد",
      new: "جدید",
      old: "قدیم"
    }
  },
  resources: {
    customer: {
      customerGroup:"گروه"
    },

    action: {
      user: "کاربر",
      title: "عنوان",
      customer: "مشتری",
      product: "محصول",
      phoneNumber: "شماره تماس",
      firstName: "نام",
      lastName: "نام خانوادگی",
      nickname: "لقب",
      username: "نام کاربری",
      difference: "تفاوت داده ها",
      createdAt: "در تاریخ"

    },

    dashboard: {
      yourActions: "فعالیت های شما",
      priceAnnLast30Days: "میزان درآمد ۳۰ روز گذشته",
      countOrdersSuccess30Days: "تعداد سفارشات موفق ۳۰ روز گذشته",
      countUsers: "تعداد کاربران",
      dollarPrice: "قیمت دلار",
      orders: "سفارشات",
      countAnnLast30Days: "میزان درآمد ۳۰ روز گذشته",
      countPayedLast30Days: "تعداد پرداخت های موفق ۳۰ روز گذشته",
      monthly_revenue: "Monthly Revenue",
      month_history: "30 Day Revenue History",
      new_orders: "New Orders",
      pending_reviews: "Pending Reviews",
      all_reviews: "See all reviews",
      new_customers: "New Customers",
      all_customers: "See all customers",
      pending_orders: "Pending Orders",
      order: {

        items:
          "by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items"
      },
      welcome: {
        hi: "سلام",
        title: "خوش آمدید",
        subtitle:
          "ویرایش محصولات، نمایش دیدگاه ها و...",
        ra_button: "react-admin site",
        demo_button: "Source for this demo"
      }

    },
    attributes: {
      slug: "نامک",
      name: "نام ویژگی",
      values: "مقادیر",
      type: "نوع",
      normal: "عادی",
      color: "رنگ"
    },
    category: {
      slug: "نامک",
      name: "نام دسته بندی",
      values: "مقادیر",
      parent: "دسته مادر",
      order: "ترتیب",
      addxpercent: "x درصد اضافه کن",
      minusxpercent: "x درصد کم کن",
      addxprice: "x مبلغ اضافه کن",
      minusxprice: "x مبلغ کم کن"
    },
    discount: {
      slug: "نامک",
      name: "عنوان کد تخفیف",
      count: "تعداد",
      percent: "درصد",
      price: "هزینه",
    },

    customers: {
      _id: "شناسه",
      phoneNumber: "شماره تماس",
      activationCode: "کد فعال سازی",
      countryCode: "کد کشور",
      firstName: "نام",
      lastName: "نام خانوادگی",
      email: "ایمیل",
      internationalCode: "کدملی",
      createdAt: "ساخته شده در",
      updatedAt: "بروزرسانی در",
      active: "فعال/غیرفعال"
    },
    menu: {
      menu: "فهرست",
      addMenu: "افزودن فهرست",
      allMenus: "همه فهرست ها",
      attributes: "ویژگی ها",
      categories: "دسته ها",
      slug: "نامک",
      name: "نام فهرست",
      order: "ترتیب"
    },
    user: {
      _id: "شناسه",
      phoneNumber: "شماره تماس",
      activationCode: "کد فعال سازی",
      firstName: "نام",
      lastName: "نام خانوادگی",
      email: "ایمیل",
      username: "نام کاربری",
      createdAt: "ساخته شده در",
      updatedAt: "بروزرسانی در",
      nickname: "لقب",
      active: "فعال/غیرفعال",
      password: "رمز عبور"
    },

    gateway: {
      title: "عنوان",
      name: "عنوان",
      slug: "نامک",
      description: "توضیح",

      createdAt: "انتشار در",
      updatedAt: "بروزرسانی در",
      request: "json request axios",
      verify: "json verify axios",

      active: "فعال/غیرفعال"
    },
    order: {
      orderNumber: "شماره سفارش",
      customerData: "اطلاعات مشتری",
      amountToPay: "مبلغی را وارد کنید",
      total: "مجموع پرداختی",
      sum: "جمع کل موارد",
      amount: "مجموع پرداختی",
      paid: "پرداخت شده",
      status: "وضعیت سفارش",
      paymentStatus: "وضعیت پرداخت",
      date: "تاریخ",
      createdAt: "انتشار در",
      updatedAt: "بروزرسانی در",
      customerFirstName: "نام مشتری",
      customerLastName: "نام خانوادگی مشتری",
      allOrders: "همه سفارشات",
      processing: "در دست بررسی",
      confirmed: "تایید شده",
      makingready: "در حال آماده سازی",
      inpeyk: "ارسال شده",
      complete: "تکمیل شده",
      canceled: "لغو شده",
      orderNumberOrMobileNumber: "order number or mobile number"
    },
    post: {
      actions: "اقدامات",
      pagebuilder: "صفحه ساز",
      firstCategory: "دسته اول",
      secondCategory: "دسته دوم",
      thirdCategory: "دسته سوم",
      search: "نام نوشته/برگه...",
      category: "دسته",
      image: "عکس",
      title: "عنوان",
      excerpt: "چکیده",
      description: "توضیحات",
      label: "برچسب",
      labels: "برچسب ها",
      type: "نوع",
      photo: "عکس",
      status: "وضعیت",
      processing: "پیش نویس",
      published: "منتشر شده",
      deleted: "حذف شده",
      slug: "نامک",
      url: "آدرس اینترنتی",
      date: "تاریخ",
      copy: "کپی",
      createdAt: "ساخته شده در",
      updatedAt: "بروزرسانی در",
      activities: "فعالیت ها",
      viewsCount: "تعداد بازدید ها",
      updated: "بروزرسانی",
      created: "ساخته شده",
      categories: "دسته بندی ها",
      post: "نوشته",
      page: "برگه",
      kind: "نوع"
    },
    template: {
      actions: "اقدامات",
      pagebuilder: "صفحه ساز",
      firstCategory: "دسته اول",
      secondCategory: "دسته دوم",
      thirdCategory: "دسته سوم",
      search: "نام نوشته/برگه...",
      category: "دسته",
      image: "عکس",
      title: "عنوان",
      excerpt: "چکیده",
      description: "توضیحات",
      label: "برچسب",
      labels: "برچسب ها",
      type: "نوع",
      photo: "عکس",
      status: "وضعیت",
      processing: "پیش نویس",
      published: "منتشر شده",
      deleted: "حذف شده",
      slug: "نامک",
      url: "آدرس اینترنتی",
      date: "تاریخ",
      copy: "کپی",
      createdAt: "ساخته شده در",
      updatedAt: "بروزرسانی در",
      activities: "فعالیت ها",
      viewsCount: "تعداد بازدید ها",
      updated: "بروزرسانی",
      created: "ساخته شده",
      categories: "دسته بندی ها",
      post: "نوشته",
      page: "برگه",
      kind: "نوع"
    },
    page: {
      actions: "اقدامات",
      pagebuilder: "صفحه ساز",
      firstCategory: "دسته اول",
      secondCategory: "دسته دوم",
      thirdCategory: "دسته سوم",
      search: "نام نوشته/برگه...",
      category: "دسته",
      image: "عکس",
      title: "عنوان",
      excerpt: "چکیده",
      description: "توضیحات",
      label: "برچسب",
      labels: "برچسب ها",
      type: "نوع",
      photo: "عکس",
      status: "وضعیت",
      processing: "پیش نویس",
      published: "منتشر شده",
      deleted: "حذف شده",
      slug: "نامک",
      url: "آدرس اینترنتی",
      date: "تاریخ",
      copy: "کپی",
      createdAt: "ساخته شده در",
      updatedAt: "بروزرسانی در",
      activities: "فعالیت ها",
      viewsCount: "تعداد بازدید ها",
      updated: "بروزرسانی",
      created: "ساخته شده",
      categories: "دسته بندی ها",
      post: "نوشته",
      path: "path",
      page: "برگه",
      kind: "نوع"
    },

    product: {
      source: "منبع",
      formula: "فرمول",
      minPrice: "حداقل قیمت",
      maxPrice: "حداکثر قیمت",
      search: "نام محصول...",
      category: "دسته بندی",
      image: "تصویر",
      title: "عنوان",
      excerpt: "چکیده",
      description: "توضیحات",
      price: "قیمت",
      salePrice: "قیمت تخفیف خورده",
      label: "برچسب",
      labels: "برچسب ها",
      story: "استوری",
      miniTitle: "عنوان کوتاه",
      type: "نوع",
      photo: "رسانه",
      extra_attr: "ویژگی های اضافه",
      sources: "منابع ربات",
      status: "وضعیت",
      processing: "پیش نویس",
      published: "منتشرشده",
      deleted: "حذف شده",
      addAttr: "افزودن ویژگی",
      slug: "نامک",
      createComb: "ساخت متغیر ها",
      stock: "وضعیت انبار",
      quantity: "تعداد",
      combinations: "ترکیب ها",
      url: "آدرس ها",
      prices: "قیمت ها",
      date: "تاریخ",
      copy: "کپی",
      createdAt: "ساخته شده در",
      updatedAt: "بروزرسانی در",
      activities: "فعالیت ها",
      viewsCount: "تعداد بازدید",
      updated: "بروزرسانی شد",
      created: "ساخته شد",
      categories: "دسته بندی ها",
      firstCategory: "دسته اول",
      secondCategory: "دسته دوم",
      thirdCategory: "دسته سوم",
      inStock: "در انبار",
      outOfStock: "موجود نیست",
      normal: "عادی",
      variable: "متغیر",
      metadescription: "توضیحات متا",
      keywords: "کلمات کلیدی",
      is: "هست",
      isnt: "نیست",
      weight: "وزن",
      sku: "SKU",
      count: "تعداد",
      sell: "فروش",
      content: "محتوا",
      analytics: "آمار و گزارشات",
      settings: "تنظیمات محصول",
      edit: "ویرایش"
    },

    reviews: {},

    settings: {
      activeCategory: "دسته های فعال",
      siteStatus: "وضعیت سایت",
      siteActiveMessage: "پیام برای کاربر وقتی سایت غیر فعاله",
      siteActive: "وضعیت سایت",
      title: "عنوان",
      theid: "شناسه",
      description: "توضیحات",
      city: "شهر",
      is_isnt: "هست / نیست",
      priceLessThanCondition: "قیمت کمتر از شرط",
      condition: "شرط",
      priceMoreThanCondition: "قیمت بیشتر از شرط",
      welcome: "خوش آمدید",
      register: "ثبت نام",
      submitOrderNotPaying: "ثبت سفارش (پرداخت نشده)",
      submitOrderSuccessPaying: "ثبت سفارش (پرداخت موفق)",
      onSendProduct: "ارسال محصول",
      onGetProductByCustomer: "دریافت توسط مشتری",
      submitReview: "ثبت نظر",
      onCancel: "لغو سفارش",
      save: "ذخیره",
      primaryColor: "رنگ اولیه",
      secondaryColor: "رنگ ثانویه",
      textColor: "رنگ متن",
      bgColor: "رنگ پس زمینه",
      footerBgColor: "رنگ پس زمینه پانوشت",
      currentLogo: "لوگو فعلی",
      uploadLogo: "جایگزینی لوگو",
      logoUploadedSuccessfully: "لوگو با موفقیت آپلود شد.",
      UpdatedSuccessfully: "با موفقیت ذخیره شد.",
      sthWrong: "خطا!"

    },
    notification: {
      user: "کاربر",
      message: "پیام",
      status: "وضعیت",
      sender: "ارسال کننده",
      receiver: "دریافت کننده",
      updatedAt: "بروزرسانی در",
      createdAt: "ساخته شده در",
      phoneNumber: "شماره موبایل"


    },
    transaction: {
      date: "تاریخ",
      amount: "مجموع",
      statusCode: "کد وضعیت",
      authority: "توکن پرداخت",
      status: "وضعیت",
      referenceId: "شناسه مرجع",
      orderNumber: "شماره سفارش",
      updatedAt: "بروزرسانی در",
      createdAt: "ساخته شده در"

    }
  }
};

export default customFarsiMessages;
