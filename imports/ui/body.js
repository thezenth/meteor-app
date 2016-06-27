import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';

Template.body.helpers({
    tasks() {
        return Tasks.find({}, { sort: { createdAt: -1 } });
    }
});

//listen to submit even on the form
Template.body.events({
    'submit .new-task'(event) { //submit is the event, new-task is the class/css-selecto of the form

        //Prevent default browser form submit
        event.preventDefault();

        //Get value from form element
        const target = event.target;
        const text = target.text.value;

        //Insert a task into the Collection
        Tasks.insert({
            text,
            createdAt: new Date()
        });

        //Clear form
        target.text.value = '';

    }
});
