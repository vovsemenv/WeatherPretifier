import React from 'react';
function blur(){
    let blocks = document.querySelectorAll(".Block");
    [...blocks].forEach(element => {
      element.classList.add("blur")
    });
  }
  function reblur(){
    let blocks = document.querySelectorAll(".Block");
    [...blocks].forEach(element => {
      element.classList.remove("blur");
    });
  }

function TobBar(props){
    function d(){
        if(props.state=="none"){
            props.setstate("block");
            blur();
        }else{
            props.setstate("none");
            reblur()
        
        }
        }
    return(
        <div className="Top-Wrapped">
            <ul className="Top-Bar container">
                    <li className="Logo">PrettyWeather</li>
                    
                    <li className="City-Text" onClick={d}>{props.City}</li>
            </ul>
            
        </div>
    )
}
export default TobBar;