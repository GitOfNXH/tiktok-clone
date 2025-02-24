// Layout
import HeaderOnly from '~/Components/Layouts/HeaderOnly';

// Page
import { HomePage, FollowingPage, Upload } from '~/pages';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
