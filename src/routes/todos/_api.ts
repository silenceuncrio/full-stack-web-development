// TODO: Persis in database
let todos: Todo[] = [];

export const api_get = () => {
  return {
    status: 200,
    body: todos
  }
}

export const api_post = (request: Request, todo: Todo) => {
  todos.push(todo);

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
      body: todo
    };
  }
}

export const api_del = (uid: string) => {
  todos = todos.filter(todo => todo.uid !== uid)
  return {
    status: 303,
    headers: {
      location: "/"
    }
  };
}

export const api_patch = (request: Request, uid: string, data) => {
  todos = todos.map(todo => {
    if (todo.uid === uid) {
      if (data.text) todo.text = data.text as string;
      else todo.done = data.done as boolean;
      
    }
    return todo;
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
      body: todos.find(todo => todo.uid === uid)
    };
  }
}