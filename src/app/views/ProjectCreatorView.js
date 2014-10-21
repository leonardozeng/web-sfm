'use strict';

module.exports = Ember.View.extend({

    tagName: 'div',

    classNames: 'welcome-screen__projects__new',

    classNameBindings: ['isInvalid'],

    isInvalid: function(){
        return !this.get('controller.isValidName');
    }.property('controller.isValidName'),

    templateName: 'widgets/project-creator',

    InputView: Ember.TextField.extend({

        keyUp: function(){
            this.syncContent();
        },

        change: function(){
            this.syncContent();
        },

        syncContent: function(){
            this.get('parentView.controller').set('newProjectName', this.get('value'));
        }

    })

});