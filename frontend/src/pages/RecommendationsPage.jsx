import { useLocation, useNavigate } from "react-router-dom";
import PredictionResult from "./components/PredictionResult/PredictionResult";

export default function RecommendationsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        🌾 Recommended Crops
      </h1>

      {/* ✅ Show ML/AI prediction results */}
      <PredictionResult results={location.state?.results || []} />

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          ⬅ Back to Form
        </button>
      </div>
    </div>
  );
}