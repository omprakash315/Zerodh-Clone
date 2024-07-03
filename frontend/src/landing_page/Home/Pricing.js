export default function Pricing(){
    return (
        <div className="container p-5">
            <div className="row gx-5">
                <div className="col">
                    <h1>Unbeatable pricing</h1>
                    <br />
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className="icon-link link-underline link-underline-opacity-0" href="#">
                        See pricing
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className="col">
                    <div class="row text-center border border-dark-subtle">
                        <div class="col border border-dark-subtle p-5">
                            <p>
                                <i class="fa-solid fa-indian-rupee-sign"></i> 0<br />
                                Free equity delivery and direct mutual funds
                            </p>

                        </div>
                        <div class="col border border-dark-subtle p-5"> 
                            <p>
                                <i class="fa-solid fa-indian-rupee-sign"></i> 20  <br />
                                Intraday and F&O
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}