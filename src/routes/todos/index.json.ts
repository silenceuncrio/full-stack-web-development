import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persis in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
  return {
    status: 200,
    body: todos
  }
}

export const post: RequestHandler = async ({ request }) => {
  const data = await request.formData();
  console.log(data.get("text"));

  todos.push({
    created_at: new Date(),
    text: data.get("text") as string,
    done: false
  });

  return {
    status: 303,
    headers: {
      location: "/"
    }
  }
}
