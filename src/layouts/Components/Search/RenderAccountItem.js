import { memo } from 'react';
import AccountItem from '~/Components/AccountItem';

function RenderAccountItem({ accountList = [] }) {
    console.log('re-render');

    return accountList.map(accountItem => (
        <li key={accountItem.id}>
            <AccountItem data={accountItem} />
        </li>
    ));
}

export default memo(RenderAccountItem);
