import { Router } from "express";
import publisherController from "../controller/publisher-controller";

export const publisherRoute = Router();

publisherRoute.get('', publisherController.getAll);
publisherRoute.post('', publisherController.addPublisher);
publisherRoute.delete('/:id', publisherController.deletePublisher)
publisherRoute.put('/:id', publisherController.updatePublisher);