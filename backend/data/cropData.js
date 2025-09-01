// cropData.js
// Units: N, P2O5, K2O in kg/ha (generalized recommendation ranges; calibrate to soil test)
// pH = soil water pH; rainfall = annual mm; temperature = °C (typical growing-season means)
// Sources used to harmonize ecological ranges (see notes below).

const cropData = [
  {
    name: "Rice",
    image: "/images/rice.jpg",
    idealConditions: {
      nitrogen: { min: 60, max: 120 },
      phosphorus: { min: 20, max: 60 },
      potassium: { min: 30, max: 70 },
      ph: { min: 5.0, max: 6.5 },
      rainfall: { min: 1000, max: 2500 },
      temperature: { min: 20, max: 35 },
    },
  },
  {
    name: "Wheat",
    image: "/images/wheat.jpg",
    idealConditions: {
      nitrogen: { min: 50, max: 100 },
      phosphorus: { min: 30, max: 70 },
      potassium: { min: 40, max: 80 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 300, max: 900 }, // tightened
      temperature: { min: 10, max: 25 },
    },
  },
  {
    name: "Sugarcane",
    image: "/images/sugarcane.jpg",
    idealConditions: {
      nitrogen: { min: 150, max: 250 },
      phosphorus: { min: 40, max: 100 },
      potassium: { min: 100, max: 250 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 1500, max: 2500 },
      temperature: { min: 20, max: 35 },
    },
  },
  {
    name: "Jute",
    image: "/images/jute.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 70 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 1500, max: 2500 },
      temperature: { min: 24, max: 37 },
    },
  },
  {
    name: "Maize",
    image: "/images/maize.jpg",
    idealConditions: {
      nitrogen: { min: 70, max: 150 },
      phosphorus: { min: 30, max: 80 },
      potassium: { min: 50, max: 100 },
      ph: { min: 5.8, max: 7.0 },
      rainfall: { min: 500, max: 1200 },
      temperature: { min: 15, max: 30 },
    },
  },
  {
    name: "Tea",
    image: "/images/tea.jpg",
    idealConditions: {
      nitrogen: { min: 50, max: 100 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 40, max: 80 },
      ph: { min: 4.5, max: 5.5 },
      rainfall: { min: 1200, max: 3000 }, // tightened min to 1200
      temperature: { min: 15, max: 30 },
    },
  },
  {
    name: "Coffee",
    image: "/images/coffee.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 40 },
      potassium: { min: 30, max: 60 },
      ph: { min: 6.0, max: 6.5 },
      rainfall: { min: 1200, max: 1800 }, // arabica-focused band
      temperature: { min: 16, max: 24 },  // arabica-focused band
    },
  },
  {
    name: "Cotton",
    image: "/images/cotton.jpg",
    idealConditions: {
      nitrogen: { min: 60, max: 120 },
      phosphorus: { min: 25, max: 60 },
      potassium: { min: 50, max: 100 },
      ph: { min: 6.0, max: 7.5 }, // tightened
      rainfall: { min: 500, max: 1000 },
      temperature: { min: 21, max: 37 },
    },
  },
  {
    name: "Pulses",
    image: "/images/pulses.jpg",
    idealConditions: {
      nitrogen: { min: 20, max: 50 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 20, max: 60 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 400, max: 800 },
      temperature: { min: 15, max: 30 },
    },
  },
  {
    name: "Barley",
    image: "/images/barley.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 60 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 300, max: 500 }, // tightened
      temperature: { min: 10, max: 25 },
    },
  },
  {
    name: "Millets",
    image: "/images/millets.jpg",
    idealConditions: {
      nitrogen: { min: 30, max: 70 },
      phosphorus: { min: 15, max: 40 },
      potassium: { min: 20, max: 50 },
      ph: { min: 5.5, max: 7.5 },
      rainfall: { min: 300, max: 900 },
      temperature: { min: 20, max: 35 },
    },
  },
  {
    name: "Sorghum",
    image: "/images/sorghum.jpg",
    idealConditions: {
      nitrogen: { min: 30, max: 70 },
      phosphorus: { min: 15, max: 40 },
      potassium: { min: 20, max: 50 },
      ph: { min: 5.5, max: 7.5 },
      rainfall: { min: 400, max: 1000 },
      temperature: { min: 25, max: 35 },
    },
  },
  {
    name: "Ragi",
    image: "/images/ragi.jpg",
    idealConditions: {
      nitrogen: { min: 25, max: 60 },
      phosphorus: { min: 15, max: 40 },
      potassium: { min: 20, max: 50 },
      ph: { min: 5.0, max: 7.0 },
      rainfall: { min: 400, max: 900 },
      temperature: { min: 20, max: 35 },
    },
  },
  {
    name: "Peanuts",
    image: "/images/peanuts.jpg",
    idealConditions: {
      nitrogen: { min: 30, max: 60 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 60 },
      ph: { min: 5.5, max: 6.5 },
      rainfall: { min: 500, max: 1000 },
      temperature: { min: 20, max: 32 },
    },
  },
  {
    name: "Sunflower",
    image: "/images/sunflower.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 40, max: 80 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 400, max: 1000 },
      temperature: { min: 20, max: 30 },
    },
  },
  {
    name: "Mustard",
    image: "/images/mustard.jpg",
    idealConditions: {
      nitrogen: { min: 30, max: 60 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 60 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 400, max: 800 },
      temperature: { min: 15, max: 30 },
    },
  },
  {
    name: "Soybean",
    image: "/images/soyabean.jpg", // keeping your path as-is
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 40, max: 80 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 500, max: 1200 },
      temperature: { min: 20, max: 30 },
    },
  },
  {
    name: "Green Gram",
    image: "/images/greengram.jpg",
    idealConditions: {
      nitrogen: { min: 20, max: 50 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 20, max: 60 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 400, max: 900 },
      temperature: { min: 25, max: 35 },
    },
  },
  {
    name: "Black Gram",
    image: "/images/blackgram.jpg",
    idealConditions: {
      nitrogen: { min: 20, max: 50 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 20, max: 60 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 400, max: 900 },
      temperature: { min: 25, max: 35 },
    },
  },
  {
    name: "Mango",
    image: "/images/mango.jpg",
    idealConditions: {
      nitrogen: { min: 30, max: 60 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 60 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 750, max: 2500 }, // broadened to common horticultural band
      temperature: { min: 18, max: 35 },
    },
  },
  {
    name: "Guava",
    image: "/images/guava.jpg",
    idealConditions: {
      nitrogen: { min: 25, max: 55 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 20, max: 50 },
      ph: { min: 5.5, max: 7.5 }, // slightly widened
      rainfall: { min: 600, max: 2000 },
      temperature: { min: 15, max: 30 },
    },
  },
  {
    name: "Tomato",
    image: "/images/tomato.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 30, max: 60 },
      potassium: { min: 40, max: 80 },
      ph: { min: 6.0, max: 6.8 },
      rainfall: { min: 600, max: 1200 },
      temperature: { min: 18, max: 30 },
    },
  },
  {
    name: "Potato",
    image: "/images/potato.jpg",
    idealConditions: {
      nitrogen: { min: 60, max: 120 },
      phosphorus: { min: 40, max: 80 },
      potassium: { min: 60, max: 120 },
      ph: { min: 5.0, max: 6.5 }, // slightly widened to 5.0–6.5
      rainfall: { min: 500, max: 1200 },
      temperature: { min: 15, max: 25 },
    },
  },
  {
    name: "Onion",
    image: "/images/onion.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 60 },
      ph: { min: 6.0, max: 6.8 },
      rainfall: { min: 350, max: 750 }, // tightened
      temperature: { min: 13, max: 25 },
    },
  },
  {
    name: "Garlic",
    image: "/images/garlic.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 60 },
      ph: { min: 6.0, max: 6.8 },
      rainfall: { min: 350, max: 750 },
      temperature: { min: 12, max: 22 },
    },
  },
  {
    name: "Cabbage",
    image: "/images/cabbage.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 60 },
      ph: { min: 6.0, max: 7.0 },
      rainfall: { min: 400, max: 1000 },
      temperature: { min: 12, max: 22 },
    },
  },
  {
    name: "Cauliflower",
    image: "/images/cauliflower.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 60 },
      ph: { min: 6.0, max: 7.0 },
      rainfall: { min: 400, max: 1000 },
      temperature: { min: 12, max: 22 },
    },
  },
  {
    name: "Brinjal",
    image: "/images/brinjal.jpg",
    idealConditions: {
      nitrogen: { min: 40, max: 80 },
      phosphorus: { min: 20, max: 50 },
      potassium: { min: 30, max: 60 },
      ph: { min: 6.0, max: 6.8 },
      rainfall: { min: 400, max: 1000 },
      temperature: { min: 18, max: 30 },
    },
  },
];

export default cropData;