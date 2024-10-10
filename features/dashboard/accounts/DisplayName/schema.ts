import { z } from "zod";

export const updateUserNameSchema = z.object({
  userName: z
    .string()
    .min(1, { message: "ユーザー名を1文字以上で入力してください" })
    .max(20, { message: "ユーザー名は20文字以内で入力してください" }),
});

export type UpdateUserName = z.infer<typeof updateUserNameSchema>;
