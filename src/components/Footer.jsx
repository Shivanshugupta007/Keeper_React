import React from "react";

const year = new Date().getFullYear();

function Footer() {
    
    return(
        <footer>
            <p>Copyright ⓒ {year} React App By Shivanshu</p>
        </footer>
    );
}

export default Footer;