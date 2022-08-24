"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const publisher_model_1 = require("../model/publisher-model");
class PublisherController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let publishers = yield publisher_model_1.Publisher.find();
            res.status(200).json(publishers);
        });
        this.addPublisher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let publisher = req.body;
            let publishers = yield publisher_model_1.Publisher.create(publisher);
            res.status(200).json(publishers);
        });
        this.deletePublisher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let publisher = yield publisher_model_1.Publisher.findById({ _id: id });
            if (!publisher) {
                res.status(400).json();
            }
            publisher === null || publisher === void 0 ? void 0 : publisher.delete();
            res.status(200).json();
        });
        this.updatePublisher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let publisher = yield publisher_model_1.Publisher.findById(id);
            if (!publisher) {
                res.status(400).json();
            }
            let data = req.body;
            yield publisher_model_1.Publisher.findByIdAndUpdate({ _id: id }, data);
            data._id = id;
            res.status(200).json(data);
        });
    }
}
exports.default = new PublisherController();
