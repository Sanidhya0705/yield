const CropCard = ({ crop, score, rank }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative">
        <img
        src={`http://localhost:5000${crop.image}`}
        alt={crop.name}
        className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-agri-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          #{rank}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-black mb-2">{crop.name}</h3>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Suitability:</span>
          <span className="text-lg font-bold text-green-600">
            {score ? Math.round(score * 100) : 0}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CropCard;