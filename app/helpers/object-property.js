import Ember from 'ember';

function objectProperty(obj, prop) {
  return Ember.get(obj, prop);
}
export default Ember.Handlebars.makeBoundHelper(objectProperty);