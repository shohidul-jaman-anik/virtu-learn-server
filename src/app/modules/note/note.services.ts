import { INote } from "./note.interface";
import NoteModel from "./note.model";

export const addNodeService = async (data:INote) => {
    const books = await NoteModel.create(data);
    return books;
  };