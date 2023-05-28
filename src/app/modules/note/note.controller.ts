import { NextFunction, Request, Response } from "express";
import { addNodeService, getNodeService } from "./note.services";

export const getNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getNodeService();
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
export const addNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await addNodeService(req.body);
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
