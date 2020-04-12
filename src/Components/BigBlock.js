import React from 'react';
function BigBlock({icon,title,data}){

    return(
        <div className="Today Block">
            <span className="Today-Title">
                {title}
            </span>
            <div className="Today-Main">
                <img className="Today-Logo" src="./images/day.svg" alt=""/>
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
                <div className="Today-Text-2 Today-Text">
                <div className="Titles">
                            <span>Влажность</span>
                            <span>Облачность</span>
                            <span>Осадки</span>
                            <span>Закат</span>
                        </div>
                        <div className="Values">
                            <span>Мин t:</span>
                            <span>Мин t:</span>
                            <span>Сильный дождь</span>
                            <span>Мин t:</span>
                        </div>
                </div>
            </div>
        
        </div>
    )

}
export default BigBlock;