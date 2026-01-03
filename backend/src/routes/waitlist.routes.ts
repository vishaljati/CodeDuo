import { Router } from "express";
import saveWaitlistEmail from "../controllers/waitlist.controllers.js";

const router:Router=Router()

router.route("/").post(saveWaitlistEmail)

export default router;