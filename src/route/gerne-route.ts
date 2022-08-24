import { Router } from "express";
import gerneController from "../controller/gerne-controller";

export const gerneRoute = Router();
gerneRoute.get('', gerneController.getAll);
gerneRoute.post('', gerneController.addGerne);
gerneRoute.delete('/:id',gerneController.deleteGerne)
gerneRoute.put('/:id', gerneController.updateGerne)