import * as React from 'react';
import { useState, useEffect } from 'react';

const Counter = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isCountdown, setIsCountdown] = useState(false);
    const [alertTime, setAlertTime] = useState(""); 

    useEffect(() => {
        setIsActive(true);
    }, []);

    useEffect(() => {
        const interval = isActive ?
            setInterval(() => {
                if (isCountdown) {
                    setSeconds(prevSeconds => {
                        if (prevSeconds === 0) {
                            if (minutes === 0) {
                                if (hours === 0) {
                                    setIsActive(false);
                                    clearInterval(interval);
                                    return 0;
                                }
                                setHours(prevHours => prevHours - 1);
                                setMinutes(59);
                                return 59;
                            }
                            setMinutes(prevMinutes => prevMinutes - 1);
                            return 59;
                        }
                        return prevSeconds - 1;
                    });
                } else {
                    setSeconds(prevSeconds => {
                        if (prevSeconds === 59) {
                            setMinutes(prevMinutes => {
                                if (prevMinutes === 59) {
                                    setHours(prevHours => prevHours + 1);
                                    return 0;
                                }
                                return prevMinutes + 1;
                            });
                            return 0;
                        }
                        return prevSeconds + 1;
                    });
                }
            }, 1000)
            : null;

        return () => clearInterval(interval);
    }, [isActive, isCountdown, seconds, minutes, hours]);

    useEffect(() => {
        const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
        if (totalTimeInSeconds === alertTime) {
            alert(`Tiempo alcanzado: ${alertTime} segundos`);
        }
    }, [seconds, minutes, hours, alertTime]);

    const startCounter = () => {
        setIsCountdown(false);
        setIsActive(true);
    };

    const startCountdown = () => {
        setIsCountdown(true);
        setIsActive(true);
    };

    const stop = () => {
        setIsActive(false);
    };

    const restart = () => {
        setIsActive(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    return (
        <div className="card">
            <div className="card-body">
                {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <button onClick={startCounter}>Start Counter</button>
            <button onClick={startCountdown}>Start Countdown</button>
            <button onClick={stop}>Stop</button>
            <button onClick={restart}>Restart</button>
            <div>
                <label htmlFor="alertTime">Seleccione tiempo hasta alerta: </label>
                <input
                    type="number"
                    id="alertTime"
                    value={alertTime}
                    onChange={(e) => setAlertTime(Number(e.target.value))}
                />
            </div>
        </div>
    );
};

export default Counter;