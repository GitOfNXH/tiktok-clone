// Layout
import HeaderOnly from '~/Components/Layouts/HeaderOnly';

// Page
import {
    HomePage,
    FollowingPage,
    Upload,
    Profile,
    DetailSearch,
} from '~/pages';

const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: DetailSearch, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
