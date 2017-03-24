import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        answerby: this.get('answerby'),
        answernote: this.get('answernote'),
        question: this.get('question')
      };
      this.set('answerby', "");
      this.set('answernote', "");
      this.sendAction('saveAnswer', params);
    },


  }
});
