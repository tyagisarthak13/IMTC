import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow bg-card border-border">
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-card-foreground">{title}</CardTitle>
        {icon && <div className="text-primary">{icon}</div>}
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-card-foreground">{value}</p>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
