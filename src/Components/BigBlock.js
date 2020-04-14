import React from 'react';
let cldict={
    
    "0": "ясно",
    "0.25":"малооблачно",
    "0.5":"облачно",
    "0.75": "облачно", 
    "1":"пасмурно"

}
function BigBlock({title,dataToday}){
    let icon = dataToday.icon;
    let cloud =  cldict[`${dataToday.cloudness}`]
    return(
        <div className="Today Block">
            <span className="Today-Title">
                {title}
            </span>
            <div className="Today-Main">
                <img className="Today-Logo" src={icon} alt=""/>
                    <div className="Today-Text-1 Today-Text">
                        <div className="Titles">
                            <span>Мин t:</span>
                            <span>Макс t:</span>
                            <span>Ветер</span>
                            <span>Давление:</span>
                        </div>
                        <div className="Values">
                            <span>{`${dataToday.min_t}°C`}</span>
                            <span>{`${dataToday.max_t}°C`}</span>
                            <span>{`${dataToday.wind}м/c`}</span>
                            <span>{`${dataToday.preassure}мм`}</span>
                        </div>
                    </div>
                <div className="Today-Text-2 Today-Text">
                <div className="Titles">
                            <span>Осадки</span>
                            <span>Облачность</span>
                            <span>Влажность</span>
                            <span>Закат</span>
                        </div>
                        <div className="Values">
                            <span>{dataToday.prec}</span>
                            <span>{cloud}</span>
                            <span>{`${dataToday.hidracity}%`}</span>                            
                            <span>{dataToday.sunset}</span>
                        </div>
                </div>
            </div>
        
        </div>
    )

}
export default BigBlock;