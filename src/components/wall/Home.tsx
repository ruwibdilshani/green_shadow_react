import backImg from '../../assets/home.jpg'
import '../../css/components/Home.css'
import {useEffect, useState} from "react";

const Home = () => {
    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentDate(now.toLocaleDateString());
            setCurrentTime(now.toLocaleTimeString());
        };
        const intervalId = setInterval(updateDateTime, 1000);
        updateDateTime();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="p-0 bg-transparent w-100 " id="home-page">
            <div className="dashboard-header d-flex justify-content-between">
                <div className={'p-4'}>
                    <h1>Hi , Ruwi</h1>
                    <p>Welcome Factory system</p>
                </div>

            </div>

            <div id='backImg'>
                <img src={backImg}/>
            </div>

            <div className="flex items-center justify-center mt-2 ">
                <div className="  rounded-lg p-6 text-center">
                    <h1 className="text-2xl font-bold 	">Current Date & Time</h1>
                    <p className="mt-4 text-lg 	">Date: {currentDate}</p>
                    <p className="text-xl font-semibold 	">Time: {currentTime}</p>
                </div>
            </div>

        </div>

    );
}

export default Home;