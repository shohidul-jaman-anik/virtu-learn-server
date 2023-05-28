import mongoose, { model } from "mongoose";
import { IBookmark } from "./bookmark.interface";

const bookmarkSchema = new mongoose.Schema<IBookmark>({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
  uploadTime: {
    type: String,
    required: [true, "Please provide uploadTime"],
  },
  views: {
    type: String,
    required: [true, "Please provide views"],
  },
  author: {
    type: String,
    required: [true, "Please provide author name"],
  },
  videoUrl: {
    type: String,
    required: [true, "Please provide videoUrl"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  },

  subscriber: {
    type: String,
    required: [true, "Please provide description"],
  },
});

const BookmarkModel = model<IBookmark>("Bookmark", bookmarkSchema);

export default BookmarkModel;
