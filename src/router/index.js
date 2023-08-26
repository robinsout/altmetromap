import VueRouter from 'vue-router';
import MoscowMap from '@/components/MoscowMap';
import SpbMap from '@/components/SpbMap';
import KyivMap from '@/components/KyivMap';

const router = new VueRouter({
  mode   : 'history',
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

export default router;
