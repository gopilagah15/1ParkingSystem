import React from "react";

const Receipt = ({ car }) => {
    const calculateBill = () => {
        const inTime = new Date(`${car.dateOfParking}T${car.inTime}`);
        const outTime = new Date(`${car.dateOfParking}T${car.outTime}`);
        const durationInMinutes = Math.ceil((outTime - inTime) / (1000 * 60));

        if (durationInMinutes <= 60) {
            return 10;
        } else {
            const extraHours = Math.floor((durationInMinutes - 60) / 60);
            const extraMinutes = (durationInMinutes - 60) % 60;
            return 10 + extraHours * 15 + extraMinutes * 0.25;
        }
    };

    const bill = calculateBill();

    return (
        <div>
            <h2>Receipt</h2>
            <p>Parking Date: {car.dateOfParking}</p>
            <p>Vehicle Number: {car.vehicleNumber}</p>
            <p>In Time: {car.inTime}</p>
            <p>Out Time: {car.outTime}</p>
            <p>Total Bill: ₹{bill.toFixed(2)}</p>
        </div>
    );
};

export default Receipt;
