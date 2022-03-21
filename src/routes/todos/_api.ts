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
