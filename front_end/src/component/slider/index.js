import React from "react";
import "./style.css"
import SliderItem from "../slider-item";


export default function Slider() {
    return (
        <section className="mainSection">
            <div className="content-container">
                <div className="content">
                    <p className="line-1">Reserve a car for your next journey</p>
                    <p className="line-2">Easycar brings you the best vehicles to take you through your ride. It's
                        elegant, reliable, and more affordable to you.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus libero placeat quas suscipit
                        voluptatem! Aperiam assumenda aut corporis eaque esse, fugit quia sapiente. Aliquid cupiditate
                        deleniti et incidunt laudantium repellendus!</p>
                </div>
            </div>
            <SliderItem />
        </section>
    )
}