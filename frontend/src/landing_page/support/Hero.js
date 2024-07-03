import React from "react";
import { Link } from "react-router-dom";

export default function Hero(){
    return (
        <div className="container-fluid bg-primary" style={{padding:"5%"}}>
            <div className="text-white">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2">
                        <Link className="link-underline link-underline-opacity-0 text-white" aria-current="page" to="/support">Support Portal</Link>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3"></div>
                    <div className="col-4 text-end">
                        <Link className="link-underline link-underline-opacity-0 text-white" aria-current="page" to="/support">Track Tickets</Link>
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5 pt-4">
                        <h4>Search for an answer or browse help topics to create a ticket</h4>
                        <br/>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <br/>
                        <div className="row">
                            <div className="col-4">
                                <Link className="text-white" aria-current="page" to="/open-account">Track account opening</Link>
                            </div>
                            <div className="col-4">
                                <Link className="text-white" aria-current="page" to="/support">Track segment activation</Link>
                            </div>
                            <div className="col-4">
                                <Link className="text-white" aria-current="page" to="/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co">Intraday margins</Link>
                            </div>
                            <div className="col-4">
                                <Link className="text-white" aria-current="page" to="/support">Kite user manual</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-4 mt-5">
                        <h3>Featured</h3>
                        <ol>
                            <li><Link className="text-white" aria-current="page" to="/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co">Latest Intraday leverages and Square-off timings</Link></li>
                            <li><Link className="text-white" aria-current="page" to="/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co">Surveillance measure on scrips - June 2024</Link></li>
                        </ol>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
            
        </div>
    )
}