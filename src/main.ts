import { createApp, h, configureCompat } from 'vue';

import App from './App.vue';

// app2 has the copied config after added this sentence;
configureCompat({
  MODE: 3,
});

const app1 = createApp({
  render: () => {return h(App, {test: 1})},
  provide() {
    return {
      test: 123,
    }
  }
});
app1.config.globalProperties.test = () => { console.log('test'); }

app1.mount('#app');
const app2 = createApp({
  template: '<div>test</div>',
});
console.log(app1.config, app2.config);
