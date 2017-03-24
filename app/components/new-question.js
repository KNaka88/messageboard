import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {

    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion(){
      var params = {
        title: this.get('title'),
        questionby: this.get('questionby'),
        note: this.get('note')
      };
      //Delete input from input form
      this.set('title', "");
      this.set('questionby', "");
      this.set('note', "");

      //hide form
      this.set('addNewQuestion', false);

      //send save action
      this.sendAction('saveQuestion', params);
    }
  }
});
