import React from "react";
import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/Home/Hero";

describe("Hero Component",()=>{
    test("renders hero image",()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("Hero-img");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src','image/Home/landing.png');
    });
});