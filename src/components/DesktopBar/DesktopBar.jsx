import React, { useEffect, useState } from 'react';
import './DesktopBar.css';
import { IoBatteryFull } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

function DesktopBar() {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    // const [batteryLevel, setBatteryLevel] = useState('100%');
    // const [isCharging, setIsCharging] = useState(false);

    // Function to update the date and time
    const updateDateTime = () => {
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        setCurrentDate(now.toLocaleDateString(undefined, options));
        setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    // Function to update battery status
    // const updateBatteryStatus = async () => {
    //     if ('getBattery' in navigator) {
    //         const battery = await navigator.getBattery();
    //         setBatteryLevel(Math.round(battery.level * 100) + '%');
    //         setIsCharging(battery.charging);
    //     }
    // };

    // UseEffect to update time and battery
    useEffect(() => {
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        // updateBatteryStatus();
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="desktop-bar">
            <div className="desktop-bar-left">
                {/* <span></span> */}
                <FaApple className='apple'/>
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                {/* <span>Go</span> */}
                <span>Window</span>
                <span>Help</span>
            </div>
            <div className="desktop-bar-right">
                <span className='wifi'><IoWifi className='bar-icon' /></span>
                <span className='battery'><IoBatteryFull className='bar-icon'/></span>
                <span>{currentDate}</span>
                <span>{currentTime}</span>
            </div>
        </div>
    );
}

export default DesktopBar;
