import { useLocation, useNavigate } from "react-router-dom";
import PredictionResult from "../components/PredictionResult/PredictionResult";
import bgImage from "../assets/bg.png"; // ✅ correct import

export default function RecommendationsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const results = location.state?.results || [];

  if (!results.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>No recommendations yet. Please go back and enter values.</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }} // ✅ fixed usage
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto bg-black/30 p-8 rounded-2xl shadow-lg text-white">
          <h2 className="text-3xl font-bold mb-6 text-green-300 text-center">
            🌱 Top Recommended Crops
          </h2>
          <PredictionResult results={results} />
          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition transform hover:scale-105"
            >
              ⬅ Back to Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
