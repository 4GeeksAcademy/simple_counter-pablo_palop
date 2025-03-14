import * as React from 'react';
import { useState, useEffect } from 'react';

const Countdown = () => {

    const [seconds, setSeconds] = useState(1);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [inputHours, setInputHours] = useState("");
    const [inputMinutes, setInputMinutes] = useState("");
    const [inputSeconds, setInputSeconds] = useState("");

    useEffect(() => {
        const interval = isActive
            ? setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 0) {
                        setMinutes(prevMinutes => {
                            if (prevMinutes === 0) {
                                setHours(prevHours => prevHours - 1);
                                return 59;
                            } else {
                                return prevMinutes - 1;
                            }
                        });
                        return 59;
                    } else {
                        return prevSeconds - 1;
                    }
                });
            }, 1000)
            : null;

        return () => clearInterval(interval);
    }, [isActive]);

    useEffect(() => {
            const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
            if (totalTimeInSeconds === 0) {
                alert(`Se acabó el tiempo`);
            }
        }, [seconds, minutes, hours]);

    const start = () => {
        setHours(parseInt(inputHours, 10) || 0);
        setMinutes(parseInt(inputMinutes, 10) || 0);
        setSeconds(parseInt(inputSeconds, 10) || 0);
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
                <div className='d-flex justify-content-center'>
                    <label className='d-flex m-2'>Horas:</label>
                    <input 
                        type="text" 
                        placeholder='HH' 
                        value={inputHours} 
                        onChange={(e) => setInputHours(e.target.value)} 
                    />
                    <label className='d-flex m-2'>Minutos:</label>
                    <input 
                        type="text" 
                        placeholder='MM' 
                        value={inputMinutes} 
                        onChange={(e) => setInputMinutes(e.target.value)} 
                    />
                    <label className='d-flex m-2'>Segundos:</label>
                    <input 
                        type="text" 
                        placeholder='SS' 
                        value={inputSeconds} 
                        onChange={(e) => setInputSeconds(e.target.value)} 
                    />
                </div>
                <div>
                    {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </div>
            </div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={restart}>Restart</button>
        </div>
    );
};

export default Countdown;