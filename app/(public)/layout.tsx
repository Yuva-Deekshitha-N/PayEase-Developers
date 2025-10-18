import type React from "react"
import { PublicHeader } from "@/components/public-header"

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <PublicHeader />
      <main>{children}</main>
    </>
  )
}
