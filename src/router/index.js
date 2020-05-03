import Vue from 'vue';
import Router from 'vue-router';
import MoscowMap from '@/components/MoscowMap';
import SpbMap from '@/components/SpbMap';
import KyivMap from '@/components/KyivMap';

Vue.use(Router);

export default new Router({
    routes : [
        {
            path      : '/',
            name      : 'MoscowMap',
            component : MoscowMap,
        },
        {
            path      : '/spb',
            name      : 'SpbMap',
            component : SpbMap,
        },
        {
            path      : '/kyiv',
            name      : 'KyivMap',
            component : KyivMap,
        },
    ],
});
