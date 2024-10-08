import { generateObjectId } from "../utils/generateObjId.js";

const SeedsData = [
  {
    _id: generateObjectId("s1"),
    img: "https://media.istockphoto.com/id/155600328/photo/pile-of-chia-seeds-on-white.webp?b=1&s=170667a&w=0&k=20&c=s7joXAZJ6HhDBFQVYVrqS9vtEu05l6gJPg5QeRHJZoo=",
    name: "Inqalab-91",
    type: ["Wheat Seed"],
    description: "A high-yielding variety of wheat seed.",
    price: 5000,
    usage: 5,
  },
  {
    _id: generateObjectId("s2"),
    img: "https://plus.unsplash.com/premium_photo-1705146640334-1277c28ddd1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNyb3BzJTIwc2VlZHxlbnwwfHwwfHx8MA%3D%3D",
    name: "Faisalabad-85",
    type: ["Wheat Seed"],
    description: "Suitable for various climatic conditions.",
    price: 6000,
    usage: 5,
  },
  {
    _id: generateObjectId("s3"),
    img: "https://media.istockphoto.com/id/828460406/photo/farmer-holding-a-handful-of-organic-rapeseeds.webp?b=1&s=170667a&w=0&k=20&c=9aSFJdQG9bZQBlOJC1IgSeYag2tyL-sac3x-7m6tlec=",
    name: "Hybrid Corn",
    type: ["Corn Seed"],
    description: "Hybrid variety for higher yields.",
    price: 7000,
    usage: 7,
  },
  {
    _id: generateObjectId("s4"),
    img: "https://media.istockphoto.com/id/171553200/photo/wheat-berries-background.webp?b=1&s=170667a&w=0&k=20&c=xsS4qG_hmuG1ClhazbyM0Kjg4LUQY0CFgYlpfJHdNUE=",
    name: "Early Maturity Corn",
    type: ["Corn Seed"],
    description: "Early maturing corn variety.",
    price: 7500,
    usage: 7,
  },
  {
    _id: generateObjectId("s5"),
    img: "https://media.istockphoto.com/id/1476756247/photo/farmers-hand-with-soy-bean.webp?b=1&s=170667a&w=0&k=20&c=DXiwzxKYT0NkmJukk0lsu5kf4Ag3WueZSaYVsCAbtTQ=",
    name: "Early High-Yield Sugarcane",
    type: ["Sugarcane Seed"],
    description: "High-yielding variety for optimal sugar production.",
    price: 8000,
    usage: 8,
  },
  {
    _id: generateObjectId("s6"),
    img: "https://media.istockphoto.com/id/1294349033/photo/farmer-examining-growth-quality-of-sunflowers-seeds.webp?b=1&s=170667a&w=0&k=20&c=p9XmR3I3eH0QTCE4TJNsSOS6lGgPViXFlQ1y9vz1VWk=",
    name: "Late High-Yield Sugarcane",
    type: ["Sugarcane Seed"],
    description: "Late maturing variety for extended harvesting.",
    price: 8500,
    usage: 8,
  },
  {
    _id: generateObjectId("s7"),
    img: "https://plus.unsplash.com/premium_photo-1670135170974-5352088c8ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHNlZWR8ZW58MHx8MHx8fDA%3D",
    name: "Barley Seed-01",
    type: ["Barley Seed"],
    description: "Variety suitable for cooler climates.",
    price: 5500,
    usage: 6,
  },
  {
    _id: generateObjectId("s8"),
    img: "https://images.unsplash.com/photo-1643341747704-1caf1759eed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNlZWR8ZW58MHx8MHx8fDA%3D",
    name: "Barley Seed-02",
    type: ["Barley Seed"],
    description: "High-yielding variety of barley.",
    price: 6000,
    usage: 6,
  },
  {
    _id: generateObjectId("s9"),
    img: "https://images.unsplash.com/photo-1581745520506-8c4ff679f82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNlZWR8ZW58MHx8MHx8fDA%3D",
    name: "Basmati Rice Seed",
    type: ["Rice Seed"],
    description: "Traditional basmati rice seed for premium quality rice.",
    price: 9000,
    usage: 9,
  },
  {
    _id: generateObjectId("s10"),
    img: "https://images.unsplash.com/photo-1569538824-03c7d8cf4b71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHNlZWR8ZW58MHx8MHx8fDA%3D",
    name: "Hybrid Rice Seed",
    type: ["Rice Seed"],
    description: "High-yield hybrid rice seed.",
    price: 9500,
    usage: 9,
  },
  {
    _id: generateObjectId("s11"),
    img: "https://images.unsplash.com/photo-1601920933428-1a92465f4c08?w=500&auto=format&fit=crop&q=60",
    name: "Sunflower Seed-01",
    type: ["Sunflower Seed"],
    description: "High-yielding variety for oil production.",
    price: 7000,
    usage: 7,
  },
  {
    _id: generateObjectId("s12"),
    img: "https://images.unsplash.com/photo-1620968127525-fc78b17421d6?w=500&auto=format&fit=crop&q=60",
    name: "Arabica Coffee Seed",
    type: ["Coffee Seed"],
    description: "Premium Arabica coffee seeds.",
    price: 12000,
    usage: 10,
  },
  {
    _id: generateObjectId("s13"),
    img: "https://images.unsplash.com/photo-1599512789575-5f5a27b4f2bc?w=500&auto=format&fit=crop&q=60",
    name: "Sweet Almond Seed",
    type: ["Almond Seed"],
    description: "High-quality almond seeds for nut production.",
    price: 11000,
    usage: 9,
  },
  {
    _id: generateObjectId("s14"),
    img: "https://plus.unsplash.com/premium_photo-1675864033264-cb9db758422d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGklMjBwZXBwZXIlMjBzZWVkfGVufDB8fDB8fHww",
    name: "Hybrid Chili Pepper",
    type: ["Chili Pepper Seed"],
    description: "Spicy and high-yield chili pepper seeds.",
    price: 6500,
    usage: 6,
  },
];

export default SeedsData;
