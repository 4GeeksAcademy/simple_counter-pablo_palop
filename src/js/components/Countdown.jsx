import * as React from 'react';
import { useState, useEffect } from 'react';

const Countdown = ({ totalSeconds }) => {

    const [seconds, setSeconds] = useState(5);
    const [minutes, setMinutes] = useState(59);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [inputHours, setInputHours] = useState(0);
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);

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

    const start = () => {
        setHours();
        setMinutes();
        setSeconds();
        setIsActive(true);
    };

    const stop = () => {
        setIsActive(false);
    };

    const restart = () => {
        setIsActive(false);
        setSeconds();
        setMinutes();
        setHours();
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className='d-flex justify-content-center'>
                    <label className='d-flex m-2'>Horas:</label>
                    <input type="text" placeholder='HH' value={inputHours} onChange={(e) => setInputHours(e.target.value)} />
                    <label className='d-flex m-2'>Minutos:</label>
                    <input type="text" placeholder='MM' value={inputMinutes} onChange={(e) => setInputMinutes(e.target.value)} />
                    <label className='d-flex m-2'>Segundos:</label>
                    <input type="text" placeholder='SS' value={inputSeconds} onChange={(e) => setInputSeconds(e.target.value)} />
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