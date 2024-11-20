import React, { useState } from "react";

const CarRegistrationForm = ({ addParkingData }) => {
    const [vehicleNumber, setVehicleNumber] = useState("");
    const [vehicleModel, setVehicleModel] = useState("");
    const [ownerContact, setOwnerContact] = useState("");
    const [dateOfParking, setDateOfParking] = useState("");
    const [inTime, setInTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = {
            id: Date.now(),
            vehicleNumber,
            vehicleModel,
            ownerContact,
            dateOfParking,
            inTime,
            outTime: null,
        };
        addParkingData(newCar);
        setVehicleNumber("");
        setVehicleModel("");
        setOwnerContact("");
        setDateOfParking("");
        setInTime("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Car</h2>
            <input type="text" placeholder="Vehicle Number" value={vehicleNumber} onChange={(e) => setVehicleNumber(e.target.value)} required />
            <input type="text" placeholder="Vehicle Model" value={vehicleModel} onChange={(e) => setVehicleModel(e.target.value)} required />
            <input type="text" placeholder="Owner Contact" value={ownerContact} onChange={(e) => setOwnerContact(e.target.value)} required />
            <input type="date" value={dateOfParking} onChange={(e) => setDateOfParking(e.target.value)} required />
            <input type="time" value={inTime} onChange={(e) => setInTime(e.target.value)} required />
            <button type="submit">Add Car</button>
        </form>
    );
};

export default CarRegistrationForm;
