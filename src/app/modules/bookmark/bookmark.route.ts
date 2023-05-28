import express from "express";
import { addBookmark, getBookmark } from "./bookmark.controller";
const router = express.Router();


router.get("/allBookmark",getBookmark);
router.post("/addBookmark",addBookmark);

export default router;
