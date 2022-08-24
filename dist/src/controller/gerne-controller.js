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
const gerne_model_1 = require("../model/gerne-model");
class GerneController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let gernes = yield gerne_model_1.Gerne.find();
            res.status(200).json(gernes);
        });
        this.addGerne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let gerne = req.body;
            let gernes = yield gerne_model_1.Gerne.create(gerne);
            res.status(200).json(gernes);
        });
        this.deleteGerne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let gerne = yield gerne_model_1.Gerne.findById({ _id: id });
            if (!gerne) {
                res.status(400).json();
            }
            gerne === null || gerne === void 0 ? void 0 : gerne.delete();
            res.status(200).json();
        });
        this.updateGerne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let gerne = yield gerne_model_1.Gerne.findById(id);
            if (!gerne) {
                res.status(200).json();
            }
            let data = req.body;
            console.log(data);
            yield gerne_model_1.Gerne.findByIdAndUpdate({ _id: id }, data);
            data._id = id;
            res.status(200).json(data);
        });
    }
}
exports.default = new GerneController();
