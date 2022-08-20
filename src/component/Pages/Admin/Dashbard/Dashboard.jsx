import AdminLayout from "../../../Layouts/Admin/AdminLayout";
import ContentHead from "../ContentHead/ContentHead";
import BoxInfo from "./BoxInfo/BoxInfo";
import DataTabels from "./DataTables/DataTables";
export default function Dashboard() {
  return (
    <AdminLayout title="Dashbaord">
      <ContentHead title="Dashboard" />
      <BoxInfo />
      <DataTabels />
    </AdminLayout>
  );
}
