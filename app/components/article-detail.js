import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(article) {
      if (confirm('are you sure you want to delete this article')) {
        this.sendAction('destroyArticle', article)
      }
    }
  }
});
