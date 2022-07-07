/**
 * If we have a piece of state that needs to be shared around multiple instances, 
 * then we can use the reactive() from vue
 */

import { reactive } from "vue";

// Just trying out reactive to create small global state around sub component trees, something similar to
// context API in reactjs

export const store = reactive({
  count: 0,
  increment() {
    this.count++;
  },
});
