import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { sort } from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['sortProperty', 'sortAscending'],
  sortProperty: 'budget',
  sortAscending:false,
  filter:'',

  filterCustomers: computed('filter', function(){
    const filterItem = this.get('filter');
    let model = this.get('model');

    let filtered = model.filter(function(customer){
          return customer.get('firstName').toLowerCase().indexOf(filterItem) !== -1 ||
                 customer.get('lastName').toLowerCase().indexOf(filterItem) !== -1 ||
                 customer.get('company').toLowerCase().indexOf(filterItem) !== -1 ||
                 customer.get('project').toLowerCase().indexOf(filterItem) !== -1 ;
      });
        return filtered
  }),

  customersSortProps: computed('sortProperty', function() {
    return [this.sortProperty];
  }),

  sortedCustomers: sort('filterCustomers', 'customersSortProps')
});
