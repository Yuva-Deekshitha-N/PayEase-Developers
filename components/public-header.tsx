"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function PublicHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/payease-logo.png" alt="PayEase" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-foreground">PayEase</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Features
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Pricing
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Docs
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            About
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/login">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-card/50 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-4 px-4 py-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Docs
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/login">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Sign In
                </Button>
              </Link>
              <Link href="/login">
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
