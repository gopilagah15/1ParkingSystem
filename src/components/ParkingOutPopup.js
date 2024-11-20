import React, { useState } from "react";

const ParkingOutPopup = ({ parkingData, updateParkingOutTime }) => {
    const [selectedCarId, setSelectedCarId] = useState("");
    const [outTime, setOutTime] = useState("");

    const handleOutTimeSubmit = (e) => {
        e.preventDefault();

        if (!selectedCarId || !outTime) {
            alert("Please select a car and set an out time.");
            return;
        }

        updateParkingOutTime(parseInt(selectedCarId, 10), outTime); // Ensure `id` is passed correctly
        setSelectedCarId("");
        setOutTime("");
    };

    return (
        <form onSubmit={handleOutTimeSubmit}>
            <h2>Parking Out</h2>
            <select value={selectedCarId} onChange={(e) => setSelectedCarId(e.target.value)} required>
                <option value="">Select Car</option>
                {parkingData.map((car) => (
                    <option key={car.id} value={car.id}>
                        {car.vehicleNumber} - {car.vehicleModel}
                    </option>
                ))}
            </select>
            <input
                type="time"
                value={outTime}
                onChange={(e) => setOutTime(e.target.value)}
                required
            />
            <button type="submit">Set Out Time</button>
        </form>
    );
};

export default ParkingOutPopup;
