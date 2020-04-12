import React, { useState,useEffect } from 'react';
import TopBar from "./Components/TopBar"
import './App.css';
import BigBlock from "./Components/BigBlock"
import {MiddleBlockNow} from "./Components/MiddleBlock"
import {LittleBlock} from "./Components/LittleBlock"
import axios from "axios"


async function getForecast(lat,lon){
  let API_TOKEN = "5b11bfc2-2fe6-4c2b-a946-013bcde3707a";
  let forecastResponse = await axios.get(`https://api.weather.yandex.ru/v1/forecast?lat=${lat}&lon=${lon}&extra=true`,
  {headers:{
      "X-Yandex-API-Key":API_TOKEN
      },
  
  });
  return await forecastResponse.data;
}
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

function App() {
  getForecast().then(er=>console.log(er))
  let res;
  let coordCook;
  let  CityCook;
  if(document.cookie.split(";").find(elem=>elem.match(/geo/))){
    res = "none";
    coordCook = document.cookie.split(";").find(elem=>elem.match(/geo/)).split("=")[1];
    CityCook = document.cookie.split(";").find(elem=>elem.match(/city/)).split("=")[1];
    
  }
  else{
    res = "block"
    
  }
  useEffect(() => {
    // Обновляем название докуммента, используя API браузера
    if(state=="block"){
      blur();
    }
  });
  let [state,setstate]= useState(res);
  let [coords,setCoords]= useState(coordCook);
  let [cityName,setCity]= useState(CityCook);
  
  function d(){
        document.cookie = `geo=${document.querySelector("#cityname").data1}`;
        document.cookie = `city=${document.querySelector("#cityname").value}`;
        setCity(document.querySelector("#cityname").value)
        setCoords(document.querySelector("#cityname").data1);
        if(state=="none"){
            setstate("block");
            blur();
        }else{
            setstate("none");
            reblur()
        
        }
        }
  return (
    <div className="App">
      <TopBar setstate={setstate} City ={cityName} state={state}/>
      <div className="container">
        <div className="row mt-3">
          <BigBlock title="Сегодня"></BigBlock>
        </div>
        <div className="row mt-3">
          <div className="col-6" style={{paddingLeft:"0px"}}>
            <MiddleBlockNow title="Сейчас"></MiddleBlockNow>
          </div>
          <div className="col-6" style={{paddingRight:"0px"}}>
            <MiddleBlockNow title="Сейчас"></MiddleBlockNow>
          </div>
        </div>

        <div className="row mt-3" >
          <div className="col-2" style={{paddingLeft:"0px"}}> <LittleBlock title="22.56"/></div>
          <div className="col-2" style={{paddingLeft:"0px"}}> <LittleBlock title="22.56"/></div>
          <div className="col-2" style={{paddingLeft:"0px"}}> <LittleBlock title="22.56"/></div>
          <div className="col-2" style={{paddingRight:"0px"}}> <LittleBlock title="22.56"/></div>
          <div className="col-2" style={{paddingRight:"0px"}}> <LittleBlock title="22.56"/></div>
          <div className="col-2" style={{paddingRight:"0px"}}> <LittleBlock title="22.56"/></div>
          
        </div>
        <div className="map-wrapp">
                <div id="map" style={{width: "600px", height: "400px", display:state }}><div className="cityData"><input id="cityname"/><button onClick={d}>Верно</button></div></div>
        </div>
      </div>
    </div>
  );
}


export default App;
