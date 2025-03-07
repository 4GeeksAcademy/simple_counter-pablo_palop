import * as React from 'react';
import { useState, useEffect } from 'react';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';

const Counter = ({ totalSeconds }) => {

    const [seconds, setSeconds] = useState(55);
    const [minutes, setMinutes] = useState(59);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const interval = isActive
            ? setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 59) {
                        setMinutes(prevMinutes => {
                            if (prevMinutes === 59) {
                                setHours(prevHours => prevHours + 1);
                                return 0;
                            } else {
                                return prevMinutes + 1;
                            }
                        });
                        return 0;
                    } else {
                        return prevSeconds + 1;
                    }
                });
            }, 1000)
            : null;

        return () => clearInterval(interval);
    }, [isActive]);

    const start = () => {
        setIsActive(true);
    };

    const stop = () => {
        setIsActive(false);
    };

    return (
        <div className="card">
            <div className="card-body">
                {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
};

export default Counter;



/* return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
            <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
                {[0, 1, 2, 3, 4, 5].map((value) => (
                    <Grid key={value} item>
                        <Paper
                            sx={(theme) => ({
                                height: 150,
                                width: 140,
                                backgroundColor: 'grey',
                                ...theme.applyStyles('dark', {
                                    backgroundColor: '#1A2027',
                                }),
                            })}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>
}
); */
