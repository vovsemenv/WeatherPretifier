import React from 'react';
export function LittleBlock({title,dataDay}){
    let icon = dataDay.icon;
    let t_avg  = (dataDay.t_min+dataDay.t_max)/2;
    return(
        <div className="Now Block Little">
            <span className="Now-Title">
                {title}
            </span>
            <img className="Little-Logo" src={icon} alt=""/>
                <span className="Little-T">Температура <br/>{`${t_avg}°C`}</span>
                <span className="Little-T">{dataDay.prec}</span>
        
        </div>
    )

}

export default LittleBlock;