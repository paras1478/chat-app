import { z } from "zod";


export const CreateUserSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(100),
  name: z.string().min(3).max(50)
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;


export const SigninSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(100)
});

export type SigninInput = z.infer<typeof SigninSchema>;



export const CreateRoomSchema = z.object({
  roomName: z.string().min(3).max(50)
});

export type CreateRoomInput = z.infer<typeof CreateRoomSchema>;
