import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { MatxSuspense } from 'app/components';

const AppAccount = Loadable(lazy(() => import('./AppAccount')));

const AccountsRouter = [
    {
        path: '/account',
        element: (
            <MatxSuspense>
                <AppAccount />
            </MatxSuspense>
        ),
    },
];
export default AccountsRouter;
