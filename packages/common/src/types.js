"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoomSchema = exports.SigninSchema = exports.CreateUserSchema = void 0;
var zod_1 = require("zod");
// ✅ Signup schema
exports.CreateUserSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20),
    password: zod_1.z.string().min(6).max(100),
    name: zod_1.z.string().min(3).max(50)
});
// ✅ Signin schema
exports.SigninSchema = zod_1.z.object({
    username: zod_1.z.string().min(3).max(20),
    password: zod_1.z.string().min(6).max(100)
});
// ✅ Create Room schema
exports.CreateRoomSchema = zod_1.z.object({
    roomName: zod_1.z.string().min(3).max(50)
});
