import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { GuestsAdmin } from '../components/smart/GuestsAdmin';

export default function Index(): JSX.Element | null {
    return (
        <DefaultLayout>
            <GuestsAdmin />
        </DefaultLayout>
    );
}
