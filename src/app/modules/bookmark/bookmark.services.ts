import { IBookmark } from "./bookmark.interface";
import BookmarkModel from "./bookmark.model";

export const getBookmarkService = async () => {
  const books = await BookmarkModel.find({});
  return books;
};
export const addBookmarkService = async (data: IBookmark) => {
  const books = await BookmarkModel.create(data);
  return books;
};
