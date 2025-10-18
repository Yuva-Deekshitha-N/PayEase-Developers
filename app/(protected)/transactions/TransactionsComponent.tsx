"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

const mockTransactions = [
  {
    id: "TXN_001",
    amount: "$2,500.00",
    type: "incoming",
    status: "completed",
    date: "2025-01-15",
    description: "Payment from Acme Corp",
  },
  {
    id: "TXN_002",
    amount: "$1,200.00",
    type: "outgoing",
    status: "completed",
    date: "2025-01-14",
    description: "Settlement to wallet",
  },
  {
    id: "TXN_003",
    amount: "$3,750.00",
    type: "incoming",
    status: "pending",
    date: "2025-01-13",
    description: "Payment from TechStart Inc",
  },
  {
    id: "TXN_004",
    amount: "$890.00",
    type: "incoming",
    status: "completed",
    date: "2025-01-12",
    description: "Payment from Global Services",
  },
]

export default function TransactionsComponent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Transaction History</h2>
        <p className="text-muted-foreground">View all your settled and pending transactions</p>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Transaction ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Description</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Amount</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-border/30 hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 font-mono text-xs text-primary">{tx.id}</td>
                    <td className="py-3 px-4 text-foreground">{tx.description}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        {tx.type === "incoming" ? (
                          <ArrowDownLeft className="h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-red-500" />
                        )}
                        <span className="font-semibold text-foreground">{tx.amount}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={tx.status === "completed" ? "default" : "secondary"}
                        className={
                          tx.status === "completed"
                            ? "bg-green-500/20 text-green-400 border-green-500/30"
                            : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                        }
                      >
                        {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
