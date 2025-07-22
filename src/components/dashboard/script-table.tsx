import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Calendar, FileText, Edit, Trash2, Eye, Copy, Download, UserPlus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ScriptTable() {
  // Sample scripts data
  const scripts = [
    { 
      id: 1, 
      name: "Initial Contact Script", 
      description: "Script for first contact with potential leads",
      status: "Active"
    },
    { 
      id: 2, 
      name: "Follow-up Template", 
      description: "Template for following up with leads after initial contact",
      status: "Active"
    },
    { 
      id: 3, 
      name: "Negotiation Guide", 
      description: "Guidelines for negotiating with interested prospects",
      status: "Under Review"
    },
    { 
      id: 4, 
      name: "Objection Handling", 
      description: "Responses to common objections during sales calls",
      status: "Active"
    },
    { 
      id: 5, 
      name: "Cold Email Template", 
      description: "Template for cold outreach via email",
      status: "Draft"
    },
  ];

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 font-medium text-primary">Script Name</th>
              <th className="text-left p-4 font-medium text-primary">Description</th>
              <th className="text-left p-4 font-medium text-primary">Status</th>
              <th className="text-left p-4 font-medium text-primary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {scripts.map((script) => (
              <tr key={script.id} className="border-b border-border hover:bg-muted/10">
                <td className="p-4 flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-primary" />
                  {script.name}
                </td>
                <td className="p-4">{script.description}</td>
                <td className="p-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    script.status === "Active" ? "bg-green-500/20 text-green-500" :
                    script.status === "Draft" ? "bg-yellow-500/20 text-yellow-500" :
                    "bg-blue-500/20 text-blue-500"
                  }`}>
                    {script.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" className="flex items-center" title="View Script">
                      <Eye className="h-4 w-4 mr-1" /> View
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center" title="Assign Script">
                      <UserPlus className="h-4 w-4 mr-1" /> Assign
                    </Button>
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