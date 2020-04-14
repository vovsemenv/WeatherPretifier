import React, { useState,useEffect } from 'react';
import TopBar from "./Components/TopBar"
import './App.css';
import BigBlock from "./Components/BigBlock"
import {MiddleBlockNow,MiddleBlockClothes} from "./Components/MiddleBlock"
import {LittleBlock} from "./Components/LittleBlock"
import axios from "axios"


function getMainForecast(lat=0,lon=0,setter){
  fetch(`http://localhost:9000/forecast?&lat=${lat}&lon=${lon}`,{mode:"no-cors"}).then(val=>{
    val.json().then(vao=>setter(vao));
  })


}

let clothesDict = {
  soCold:"/images/clothes/snow_jacket.png",
  medium:"/images/clothes/light_jacket.png",
  sunny:"/images/clothes/t_shirt.png"
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
  // getForecast().then(val=> console.log(val));
  
  let res;
  let coordCook= undefined;
  let  CityCook;
  
  let [mainLoadState,setMainLoadState] = useState(sampledata);
  

  
  
  if(document.cookie.split(";").find(elem=>elem.match(/geo/))){
    res = "none";
    coordCook = document.cookie.split(";").find(elem=>elem.match(/geo/)).split("=")[1];
    CityCook = document.cookie.split(";").find(elem=>elem.match(/city/)).split("=")[1];
    
  }
  else{
    res = "block"
    
  }
  
  let [loaded,setloaded] = useState(false);
  let [state,setstate]= useState(res);
  let [coords,setCoords]= useState(coordCook);
  let [cityName,setCity]= useState(CityCook);
  
  if(loaded==false&&document.cookie.split(";").find(elem=>elem.match(/geo/))){
    getMainForecast(coords.split(",")[0],coords.split(",")[1],setMainLoadState)
    setloaded(true);
  }
  useEffect(() => {
    

    if(state=="block"){
      blur();
    }else {
      
      reblur()
    }
    
  });
  function dorm(){
    console.log(`${new Date()}`)
    
      complexData.today.feels_like = getRandomArbitrary(40,50);
      console.log(complexData.today.feels_like);
      setMainLoadState(complexData);
      console.log(mainLoadState);
      
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  function d(){
    
    if(document.querySelector("#cityname").value!=""){  
      document.cookie = `geo=${document.querySelector("#cityname").data1}`;
        document.cookie = `city=${document.querySelector("#cityname").value}`;
        setCity(document.querySelector("#cityname").value)
        setCoords(document.querySelector("#cityname").data1);
        if(state=="none"){
            setstate("block"); 
            blur();
        }else{
            getMainForecast(coords.split(",")[0],coords.split(",")[1],setMainLoadState)
            setstate("none");
            reblur()
        
        } 
      
      }
        
        }
        
        
  return (
    <div className="App">
    
      <TopBar setstate={setstate} City ={cityName} state={state}/>
      <div className="container">
        <div className="row mt-3">
          <BigBlock dataToday={mainLoadState.today} title="Сегодня"></BigBlock>
        </div>
        <div className="row mt-3">
          <div className="col-6" style={{paddingLeft:"0px"}}>
            <MiddleBlockNow key={mainLoadState} dataNow={mainLoadState.now} refw={mainLoadState.now.feels_like} title="Сейчас"></MiddleBlockNow>
          </div>
          <div className="col-6" style={{paddingRight:"0px"}}>
            <MiddleBlockClothes dataClothes={mainLoadState.predictions} title="Сейчас"></MiddleBlockClothes>
          </div>
        </div>

        <div className="row mt-3" >
          <div className="col-2"   style={{paddingLeft:"0px"}}> <LittleBlock  dataDay={mainLoadState.etc[0]} title="22.56"/></div>
          <div className="col-2"   style={{paddingLeft:"0px"}}> <LittleBlock  dataDay={mainLoadState.etc[1]} title="22.56"/></div>
          <div className="col-2"   style={{paddingLeft:"0px"}}> <LittleBlock  dataDay={mainLoadState.etc[2]} title="22.56"/></div>
          <div className="col-2"   style={{paddingRight:"0px"}}> <LittleBlock dataDay={mainLoadState.etc[3]}  title="22.56"/></div>
          <div className="col-2"   style={{paddingRight:"0px"}}> <LittleBlock dataDay={mainLoadState.etc[4]}  title="22.56"/></div>
          <div className="col-2"   style={{paddingRight:"0px"}}> <LittleBlock dataDay={mainLoadState.etc[5]}  title="22.56"/></div>
          
        </div>
        <div className="map-wrapp">
                <div id="map" style={{width: "600px", height: "400px", display:state }}><div className="cityData"><input readOnly id="cityname"/><button onClick={d}>Верно</button></div></div>
        </div>
      </div>
        
    </div>
  );
}

const sampledata  = {
  today:{
      icon:"./images/day.svg",
      min_t:"load",
      max_t:"load",
      wind:"load",
      preassure:"load",
      cloudness:"load",
      prec:"load",
      hidracity:"load",
      sunset:"load"
  },
  now:{
      icon:"./images/day.svg",
      t:"load",
      wind:"load",
      prec:"load",
      feels_like:"load"
  },
  predictions:{
      icon:"/images/clothes/t-shirt.svg",
      prediction_clothes:"load",
      prediction_umbrella:"load"
  },
  etc:[
  {
      icon:"./images/day.svg",
      t_min:"load",
      t_avg:"load",
      
      t_max:"load",
      prec:"load",
      cloudness:"load"
  },
  {

    icon:"./images/day.svg",
      t_min:"load",
      t_avg:"load",
      
      t_max:"load",
      prec:"load",
      cloudness:"load"
  },
  {
    icon:"./images/day.svg",
      t_min:"load",
      t_max:"load",
      t_avg:"load",
      
      prec:"load",
      cloudness:"load"
  },
  {
    icon:"./images/day.svg",
      t_min:"load",
      t_max:"load",
      t_avg:"load",
      
      prec:"load",
      cloudness:"load"
  },
  {
    icon:"./images/day.svg",
      t_min:"load",
      t_max:"load",
      t_avg:"load",
      
      prec:"load",
      cloudness:"load"
  },
  {
    icon:"./images/day.svg",
      t_min:"load",
      t_max:"load",
      t_avg:"load",
      
      prec:"load",
      cloudness:"load"
  }
  ]
}

let complexData = {"today":{"icon":"https://yastatic.net/weather/i/icons/blueye/color/svg/bkn_d.svg","min_t":11,"max_t":13,"wind":5.2,"preassure":748,"cloudness":0.75,"prec":"Без осадков","hidracity":49,"sunset":"18:55"},"now":{"icon":"https://yastatic.net/weather/i/icons/blueye/color/svg/bkn_d.svg","t":9,"wind":5,"prec":"Без осадков","feels_like":3},"predictions":{"icon":"./images/clothes/t-shirt.svg","prediction_clothes":"Надеть майку","prediction_umbrella":"Зонт не нужен"},"etc":[{"icon":"https://yastatic.net/weather/i/icons/blueye/color/svg/ovc.svg","t_min":12,"t_max":16,"prec":"Без осадков","cloudness":1},{"icon":"https://yastatic.net/weather/i/icons/blueye/color/svg/ovc_-ra.svg","t_min":5,"t_max":6,"prec":"Слабый Дождь","cloudness":1},{"icon":"https://yastatic.net/weather/i/icons/blueye/color/svg/ovc_-ra.svg","t_min":4,"t_max":5,"prec":"Слабый Дождь","cloudness":1},{"icon":"https://yastatic.net/weather/i/icons/blueye/color/svg/bkn_-ra_d.svg","t_min":7,"t_max":7,"prec":"Слабый Дождь","cloudness":0.5},{"icon":"https://yastatic.net/weather/i/icons/blueye/color/svg/bkn_d.svg","t_min":8,"t_max":9,"prec":"Без осадков","cloudness":0.75},{"icon":"https://yastatic.net/weather/i/icons/blueye/color/svg/ovc.svg","t_min":10,"t_max":11,"prec":"Без осадков","cloudness":1}]}


export default App;
