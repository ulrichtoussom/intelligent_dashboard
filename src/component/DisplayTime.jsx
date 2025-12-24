import { useEffect,useState } from "react"

import '../componentStyle/DisplayTime.css'



export default function DisplayTime(){

    const [ hour, setHour] = useState(new Date().getHours() )
    const [ min, setMin] =  useState(new Date().getMinutes())
    const [ sec, setSec] =  useState(new Date().getSeconds())


    useEffect(()=>{
        
        const timer = setInterval(()=>{
           
            if(sec < 59 ){
                setSec(v => v+1)
            }else{
                setSec(0)
                setMin( min => min+1)
            }

            if( min >= 59){
                setHour( h => h+1)
                setMin(0)
            }
            
            if(hour===24){
                setHour(0)
            }
            

        },1000)

        return () => {
            clearInterval(timer)
        }

        

        },[hour,sec,min])

    


    return(

       

        <div className="clock-container">
            <div className="clock-card">
                <div className="clock-label">Temps de session</div>
                <div className="clock-display">
                    <span className="time-unit">{(hour.toString().length==1)?`0${hour}`:hour}</span>
                    <span className="time-separator">:</span>
                    <span className="time-unit">{min}</span>
                    <span className="time-separator">:</span>
                    <span className="time-unit seconds">{sec.toString().length==1?`0${sec}`:sec}</span>
                </div>
            </div>
        </div>
        
    )
}