// Layouts

// Pages
import Home from '../components/pages/Home';
import Blog from '../components/pages/Blog';
import Blog2 from '../components/pages/Blog2';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/blog', component: Blog },
    { path: '/blog2', component: Blog2 },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
