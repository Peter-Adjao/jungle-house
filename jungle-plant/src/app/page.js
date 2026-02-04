"use client"
import { useState } from 'react'
import Banner from "../components/Banner";
import Cart from "../components/Cart";
import ShoppingList from "../components/ShoppingList";
import Footer from "../components/Footer";
import "../styles/Page.css";


export default function HomePage() {
    const [cart, updateCart] = useState([])
    return (
        <div>
            <Banner />
            <div className="page-layout">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
             <Footer />
        </div>
    );
}