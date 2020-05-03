import Vue from 'vue';
import VueAnalytics from 'vue-ua';

Vue.use(VueAnalytics);

export default new VueAnalytics({
    appName    : 'AltMetroMap',
    appVersion : '1.1',
    trackingId : 'UA-39796297-1',
});
