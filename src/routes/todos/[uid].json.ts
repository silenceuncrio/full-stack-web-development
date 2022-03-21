import type { RequestHandler } from "@sveltejs/kit";
import { api_del, api_patch } from "./_api";

export const del: RequestHandler = ({ params }) => {
  // console.log('params.uid: ', params.uid);
  return api_del(params.uid);
}

export const patch: RequestHandler = async ({ request, params }) => {
  const data = await request.formData();
  return api_patch(params.uid, data.get("text") as string);
}
