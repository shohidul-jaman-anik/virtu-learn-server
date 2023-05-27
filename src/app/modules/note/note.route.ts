import express from "express";
import { addNotes } from "./note.controller";
const router = express.Router();



router.post("/addNote",addNotes);

export default router;
