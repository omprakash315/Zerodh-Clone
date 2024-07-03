import React from "react";
import LeftSection from "./LeftSection"
import RightSection from "./RightSection"
import Universe from "./Universe"
import Hero from "./Hero"

export default function ProductPage(){
    return (
        <div>
            <Hero/>
            <LeftSection
                imageUrl="image\Product\Left\products-kite.png"
                Title="Kite"
                Description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                link1="https://kite-demo.zerodha.com/dashboard"
                link2="https://zerodha.com/products/kite"  
                link1Title="Try demo"  
                link2Title="Learn more"
            />
            <RightSection
                imageUrl="image\Product\Right\products-console.png"
                Title="Console"
                Description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                link2="https://zerodha.com/products/kite"  
                link2Title="Learn more"
            />
            <LeftSection
                imageUrl="image\Product\Left\products-coin.png"
                Title="Coin"
                Description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                link1="https://coin.zerodha.com/"
                link2="https://zerodha.com/products/kite"  
                link1Title="Coin"  
                link2Title="Learn more"
            />
            <RightSection
                imageUrl="image\Product\Right\products-kiteconnect.png"
                Title="Kite Connect API"
                Description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                link2="https://kite.trade/"  
                link2Title="Kite Connect"
            />
            <LeftSection
                imageUrl="image\Product\Left\varsity-products.png"
                Title="Varsity mobile"
                Description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                link2="https://zerodha.com/products/kite"  
                link1Title="Try demo"  
                link2Title="Learn more"
            />
            <Universe/>
        </div>
    )
};