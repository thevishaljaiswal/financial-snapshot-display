
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface OrderSummaryItem {
  head: string;
  payable: number;
  invoiced: number;
  payment: number;
  tds: number;
  totalPayment: number;
  credit: number;
  outstanding: number;
  unbilled: number;
}

interface DetailedTableProps {
  data: OrderSummaryItem[];
}

export function DetailedTable({ data }: DetailedTableProps) {
  const formatCurrency = (value: number) => {
    return `₹${value.toFixed(2)} Cr`;
  };
  
  const getRowVariant = (head: string) => {
    if (head === "Grand Total") return "bg-gradient-to-r from-blue-50 to-purple-50 font-bold";
    if (head.includes("Sub Total")) return "bg-gray-50 font-semibold";
    return "hover:bg-gray-50/50";
  };

  const getCellColor = (value: number, column: string) => {
    if (column === "outstanding" && value < 0) return "text-green-600";
    if (column === "outstanding" && value > 0) return "text-red-600";
    if (value === 0) return "text-gray-400";
    return "text-gray-900";
  };

  const getBadgeVariant = (value: number, column: string) => {
    if (column === "outstanding") {
      if (value < 0) return "bg-green-100 text-green-800";
      if (value > 0) return "bg-red-100 text-red-800";
    }
    if (column === "unbilled" && value > 0) return "bg-orange-100 text-orange-800";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100">
            <TableHead className="font-bold text-gray-700 sticky left-0 bg-gray-50 z-10 min-w-[200px]">
              Description
            </TableHead>
            <TableHead className="font-bold text-gray-700 text-center">Payable (₹ Cr)</TableHead>
            <TableHead className="font-bold text-gray-700 text-center">Invoiced (₹ Cr)</TableHead>
            <TableHead className="font-bold text-gray-700 text-center">Payment (₹ Cr)</TableHead>
            <TableHead className="font-bold text-gray-700 text-center">TDS (₹ Cr)</TableHead>
            <TableHead className="font-bold text-gray-700 text-center">Total Payment (₹ Cr)</TableHead>
            <TableHead className="font-bold text-gray-700 text-center">Credit (₹ Cr)</TableHead>
            <TableHead className="font-bold text-gray-700 text-center">Outstanding (₹ Cr)</TableHead>
            <TableHead className="font-bold text-gray-700 text-center">Unbilled (₹ Cr)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow 
              key={index} 
              className={cn("transition-colors duration-200", getRowVariant(item.head))}
            >
              <TableCell className={cn(
                "font-medium sticky left-0 z-10 bg-white",
                item.head === "Grand Total" ? "bg-gradient-to-r from-blue-50 to-purple-50" : 
                item.head.includes("Sub Total") ? "bg-gray-50" : ""
              )}>
                {item.head}
                {item.head.includes("GST") && (
                  <Badge className="ml-2 text-xs bg-blue-100 text-blue-800">GST</Badge>
                )}
              </TableCell>
              <TableCell className="text-center">
                <span className={getCellColor(item.payable, "payable")}>
                  {formatCurrency(item.payable)}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className={getCellColor(item.invoiced, "invoiced")}>
                  {formatCurrency(item.invoiced)}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className={getCellColor(item.payment, "payment")}>
                  {formatCurrency(item.payment)}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className={getCellColor(item.tds, "tds")}>
                  {formatCurrency(item.tds)}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className={getCellColor(item.totalPayment, "totalPayment")}>
                  {formatCurrency(item.totalPayment)}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <span className={getCellColor(item.credit, "credit")}>
                  {formatCurrency(item.credit)}
                </span>
              </TableCell>
              <TableCell className="text-center">
                <Badge className={getBadgeVariant(item.outstanding, "outstanding")}>
                  {formatCurrency(item.outstanding)}
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Badge className={getBadgeVariant(item.unbilled, "unbilled")}>
                  {formatCurrency(item.unbilled)}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
