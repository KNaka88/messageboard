import Ember from 'ember';

export default Ember.Component.extend({
  actions: {


    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
