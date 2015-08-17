import React from 'react';

import App from '../application'

// this example uses the generic functions, not the React specific.
// React is not be a requirement, allowing Deku, React-Native, Dust+jquery, etc
class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentWillMount() {
    // subscribe will accept a key path to the data to provide fine grained
    // control over notifications. key paths may also be '.' delimited strings
    // the second parameter can specify:
    // - string: a string key path to specify where to set the latest contents
    // - array: an array key path to specify where to set the latest contents
    // - function: called with a parameter containing the value (any context?)
    // the optional third parameter specifies the binding for the second param.
    //   the default for the third is the component itself.
    App.context.getStore('todo').subscribe(['', this.props.todoIndex], 'props');
  }
  componentWillUnmount() {
    // calling unsubscribe with no parameters will unsubscribe from everything
    // otherwise, pass a key path to unsubscribe all listeners from one item
    App.context.getStore('todo').unsubscribe();
  }
}

TodoItem.propTypes = {
  todoIndex: PropTypes.object.isRequired
}

export default TodoItem;
