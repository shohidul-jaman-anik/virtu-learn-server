import express from "express";
import {  getVideos } from "./video.controller";
const router = express.Router();

router.get("/",getVideos);

export default router;
