import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { LearnerDashboard } from '@/components/dashboard/LearnerDashboard';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <LearnerDashboard />
    </DashboardLayout>
  );
}
