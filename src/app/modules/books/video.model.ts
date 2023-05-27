import mongoose, { model } from "mongoose";
import { IVideo } from "./video.interface";

const videoSchema = new mongoose.Schema<IVideo>({
  title: {
    type: String,
    required: [true, "Title is required"],
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

const VideoModel = model<IVideo>("Videos", videoSchema);

export default VideoModel;
