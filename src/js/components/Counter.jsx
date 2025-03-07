import * as React from 'react';
import { useState } from 'react';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';

const Counter = ({totalSeconds}) => {

    const [seconds, setSeconds] = useState(totalSeconds);
    let intervalId = null;

    function increase() {
        intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
    }

    function stop() {
        clearInterval(intervalId);
    }

    return (
        <div className="card d-flex justify-content-center ">
            <div className="card-body">
                {seconds}
            </div>
            <button onClick={increase}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}










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

export default Counter;