
export default {
  // mutators are only available in the context passed to actions
  // be sure the same name isn't used by both a getter and setter!
  mutators: {
    addTodo(context, data, text) {
      // the data is contained by the library, but may be used in any way
      // may use immutable-style functions and even Immutable libs as well
      data = data.concat(text);
      // return true if the data changed, this will emit change to listeners
      return true;
    },

    changeTodo(context, data, index, text) {
      if (index >= 0 && data.length < index && data[index] !== text) {
        // immutabile style is not required
        // data may be manipulated however you wish
        data[index] = text;
        return true;
      } else {
        // return false if the data didn't change, doesn't emit change
        return false;
      }
    },

    removeTodo(context, data, index) {
      if (index >= 0 && data.length < index) {
        data = data.splice(index, 1);
        return true;
      } else {
        return false;
      }
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
