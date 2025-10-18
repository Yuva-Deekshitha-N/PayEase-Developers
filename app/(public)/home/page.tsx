"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Globe } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <p className="text-sm font-medium text-primary">The Future of Crypto Payments</p>
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Instant Crypto Payment <span className="text-primary">Settlement</span>
          </h1>

          <p className="mb-8 text-xl text-muted-foreground">
            PayEase enables developers and merchants to accept, settle, and manage crypto payments with industry-leading
            speed and security.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-foreground">Why Choose PayEase?</h2>
            <p className="text-lg text-muted-foreground">Everything you need for seamless crypto payments</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-border bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Settle payments in seconds with our optimized blockchain infrastructure and instant confirmation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-border bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Bank-Grade Security</h3>
              <p className="text-muted-foreground">
                Enterprise-level security with multi-signature wallets, cold storage, and regular audits.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-border bg-card/50 p-8 backdrop-blur-sm">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Global Reach</h3>
              <p className="text-muted-foreground">
                Support for multiple blockchains and cryptocurrencies with real-time conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold text-primary">$2.5B+</p>
              <p className="text-muted-foreground">Settled Annually</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold text-primary">50K+</p>
              <p className="text-muted-foreground">Active Merchants</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold text-primary">99.9%</p>
              <p className="text-muted-foreground">Uptime SLA</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-4xl font-bold text-primary">150+</p>
              <p className="text-muted-foreground">Countries Supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 p-12 text-center backdrop-blur-sm">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of developers and merchants using PayEase for instant crypto settlements.
          </p>
          <Link href="/login">
            <Button size="lg" className="w-full sm:w-auto">
              Start Your Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Developers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    SDKs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 PayEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}