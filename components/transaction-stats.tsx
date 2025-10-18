"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { name: "Mon", settled: 4000, pending: 2400 },
  { name: "Tue", settled: 3000, pending: 1398 },
  { name: "Wed", settled: 2000, pending: 9800 },
  { name: "Thu", settled: 2780, pending: 3908 },
  { name: "Fri", settled: 1890, pending: 4800 },
  { name: "Sat", settled: 2390, pending: 3800 },
  { name: "Sun", settled: 3490, pending: 4300 },
]

export function TransactionStats() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Bar Chart */}
      <div className="rounded-2xl p-4 bg-card/40 border border-border/40 backdrop-blur-xl">
        <h3 className="font-semibold mb-4">Weekly Transactions</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(20, 20, 30, 0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="settled" fill="#d4ff00" radius={[8, 8, 0, 0]} />
            <Bar dataKey="pending" fill="rgba(212, 255, 0, 0.3)" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="rounded-2xl p-4 bg-card/40 border border-border/40 backdrop-blur-xl">
        <h3 className="font-semibold mb-4">Settlement Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(20, 20, 30, 0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="settled" stroke="#d4ff00" strokeWidth={2} dot={{ fill: "#d4ff00" }} />
            <Line type="monotone" dataKey="pending" stroke="rgba(212, 255, 0, 0.5)" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
