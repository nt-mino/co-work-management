"use client";

import { deleteUserAction } from "@/actions/dashboard/accounts/deleteUser";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";

export default function DeleteAccount() {
  const [isPending, startTransition] = useTransition();

  return (
    <Card className="border-red-600 shadow-none rounded-sm">
      <CardHeader className="border-b-[1px] mb-4">
        <CardTitle className="text-[21px]">ユーザーの削除</CardTitle>
        <CardDescription>
          アカウントを削除すると、すべてのデータが永久に失われます。この操作は取り消すことができません。
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="h-10 px-12 font-bold text-[16px] bg-red-600 hover:bg-red-600">
              削除する
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>キャンセル</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 hover:bg-red-600"
                onClick={() => startTransition(() => deleteUserAction())}
              >
                {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "削除する"
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
