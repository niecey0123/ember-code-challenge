import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { computed } from '@ember/object';


export default Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
    emailAddress: attr('string'),
    phoneNumber: attr('string'),
    company: attr('string'),
    project: attr('string'),
    budget: attr('number'),

    fullName: computed('firstName', 'lastName', function() {
        return `${this.firstName} ${this.lastName}`;
      })
});