"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";

export default function InternPerformance() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Intern Performance</h1>
            <p className="text-muted-foreground">
              Track and analyze intern sales performance metrics.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" /> Last 30 Days
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Export
            </Button>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Interns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Leads/Intern</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg. Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">19.8%</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Top Performer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Maria G.</div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Performance bars for each intern */}
              {[
                { name: "Maria Garcia", leads: 32, conversion: 22 },
                { name: "Alex Johnson", leads: 24, conversion: 18 },
                { name: "Sarah Patel", leads: 29, conversion: 24 },
                { name: "David Kim", leads: 18, conversion: 15 },
                { name: "James Wilson", leads: 22, conversion: 20 },
              ].map((intern) => (
                <div key={intern.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{intern.name}</div>
                    <div className="text-muted-foreground">{intern.leads} leads</div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${(intern.leads / 40) * 100}%` }} 
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <div>Conversion: {intern.conversion}%</div>
                    <div>Revenue: ${(intern.leads * intern.conversion * 120).toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}