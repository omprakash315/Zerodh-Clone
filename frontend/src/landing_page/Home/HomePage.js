import React from "react";
import Hero from "./Hero"
import Awards from "./Awards"
import Education from "./Education"
import Pricing from "./Pricing"
import Stats from "./Stats"
import OpenAccount from "../OpenAcount"
export default function HomePage(){
    return (
        <div>
            <Hero/>
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
        </div>
    )
}