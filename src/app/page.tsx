"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { MetricCards } from "@/components/dashboard/metric-cards";
import { LeadTabs } from "@/components/dashboard/lead-tabs";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your leads and performance metrics.
          </p>
        </div>
        
        <MetricCards />
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Lead Management</h2>
          <LeadTabs />
        </div>
      </div>
    </DashboardLayout>
  );
}