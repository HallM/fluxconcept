class Application extends CrazyFlux.Application {
  constructor(options) {
    super(options);

    this.registerStore('todo', require('./stores/todo'));
    this.registerActions(require('./actions/todoActions'));
  }
}

export default Application;
