import express from "express";
import {   getVideos } from "./video.controller";
const router = express.Router();

router.get("/getVideo",getVideos);


export default router;
