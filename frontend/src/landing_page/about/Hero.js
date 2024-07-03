import React from "react";
import { Link } from "react-router-dom";
export default function Hero(){
    return (
        <div className="container">
            <div className="text-center" style={{margin:"10% 20% 5%"}}>
                <h2>We pioneered the discount broking model in India.
                Now, we are breaking ground with our technology.</h2>
            </div>
            <hr/>
            <div className="row gx-5" style={{margin:"5% 20%"}}>
                <div className="col p-3">
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                    </p>
                    <p>
                        Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    </p>
                    <p>
                        Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className="col p-3">
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    </p>
                    <p>
                        <Link className="link-underline link-underline-opacity-0" aria-current="page" to="/"> Rainmatter </Link> , our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our <Link className="link-underline link-underline-opacity-0" aria-current="page" to="/"> blog </Link>  or see what the media is <Link className="link-underline link-underline-opacity-0" aria-current="page" to="/"> saying about us </Link> .
                    </p>
                </div>
            </div>
        </div>
    )
}
