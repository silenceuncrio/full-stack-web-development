import type { RequestHandler } from "@sveltejs/kit";
import { api_del } from "./_api";

export const del: RequestHandler = ({ params }) => {
  // console.log('params.uid: ', params.uid);
  return api_del(params.uid);
}