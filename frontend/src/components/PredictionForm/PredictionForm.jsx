import { useState } from 'react';

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    pH: '',
    rainfall: '',
    temperature: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/soil", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Server Response:", data);
        alert("Form submitted successfully!");
      } else {
        console.error("❌ Server Error:", response.statusText);
        alert("Error submitting form");
      }
    } catch (err) {
      console.error("❌ Request Failed:", err);
      alert("Failed to connect to server");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Wider container */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-green-600 p-6 text-center">
            <h1 className="text-3xl font-bold text-white">Crop Yield Prediction System</h1>
            <p className="mt-2 text-green-100">
              Enter your soil conditions to get crop recommendations
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Nitrogen */}
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Nitrogen (N) content (ppm)
                </label>
                <input
                  type="number"
                  name="nitrogen"
                  value={formData.nitrogen}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g. 50"
                />
              </div>

              {/* Phosphorus */}
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Phosphorus (P) content (ppm)
                </label>
                <input
                  type="number"
                  name="phosphorus"
                  value={formData.phosphorus}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g. 30"
                />
              </div>

              {/* Potassium */}
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Potassium (K) content (ppm)
                </label>
                <input
                  type="number"
                  name="potassium"
                  value={formData.potassium}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g. 40"
                />
              </div>

              {/* Soil pH */}
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Soil pH level
                </label>
                <input
                  type="number"
                  name="pH"
                  value={formData.pH}
                  onChange={handleChange}
                  min="0"
                  max="14"
                  step="0.1"
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g. 6.5"
                />
              </div>

              {/* Rainfall */}
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Annual Rainfall (mm)
                </label>
                <input
                  type="number"
                  name="rainfall"
                  value={formData.rainfall}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g. 1200"
                />
              </div>

              {/* Temperature */}
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-2">
                  Average Temperature (°C)
                </label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                  className="w-full px-5 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g. 25"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-10">
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg font-bold py-4 px-6 rounded-lg transition duration-200 shadow-md"
              >
                Predict Crop Yield
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PredictionForm;
