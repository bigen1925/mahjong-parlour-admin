import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import TablesAdmin from '../components/organisms/TablesAdmin';
import { DefaultTemplate } from '../components/templates/DefaultTemplate';

export default function Index(): JSX.Element {
    const router = useRouter();
    useEffect(() => {
        if (!Cookies.get('MPA_TOKEN')) {
            router.push('/login');
        }
    }, []);

    return (
        <DefaultTemplate>
            <TablesAdmin />
        </DefaultTemplate>
    );
}
