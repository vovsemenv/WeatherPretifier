import React from 'react';
export function MiddleBlockNow({title,dataNow}){
    let icon = dataNow.icon;
    return(
        <div className="Now Block">
            <span className="Now-Title">
                {title}
            </span>

            <div className="Now-Main">
                <img className="Now-Logo" src={icon} alt=""/>
                    <div id="cloth" className="Today-Text-1 Today-Text">
                        <div className="Titles">
                            <span>Факт t:</span>
                            <span>Ощущается:</span>
                            <span>Ветер</span>
                            <span>Осадки:</span>
                        </div>
                        <div className="Values">
                            <span>{`${dataNow.t}°C`}</span>
                            <span key={dataNow.feels_like}>{`${dataNow.feels_like}°C`}</span>
                            <span>{`${dataNow.wind} м/c`}</span>
                            <span>{dataNow.prec}</span>
                        </div>
                    </div>
            
            </div>
        
        </div>
    )

}
function umbr(dat){
    if(dat==true){
        return "Лучше взять зонт"
    }else{
        return "зонт не нужен"
    }
}
export function MiddleBlockClothes({title,dataClothes}){
    let icon = dataClothes.icon;
    let rain;
    if(dataClothes.prediction_umbrella){
        rain = <img className="Now-Logo" src="/images/umberlla.png" alt=""/>;
    }
    return(
        <div className="Now Block">
            <span className="Now-Title">
                Что надеть
            </span>
            

            <div className="Now-Main">
                <img className="Now-Logo" src="/images/clothes/light_jacket.png" alt=""/>
                    <div className="Today-Text">
                        <div className="Titles-Clothes">
                            {dataClothes.prediction_clothes}<br/>
                            {umbr(dataClothes.prediction_umbrella)}
                        </div>
                    
                    </div>
                    
                    {rain}
            </div>
        
        </div>
    )

}
export default MiddleBlockNow;