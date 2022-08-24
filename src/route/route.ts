import { Router } from "express";
import { gerneRoute } from "./gerne-route";
// import { publisherRoute } from "./publisher-route";
export const route = Router();

route.use('/gernes', gerneRoute);
// route.use('/publishers', publisherRoute)