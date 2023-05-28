import express from "express";
import { addNotes, getNotes } from "./note.controller";
const router = express.Router();


router.get("/allNote",getNotes);
router.post("/addNote",addNotes);

export default router;
