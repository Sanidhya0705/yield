import mongoose from 'mongoose';

const soilConditionSchema = new mongoose.Schema({
  nitrogen: { type: Number, required: true },
  phosphorus: { type: Number, required: true },
  potassium: { type: Number, required: true },
  ph: { type: Number, required: true },
  rainfall: { type: Number, required: true },
  temperature: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('SoilCondition', soilConditionSchema);