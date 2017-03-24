import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  questionby: DS.attr(),
  note: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
