import { getUser } from "@/actions/dashboard/getUser";
import {
  DEFAULT_SERVER_ERROR_MESSAGE,
  createSafeActionClient,
} from "next-safe-action";

/**
 * @TODO use関数を追加して認証付きにする
 * https://next-safe-action.dev/docs/define-actions/instance-methods#use
 */
export const actionClient = createSafeActionClient({
  handleServerError(e) {
    if (e instanceof Error) {
      return e.message;
    }

    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
});

export const authActionClient = actionClient.use(async ({ next }) => {
  const user = await getUser();
  if (!user) {
    throw new Error("User not found");
  }

  return next({
    ctx: {
      user,
    },
  });
});
