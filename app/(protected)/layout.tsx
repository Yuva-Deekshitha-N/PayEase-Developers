import type React from "react"
import { MerchantHeader } from "@/components/merchant-header"

export default function ProtectedLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen">
      <MerchantHeader />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
