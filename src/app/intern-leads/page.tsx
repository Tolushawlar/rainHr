"use client";

import React, { useState } from "react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Filter, ChevronDown } from "lucide-react";
import { InternLeadTable } from "@/components/dashboard/intern-lead-table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function InternLeads() {
  const [selectedIntern, setSelectedIntern] = useState<number | null>(null);
  
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
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {interns.map((intern) => (
            <Card 
              key={intern.id} 
              className={`p-4 cursor-pointer transition-all ${selectedIntern === intern.id ? 'border-primary' : ''}`}
              onClick={() => setSelectedIntern(intern.id === selectedIntern ? null : intern.id)}
            >
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
                <ChevronDown className={`h-4 w-4 transition-transform ${selectedIntern === intern.id ? 'rotate-180' : ''}`} />
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
        
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">
            {selectedIntern ? `${interns.find(i => i.id === selectedIntern)?.name}'s Leads` : 'All Intern Leads'}
          </h2>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="prospect">Prospect</TabsTrigger>
              <TabsTrigger value="contacted">Contacted</TabsTrigger>
              <TabsTrigger value="negotiation">Negotiation</TabsTrigger>
              <TabsTrigger value="closed">Closed</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <InternLeadTable internId={selectedIntern || undefined} />
            </TabsContent>
            
            <TabsContent value="prospect">
              <InternLeadTable internId={selectedIntern || undefined} />
            </TabsContent>
            
            <TabsContent value="contacted">
              <InternLeadTable internId={selectedIntern || undefined} />
            </TabsContent>
            
            <TabsContent value="negotiation">
              <InternLeadTable internId={selectedIntern || undefined} />
            </TabsContent>
            
            <TabsContent value="closed">
              <InternLeadTable internId={selectedIntern || undefined} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </DashboardLayout>
  );
}