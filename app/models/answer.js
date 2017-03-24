import DS from 'ember-data';

export default DS.Model.extend({
  answerby: DS.attr(),
  answernote: DS.attr(),
});
