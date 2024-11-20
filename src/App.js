import React, { useState } from "react"; 
import CarRegistrationForm from "./components/CarRegistrationForm";
import ParkingOutPopup from "./components/ParkingOutPopup";
import Receipt from "./components/Receipt";
import DailyReport from "./components/DailyReport";

const App = () => {
    const [parkingData, setParkingData] = useState([]);
    const [currentCar, setCurrentCar] = useState(null);

    // Function to register a car
    const addParkingData = (car) => {
        setParkingData([...parkingData, car]);
    };

    // Function to update car details with out-time
    const updateParkingOutTime = (id, outTime) => {
        const updatedData = parkingData.map((data) =>
            data.id === id ? { ...data, outTime } : data
        );
        setParkingData(updatedData);
        setCurrentCar(updatedData.find((data) => data.id === id));
    };

    return (
        <div>
            <h1>Parking Bill Tracking System</h1>
            <CarRegistrationForm addParkingData={addParkingData} />
            <ParkingOutPopup parkingData={parkingData} updateParkingOutTime={updateParkingOutTime} />
            {currentCar && <Receipt car={currentCar} />}
            <DailyReport parkingData={parkingData} />
        </div>
    );
};

export default App;
