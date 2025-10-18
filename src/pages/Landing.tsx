import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users, Calendar, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";

const Landing = () => {

  const features = [
    {
      icon: MessageSquare,
      title: "AI-Powered Chat",
      description: "Describe your symptoms and get instant recommendations on which specialist to visit.",
    },
    {
      icon: Users,
      title: "Find Specialists",
      description: "Connect with qualified doctors based on your symptoms and insurance coverage.",
    },
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Schedule appointments and pay in advance for a seamless healthcare experience.",
    },
    {
      icon: FileText,
      title: "Smart Results",
      description: "Get AI-powered explanations of your test results in simple, understandable terms.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-6xl">
            Find the Right Doctor,
            <span className="bg-gradient-hero bg-clip-text text-transparent"> Faster</span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Our AI-powered platform helps you identify which specialist you need based on your symptoms,
            then connects you with qualified doctors covered by your insurance.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/register">
              <Button variant="hero" size="xl">
                Sign Up Free
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="xl">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            How It Works
          </h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gradient-card p-6 shadow-card transition-smooth hover:shadow-elevated">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Ready to Take Control of Your Health?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of users who trust Med-AI to find the right care.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/register">
              <Button variant="hero" size="xl">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="xl">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
