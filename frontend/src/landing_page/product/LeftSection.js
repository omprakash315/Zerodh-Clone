import React from "react";
export default function LeftSection({imageUrl,Title,Description,link1,link2 ,link1Title,Link2Title}){
    return (
        <div className="container" style={{margin:"5% 5%"}}>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-4">
                    <img src={imageUrl} />
                </div>
                <div className="col-2">
                </div>
                <div className="col-4 p-5">
                    <h1>{Title}</h1>
                    <br/>
                    <p>{Description}</p>   
                    <a href={link1} className="link-underline link-underline-opacity-0" >{link1Title}</a>       
                    <a href={link2} className="link-underline link-underline-opacity-0" >{Link2Title}</a>
                    <br/>
                    <div className="row">
                        <div className="col p-3">
                            <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3&pli=1">
                                <img src="image\Product\LeftAndRight\google-play-badge.svg"/>
                            </a>
                        </div>
                        <div className="col p-3">
                            <a href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
                                <img src="image\Product\LeftAndRight\appstore-badge.svg"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}