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
    LoginPage,
    RegisterPage,
    DetailVideoPage,
} from '~/pages';

const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.following, component: FollowingPage },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: DetailSearch, layout: null },
    { path: config.routes.live, component: LivePage },
    { path: config.routes.login, component: LoginPage, layout: null },
    { path: config.routes.register, component: RegisterPage, layout: null },
    { path: config.routes.video, component: DetailVideoPage, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
