import type { RequestHandler } from "@sveltejs/kit";
import { api_get, api_post } from "./_api";

export const get: RequestHandler = () => {
  return api_get();
}

export const post: RequestHandler = async ({ request }) => {
  const data = await request.formData();
  // console.log("header accept: ", request.headers.get("accept"));
  return api_post(request, {
    uid: `${Date.now()}`, // TODO: Replace with the UID from the database
    created_at: new Date(),
    text: data.get("text") as string,
    done: false
  })
}
