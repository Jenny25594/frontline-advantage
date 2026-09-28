import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { HRDashboard } from '@/components/hr/HRDashboard';

export default function HRPage() {
  return (
    <DashboardLayout>
      <HRDashboard />
    </DashboardLayout>
  );
}
