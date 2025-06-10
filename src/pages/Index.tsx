
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ShoppingCart, Bell, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Welcome to Impact Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover impact-driven NFTs, manage campaigns, and stay updated with notifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Impact Tokens
              </CardTitle>
              <CardDescription>
                Browse and collect impact-driven NFTs that make a difference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/impact-tokens">
                <Button className="w-full">
                  Explore Marketplace
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
              <CardDescription>
                Stay updated with mentions, approvals, and system updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/notifications">
                <Button className="w-full" variant="outline">
                  View Notifications
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Analytics
              </CardTitle>
              <CardDescription>
                Track your impact and engagement metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline" disabled>
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
