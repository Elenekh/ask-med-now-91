import { Card } from "@/components/ui/card";
import { MessageSquare, Users, FileText, Calendar, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header Section */}
        <div className="mb-12 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Your Health Hub</span>
          </div>
          <h1 className="mb-3 text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your personalized medical assistant platform
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                onClick={() => navigate(card.path)}
                className="group cursor-pointer bg-gradient-card p-8 shadow-card hover:shadow-glow border border-border/50 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 relative overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} shadow-soft group-hover:shadow-glow transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="p-2 rounded-full bg-background/50 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-gradient-card border border-border/50 shadow-card">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
            <div className="text-center border-x border-border/50">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-sm text-muted-foreground">Specialists</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">Fast</div>
              <div className="text-sm text-muted-foreground">Appointments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
