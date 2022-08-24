"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const gerne_route_1 = require("./gerne-route");
const publisher_route_1 = require("./publisher-route");
exports.route = (0, express_1.Router)();
exports.route.use('/gernes', gerne_route_1.gerneRoute);
exports.route.use('/publishers', publisher_route_1.publisherRoute);
