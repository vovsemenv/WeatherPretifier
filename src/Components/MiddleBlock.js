import React from 'react';
export function MiddleBlockNow({icon,title,data}){

    return(
        <div className="Now Block">
            <span className="Now-Title">
                {title}
            </span>

            <div className="Now-Main">
                <img className="Now-Logo" src="./images/day.svg" alt=""/>
                    <div className="Today-Text-1 Today-Text">
                        <div className="Titles">
                            <span>Мин t:</span>
                            <span>Макс t:</span>
                            <span>Ветер</span>
                            <span>Давление:</span>
                        </div>
                        <div className="Values">
                            <span>5oC</span>
                            <span>Мин t:</span>
                            <span>Мин t:</span>
                            <span>Мин t:</span>
                        </div>
                    </div>
            
            </div>
        
        </div>
    )

}
export function MiddleBlockClothes({icon,title,data}){

    return(
        <div></div>
    )

}
export default MiddleBlockNow;