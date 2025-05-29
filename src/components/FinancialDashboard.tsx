import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SummaryCard } from "./SummaryCard";
import { DetailedTable } from "./DetailedTable";
import { DollarSign, TrendingUp, AlertCircle, FileText, Info } from "lucide-react";

const orderSummaryData = [
  {
    "head": "Consideration Value",
    "payable": 215.5,
    "invoiced": 199,
    "payment": 196.6,
    "tds": 0.81,
    "totalPayment": 197.41,
    "credit": 0,
    "outstanding": 1.59,
    "unbilled": 16.5
  },
  {
    "head": "GST on Consideration Value",
    "payable": 25.81,
    "invoiced": 23.84,
    "payment": 23.63,
    "tds": 0,
    "totalPayment": 23.63,
    "credit": 0,
    "outstanding": 0.21,
    "unbilled": 1.98
  },
  {
    "head": "Admin Charges",
    "payable": 3.75,
    "invoiced": 0.54,
    "payment": 0,
    "tds": 0,
    "totalPayment": 0,
    "credit": 0,
    "outstanding": 0.54,
    "unbilled": 3.21
  },
  {
    "head": "GST on Admin Charges",
    "payable": 0.68,
    "invoiced": 0.1,
    "payment": 0,
    "tds": 0,
    "totalPayment": 0,
    "credit": 0,
    "outstanding": 0.1,
    "unbilled": 0.58
  },
  {
    "head": "Sub Total 1",
    "payable": 245.74,
    "invoiced": 223.48,
    "payment": 220.23,
    "tds": 0.81,
    "totalPayment": 221.04,
    "credit": 0,
    "outstanding": 2.44,
    "unbilled": 22.26
  },
  {
    "head": "Maintenance S-CAM",
    "payable": 0.09,
    "invoiced": 0.09,
    "payment": 0.07,
    "tds": 0,
    "totalPayment": 0.07,
    "credit": 0,
    "outstanding": 0.02,
    "unbilled": 0
  },
  {
    "head": "GST on Maintenance Charges",
    "payable": 0.04,
    "invoiced": 0.04,
    "payment": 0.03,
    "tds": 0,
    "totalPayment": 0.03,
    "credit": 0,
    "outstanding": 0,
    "unbilled": 0
  },
  {
    "head": "Water & Diesel Charges",
    "payable": 0.05,
    "invoiced": 0.05,
    "payment": 0.02,
    "tds": 0,
    "totalPayment": 0.02,
    "credit": 0,
    "outstanding": 0.02,
    "unbilled": 0
  },
  {
    "head": "GST on Water & Diesel Charges",
    "payable": 0.01,
    "invoiced": 0.01,
    "payment": 0,
    "tds": 0,
    "totalPayment": 0,
    "credit": 0,
    "outstanding": 0.01,
    "unbilled": 0
  },
  {
    "head": "Maintenance Other Charges",
    "payable": 0,
    "invoiced": 0,
    "payment": 0.09,
    "tds": 0,
    "totalPayment": 0.09,
    "credit": 0,
    "outstanding": -0.09,
    "unbilled": 0
  },
  {
    "head": "GST on Maintenance Other Charges",
    "payable": 0,
    "invoiced": 0,
    "payment": 0,
    "tds": 0,
    "totalPayment": 0,
    "credit": 0,
    "outstanding": 0,
    "unbilled": 0
  },
  {
    "head": "Sub Total 2",
    "payable": 0.18,
    "invoiced": 0.18,
    "payment": 0.22,
    "tds": 0,
    "totalPayment": 0.22,
    "credit": 0,
    "outstanding": -0.04,
    "unbilled": 0
  },
  {
    "head": "Other Charges",
    "payable": 0.6,
    "invoiced": 0.01,
    "payment": 0.01,
    "tds": 0,
    "totalPayment": 0.01,
    "credit": 0,
    "outstanding": 0,
    "unbilled": 0.59
  },
  {
    "head": "GST on Other Charges",
    "payable": 0.07,
    "invoiced": 0,
    "payment": 0,
    "tds": 0,
    "totalPayment": 0,
    "credit": 0,
    "outstanding": 0,
    "unbilled": 0.07
  },
  {
    "head": "Sub Total 3",
    "payable": 0.67,
    "invoiced": 0.01,
    "payment": 0.01,
    "tds": 0,
    "totalPayment": 0.01,
    "credit": 0,
    "outstanding": 0,
    "unbilled": 0.66
  },
  {
    "head": "Interest",
    "payable": 0.42,
    "invoiced": 0.15,
    "payment": 0.23,
    "tds": 0,
    "totalPayment": 0.23,
    "credit": 0,
    "outstanding": 0.17,
    "unbilled": 0.27
  },
  {
    "head": "GST on Interest",
    "payable": 0.05,
    "invoiced": 0.01,
    "payment": 0.02,
    "tds": 0,
    "totalPayment": 0.02,
    "credit": 0,
    "outstanding": 0.03,
    "unbilled": 0.04
  },
  {
    "head": "Sub Total 4",
    "payable": 0.46,
    "invoiced": 0.16,
    "payment": 0.25,
    "tds": 0,
    "totalPayment": 0.25,
    "credit": 0,
    "outstanding": 0.2,
    "unbilled": 0.31
  },
  {
    "head": "Grand Total",
    "payable": 247.05,
    "invoiced": 223.83,
    "payment": 220.72,
    "tds": 0.81,
    "totalPayment": 221.53,
    "credit": 0,
    "outstanding": 2.6,
    "unbilled": 23.22
  }
];

export function FinancialDashboard() {
  const grandTotal = orderSummaryData.find(item => item.head === "Grand Total");
  
  const summaryCards = [
    {
      title: "Total Payable",
      value: grandTotal?.payable || 0,
      icon: DollarSign,
      variant: "default" as const,
      description: "Total amount due"
    },
    {
      title: "Total Payment",
      value: grandTotal?.totalPayment || 0,
      icon: TrendingUp,
      variant: "success" as const,
      description: "Amount paid"
    },
    {
      title: "Outstanding",
      value: grandTotal?.outstanding || 0,
      icon: AlertCircle,
      variant: "warning" as const,
      description: "Pending amount"
    },
    {
      title: "Unbilled",
      value: grandTotal?.unbilled || 0,
      icon: FileText,
      variant: "secondary" as const,
      description: "Not yet invoiced"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Financial Dashboard
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive overview of your financial transactions and outstanding payments
          </p>
          
          {/* Currency Note */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 text-sm text-blue-700">
            <Info className="h-4 w-4" />
            <span className="font-medium">Note: All values are displayed in Crores (₹)</span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card, index) => (
            <SummaryCard
              key={index}
              title={card.title}
              value={card.value}
              icon={card.icon}
              variant={card.variant}
              description={card.description}
            />
          ))}
        </div>

        {/* Detailed Table */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Order Summary Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <DetailedTable data={orderSummaryData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
