import { NextFunction, Request, Response } from "express";
import { addBookmarkService, getBookmarkService } from "./bookmark.services";

export const getBookmark = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getBookmarkService();
    res.status(200).json({
      status: "Success",
      message: "Successfully add the note",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't add the note",
      error: error.message,
    });
  }
};


export const addBookmark = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await addBookmarkService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfully add the note",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Couldn't add the note",
      error: error.message,
    });
  }
};
