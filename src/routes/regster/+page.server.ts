import { auth } from "$lib/server/lucia";
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request, locals }) => {
    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    const user = await auth.createUser({
      key: {
        providerId: "username",
        providerUserId: username,
        password
      },
      attributes: {
        username
      }
    });

    const session = await auth.createSession(user.userId);
    locals.auth.setSession(session);

    throw redirect(302, "/");
  }
};