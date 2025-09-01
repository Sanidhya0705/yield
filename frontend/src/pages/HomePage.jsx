import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField/InputField";

export default function HomePage() {
  const navigate = useNavigate();

  const handlePredict = () => {
    // Example input value - later you can collect actual inputs
    const soilType = "Loamy";
    navigate("/recommendations", { state: { soilType } });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        🌱 Crop Yield Prediction
      </h1>

      {/* Example Input Fields */}
      <div className="space-y-4 max-w-md">
        <InputField label="Enter Soil Type" placeholder="e.g., Loamy" />
        <InputField label="Enter Rainfall (mm)" placeholder="e.g., 300" />
        <InputField label="Enter Temperature (°C)" placeholder="e.g., 28" />
      </div>

      <button
        onClick={handlePredict}
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
      >
        Predict Yield
      </button>
    </div>
  );
}