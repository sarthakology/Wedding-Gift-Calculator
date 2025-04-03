import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Certificate from "./certificates/Certificate";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    job: "private",
    salary: "",
    land: "no",
    landSize: "",
    house: "no",
    houseSize: "",
  });

  const [points, setPoints] = useState(0);
  const [money, setMoney] = useState("");
  const [gifts, setGifts] = useState("");

  const calculatePoints = () => {
    let totalPoints = 0;
    if (formData.age < 18) totalPoints += 10;
    else if (formData.age >= 18 && formData.age <= 25) totalPoints += 13;
    else totalPoints += 5;

    // Job Type
    totalPoints +=
      formData.job === "government" ? 20 : formData.job === "private" ? 10 : 0;

    // Salary Points
    if (formData.salary < 10000) totalPoints += 0;
    else if (formData.salary >= 10000 && formData.salary <= 30000)
      totalPoints += 8;
    else if (formData.salary >= 30000 && formData.salary <= 50000)
      totalPoints += 10;
    else if (formData.salary >= 50000 && formData.salary <= 100000)
      totalPoints += 15;
    else totalPoints += 20;

    // Land Ownership
    if (formData.land === "yes") {
      const landSize = Number(formData.landSize);
      if (landSize < 2) totalPoints += 10;
      else if (landSize >= 2 && landSize <= 5) totalPoints += 15;
      else if (landSize >= 5 && landSize <= 15) totalPoints += 20;
      else if (landSize >= 15 && landSize <= 20) totalPoints += 25;
      else totalPoints += 30;
    }

    // House Ownership
    if (formData.house === "yes") {
      const houseSize = Number(formData.houseSize);
      if (houseSize < 1000) totalPoints += 10;
      else if (houseSize >= 1000 && houseSize <= 3000) totalPoints += 20;
      else totalPoints += 30;
    }

    return totalPoints;
  };

  const estimateGifts = (points) => {
    if (points <= 10)
      return { money: 1000, gifts: "Atlas Cycle, Sweet Box, Nokia 3310" };
    if (points <= 20)
      return {
        money: 5000,
        gifts: "Samsung Keypad, TVS XL 100, Puncture Shop",
      };
    if (points <= 30)
      return {
        money: 20000,
        gifts: "Redmi Note 4 Pro, Scooter, Grocery Store",
      };
    if (points <= 40)
      return {
        money: 100000,
        gifts: "iPhone 4S, Noise Smartwatch, Super Splendor",
      };
    if (points <= 50)
      return {
        money: 200000,
        gifts: "Samsung Galaxy Note 3, PS5, Pulsar 200NS, Garment Showroom",
      };
    if (points <= 60)
      return { money: 300000, gifts: "iPhone 15, Bullet, Highway Plot" };
    if (points <= 70)
      return { money: 500000, gifts: "iPhone 16 Pro, Alto 800, 2BHK Flat" };
    if (points <= 80)
      return {
        money: 700000,
        gifts: "Brezza Fully Modified, Gurgaon 3BHK Flat, Gold Watch",
      };
    if (points <= 90)
      return {
        money: 1000000,
        gifts: "BMW M3 CSL, Wine and Beer Shop, Corporate Tower",
      };
    if (points <= 100)
      return {
        money: 1500000,
        gifts: "Helicopter, Lamborghini Huracán, Switzerland Bungalow",
      };
    return {
      money: 2000000,
      gifts: "Private Jets, Rolls-Royces, Kashmir Ownership",
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPoints = calculatePoints();
    setPoints(totalPoints);
    const { money, gifts } = estimateGifts(totalPoints);
    setMoney(money);
    setGifts(gifts);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
<div
  className="flex flex-col items-center justify-center min-h-screen p-6"
  style={{
    backgroundImage: "url('https://img.freepik.com/free-vector/watercolor-burgundy-gold-background_52683-148159.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Wedding Gift calculator
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-semibold">Age:</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Job Type:
            </label>
            <select
              name="job"
              value={formData.job}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="private">Private</option>
              <option value="government">Government</option>
              <option value="unemployed">Unemployed</option>
            </select>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Salary Per Month (INR):
            </label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Land Ownership */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Do you own land?
            </label>
            <select
              name="land"
              value={formData.land}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          {/* Land Size (if applicable) */}
          {formData.land === "yes" && (
            <div>
              <label className="block text-gray-700 font-semibold">
                Land Size (Acres):
              </label>
              <input
                type="number"
                name="landSize"
                value={formData.landSize}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
              />
            </div>
          )}

          {/* House Ownership */}
          <div>
            <label className="block text-gray-700 font-semibold">
              Do you own a house?
            </label>
            <select
              name="house"
              value={formData.house}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          {/* House Size (if applicable) */}
          {formData.house === "yes" && (
            <div>
              <label className="block text-gray-700 font-semibold">
                House Size (sq. ft.):
              </label>
              <input
                type="number"
                name="houseSize"
                value={formData.houseSize}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Calculate
          </button>
        </form>

        {/* Show results */}
        {money && gifts && (
          <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg">
            <p className="font-semibold">Total Points: {points}</p>
            <p>Money Allocated: INR {money}/-</p>
            <p>Gifts: {gifts}</p>
          </div>
        )}

        {/* Download Certificate */}
        {money && (
          <div className="mt-6 text-center">
            <PDFDownloadLink
              document={
                <Certificate name={formData.name} money={money} gifts={gifts} />
              }
              fileName={`${formData.name}_certificate.pdf`}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              {({ loading }) =>
                loading ? "Generating..." : "Download Certificate"
              }
            </PDFDownloadLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
