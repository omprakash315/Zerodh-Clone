import React from "react";
import Brokerage from "./Brokerage";
import Hero from "./Hero";
import OpenAccount from "../OpenAcount";

export default function PricingPage() {
    return (
        <div>
            <Hero />
            <OpenAccount/>
            <Brokerage />
        </div>
    );
}
