const express = require('express');
const path = require('path');
const app = express();
const axios = require("axios");

const API_TOKEN = "bbeafa2b-425e-40f2-b3d9-07002040db9f";
const API_URL = "https://api.weather.yandex.ru/v1/forecast";

async function getForecast({lat,lon}){
    let forecastResponse = await axios.get(`${API_URL}?lat=${lat}&lon=${lon}&extra=true`,
    {headers:{
        "X-Yandex-API-Key":API_TOKEN
        }
    });
    return await forecastResponse.data;
}

function getPrecType(type){
    let arr = ['Без осадков',"Дождь","Дождь","Снег"]
    return arr[type];
}

function precGenerator(prec_type,prec_strength){
    switch (prec_strength) {
        case 0:
            {
                return "Без осадков"
            }
        case 0.25:
            {
                return `Слабый ${getPrecType(prec_type)}`
            }
        case 0.5:
            {
                return `${getPrecType(prec_type)}`
            }
        case 0.75:
            {
                return `Сильный ${getPrecType(prec_type)}`
            }
        case 1:
            {
                if(prec_type==1||prec_type==2){
                    return `Сильный ливень`
                }else return `Очень сильный снег`
            }
        
        default:
            return("error");
    }
}

function prediction_img(temp,wind,prec){
    if(temp<-5){
        return clothesDict.soCold;
    }else if(temp<7){
        return clothesDict.medium
    }else if(prec==0){
        return clothesDict.sunny
    }else{
        return clothesDict.medium
    }


}
function prediction_clothes(temp,wind,prec){
    if(temp<-5){
        return "Лучше надеть пуховик";
    }else if(temp<7){
        return "Можно надеть ветровку"
    }else if(prec==0){
        return "Можно Надеть футболку"
    }else{
        return "Лучше надеть ветровку"
    }


}

let clothesDict = {
    soCold:"/images/clothes/snow_jacket.png",
    medium:"/images/clothes/light_jacket.png",
    sunny:"/images/clothes/t-shirt.png"
  }
function prediction_umbrella(prec){
    if(prec==1|prec==2){
        return "Лучше взять зонт"
    }else{
        return "Зонт не нужен"
    }
}

function pred_umbr(prec){
    if(prec==1||prec==2){
        return true;
    }else return false;
}
function changeData(data){
    let sampledata  = {
        today:{
                icon:`https://yastatic.net/weather/i/icons/blueye/color/svg/${data.forecasts[0].parts.day.icon}.svg`,
                min_t: data.forecasts[0].parts.day.temp_min||"error",
                max_t: data.forecasts[0].parts.day.temp_max||"error",
                wind: data.forecasts[0].parts.day.wind_speed||"error",
                preassure: data.forecasts[0].parts.day.pressure_mm||"error",
                cloudness: data.forecasts[0].parts.day.cloudness||"error",
                prec: precGenerator(data.forecasts[0].parts.day.prec_type,data.forecasts[0].parts.day.prec_strength)||"error",
                hidracity: data.forecasts[0].parts.day.humidity||"error",
                sunset: data.forecasts[0].sunset||"error"
        },
        now:{
            icon:`https://yastatic.net/weather/i/icons/blueye/color/svg/${data.fact.icon}.svg`,
            t: data.fact.temp||"error",
                wind: data.fact.wind_speed||"error",
                prec: precGenerator(data.fact.prec_type,data.fact.prec_strength)||"error",
                feels_like:data.fact.feels_like||"error"
        },
        predictions:{
            icon:prediction_img(data.forecasts[0].parts.day.temp_min,data.forecasts[0].parts.day.wind_speed,data.forecasts[0].parts.day.prec_type),
            prediction_clothes:prediction_clothes(data.forecasts[0].parts.day.temp_min,data.forecasts[0].parts.day.wind_speed,data.forecasts[0].parts.day.prec_type)||"error",
            prediction_umbrella:pred_umbr(data.forecasts[0].parts.day.prec_type),
        },
        etc:[
        {
                icon:`https://yastatic.net/weather/i/icons/blueye/color/svg/${data.forecasts[1].parts.day.icon}.svg`,
                t_min: data.forecasts[1].parts.day.temp_min,
                t_max: data.forecasts[1].parts.day.temp_max,
                prec: precGenerator(data.forecasts[1].parts.day.prec_type,data.forecasts[1].parts.day.prec_strength),
                cloudness: data.forecasts[1].parts.day.cloudness 
        },
        {
            icon:`https://yastatic.net/weather/i/icons/blueye/color/svg/${data.forecasts[2].parts.day.icon}.svg`,
            t_min: data.forecasts[2].parts.day.temp_min,
            t_max: data.forecasts[2].parts.day.temp_max,
            prec: precGenerator(data.forecasts[2].parts.day.prec_type,data.forecasts[2].parts.day.prec_strength),
            cloudness: data.forecasts[2].parts.day.cloudness 
        },
        {
            icon:`https://yastatic.net/weather/i/icons/blueye/color/svg/${data.forecasts[2].parts.day.icon}.svg`,
            t_min: data.forecasts[3].parts.day.temp_min,
                t_max: data.forecasts[3].parts.day.temp_max,
                prec: precGenerator(data.forecasts[3].parts.day.prec_type,data.forecasts[3].parts.day.prec_strength),
                cloudness: data.forecasts[3].parts.day.cloudness 
        },
        {
            icon:`https://yastatic.net/weather/i/icons/blueye/color/svg/${data.forecasts[4].parts.day.icon}.svg`,
            t_min: data.forecasts[4].parts.day.temp_min,
                t_max: data.forecasts[4].parts.day.temp_max,
                prec: precGenerator(data.forecasts[4].parts.day.prec_type,data.forecasts[4].parts.day.prec_strength),
                cloudness: data.forecasts[4].parts.day.cloudness 
        },
        {
            icon:`https://yastatic.net/weather/i/icons/blueye/color/svg/${data.forecasts[5].parts.day.icon}.svg`,
            t_min: data.forecasts[5].parts.day.temp_min,
                t_max: data.forecasts[5].parts.day.temp_max,
                prec: precGenerator(data.forecasts[5].parts.day.prec_type,data.forecasts[5].parts.day.prec_strength),
                cloudness: data.forecasts[5].parts.day.cloudness 
        },
        {
            icon:`https://yastatic.net/weather/i/icons/blueye/color/svg/${data.forecasts[6].parts.day.icon}.svg`,
            t_min: data.forecasts[6].parts.day.temp_min,
                t_max: data.forecasts[6].parts.day.temp_max,
                prec: precGenerator(data.forecasts[6].parts.day.prec_type,data.forecasts[6].parts.day.prec_strength),
                cloudness: data.forecasts[6].parts.day.cloudness 
        }
        ]
      }
      return sampledata;
}


app.use(express.static(path.join(path.resolve(__dirname, '..'), 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(path.resolve(__dirname, '..'), 'build', 'index.html'));
});
app.get("/forecast",async (req,res)=>{
    
    let lat = req.query.lat;
    let lon = req.query.lon;
    let data = await getForecast({lat,lon});
    console.log(new Date());
    res.json(changeData(data));
});

app.listen(9000,()=>console.log("listening 9000 port"));