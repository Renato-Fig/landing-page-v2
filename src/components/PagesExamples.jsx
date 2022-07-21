import "../styles/pages-examples.scss"

import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

import img01 from "../assets/1.jpg"
import img02 from "../assets/2.jpg"
import img03 from "../assets/3.jpg"
import img04 from "../assets/4.jpg"
import img05 from "../assets/5.jpg"

import { useState } from "react";

export function PagesExamples() {

    const SliderData = [
        {image: img01},
        {image: img02},
        {image: img03},
        {image: img04},
        {image: img05}
    ]

    const[current, setCurrent] = useState(0)

    let previous = current - 1
    let posterior = current + 1

    console.log(posterior)
    return (
        <section id="pages-examples">
            <div className="container">                
                <h2>Veja algumas páginas</h2>
                <div id="carousel">
                    <button 
                        onClick={() => current == 0 ? setCurrent(SliderData.length - 1): setCurrent(current - 1)}
                    >
                        <FaAngleLeft/>
                    </button>
                    <img src={previous == -1 ? SliderData[SliderData.length-1].image : SliderData[previous].image} alt="" className="aside"/>
                    <img src={SliderData[current].image} alt="" className="main"/>
                    <img src={posterior == SliderData.length ? SliderData[0].image : SliderData[posterior].image} alt="" className="aside"/>
                    <button 
                        onClick={() => current == SliderData.length - 1 ? setCurrent(0): setCurrent(current + 1)
                        }
                    >
                        <FaAngleRight/>
                    </button>
                </div>
            </div>
        </section>
    )
}