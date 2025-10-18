"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { BarChart3, Settings, LogOut, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { createClient } from "@/lib/supabase-client"

const NAV = [
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/transactions", label: "Transactions", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
]

export function MerchantHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)
  const [loggingOut, setLoggingOut] = useState(false)
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
      }
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    setLoggingOut(true)
    try {
      await fetch("/api/auth/logout", { method: "POST" })
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg bg-primary/20 border border-primary/30 hover:bg-primary/30"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative top-0 left-0 h-screen w-64 bg-card/40 border-r border-border/40 backdrop-blur-xl transition-transform duration-300 z-40",
          !open && "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-6 space-y-8 h-full flex flex-col">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src="/payease-logo.png" alt="PayEase Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-semibold tracking-wide">PayEase</span>
          </Link>

          {/* Navigation */}
          <nav className="space-y-2 flex-1">
            {NAV.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-xl transition-colors text-sm",
                    pathname === item.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/15",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="space-y-2 border-t border-border/40 pt-4">
            <div className="text-xs text-foreground/60 px-4">
              <p className="font-medium">Welcome {user?.user_metadata?.full_name || user?.user_metadata?.name || 'User'}</p>
              <p className="font-mono text-xs mt-1">{user?.email || 'No email'}</p>
            </div>
            <Button
              onClick={handleLogout}
              disabled={loggingOut}
              variant="secondary"
              size="sm"
              className="w-full rounded-lg"
            >
              <LogOut className="h-4 w-4 mr-2" />
              {loggingOut ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setOpen(false)} />}
    </>
  )
}
