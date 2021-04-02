import router from './router';
import { getToken } from '@/utils/auth';

const whiteList = ['/login', '/register', '/resetPassword'];

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();

  if (hasToken) {
    if (whiteList.includes(to.path)) {
      next({ path: '/home' });
    } else {
      next();
    }
  } else {
    /* has no token */

    if (whiteList.includes(to.path)) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next('/login');
    }
  }
});
