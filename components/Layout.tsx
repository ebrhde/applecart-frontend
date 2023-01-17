import Header from './Header';
import Catalog from "./catalog/Catalog";
import Footer from './Footer';
import {FC, ReactNode} from "react";
import React from 'react';
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import Profile from "./profile/Profile";
import Cart from "./cart/Cart";
import NavbarMobile from "./mobile-navbar/NavbarMobile";

type layoutProps = {
    children:ReactNode
    categories: {id: number, image: string, alias: string, title: string, description: string}[]
}


const Layout:FC<layoutProps> = ({children, categories}:layoutProps) => {
  return(
    <>
        <Header />
        <NavbarMobile categories={categories} />
        <Catalog categories={categories} />
        {children}
        <Footer copyright={"© 2020-" + new Date().getFullYear() + " Made by: Anton Ebers-Hyde"}/>
        <Signin />
        <Signup />
        <Profile />
        <Cart />
    </>
  )
};

export default Layout;