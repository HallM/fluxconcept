# Example app using concept Fluxish implementation

This is an example app showing what a concept Flushish implementation could look like. Currently in the process of determining the feature set of the Flux inspired framework. This concept example is being used to see how certain features may look and feel.

## Does the Fluxish framework exist?

No, not yet. The features of the framework are still being discovered.

## What are the highlight features of the future framework?

### Stores
* Stores are just a collection of reducer-like functions
* Store data is stored by the framework and passed to the functions
* Data itself is a single item, but can be any one item including an Object of any depth
* Data can be immutable, which can help with implementation of certain tasks, but immutablity is not required
* Data managed by framework allows for:
  - Hot-swapping stores
  - Data history to store for rollback or anything
  - Easier serialize/deserialize of data
  - No store singletons or instances to manage on server side
* Multiple stores may exist, no super store to control them all
* Store functions split into Mutators and Getters
* Mutator functions are only accessible within an Action's context
* Mutators return the new data or 'undefined' if no change has occurred
* Getter functions are accessible anywhere within the application

### Actions
* No single dispatcher, in fact no "true" dispatcher
* Actions just call functions on the desired stores in the desired order
* Transaction support within Actions to rollback optimistic changes
* A hook system will be created to allow functions to be called before or after an Actions
* The hook system will allow a function to be attached to one action, all actions, or an array of actions
* Change events should be grouped together to reduce amount of events and redraw

### Components
* A simple subscribe/unsubsribe system to be notified of updates
* Subscriptions will use a key path (array or '.' delimited strings) to allow for a very fine grained approach
* Components should be able to unsubsribe from one or all subscriptions
* Bindings for React and others (Deku, Mithril) may be built to simplify component actions

### Overall
* Universal/Isomorphic/whatever we are calling it this week
* Tunable to specify the maximum amount of history per store
* History is easy to enable, disabled by default. (Chrome is really good at using up memory, it doesn't need our help)
* Hopefully, tune with Webpack to remove certain features from the final buildpack to reduce file serialize
* Not tied to React or other Virtual DOM style systems. Should work even with DustJS and DOM/jQuery.
* Doesn't have to be used with a DOM system at all. Should work fine with React Native.
* Stores and Actions should be loadable at any time to allow for lazy loading
* Reloading a store or action should be allowable, can be used for performing updates or lazy loading reloading items
