"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bell, Lock, Key, Webhook } from "lucide-react"

export default function SettingsPage() {
  const [apiKeyVisible, setApiKeyVisible] = useState(false)

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your merchant account and preferences</p>
      </div>

      {/* API Keys Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Key className="h-5 w-5 text-primary" />
            <CardTitle>API Keys</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Public Key</label>
            <div className="flex gap-2">
              <Input type="text" value="pk_live_1234567890abcdef" readOnly className="font-mono text-xs" />
              <Button variant="outline" size="sm" className="bg-transparent">
                Copy
              </Button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Secret Key</label>
            <div className="flex gap-2">
              <Input
                type={apiKeyVisible ? "text" : "password"}
                value="sk_live_abcdef1234567890"
                readOnly
                className="font-mono text-xs"
              />
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent"
                onClick={() => setApiKeyVisible(!apiKeyVisible)}
              >
                {apiKeyVisible ? "Hide" : "Show"}
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent">
                Copy
              </Button>
            </div>
          </div>
          <Button variant="outline" className="bg-transparent">
            Regenerate Keys
          </Button>
        </CardContent>
      </Card>

      {/* Notifications Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <CardTitle>Notifications</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates about transactions</p>
            </div>
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Settlement Alerts</p>
              <p className="text-sm text-muted-foreground">Get notified when settlements complete</p>
            </div>
            <input type="checkbox" defaultChecked className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>

      {/* Security Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-primary" />
            <CardTitle>Security</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <Button variant="outline" className="bg-transparent">
              Change Password
            </Button>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Two-Factor Authentication</label>
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Enabled</Badge>
              <Button variant="outline" size="sm" className="bg-transparent">
                Manage
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Webhooks Section */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Webhook className="h-5 w-5 text-primary" />
            <CardTitle>Webhooks</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Webhook URL</label>
            <Input type="url" placeholder="https://your-domain.com/webhooks/payease" className="mb-2" />
            <Button className="w-full">Save Webhook</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
