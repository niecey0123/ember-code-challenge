import Controller from "@ember/controller";
import { sort } from "@ember/object/computed";
import { computed } from "@ember/object";


export default Controller.extend({
  sortProperty: "budget:desc",

  customersSortProps: computed("sortProperty", function() {
    return [this.sortProperty];
  }),

  sortedCustomers: sort("model", "customersSortProps"),

  budgetTotal: computed("model.@each.budget", function() {
    return this.get("model")
      .mapBy("budget")
      .reduce((a, b) => a + b, 0);
  })
        
        

});

