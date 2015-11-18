import Ember from 'ember';

export function getProp(params) {
  const model = params[0] || {};

  return model[params[1]] || '';
}

export default Ember.Helper.helper(getProp);
