import { Card } from "@/components/ui/card";
import { FileText, Activity, Info } from "lucide-react";
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

const Results = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Test Results</h1>
          <p className="text-muted-foreground">View and understand your medical test results with AI-powered explanations</p>
        </div>

        <div className="space-y-6">
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
      </div>
    </div>
  );
};

export default Results;
