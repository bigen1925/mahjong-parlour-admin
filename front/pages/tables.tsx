import TablesAdmin from '../components/organisms/TablesAdmin';
import { DefaultTemplate } from '../components/templates/DefaultTemplate';

export default function Index(): JSX.Element | null {
    return (
        <DefaultTemplate>
            <TablesAdmin />
        </DefaultTemplate>
    );
}
