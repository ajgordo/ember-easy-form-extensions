import { moduleForComponent, test } from 'ember-qunit';
import setupComponentForUnitTest from '../../helpers/setup-component-for-unit-test';

let component;

moduleForComponent('form-submission', 'Unit | Component | form submission', {
  needs: ['component:form-submission-button'],
  unit: true,

  beforeEach: function() {
    component = setupComponentForUnitTest(this);
  },
});

test('it renders', function(assert) {

  assert.equal(component._state, 'preRender',
    'The component instance should be created');

  this.render();

  assert.equal(component._state, 'inDOM',
    'The component should be inserted into the DOM after render');
});
