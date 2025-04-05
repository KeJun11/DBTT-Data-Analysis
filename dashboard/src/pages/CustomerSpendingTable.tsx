import React from "react";

interface MonthlyData {
  spending: number;
  products: string[];
}

interface Customer {
  id: number;
  name: string;
  month1: MonthlyData;
  month2: MonthlyData;
  month3: MonthlyData;
}

const sampleCustomers: Customer[] = [
  {
    id: 1,
    name: "Alice Johnson",
    month1: { spending: 120, products: ["EGF Capsules", "Vitamin C Serum"] },
    month2: { spending: 150, products: ["Hyaluronic Acid"] },
    month3: { spending: 90, products: ["RGF Serum", "Eye Revive"] },
  },
  {
    id: 2,
    name: "Bob Smith",
    month1: { spending: 200, products: ["Luxury Non-Surgical Face Lift"] },
    month2: {
      spending: 180,
      products: ["Jowl Lift", "Orbital Microdermabrasion"],
    },
    month3: { spending: 220, products: ["Hydratone", "Ultimate Booster"] },
  },
  {
    id: 3,
    name: "Catherine Lee",
    month1: { spending: 95, products: ["Pigmentation & Scar"] },
    month2: { spending: 110, products: ["Away Cellulite", "Vitamin C Serum"] },
    month3: { spending: 130, products: ["Hyaluronic Acid", "RGF Serum"] },
  },
  {
    id: 4,
    name: "David Kim",
    month1: { spending: 140, products: ["EGF Capsules", "Hyaluronic Acid"] },
    month2: { spending: 160, products: ["Luxury Non-Surgical Face Lift"] },
    month3: { spending: 150, products: ["Ultimate Booster"] },
  },
  {
    id: 5,
    name: "Emily Davis",
    month1: { spending: 80, products: ["Eye Revive"] },
    month2: { spending: 70, products: ["Jowl Lift"] },
    month3: {
      spending: 60,
      products: ["Pigmentation & Scar", "Away Cellulite"],
    },
  },
];

const CustomerSpendingTable: React.FC = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Customer Name</th>
              <th className="px-4 py-2 text-center">Month 1 Spending</th>
              <th className="px-4 py-2 text-center">Month 1 Products</th>
              <th className="px-4 py-2 text-center">Month 2 Spending</th>
              <th className="px-4 py-2 text-center">Month 2 Products</th>
              <th className="px-4 py-2 text-center">Month 3 Spending</th>
              <th className="px-4 py-2 text-center">Month 3 Products</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sampleCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="px-4 py-2 whitespace-nowrap">{customer.name}</td>
                <td className="px-4 py-2 whitespace-nowrap text-center">
                  ${customer.month1.spending}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-center">
                  {customer.month1.products.join(", ")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-center">
                  ${customer.month2.spending}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-center">
                  {customer.month2.products.join(", ")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-center">
                  ${customer.month3.spending}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-center">
                  {customer.month3.products.join(", ")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerSpendingTable;
