"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const transactions = [
  {
    id: "TXN_001",
    amount: "$2,450.00",
    status: "settled",
    date: "2024-10-15",
    customer: "John Doe",
    method: "Card",
  },
  {
    id: "TXN_002",
    amount: "$1,890.50",
    status: "settled",
    date: "2024-10-15",
    customer: "Jane Smith",
    method: "Wallet",
  },
  {
    id: "TXN_003",
    amount: "$3,200.00",
    status: "pending",
    date: "2024-10-15",
    customer: "Bob Johnson",
    method: "Card",
  },
  {
    id: "TXN_004",
    amount: "$950.75",
    status: "settled",
    date: "2024-10-14",
    customer: "Alice Brown",
    method: "Wallet",
  },
  {
    id: "TXN_005",
    amount: "$4,120.00",
    status: "settled",
    date: "2024-10-14",
    customer: "Charlie Wilson",
    method: "Card",
  },
]

export function RecentTransactions() {
  return (
    <div className="rounded-2xl p-4 bg-card/40 border border-border/40 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Recent Transactions</h3>
        <Button variant="ghost" size="sm">
          View All
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/40">
              <th className="text-left py-3 px-3 text-foreground/60 font-medium">ID</th>
              <th className="text-left py-3 px-3 text-foreground/60 font-medium">Customer</th>
              <th className="text-left py-3 px-3 text-foreground/60 font-medium">Amount</th>
              <th className="text-left py-3 px-3 text-foreground/60 font-medium">Method</th>
              <th className="text-left py-3 px-3 text-foreground/60 font-medium">Status</th>
              <th className="text-left py-3 px-3 text-foreground/60 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b border-border/40 hover:bg-primary/5 transition-colors">
                <td className="py-3 px-3 font-mono text-xs">{tx.id}</td>
                <td className="py-3 px-3">{tx.customer}</td>
                <td className="py-3 px-3 font-semibold">{tx.amount}</td>
                <td className="py-3 px-3">{tx.method}</td>
                <td className="py-3 px-3">
                  <Badge
                    variant={tx.status === "settled" ? "default" : "secondary"}
                    className={
                      tx.status === "settled" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                    }
                  >
                    {tx.status}
                  </Badge>
                </td>
                <td className="py-3 px-3 text-foreground/60">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
