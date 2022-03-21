// TODO: Persis in database
let todos: Todo[] = [];

export const api_get = () => {
  return {
    status: 200,
    body: todos
  }
}

export const api_post = (todo: Todo) => {
  todos.push(todo);
  return {
    status: 303,
    headers: {
      location: "/"
    }
  };
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

export const api_patch = (uid: string, data) => {
  todos = todos.map(todo => {
    if (todo.uid === uid) {
      if (data.text) todo.text = data.text as string;
      else todo.done = data.done as boolean;
      
    }
    return todo;
  })
  return {
    status: 303,
    headers: {
      location: "/"
    }
  };
}