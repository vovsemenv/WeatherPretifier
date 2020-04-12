import React from 'react';
export function LittleBlock({icon,title,data}){

    return(
        <div className="Now Block Little">
            <span className="Now-Title">
                {title}
            </span>
            <img className="Little-Logo" src="./images/day.svg" alt=""/>
                <span className="Little-T">Температура 50С</span>
                <span className="Little-T">Сильный снег</span>
        
        </div>
    )

}

export default LittleBlock;