"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Edit, Trash2 } from "lucide-react";

export default function ScriptManager() {
  // Sample scripts data
  const scripts = [
    { id: 1, name: "Initial Contact Script", category: "Outreach", updatedAt: "2023-12-15" },
    { id: 2, name: "Follow-up Template", category: "Follow-up", updatedAt: "2023-12-20" },
    { id: 3, name: "Negotiation Guide", category: "Closing", updatedAt: "2024-01-05" },
    { id: 4, name: "Objection Handling", category: "Sales", updatedAt: "2024-01-10" },
  ];

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
          <Button className="bg-[#6C00FF]">
            <Plus className="mr-2 h-4 w-4" /> New Script
          </Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {scripts.map((script) => (
            <Card key={script.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-primary" />
                  {script.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground mb-4">
                  <span className="bg-secondary px-2 py-1 rounded-full">{script.category}</span>
                  <span className="ml-2">Updated: {script.updatedAt}</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-3.5 w-3.5 mr-1" /> Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-red-500 hover:text-red-600">
                    <Trash2 className="h-3.5 w-3.5 mr-1" /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}