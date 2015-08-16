
export default {
  // mutators are only available in the context passed to actions
  // be sure the same name isn't used by both a getter and setter!
  mutators: {
    addTodo(context, data, text) {
      // the data is contained by the library, but may be used in any way
      // may use immutable-style functions and even Immutable libs as well
      data = data.concat(text);
      // return the latest copy of the data if there is a change
      // if a non-undefined thing is returned, that is the new data
      // and listeners will be notified of a change
      return data;
    },

    changeTodo(context, data, index, text) {
      if (index >= 0 && data.length < index && data[index] !== text) {
        // immutabile style is not required
        // data may be manipulated however you wish
        data[index] = text;
        return data;
      } else {
        // return undefined or don't return (implicit undefined) for no-change
        return undefined;
      }
    },

    removeTodo(context, data, index) {
      if (index >= 0 && data.length < index) {
        data = data.splice(index, 1);
        return data;
      }
      // we can also have no return to signify no change
    }
  },

  // getters are available in any context or via the Application
  // be sure the same name isn't used by both a getter and setter!
  getters: {
    getTodo(data, id) {
      return data[id];
    }
  }
});
