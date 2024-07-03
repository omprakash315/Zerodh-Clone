export default function Education(){
    return (
        <div className="container px-4">
            <div className="row gx-5">
                <div className="col p-3">
                    <img src="image/Home/index-education.svg" alt="education" />
                </div>
                <div className="col p-5">
                    <h3>Free and open market education</h3>
                    <br />
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <br />
                    <a className="icon-link link-underline link-underline-opacity-0" href="#">
                        Varsity
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <br />
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <br />
                    <a className="icon-link link-underline link-underline-opacity-0" href="#">
                        TradingQ&A
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>

                </div>
            </div>
        </div>
    )
}