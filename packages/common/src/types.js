"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoomSchema = exports.SigninSchema = exports.CreateUserSchema = void 0;
const zod_1 = require("zod");
exports.CreateUserSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20),
    password: zod_1.z.string().min(6).max(100),
    name: zod_1.z.string().min(3).max(50)
});
exports.SigninSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20),
    password: zod_1.z.string().min(6).max(100)
});
exports.CreateRoomSchema = zod_1.z.object({
    roomName: zod_1.z.string().min(3).max(50)
});
