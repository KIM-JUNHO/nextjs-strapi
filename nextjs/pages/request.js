import ApprovalsForm from '../components/ApprovalsForm';
import DragTable from '../components/DragTable';
import RequestForm from '../components/RequestForm';
import UsersTable from '../components/UsersTable';

export default function RequestFormPage() {
  return (
    <div>
      <RequestForm />
      <ApprovalsForm />
      <UsersTable />
      <DragTable />
    </div>
  );
}
