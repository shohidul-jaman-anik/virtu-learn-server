import mongoose, { Model, model } from "mongoose";
import { IBookPriceMethods,  IVideo } from "./video.interface";

type UserModel = Model<IVideo, {}, IBookPriceMethods>;


const videoSchema = new mongoose.Schema<IVideo, UserModel,IBookPriceMethods>({
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

const VideoModel = model<IVideo, UserModel>("Videos", videoSchema);


export default VideoModel;
