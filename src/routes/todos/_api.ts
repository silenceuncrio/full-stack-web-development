import PrismaClient from "$lib/prisma";
import { dataset_dev } from "svelte/internal";

const prisma = new PrismaClient();

export const api_get = async () => {
  return {
    status: 200,
    body: await prisma.todo.findMany()
  }
}

export const api_post = async (request: Request, todo: Todo) => {
  const body = await prisma.todo.create({
    data: {
      created_at: todo.created_at,
      done: todo.done,
      text: todo.text
    }
  })

  if (request.headers.get("accept") !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/"
      }
    };
  } else {
    return {
      status: 201,
      body
    };
  }
}

export const api_del = async (uid: string) => {
  await prisma.todo.delete({
    where: {
      uid: uid
    }
  })

  return {
    status: 303,
    headers: {
      location: "/"
    }
  };
}

export const api_patch = async (request: Request, uid: string, data) => {
  const body = await prisma.todo.update({
    where: {
      uid: uid
    },
    data: {
      done: data.done,
      text: data.text ? data.text : undefined
    }
  })

  if (request.headers.get("accept") !== "application/json") {
    return {
      status: 303,
      headers: {
        location: "/"
      }
    };
  } else {
    return {
      status: 200,
      body
    };
  }
}