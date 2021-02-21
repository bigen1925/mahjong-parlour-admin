import {TablesAdmin} from '../components/smart/TablesAdmin';
import {DefaultLayout} from "../components/layouts/DefaultLayout";

export default function Index(): JSX.Element | null {
    return (
        <DefaultLayout>
            <TablesAdmin />
        </DefaultLayout>
    );
}
