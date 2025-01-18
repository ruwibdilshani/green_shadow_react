import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import dashboard_icon from '../assets/dashboardImg/Dashboard Layout.png';
import staff_icon from '../assets/dashboardImg/Member.png';
import vehicle from '../assets/dashboardImg/People in Car Side View.png';
import field_icon from '../assets/dashboardImg/Journey.png';
import rqu_icon from '../assets/dashboardImg/Engine.png';
import crop_icon from '../assets/dashboardImg/Grass.png';
import monitor_log from '../assets/dashboardImg/cropdetails.png';
import log_out from '../assets/dashboardImg/Logout.png';
import '../css/components/NavigationBar.css';
import vehicleHover from '../assets/dashboardImg/People in Car Side View.png';
import fieldHover from '../assets/dashboardImg/Journey.png';
import rquHover from '../assets/dashboardImg/Engine.png';
import cropHover from '../assets/dashboardImg/Grass.png';
import monitorLogHover from '../assets/dashboardImg/cropdetails.png';
import staffHover from '../assets/dashboardImg/Member.png';
import dashboardHover from '../assets/dashboardImg/Dashboard Layout.png';


interface Icon {
    default: string;
    hover: string;
    text : string;
}

const icons: Record<string, Icon> = {
    'dashboard-icon': {  default: dashboard_icon, hover: dashboardHover , text: 'Dashboard'} ,
    'staff-icon': { default: staff_icon, hover: staffHover , text: 'Staff'},
    vehicle: { default: vehicle, hover: vehicleHover , text: 'Vehicle'},
    'field-icon': { default: field_icon, hover: fieldHover , text: 'Field'},
    rqu_icon: { default: rqu_icon, hover: rquHover, text: 'Equipment'},
    crop_icon: { default: crop_icon, hover: cropHover , text: 'Crop'},
    monitor_log: { default: monitor_log, hover: monitorLogHover, text: 'Crop Details'},
};

const navigations: Record<string, string> = {
    'dashboard-icon': 'home',
    'staff-icon': 'staff_management',
    vehicle: 'vehicle_management',
    'field-icon': 'field_management',
    rqu_icon: 'equ_management',
    crop_icon: 'crop_management',
    monitor_log: 'monitor_log',
};

const NavigationBar = () => {
    const [hoveredButton] = useState<string | null>(null);
    const [activeButton, setActiveButton] = useState<string>('dashboard-icon');
    const [showLogoutPopup, setShowLogoutPopup] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleClick = (button: string) => {
        setActiveButton(button);
        if (button === 'log-out-btn') {
            setShowLogoutPopup(true);
        }

    };

    function logoutUser() {
        navigate('/');

    }

    function closePopup() {
        setShowLogoutPopup(false);
    }

    return (
        <div className="nav-bar text-center ">
            <h1 className={'mt-16'}>Green Shadow</h1>
            <div className="d-flex flex-column m-3  justify-content-center mt-5">
                {Object.keys(icons).map((key) => (
                    <Link to={`/dashboard/${navigations[key]}`} key={key}>
                        <img
                            className={key}
                            src={
                                activeButton === key || hoveredButton === key
                                    ? icons[key].hover
                                    : icons[key].default
                            }
                            onClick={() => handleClick(key)}
                            alt={`${key.replace('-', ' ')} icon`}
                        />
                        <span className="nav-text">{icons[key].text}</span>
                    </Link>
                ))}
            </div>
            <div>
                <img
                    className="log-out-btn h-auto"
                    src={log_out}
                    onClick={() => handleClick('log-out-btn')}
                    alt="log out icon"
                />
            </div>

            {/* create logout popup component */}

            {showLogoutPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                        <h2 className="text-lg font-semibold text-gray-800">Logout</h2>
                        <p className="mt-2 text-sm text-gray-600">Are you sure you want to log out?</p>
                        <div className="mt-4 flex justify-end space-x-3">
                            <button
                                className="px-4 py-2 bg-grbg-green-200	ay-300 text-gray-700 rounded-md hover:bg-green-00	 transition"
                                onClick={closePopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-4 py-2 bg-green-400	 text-white rounded-md hover:bg-green-500	 transition"
                                onClick={logoutUser}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>

        // create logout popup component


    );
};

export default NavigationBar;
