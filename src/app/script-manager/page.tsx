"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ScriptTable } from "@/components/dashboard/script-table";

export default function ScriptManager() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Script Manager</h1>
            <p className="text-muted-foreground">
              Create and manage sales scripts and templates.
            </p>
          </div>
        </div>
        
        <div className="flex justify-end mb-4">
          <Button className="bg-[#6C00FF]">
            <Plus className="mr-2 h-4 w-4" /> Add Script
          </Button>
        </div>
        
        <ScriptTable />
      </div>
    </DashboardLayout>
  );
}