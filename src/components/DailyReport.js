import React from "react";

const DailyReport = ({ parkingData }) => {
    const generateReport = () => {
        return parkingData.map((car) => ({
            vehicleNumber: car.vehicleNumber,
            inTime: car.inTime,
            outTime: car.outTime || "Not Set",
        }));
    };

    const report = generateReport();

    return (
        <div>
            <h2>Daily Report</h2>
            <table>
                <thead>
                    <tr>
                        <th>Vehicle Number</th>
                        <th>In Time</th>
                        <th>Out Time</th>
                    </tr>
                </thead>
                <tbody>
                    {report.map((row, index) => (
                        <tr key={index}>
                            <td>{row.vehicleNumber}</td>
                            <td>{row.inTime}</td>
                            <td>{row.outTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DailyReport;
