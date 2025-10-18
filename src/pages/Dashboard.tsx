import { Card } from "@/components/ui/card";
import { MessageSquare, Users, FileText, Calendar, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Chat with AI",
      description: "Describe your symptoms and get personalized doctor recommendations",
      icon: MessageSquare,
      path: "/chat",
      gradient: "from-primary to-primary/80",
    },
    {
      title: "Discover Doctors in Your Insurance",
      description: "Browse doctors covered by your insurance plan",
      icon: Users,
      path: "/doctors",
      gradient: "from-accent to-accent/80",
    },
    {
      title: "View Test Results",
      description: "Access and understand your medical test results",
      icon: FileText,
      path: "/results",
      gradient: "from-primary/80 to-primary/60",
    },
    {
      title: "My Appointments",
      description: "View and manage your upcoming appointments",
      icon: Calendar,
      path: "/appointments",
      gradient: "from-accent/80 to-accent/60",
    },
    {
      title: "Doctor's Feedback",
      description: "View responses and prescriptions from your doctors",
      icon: MessageCircle,
      path: "/feedback",
      gradient: "from-primary/70 to-primary/50",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Welcome to Your Health Dashboard</h1>
          <p className="text-muted-foreground">Your personalized medical assistant platform</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                onClick={() => navigate(card.path)}
                className="group cursor-pointer bg-gradient-card p-6 shadow-card transition-smooth hover:shadow-elevated"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} shadow-soft`}>
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 text-xl font-semibold text-card-foreground">{card.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
