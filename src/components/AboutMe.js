import React from "react";
import Author from "../avatar-1.png"

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <img src={Author} alt="author.."/>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1>About Me</h1>
                    <p>
                        Hello! I am Mohsin. I'm a student at Universirty of Victoria studying computer science.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
