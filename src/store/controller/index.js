const campaigns = require("../model");
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorhandler");

const controllerSchema = catchAsyncError(async (req, res, next) => {
  const product = await campaigns.create(req.body);
  res.status(200).json({ success: true, product });
});

const getData = catchAsyncError(async (req, res, next) => {
  const data = await campaigns.find();
  if (!data) {
    return next(new ErrorHandler("campaigns not found", 404));
  }
  res.status(200).json({ success: true, message: data });
});

const getById = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const data = await campaigns.findOne({_id:id});
  if (!data) {
    return next(new ErrorHandler("campaigns not found", 404));
  }
  res.status(200).json({ success: true, message: data });
});

const updateData = catchAsyncError(async (req, res, next) => {
  console.log(req.body, "adadadad")
  const id = req.params.id;
  let data = await campaigns.findById(id);
  if (!data) {
    return next(new ErrorHandler("campaigns not found", 404));
  }
  const updateddata = await campaigns.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, updateddata });
});

const deleteData = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const data = await campaigns.findById({ _id: id });
  if (!data) {
    return next(new ErrorHandler("campaigns not found", 404));
  }

  await data.remove();
  res.status(200).json({ success: true, message: "data deleted successfully" });
});

module.exports = { controllerSchema, getData, updateData, deleteData, getById };
