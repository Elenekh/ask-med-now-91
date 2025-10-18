import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Activity, Info, Send, Bot, User, Download } from "lucide-react";
import Navbar from "@/components/Navbar";

interface TestResult {
  id: string;
  testName: string;
  date: string;
  value: string;
  normalRange: string;
  status: "normal" | "high" | "low";
  aiExplanation: string;
}

const mockResults: TestResult[] = [
  {
    id: "1",
    testName: "Cholesterol (Total)",
    date: "2024-01-15",
    value: "185 mg/dL",
    normalRange: "< 200 mg/dL",
    status: "normal",
    aiExplanation: "Your total cholesterol level is within the healthy range. This indicates good cardiovascular health. Continue maintaining a balanced diet and regular exercise.",
  },
  {
    id: "2",
    testName: "Blood Glucose (Fasting)",
    date: "2024-01-15",
    value: "92 mg/dL",
    normalRange: "70-100 mg/dL",
    status: "normal",
    aiExplanation: "Your fasting blood glucose is normal, showing good blood sugar control. Keep up with healthy eating habits and regular physical activity.",
  },
  {
    id: "3",
    testName: "Hemoglobin A1C",
    date: "2024-01-15",
    value: "5.4%",
    normalRange: "< 5.7%",
    status: "normal",
    aiExplanation: "This measures your average blood sugar over the past 2-3 months. Your result is excellent and indicates no diabetes risk.",
  },
];

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const Results = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "assistant",
      content: "I'm here to help you understand your test results. Feel free to ask any questions!",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-success";
      case "high":
        return "text-destructive";
      case "low":
        return "text-yellow-600";
      default:
        return "text-muted-foreground";
    }
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: chatInput,
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Based on your test results, everything appears to be within normal ranges. However, I recommend discussing any concerns with your doctor during your next visit.",
      };
      setChatMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Test Results</h1>
          <p className="text-muted-foreground">View and understand your medical test results with AI-powered explanations</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-card-foreground">Your Test Results PDF</h2>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
              <div className="aspect-[8.5/11] rounded-lg border border-border bg-muted/50 p-8">
                <p className="text-center text-sm text-muted-foreground">
                  PDF preview would appear here. In a real application, this would display the actual test results document.
                </p>
              </div>
            </Card>

            {mockResults.map((result) => (
              <Card key={result.id} className="bg-gradient-card p-6 shadow-card">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-hero shadow-soft">
                      <Activity className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-card-foreground">{result.testName}</h3>
                      <p className="text-sm text-muted-foreground">Tested on {new Date(result.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>

                <div className="mb-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="mb-1 text-xs text-muted-foreground">Your Result</p>
                    <p className={`text-lg font-semibold ${getStatusColor(result.status)}`}>{result.value}</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="mb-1 text-xs text-muted-foreground">Normal Range</p>
                    <p className="text-lg font-semibold text-card-foreground">{result.normalRange}</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="mb-1 text-xs text-muted-foreground">Status</p>
                    <p className={`text-lg font-semibold capitalize ${getStatusColor(result.status)}`}>{result.status}</p>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-accent/30 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4 text-primary" />
                    <h4 className="font-medium text-card-foreground">AI Explanation</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{result.aiExplanation}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4 bg-gradient-card p-6 shadow-card">
              <h3 className="mb-4 text-lg font-semibold text-card-foreground">Ask Questions</h3>
              
              <div className="mb-4 h-96 space-y-4 overflow-y-auto rounded-lg bg-muted/30 p-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero shadow-soft">
                        <Bot className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-card-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted shadow-soft">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Ask about your results..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} variant="hero" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
