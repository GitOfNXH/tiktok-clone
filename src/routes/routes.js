import config from '~/configs';

// Layout
import { HeaderOnly } from '~/layouts';

// Page
import {
    HomePage,
    FollowingPage,
    Upload,
    Profile,
    DetailSearch,
    LivePage,
} from '~/pages';

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.following, component: FollowingPage },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: DetailSearch, layout: null },
    { path: config.routes.live, component: LivePage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
