import express from "express";
import SoilCondition from "../models/soilCondition.js";   // ✅ import your model

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const input = req.body;

// ✅ Crop dataset
const cropData = [
   {
    name: "Rice",
    image: "/images/rice.jpg",
    idealConditions: { nitrogen: { min: 60, max: 120 }, phosphorus: { min: 20, max: 60 }, potassium: { min: 30, max: 70 }, ph: { min: 5.0, max: 6.5 }, rainfall: { min: 1000, max: 2500 }, temperature: { min: 20, max: 35 } },
  },
  {
    name: "Wheat",
    image: "/images/wheat.jpg",
    idealConditions: { nitrogen: { min: 50, max: 100 }, phosphorus: { min: 30, max: 70 }, potassium: { min: 40, max: 80 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 500, max: 1000 }, temperature: { min: 10, max: 25 } },
  },
  {
    name: "Sugarcane",
    image:"/images/sugarcane.jpg",
    idealConditions: { nitrogen: { min: 80, max: 200 }, phosphorus: { min: 40, max: 100 }, potassium: { min: 100, max: 250 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 1500, max: 2500 }, temperature: { min: 20, max: 35 } },
  },
  {
    name: "Jute",
    image:"/images/jute.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 70 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 1500, max: 2500 }, temperature: { min: 24, max: 37 } },
  },
  {
    name: "Maize",
    image: "/images/maize.jpg",
    idealConditions: { nitrogen: { min: 70, max: 150 }, phosphorus: { min: 30, max: 80 }, potassium: { min: 50, max: 100 }, ph: { min: 5.8, max: 7.0 }, rainfall: { min: 600, max: 1200 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Tea",
    image: "/images/tea.jpg",
    idealConditions: { nitrogen: { min: 50, max: 100 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 40, max: 80 }, ph: { min: 4.5, max: 5.5 }, rainfall: { min: 1500, max: 3000 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Coffee",
    image: "/images/coffee.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 40 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 6.5 }, rainfall: { min: 1500, max: 2500 }, temperature: { min: 15, max: 28 } },
  },
  {
    name: "Cotton",
    image:"/images/cotton.jpg",
    idealConditions: { nitrogen: { min: 60, max: 120 }, phosphorus: { min: 25, max: 60 }, potassium: { min: 50, max: 100 }, ph: { min: 5.5, max: 8.5 }, rainfall: { min: 500, max: 1000 }, temperature: { min: 21, max: 37 } },
  },
  {
    name: "Pulses",
    image: "/images/pulses.jpg",
    idealConditions: { nitrogen: { min: 20, max: 50 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 20, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 800 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Barley",
    image: "/images/barley.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.0 }, rainfall: { min: 300, max: 800 }, temperature: { min: 10, max: 25 } },
  },
  {
    name: "Millets",
    image:"/images/millets.jpg",
    idealConditions: { nitrogen: { min: 30, max: 70 }, phosphorus: { min: 15, max: 40 }, potassium: { min: 20, max: 50 }, ph: { min: 5.5, max: 7.5 }, rainfall: { min: 300, max: 900 }, temperature: { min: 20, max: 35 } },
  },
  {
    name: "Sorghum",
    image: "/images/sorghum.jpg",
    idealConditions: { nitrogen: { min: 30, max: 70 }, phosphorus: { min: 15, max: 40 }, potassium: { min: 20, max: 50 }, ph: { min: 5.5, max: 7.5 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 25, max: 35 } },
  },
  {
    name: "Ragi",
    image: "/images/ragi.jpg",
    idealConditions: { nitrogen: { min: 25, max: 60 }, phosphorus: { min: 15, max: 40 }, potassium: { min: 20, max: 50 }, ph: { min: 5.0, max: 7.0 }, rainfall: { min: 400, max: 900 }, temperature: { min: 20, max: 35 } },
  },
  {
    name: "Peanuts",
    image: "/images/peanuts.jpg",
    idealConditions: { nitrogen: { min: 30, max: 60 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 5.5, max: 6.5 }, rainfall: { min: 500, max: 1000 }, temperature: { min: 20, max: 32 } },
  },
  {
    name: "Sunflower",
    image:"/images/sunflower.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 40, max: 80 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 20, max: 30 } },
  },
  {
    name: "Mustard",
    image:"/images/mustard.jpg",
    idealConditions: { nitrogen: { min: 30, max: 60 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 800 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Soybean",
    image: "/images/soyabean.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 40, max: 80 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 500, max: 1200 }, temperature: { min: 20, max: 30 } },
  },
  {
    name: "Green Gram",
    image: "/images/green gram.jpg",
    idealConditions: { nitrogen: { min: 20, max: 50 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 20, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 900 }, temperature: { min: 25, max: 35 } },
  },
  {
    name: "Black Gram",
    image:"/images/black gram.jpg",
    idealConditions: { nitrogen: { min: 20, max: 50 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 20, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 900 }, temperature: { min: 25, max: 35 } },
  },
  {
    name: "Mango",
    image:"/images/mango.jpg",
    idealConditions: { nitrogen: { min: 30, max: 60 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 800 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Guava",
    image: "/images/guava.jpg",
    idealConditions: { nitrogen: { min: 25, max: 55 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 20, max: 50 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 800 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Tomato",
    image:"/images/tomato.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 30, max: 60 }, potassium: { min: 40, max: 80 }, ph: { min: 6.0, max: 6.8 }, rainfall: { min: 500, max: 1200 }, temperature: { min: 18, max: 30 } },
  },
  {
    name: "Potato",
    image:"/images/potato.jpg",
    idealConditions: { nitrogen: { min: 60, max: 120 }, phosphorus: { min: 40, max: 80 }, potassium: { min: 60, max: 120 }, ph: { min: 5.5, max: 6.5 }, rainfall: { min: 500, max: 1200 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Onion",
    image: "/images/onion.jpg",
    
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 6.8 }, rainfall: { min: 400, max: 900 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Garlic",
    image: "/images/garlic.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 6.8 }, rainfall: { min: 400, max: 900 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Cabbage",
    image: "/images/cabbage.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.0 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Cauliflower",
    image: "/images/cauliflower.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.0 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Brinjal",
    image: "/images/brinjal.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 6.8 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 18, max: 30 } },
  }
];

const scores = cropData.map(crop => {
      let score = 0;
      score += 100 - Math.abs(crop.nitrogen - input.nitrogen);
      score += 100 - Math.abs(crop.phosphorus - input.phosphorus);
      score += 100 - Math.abs(crop.potassium - input.potassium);
      score += 100 - Math.abs(crop.ph - input.ph) * 10;
      score += 100 - Math.abs(crop.rainfall - input.rainfall) / 10;
      score += 100 - Math.abs(crop.temperature - input.temperature) * 5;
      return { crop: crop.name, score };
    });

    const recommendations = scores
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(s => s.crop);

    // ✅ Save only the input data to database
    const condition = new SoilCondition(input);
    await condition.save();

    res.json({ recommendations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
