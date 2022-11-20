import React, { useEffect, useState } from "react";

import {Admin, CustomRoutes, Resource, useTranslate} from "react-admin";
import resources from "@/resource";
import {authProvider, dataProvider, theme} from "@/functions";
import englishMessages from "@/i18n/en";
import farsiMessages from "@/i18n/fa";
import themeDataReducer from "./themeDataReducer";
import themeReducer from "./themeReducer";
import languageReducer from "./languageReducer";
import Types from "@/functions/types";
import {Route} from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import {

  changeThemeData,
  changeThemeDataFunc,
} from "./functions/index";
import polyglotI18nProvider from "ra-i18n-polyglot";
import "@/assets/global.css";
import {MainLayout} from './layout';
import '@/assets/rtl.css';


const messages = {
    fa: farsiMessages,
    en: englishMessages
};

let dl = Types()["default_locale"];

const localeMain = localStorage.getItem("locale");
const i18nProvider = polyglotI18nProvider(
    locale => {
        if (localeMain) {
            locale = localeMain;
        }
        return messages[locale] ? messages[locale] : messages.en;
    },
    dl
);

export default function App() {
    const translate = useTranslate();
  const dispatch = useDispatch();
  const load = (options = {}) => {

    changeThemeDataFunc().then(e => {
      dispatch(changeThemeData(e));

    });
  };
  useEffect(() => {
    // console.clear();
    console.log("useEffect");
    load();
  }, []);
  const {Action, Attributes,CustomerGroup, ProductCategory,Gateway,Template,Discount,Logout,Page, Configuration, PrivateConfiguration, Customer, MainDashboard, Media, Menu, Order, OrderCart, Post, Product, Settings, Notification, Transaction, User,PageBuilder} = resources;
    return (
        <Admin
            title={translate('websiteName')}
            disableTelemetry
            theme={theme}
            dataProvider={dataProvider}
            authProvider={authProvider}
            dashboard={MainDashboard}
            layout={MainLayout}
            customReducers={{theme: themeReducer, locale: languageReducer,themeData:themeDataReducer}}
            i18nProvider={i18nProvider}
        >
            <Resource name="attributes" {...Attributes} options={{label: translate('pos.menu.attributes')}}/>
            <Resource name="productCategory" {...ProductCategory} options={{label: translate('pos.menu.categories')}}/>
            <Resource name="customerGroup" {...CustomerGroup} options={{label: translate('pos.menu.customerGroups')}}/>
            {/*<Resource name="customer-group" {...CustomerGroup} options={{label: translate('pos.menu.customerGroups')}}/>*/}
            <Resource name="discount" {...Discount} options={{label: translate('pos.menu.discounts')}}/>
            <Resource name="product" {...Product} options={{label: translate('pos.menu.products')}}/>
            <Resource name="post" options={{label: translate('pos.menu.posts')}} {...Post} />
            <Resource name="page" options={{label: translate('pos.menu.pages')}} {...Page} />
            <Resource name="gateway" options={{label: translate('pos.menu.gateways')}} {...Gateway} />
            <Resource name="customer" options={{label: translate('pos.menu.customers')}} {...Customer} />
            <Resource name="admin" options={{label: translate('pos.menu.users')}} {...User} />
            <Resource name="media" options={{label: translate('pos.menu.medias')}} {...Media} />
            <Resource name="menu" options={{label: translate('pos.menu.menu')}} {...Menu} />
            <Resource name="order" options={{label: translate('pos.menu.orders')}} {...Order} />
            <Resource name="ordercart" options={{label: translate("pos.menu.cart")}} {...OrderCart} />
            <Resource name="transaction" options={{label: translate("pos.menu.transactions")}} {...Transaction} />
            <Resource name="template" options={{label: translate("pos.menu.template")}} {...Template} />
            <Resource name="notification" options={{label: translate("pos.menu.notification")}} {...Notification} />
            <Resource name="settings" options={{label: translate("pos.menu.settings")}} {...Settings} />
            <Resource name="action" options={{label: translate("pos.menu.actions")}} {...Action} />
            <CustomRoutes>
                <Route path="/configuration" element={<Configuration/>}/>
                <Route path="/p-c" element={<PrivateConfiguration/>}/>
            </CustomRoutes>
            <CustomRoutes noLayout>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/builder/:model/:_id" element={<PageBuilder/>}/>
            </CustomRoutes>
        </Admin>
    );
}
