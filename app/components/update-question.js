import Ember from 'ember';

export default Ember.Component.extend({
    updateQuestionForm: false,

    actions: {
      updateQuestionForm() {
        this.set('updateQuestionForm', true)
      },

      update(question){
        var params = {
          title: this.get('title'),
          questionby: this.get('questionby'),
          note: this.get('note')
        };
        this.set('updateQuestionForm', false);
        this.set('title', "");
        this.set('questionby', "");
        this.set('note', "");
        this.sendAction('update', question, params);
      }
    }
});
