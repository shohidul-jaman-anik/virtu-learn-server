import mongoose, { model } from "mongoose";
import { INote } from "./note.interface";


const noteSchema = new mongoose.Schema<INote>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  }
});

const NoteModel = model<INote>("Note", noteSchema);

export default NoteModel;
