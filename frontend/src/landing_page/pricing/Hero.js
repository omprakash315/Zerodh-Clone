export default function Hero(){
    return (
        <div className="container">
            <div className="text-center" style={{margin:"10% 0 10%"}}>
                <h1>Pricing</h1>
                <p>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <hr/>
            <div className="row mt-5 mb-5">
                <div className="col-4 text-center" style={{padding:"0 0 0 10%"}}>
                    <img src="image\Pricing\pricing-eq.svg" height={"50%"}/>
                    <h3>Free equity delivery</h3>
                    <p>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col-4 text-center">
                    <img src="image\Pricing\other-trades.svg" height={"50%"} />
                    <h3>Intraday and F&O trades</h3>
                    <p>
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col-4 text-center" style={{padding:"0 10% 0 0"}}>
                    <img src="image\Pricing\pricing-eq.svg" height={"50%"}/>
                    <h3>Free direct MF</h3>
                    <p>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
            <hr/>
        </div>
    )
}