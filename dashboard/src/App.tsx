import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import CustomerSegment from "@/pages/CustomerSegment";
import TransactionHistory from "@/pages/TransactionHistory";
import DigitalEngagement from "@/pages/DigitalEngagement";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="customer-segment" element={<CustomerSegment />} />
        <Route path="transaction-history" element={<TransactionHistory />} />
        <Route path="digital-engagement" element={<DigitalEngagement />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
