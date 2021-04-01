import React from "react";
import Typed from "react-typed";

const header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Web Development and Website Promotions</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Desgin", "Web Development", "Facebook Ads SMM", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact Me</a>

            </div>

        </div>
    )
}

export default header
