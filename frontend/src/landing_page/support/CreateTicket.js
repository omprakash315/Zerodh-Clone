import React from "react";
import { Link } from "react-router-dom";

export default function CreateTicket(){
    return (
        <div className="container mt-5" style={{padding:"5%"}}>
            <h3>To create a ticket, select a relevant topic</h3>
            <br/>
            <div className="row">
                <div className="col-4">
                    <h4><Link className="link-underline link-underline-opacity-0 text-black"> <i class="fa-solid fa-circle-plus"></i> Account Opening</Link></h4>
                    <br/>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Getting started </Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Online</Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Offline</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Charges</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Company, Partnership and HUF</Link> </p>   
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Non Resident Indian (NRI)</Link></p>  
                </div>
                <div className="col-4">
                    <h4><Link className="link-underline link-underline-opacity-0 text-black"> <i class="fa-regular fa-user"></i> Your Zerodha Account</Link></h4>
                    <br/>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Login credentials </Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Your Profile</Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Account modification and segment addition</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">CMR & DP ID</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Nomination</Link> </p>   
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Transfer and conversion of shares</Link></p>  
                </div>
                <div className="col-4">
                    <h4><Link className="link-underline link-underline-opacity-0 text-black"> <i class="fa-solid fa-chart-simple"></i> Trading and Markets</Link></h4>
                    <br/>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Trading FAQs </Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Kite</Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Margins</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Charges</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Corporate actions</Link> </p>   
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Kite features</Link></p>  
                </div>
                <div className="col-4">
                    <h4><Link className="link-underline link-underline-opacity-0 text-black"> <i class="fa-solid fa-money-check-dollar"></i> Funds</Link></h4>
                    <br/>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Fund withdrawal </Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Adding funds</Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Adding bank accounts</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">eMandates</Link></p>    
                </div>
                <div className="col-4">
                    <h4><Link className="link-underline link-underline-opacity-0 text-black"> <i class="fa-solid fa-terminal"></i> Console</Link></h4>
                    <br/>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">IPO </Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Portfolio</Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Funds statement</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Profile</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Reports</Link> </p>   
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Referral program</Link></p>  
                </div>
                <div className="col-4">
                    <h4><Link className="link-underline link-underline-opacity-0 text-black"> <i class="fa-solid fa-coins"></i> Coin</Link></h4>
                    <br/>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Understanding mutual funds and Coin</Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Coin app</Link></p>
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Coin web</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Charges</Link></p>    
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">Transactions and reports</Link> </p>   
                    <p className="ps-3"><Link className="link-underline link-underline-opacity-0">National Pension Scheme (NPS)</Link></p>  
                </div>
            </div>
        </div>
    )
}