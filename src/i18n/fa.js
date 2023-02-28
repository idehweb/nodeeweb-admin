import farsiMessages from "ra-language-farsi";

console.log("running farsi language...");

const customFarsiMessages = {
  ...farsiMessages,
  logoutMessage: "برای خروج مطمئن هستید؟",
  topProductOrders:'پرفروشترین محصولات',
  entryForm:'ورودی فرم ها',
  maxWidth: "maxWidth",
  active: "فعال",
  deactive: "غیر فعال",
  market: "مارکت",
  classes: "classes",
  rewrite: "استاندارد سازی",
  "rewritten successfully.": "استاندارد سازی انجام شد",
  "rewrite failed.": "استاندارد سازی با شکست مواجه شد.",
  upgraded: "ارتقا داده شد",
  direction: "rtl",
  createTransaction: "ساخت تراکنش",
  rial: "ریال",
  transactions: "تراکنش ها",
  toman: "تومان",
  logout: "خروج",
  padding: "padding",
  backgroundColor: "backgroundColor",
  customerStatus: "وضعیت مشتری",
  customers: "مشتریان",
  total: "جمع کل",
  require: "ضروری",
  documents: "اسناد",
  tasks: "کار ها",
  notes: "یادداشت ها",
  orders: "سفارشات",
  notifications: "اعلانات",
  showInDesktop: "نمایش در دسکتاپ",
  showInMobile: "نمایش در موبایل",
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
  complete: "تکمیل شده",
  cancel: "لغو شده",
  restarted: "سیستم ری استارت شد.",

  websiteName: "arvandshop",
  _id: "شناسه",
  lan: "fa",
  dir: "rtl",
  saved: "ذخیره شد",
  comma: ",",
  undefined: "مشخص نشده",
  pos: {
    profile: "حساب کاربری",
    logout: "خروج",
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
      automation: "اتوماسیون",
      upgrade: "ارتقا",
      plugins: "افزونه ها",
      messagesSettings: "تنظیمات پیام ها",
      restart: "ری استارت سیستم",
      entry: "ورودی",
      form: "فرم",
      forms: "فرم ها",
      addForm: "افزودن فرم",
      allForms: "همه فرم ها",
      allEntries: "همه ورودی ها",
      addEntry: "افزودن ورودی",
      shop: "فروشگاه",
      category: "دسته بندی",
      discount: "کد تخفیف",
      menu: "فهرست",
      tasks: "کار ها",
      notes: "یادداشت ها",
      gateways: "درگاه ها",
      addMenu: "افزودن فهرست",
      addOrderLink: "ساخت لینک پرداخت",
      addDocument: "افزودن سند",
      allDocuments: "همه اسناد",
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
      complete: "تکمیل شده",
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

    automation: {
      name:"نام ایونت",
      title:"عنوان",
      active:"فعال",
      deactive:"غیرفعال",
      status:"وضعیت",
      functions:"توابع",
      trigger:"trigger",
    },
    document: {
      title: "عنوان",
      type: "نوع"
    },
    note: {},
    task: {},
    messages: {
      help: "لطفا از این پارامتر ها استفاده کنید:" +
      "\n" +
      "%firstName% , %lastName% , %phoneNumber% , %email% ",
      messages: "پیام ها",
      message: "پیام",
      title: "عنوان",
      text: "متن پیام"
    },

    form: {
      customerGroup: "گروه",
      title: "عنوان فرم",
      slug: "نامک فرم",
      date: "تاریخ",
      pagebuilder: "فرم ساز",
      copy: "کپی",
      createdAt: "ساخته شده در",
      updatedAt: "بروزرسانی در",
      message: "پیام",
      actions: "اقدامات",
      category: "دسته بندی",
      search:"جستجو...",
      viewsCount:"بازدید"
    },
    entry: {
      customerGroup: "گروه",
      trackingCode: "کد پیگیری",
      form: "فرم",
      data: "داده ها",
      message: "پیام",
      actions: "اقدامات"
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
      metatitle: "meta title",
      metadescription: "meta description",
      name: "نام ویژگی",
      values: "مقادیر",
      type: "نوع",
      normal: "عادی",
      useInFilter: "قابل استفاده در فیلتر",
      color: "رنگ"
    },
    category: {
      metatitle: "meta title",
      metadescription: "meta description",
      description: "توضیحات",
      actions: "اقدامات",
      edit: "ویرایش",
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
      customerLimit: "محدودیت مشتری",
      name: "عنوان کد تخفیف",
      count: "تعداد",
      expire: "تاریخ انقضا",
      percent: "درصد",
      excludeProductCategory: "بجز دسته محصولات",
      excludeProduct: "بجز محصولات",
      price: "هزینه"
    },

    customers: {
      orderCount: "تعداد سفارشات",
      date: "تاریخ",
      tasks: "کار ها",
      notifications: "اعلان ها",
      _id: "شناسه",
      transactions: "تراکنش ها",
      title: "عنوان آدرس",
      address: "آدرس",
      state: "استان",
      city: "شهر",
      postalCode: "کد پستی",
      streetAddress: "آدرس",
      source: "منبع",
      phoneNumber: "شماره تماس",
      activationCode: "کد فعال سازی",
      countryCode: "کد کشور",
      firstName: "نام",
      lastName: "نام خانوادگی",
      email: "ایمیل",
      male: "مرد",
      female: "زن",
      internationalCode: "کدملی",
      createdAt: "ساخته شده در",
      updatedAt: "بروزرسانی در",
      active: "فعال/غیرفعال",
      customerGroup: "گروه",
      WEBSITE: "وب سایت",
      CRM: "CRM",
      orders: "سفارشات",
      birthday: "تاریخ تولد",
      birthdate: "تاریخ تولد",
      sex: "جنسیت",
      message: "پیام",
      actions: "اقدامات"
    },
    menu: {
      menu: "فهرست",
      messagesSettings: "تنظیمات پیام ها",
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
      bank: "بانک",
      sms: "پیامک",
      email: "ایمیل",
      slug: "نامک",
      type: "نوع",
      description: "توضیح",

      createdAt: "انتشار در",
      updatedAt: "بروزرسانی در",
      request: "json request axios",
      verify: "json verify axios",

      active: "فعال/غیرفعال"
    },
    order: {
      date_gte: "از تاریخ",
      date_lte: "تا تاریخ",
      customer: "مشتری",
      orderCount: "تعداد سفارشات تا قبل امروز",
      product: "محصول",
      _id: "شناسه",
      title: "عنوان",
      card: "سبد",
      count: "تعداد",
      price: "قیمت",
      saleprice: "قیمت با تخفیف",
      orderNumber: "شماره سفارش",
      customerData: "اطلاعات مشتری",
      amountToPay: "مبلغی را وارد کنید",
      total: "مجموع پرداختی",
      sum: "جمع کل موارد",
      amount: "مجموع پرداخت",
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
      actions: "اقدامات",
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
      processing: "در دست بررسی",
      draft: "پیش نویس",
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
      processing: "در دست بررسی",
      draft: "پیش نویس",
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
      page: "page",
      post: "post",
      header: "header",
      footer: "footer",
      product: "product",
      checkout: "checkout",
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
      processing: "در دست بررسی",
      draft: "پیش نویس",
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
      productCategory: "دسته بندی محصول",
      source: "منبع",
      values: "مقادیر",
      attribute: "ویژگی",
      attributes: "ویژگی ها",
      formula: "فرمول",
      minPrice: "حداقل قیمت",
      maxPrice: "حداکثر قیمت",
      search: "نام محصول...",
      extra_button: "دکمه اضافه",
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
      processing: "در دست بررسی",
      draft: "پیش نویس",
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
      metatitle: "meta title",
      metadescription: "meta description",
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
      taxAmount: "رقم مالیات",
      shop_name: "اسم فروشگاه (فاکتور)",
      shop_site_address: "آدرس سایت (فاکتور)",
      shop_address: "آدرس فروشگاه (فاکتور)",
      shop_phoneNumber: "شماره تماس (فاکتور)",
      shop_faxNumber: "شماره فکس (فاکتور)",
      shop_postalCode: "کد پستی (فاکتور)",
      shop_submitCode: "کد ثبتی (فاکتور)",
      shop_internationalCode: "کد اقتصادی، شماره ملی (فاکتور)",
      tax: "مالیات",
      currency: "currency",
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
      phoneNumber: "شماره موبایل",
      customerGroup: "ارسال به گروه مشتری",
      source: "ارسال به منبع",
      CRM: "CRM",
      WEBSITE: "WEBSITE"


    },
    transaction: {
      RefID: "شماره مرجع",
      gateway: "درگاه",
      method: "روش",
      edit: "ویرایش",
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
