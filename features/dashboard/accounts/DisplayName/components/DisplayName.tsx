"use client";

import { updateUserNameAction } from "@/actions/dashboard/accounts/updateUserName";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { type UpdateUserName, updateUserNameSchema } from "../schema";

interface Props {
  userName: string;
}

export default function DisplayName({ userName }: Props) {
  const action = useAction(updateUserNameAction, {
    // onSuccess: () => {
    //   console.log("success");
    // },
    // onError: () => {
    //   console.log("error");
    // },
  });

  const form = useForm<UpdateUserName>({
    resolver: zodResolver(updateUserNameSchema),
    defaultValues: {
      userName,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    action.execute({
      userName: data?.userName,
    });
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <Card className="border-gray-400 shadow-none rounded-sm">
          <CardHeader>
            <CardTitle className="text-[21px]">ユーザー名</CardTitle>
          </CardHeader>
          <CardContent className="border-b-[1px] border-gray-400 mb-4">
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="max-w-[300px] text-[20px] border-gray-400 h-12 rounded-sm"
                      maxLength={32}
                      placeholder="名前を入力してください"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" className="h-10 px-12 font-bold text-[16px]">
              {action.status === "executing" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "変更する"
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
