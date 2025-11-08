import { z } from "zod";
export declare const CreateUserSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    name: string;
}, {
    username: string;
    password: string;
    name: string;
}>;
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export declare const SigninSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type SigninInput = z.infer<typeof SigninSchema>;
export declare const CreateRoomSchema: z.ZodObject<{
    roomName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    roomName: string;
}, {
    roomName: string;
}>;
export type CreateRoomInput = z.infer<typeof CreateRoomSchema>;
//# sourceMappingURL=types.d.ts.map