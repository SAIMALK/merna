import asyncHandler from "../middleware/asyncHandler.js";
import Crop from "../MODELS/cropModel.js";
import Seed from "../MODELS/seedModel.js"; // Ensure the path is correct
import { generateObjectId } from "../utils/generateObjId.js";

// @desc    Fetch all crops
// @route   GET /api/crops
// @access  Public
const getCrops = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Crop.countDocuments({ ...keyword });
  const crops = await Crop.find({ ...keyword });

  res.json({ crops });
});

// @desc    Fetch single crop
// @route   GET /api/crops/:id
// @access  Public
const getCropById = asyncHandler(async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id)
      .populate('seeds')         // Populate the seeds field with the Seed documents
      .populate('fertilizers')   // Populate the fertilizers field with the Fertilizer documents
      .populate('pests');        // Populate the pests field with the Pest documents

    if (crop) {
      res.json(crop);
    } else {
      res.status(404);
      throw new Error("Crop not found");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Server Error");
  }
});

// @desc    Fetch crops by seed ID
// @route   GET /api/crops/seed/:seedId
// @access  Public
const getCropBySeedId = asyncHandler(async (req, res) => {
  const seedId = req.params.seedId;

  try {
    const crops = await Crop.find({ seeds: seedId });
    res.json(crops);
  } catch (error) {
    res.status(500);
    throw new Error("Server Error");
  }
});

// @desc    Create a crop
// @route   POST /api/crops
// @access  Private/Admin
const createCrop = asyncHandler(async (req, res) => {
  const crop = new Crop({
    title: "Sample Title",
    type: "Novel",
    genre: ["Fantasy"],
    user: req.user._id,
    cover: "/images/sample.jpg",
    status: "Sample Status",
    plot: "Sample Plot",
    chapters: 0,
    author: generateObjectId("1"),
    date: "Mar 22, 2024",
    numReviews: 0,
    rating: 5,
    rank: "1",
  });

  const createdCrop = await crop.save();
  res.status(201).json(createdCrop);
});

// @desc    Update a crop
// @route   PUT /api/crops/:id
// @access  Private/Admin
const updateCrop = asyncHandler(async (req, res) => {
  const {
    title,
    genre,
    type,
    status,
    cover,
    plot,
    rank,
    rating,
    chapters,
    date,
    author,
  } = req.body;

  const crop = await Crop.findById(req.params.id);

  if (crop) {
    crop.title = title;
    crop.genre = genre;
    crop.type = type;
    crop.status = status;
    crop.cover = cover;
    crop.plot = plot;
    crop.rank = rank;
    crop.rating = rating;
    crop.date = date;
    crop.chapters = chapters;
    crop.author = author;
    const updatedCrop = await crop.save();
    res.json(updatedCrop);
  } else {
    res.status(404);
    throw new Error("Crop not found");
  }
});

// @desc    Delete a crop
// @route   DELETE /api/crops/:id
// @access  Private/Admin
const deleteCrop = asyncHandler(async (req, res) => {
  const crop = await Crop.findById(req.params.id);

  if (crop) {
    await Crop.deleteOne({ _id: crop._id });
    res.json({ message: "Crop removed" });
  } else {
    res.status(404);
    throw new Error("Crop not found");
  }
});

// @desc    Create new review
// @route   POST /api/crops/:id/reviews
// @access  Private
const createCropReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const crop = await Crop.findById(req.params.id);

  if (crop) {
    const alreadyReviewed = crop.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Crop already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    crop.reviews.push(review);

    crop.numReviews = crop.reviews.length;

    crop.rating =
      crop.reviews.reduce((acc, item) => item.rating + acc, 0) /
      crop.reviews.length;

    await crop.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Crop not found");
  }
});

// @desc    Get top rated crops
// @route   GET /api/crops/top
// @access  Public
const getTopCrops = asyncHandler(async (req, res) => {
  const crops = await Crop.find({}).sort({ rating: -1 }).limit(3);

  res.json(crops);
});

export {
  getCrops,
  getCropById,
  createCrop,
  updateCrop,
  deleteCrop,
  createCropReview,
  getTopCrops,
  getCropBySeedId
};
