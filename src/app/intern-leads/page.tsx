"use client";

import React from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Filter } from "lucide-react";

export default function InternLeads() {
  // Sample interns data
  const interns = [
    { id: 1, name: "Alex Johnson", leads: 24, conversion: "18%", avatar: "/avatars/alex.png" },
    { id: 2, name: "Maria Garcia", leads: 32, conversion: "22%", avatar: "/avatars/maria.png" },
    { id: 3, name: "David Kim", leads: 18, conversion: "15%", avatar: "/avatars/david.png" },
    { id: 4, name: "Sarah Patel", leads: 29, conversion: "24%", avatar: "/avatars/sarah.png" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Intern Leads</h1>
            <p className="text-muted-foreground">
              Monitor and manage intern lead performance.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button className="bg-[#6C00FF]">
              <Plus className="mr-2 h-4 w-4" /> Assign Lead
            </Button>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {interns.map((intern) => (
            <Card key={intern.id} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={intern.avatar} alt={intern.name} />
                    <AvatarFallback>{intern.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{intern.name}</h3>
                    <p className="text-sm text-muted-foreground">Sales Intern</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">View Details</Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">Total Leads</p>
                  <p className="text-xl font-bold">{intern.leads}</p>
                </div>
                <div className="bg-secondary rounded-lg p-3">
                  <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  <p className="text-xl font-bold">{intern.conversion}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}