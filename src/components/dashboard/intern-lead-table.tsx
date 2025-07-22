import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Clock, Calendar, Edit, Eye, Trash2, Mail, Phone, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface InternLeadTableProps {
  internId?: number;
}

export function InternLeadTable({ internId }: InternLeadTableProps) {
  // Sample data - in a real app, this would come from an API
  const leads = [
    { 
      id: 1, 
      name: "Michael Brown", 
      email: "michael@example.com", 
      region: "North America", 
      status: "Prospect", 
      lastUpdated: "2024-01-12", 
      followUp: "2024-01-30",
      internId: 1
    },
    { 
      id: 2, 
      name: "Lisa Chen", 
      email: "lisa@example.com", 
      region: "Asia Pacific", 
      status: "Contacted", 
      lastUpdated: "2024-01-15", 
      followUp: "2024-01-29",
      internId: 2
    },
    { 
      id: 3, 
      name: "Robert Smith", 
      email: "robert@example.com", 
      region: "Europe", 
      status: "Negotiation", 
      lastUpdated: "2024-01-10", 
      followUp: "2024-01-25",
      internId: 3
    },
    { 
      id: 4, 
      name: "Emily Johnson", 
      email: "emily@example.com", 
      region: "North America", 
      status: "Prospect", 
      lastUpdated: "2024-01-18", 
      followUp: "2024-02-05",
      internId: 4
    },
    { 
      id: 5, 
      name: "David Wilson", 
      email: "david@example.com", 
      region: "Europe", 
      status: "Closed", 
      lastUpdated: "2024-01-08", 
      followUp: "2024-02-08",
      internId: 1
    },
  ];

  // Filter leads by intern if internId is provided
  const filteredLeads = internId 
    ? leads.filter(lead => lead.internId === internId)
    : leads;

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
                        <DropdownMenuLabel>Intern Lead Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" /> Email Lead
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="mr-2 h-4 w-4" /> Call Lead
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserPlus className="mr-2 h-4 w-4" /> Reassign Intern
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