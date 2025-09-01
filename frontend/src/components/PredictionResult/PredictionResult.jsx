import CropCard from '../CropCard/CropCard';

const PredictionResult = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-agri-green-800 mb-6 text-center">
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <CropCard
            key={result.crop.name}
            crop={result.crop}
            score={result.score !== undefined ? result.score : 0} // ✅ Added fallback for score
            rank={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default PredictionResult;