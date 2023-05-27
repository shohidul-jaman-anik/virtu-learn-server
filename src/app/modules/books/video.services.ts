import { IVideo } from "./video.interface";
import VideoModel from "./video.model";

export const getVideoService = async () => {
  const books = await VideoModel.find({});
  return books;
};

