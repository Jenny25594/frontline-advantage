import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ManagerDashboard } from '@/components/manager/ManagerDashboard';

export default function ManagerPage() {
  return (
    <DashboardLayout>
      <ManagerDashboard />
    </DashboardLayout>
  );
}
