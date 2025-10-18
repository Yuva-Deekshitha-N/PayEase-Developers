"use client"

import type React from "react"
import { Button } from "@/components/ui/button"

export function ConnectGate({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[70dvh] flex flex-col items-center justify-center text-center">
      <div className="rounded-3xl bg-card/40 border border-border/40 backdrop-blur-xl p-6 w-full max-w-sm">
        <h1 className="text-xl font-semibold">Connect Algorand Wallet</h1>
        <p className="text-sm text-foreground/70 mt-2">
          Pay later with PayEase. Securely connect your wallet to view your limit and start checkout.
        </p>
        <div className="mt-4 w-full">
          <Button className="bg-[#b1ef4a] hover:bg-[#b1ef4a]/90 text-black rounded-full">
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  )
}
