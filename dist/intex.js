"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = 3000;
const app = (0, express_1.default)();
const DB_LOCALHOST = 'mongodb+srv://yoongee:anh1981996@atlascluster.cfzvuip.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default.connect(`${DB_LOCALHOST}`)
    .then(() => {
    console.log('DB connect success');
})
    .catch(e => {
    console.log(e);
});
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`App is running http://localhost:${PORT} `);
});
