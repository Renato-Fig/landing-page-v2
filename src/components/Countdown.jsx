import { useEffect, useState } from "react"
import { render } from "react-dom"
import "../styles/countdown.scss"


export function Countdown() {
    
    const deadline = new Date("November 21, 2022 13:00:00").getTime()
    let days, hours, minutes, seconds
    
    setInterval(function()  {
        let now = new Date().getTime()
        let totalSecondsRemaining = (deadline - now) / 1000

        days = Math.floor(totalSecondsRemaining / 86400)
        totalSecondsRemaining = totalSecondsRemaining % 86400

        hours = Math.floor(totalSecondsRemaining / 3600)
        totalSecondsRemaining = totalSecondsRemaining %3600

        minutes = Math.floor(totalSecondsRemaining / 60)

        seconds = Math.floor(totalSecondsRemaining % 60)

        document.getElementById("hours").innerText = hours
        document.getElementById("days").innerText = days
        document.getElementById("minutes").innerText = minutes
        document.getElementById("seconds").innerText = seconds
    }, 1000)
    

    return (
        <div id="countdown">
            <div className="container">
                <h3>O tempo para o ENEM está acabando...</h3>
                <main>
                    <div>
                        <span id="days"></span> 
                        <p>Dias</p>
                    </div>
                    <div>
                        <span id="hours"></span>
                        <p>Horas</p>
                    </div>
                    <div>
                        <span id="minutes"></span> 
                        <p>Minutos</p>
                    </div>
                    <div>
                        <span id="seconds"></span>
                        <p>Segundos</p>
                    </div>
                </main>
            </div>
        </div>
    )
}