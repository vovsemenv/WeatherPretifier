import React from "react";
import { useState } from 'react';
const Weather = () =>{
            const [data, setData] = useState({
            today:{
                min_t: "loading",
                max_t: "loading",
                wind: "loading",
                preassure: "loading",
                cloudness: "loading",
                prec: "loading",
                hidracity: "loading",
                sunset: "loading"
            },
            now:{
                t: "loading",
                wind: "loading",
                prec: "loading",
                feels_like:"loading"
            },
            predictions:{
                prediction_clothes:"loading",
                prediction_umbrella:"loading"
            },
            tomorrow:{
                t_min: "loading",
                t_max: "loading",
                prec: "loading",
                cloudness: "loading" 
            },
            tom_next:{
                t_min: "loading",
                t_max: "loading",
                prec: "loading",
                cloudness: "loading"
            },
            tom_next_next:{
                t_min: "loading",
                t_max: "loading",
                prec: "loading",
                cloudness: "loading"
            }
        });

        fetch("http://localhost:5001/forecast").then((data,err)=>{
            data.json().then(val=>{
                setData(val);
                console.log(JSON.stringify(val))
            })
            
        }).catch(
            (err)=>console.log(err)
        )
        
return ();
 




}

export default Weather;