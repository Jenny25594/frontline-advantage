import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AICoacInterface } from '@/components/coach/AICoacInterface';

export default function CoachPage() {
  return (
    <DashboardLayout>
      <AICoacInterface />
    </DashboardLayout>
  );
}
