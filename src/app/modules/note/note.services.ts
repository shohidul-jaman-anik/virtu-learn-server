import { INote } from "./note.interface";
import NoteModel from "./note.model";

export const getNodeService = async () => {
  const books = await NoteModel.find({});
  return books;
};
export const addNodeService = async (data: INote) => {
  const books = await NoteModel.create(data);
  return books;
};

