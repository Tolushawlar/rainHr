import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export function LeadTabs() {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid grid-cols-5 mb-8">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="prospect">Prospect</TabsTrigger>
        <TabsTrigger value="contacted">Contacted</TabsTrigger>
        <TabsTrigger value="negotiation">Negotiation</TabsTrigger>
        <TabsTrigger value="closed">Closed</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <LeadTable status="All" />
      </TabsContent>
      
      <TabsContent value="prospect">
        <LeadTable status="Prospect" />
      </TabsContent>
      
      <TabsContent value="contacted">
        <LeadTable status="Contacted" />
      </TabsContent>
      
      <TabsContent value="negotiation">
        <LeadTable status="Negotiation" />
      </TabsContent>
      
      <TabsContent value="closed">
        <LeadTable status="Closed" />
      </TabsContent>
    </Tabs>
  );
}

interface LeadTableProps {
  status: string;
}

function LeadTable({ status }: LeadTableProps) {
  // Sample data - in a real app, this would come from an API
  const leads = [
    { id: 1, name: "Jane Cooper", company: "Microsoft", email: "jane@microsoft.com", status: "Prospect", value: "$12,000" },
    { id: 2, name: "Wade Warren", company: "Google", email: "wade@google.com", status: "Contacted", value: "$8,500" },
    { id: 3, name: "Esther Howard", company: "Apple", email: "esther@apple.com", status: "Negotiation", value: "$24,000" },
    { id: 4, name: "Cameron Williamson", company: "Tesla", email: "cameron@tesla.com", status: "Closed", value: "$16,800" },
  ];

  // Filter leads based on status (except for "All")
  const filteredLeads = status === "All" 
    ? leads 
    : leads.filter(lead => lead.status === status);

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-secondary border-b border-border">
              <th className="text-left p-4 font-medium">Name</th>
              <th className="text-left p-4 font-medium">Company</th>
              <th className="text-left p-4 font-medium">Email</th>
              <th className="text-left p-4 font-medium">Status</th>
              <th className="text-left p-4 font-medium">Value</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="border-b border-border hover:bg-muted/10">
                <td className="p-4">{lead.name}</td>
                <td className="p-4">{lead.company}</td>
                <td className="p-4">{lead.email}</td>
                <td className="p-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    lead.status === "Prospect" ? "bg-blue-500/20 text-blue-500" :
                    lead.status === "Contacted" ? "bg-yellow-500/20 text-yellow-500" :
                    lead.status === "Negotiation" ? "bg-purple-500/20 text-purple-500" :
                    "bg-green-500/20 text-green-500"
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="p-4">{lead.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}