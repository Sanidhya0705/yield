import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Components
import InputField from "../components/InputField/InputField";
import PredictionResult from "../components/PredictionResult/PredictionResult";
import Marquee from "react-fast-marquee";

// ✅ Import background image from assets
import bgImage from "../assets/bg.png";

export default function HomePage() {
  const navigate = useNavigate();

  const [cropData, setCropData] = useState([]);
  const [formData, setFormData] = useState({
    soilType: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    ph: "",
    rainfall: "",
    temperature: "",
  });
  const [results, setResults] = useState([]);

  // Fetch cropData from backend on load
  useEffect(() => {
    fetch("http://localhost:5000/api/crops")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setCropData(data))
      .catch(() => setCropData([]));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "soilType" ? value : parseFloat(value) || "",
    }));
  };

  const calculateScore = (crop, input) => {
    let score = 0;
    const totalConditions = Object.keys(crop.idealConditions).length;

    for (const [key, range] of Object.entries(crop.idealConditions)) {
      const value = input[key];
      if (value >= range.min && value <= range.max) score += 1;
      else {
        const distance = Math.min(
          Math.abs(value - range.min),
          Math.abs(value - range.max)
        );
        const penalty = distance / (range.max - range.min);
        score += 1 - penalty;
      }
    }
    return score / totalConditions;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields except soilType
    for (const [key, value] of Object.entries(formData)) {
      if (key !== "soilType" && value === "") {
        alert("Please fill all fields");
        return;
      }
    }

    try {
      await fetch("http://localhost:5000/api/soil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Failed to save soil data:", err);
    }

    const cropScores = cropData.map((crop) => ({
      crop,
      score: calculateScore(crop, formData),
    }));

    cropScores.sort((a, b) => b.score - a.score);
    setResults(cropScores.slice(0, 3));

    // Navigate to recommendations page with results
    navigate("/recommendations", { state: { results: cropScores.slice(0, 3) } });
  };

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-green-800 mb-2 drop-shadow-md">
            🌿 Crop Yield Prediction System
          </h1>
          <Marquee
            className="text-red-600 font-medium text-lg bg-yellow-100 px-2 py-1 rounded shadow-sm"
            gradient={false}
            speed={60}
          >
            Calculation is based on the data you enter. Keep the data accurate for better results.
          </Marquee>
        </div>

        {/* Form */}
        <div className="bg-black/30 p-8 rounded-2xl shadow-lg text-white">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <InputField
                label="Nitrogen (N) content"
                name="nitrogen"
                value={formData.nitrogen}
                onChange={handleChange}
                unit="kg/ha"
                infoText="Enter nitrogen content in kg/ha. Example: 50"
              />
              <InputField
                label="Phosphorus (P) content"
                name="phosphorus"
                value={formData.phosphorus}
                onChange={handleChange}
                unit="kg/ha"
                infoText="Enter phosphorus content in kg/ha. Example: 30"
              />
              <InputField
                label="Potassium (K) content"
                name="potassium"
                value={formData.potassium}
                onChange={handleChange}
                unit="kg/ha"
                infoText="Enter potassium content in kg/ha. Example: 40"
              />
              <InputField
                label="Soil pH level"
                name="ph"
                value={formData.ph}
                onChange={handleChange}
                unit="pH"
                infoText="Enter soil pH value (0-14). Example: 6.5"
              />
              <InputField
                label="Annual Rainfall"
                name="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                unit="mm"
                infoText="Enter rainfall in mm/year. Example: 800"
              />
              <InputField
                label="Average Temperature"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                unit="°C/°F"
                infoText="Enter average temperature in °C. Example: 25°C"
              />
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
              >
                🌱 Predict Yield
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
