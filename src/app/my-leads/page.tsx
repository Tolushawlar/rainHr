"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { LeadTabs } from "@/components/dashboard/lead-tabs";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";

export default function MyLeads() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">My Leads</h1>
            <p className="text-muted-foreground">
              Manage and track your personal leads.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button className="bg-[#6C00FF]">
              <Plus className="mr-2 h-4 w-4" /> Add Lead
            </Button>
          </div>
        </div>
        
        <LeadTabs />
      </div>
    </DashboardLayout>
  );
}