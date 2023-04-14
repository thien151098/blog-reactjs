// Layouts
import { HeaderOnly } from '../components/Layout';
// Pages
import Home from '../components/pages/Home';
import Blog from '../components/pages/Blog';
import Blog2 from '../components/pages/Blog2';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog, layout: HeaderOnly },
    { path: '/blog2', component: Blog2, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
