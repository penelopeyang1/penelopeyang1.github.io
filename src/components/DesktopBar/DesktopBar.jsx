import React, { useEffect, useState } from 'react';
import './DesktopBar.css';

function DesktopBar() {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [batteryLevel, setBatteryLevel] = useState('100%');
    const [isCharging, setIsCharging] = useState(false);

    // Function to update the date and time
    const updateDateTime = () => {
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        setCurrentDate(now.toLocaleDateString(undefined, options));
        setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    // Function to update battery status
    const updateBatteryStatus = async () => {
        if ('getBattery' in navigator) {
            const battery = await navigator.getBattery();
            setBatteryLevel(Math.round(battery.level * 100) + '%');
            setIsCharging(battery.charging);
        }
    };

    // UseEffect to update time and battery
    useEffect(() => {
        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        updateBatteryStatus();
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="desktop-bar">
            <div className="desktop-bar-left">
                <span></span> {/* Apple logo or placeholder text */}
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Go</span>
                <span>Window</span>
                <span>Help</span>
            </div>
            <div className="desktop-bar-right">
                <span>{isCharging ? '⚡️' : '🔋'} {batteryLevel}</span> {/* Battery Status */}
                <span>{currentDate}</span> {/* Date */}
                <span>{currentTime}</span> {/* Time */}
            </div>
        </div>
    );
}

export default DesktopBar;
