let AddTodo = function(context, text) {
  let todoStore = context.getStore('todo');
  let transaction = todoStore.startTransation();

  // do an optimistic update
  // we can always undo thanks to transactions
  todoStore.addTodo(text);
  server.post('/todo', text).then((todo) => {
    // commit the transaction which cleans up the previous stored state
    transaction.commit();
  }).catch((e) => {
    // something went wrong, let's rollback any changes in the transaction
    transaction.rollback();
  });
};

let ChangeTodo = function(context, index, text) {
  let todoStore = context.getStore('todo');
  let transaction = todoStore.startTransation();

  todoStore.changeTodo(index, text);
  server.post('/todo', text).then((data) => {
    transaction.commit();
  }).catch((e) => {
    transaction.rollback();
  });
};

let RemoveTodo = function(context, index) {
  let todoStore = context.getStore('todo');
  let transaction = todoStore.startTransation();

  todoStore.removeTodo(index);
  server.delete(`/todo/${id}`).then((data) => {
    transaction.commit();
  }).catch((e) => {
    transaction.rollback();
  });
};

export default {AddTodo, ChangeTodo, RemoveTodo};
