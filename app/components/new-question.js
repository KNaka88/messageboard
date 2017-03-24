import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion(){
      var params = {
        title: this.get('title'),
        questionby: this.get('questionby'),
        note: this.get('note')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
