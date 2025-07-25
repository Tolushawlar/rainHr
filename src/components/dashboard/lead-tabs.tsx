import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { MoreHorizontal, Clock, Calendar, Edit, Eye, Mail, Phone, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    { 
      id: 1, 
      name: "Jane Cooper", 
      email: "jane@microsoft.com", 
      region: "North America", 
      status: "Prospect", 
      lastUpdated: "2023-12-15", 
      followUp: "2024-02-01"
    },
    { 
      id: 2, 
      name: "Wade Warren", 
      email: "wade@google.com", 
      region: "Europe", 
      status: "Contacted", 
      lastUpdated: "2023-12-20", 
      followUp: "2024-01-28"
    },
    { 
      id: 3, 
      name: "Esther Howard", 
      email: "esther@apple.com", 
      region: "Asia Pacific", 
      status: "Negotiation", 
      lastUpdated: "2024-01-05", 
      followUp: "2024-01-25"
    },
    { 
      id: 4, 
      name: "Cameron Williamson", 
      email: "cameron@tesla.com", 
      region: "South America", 
      status: "Closed", 
      lastUpdated: "2024-01-10", 
      followUp: "2024-02-10"
    },
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
            <tr className="border-b border-border">
              <th className="text-left p-4 font-medium text-primary">Name</th>
              <th className="text-left p-4 font-medium text-primary">Email Address</th>
              <th className="text-left p-4 font-medium text-primary">Region</th>
              <th className="text-left p-4 font-medium text-primary">Status</th>
              <th className="text-left p-4 font-medium text-primary">Last Updated</th>
              <th className="text-left p-4 font-medium text-primary">Follow Up</th>
              <th className="text-left p-4 font-medium text-primary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => (
              <tr key={lead.id} className="border-b border-border hover:bg-muted/10">
                <td className="p-4">{lead.name}</td>
                <td className="p-4">{lead.email}</td>
                <td className="p-4">{lead.region}</td>
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
                <td className="p-4 flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                  {lead.lastUpdated}
                </td>
                <td className="p-4 flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
                  {lead.followUp}
                </td>
                <td className="p-4">
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8" title="Edit Lead">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8" title="View Details">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" /> Email Lead
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="mr-2 h-4 w-4" /> Call Lead
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete Lead
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}