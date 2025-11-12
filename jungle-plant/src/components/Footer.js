"use client"

import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
    const [inputValue, setInputValue] = useState("")

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes("@")) {
            alert ("Attention, there is no @, this is not a valid address  {`\u{1F625}`}");
        }
    }

    return (
        <footer className="jh-footer">
            <div className="jh-footer-text">
                For plant enthusiast.
            </div>
            <div className="jh-footer-elem">Subscribe to our newsletter :</div>
            <input 
            placeholder="Enter your email"
            onChange={handleInput}
            value={inputValue}
            onBlur={handleBlur}
            />
        </footer>
    )

}

export default Footer;

