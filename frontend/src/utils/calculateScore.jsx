// src/utils/calculateScore.js
export default function calculateScore(crop, formData) {
  let score = 0;

  if (formData.nitrogen >= crop.nitrogenReq.min && formData.nitrogen <= crop.nitrogenReq.max) score++;
  if (formData.phosphorus >= crop.phosphorusReq.min && formData.phosphorus <= crop.phosphorusReq.max) score++;
  if (formData.potassium >= crop.potassiumReq.min && formData.potassium <= crop.potassiumReq.max) score++;
  if (formData.ph >= crop.phReq.min && formData.ph <= crop.phReq.max) score++;
  if (formData.rainfall >= crop.rainfallReq.min && formData.rainfall <= crop.rainfallReq.max) score++;
  if (formData.temperature >= crop.temperatureReq.min && formData.temperature <= crop.temperatureReq.max) score++;

  return score;
}