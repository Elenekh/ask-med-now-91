import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import { FileText, ArrowLeft, Calendar } from "lucide-react";
import { resultsService, TestResult } from "@/services/results";
import { useToast } from "@/hooks/use-toast";

const DoctorFeedback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [results, setResults] = useState<TestResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    try {
      const data = await resultsService.getPatientResults();
      setResults(data);
    } catch (error: any) {
      toast({
        title: "Error loading results",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Doctor's Feedback</h1>
          <p className="text-muted-foreground">View responses from your doctors</p>
        </div>

        {isLoading ? (
          <div className="text-center text-muted-foreground">Loading feedback...</div>
        ) : results.filter(r => r.doctorResponse).length === 0 ? (
          <Card className="border-border bg-card p-12 text-center">
            <FileText className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-lg text-muted-foreground">No doctor responses yet</p>
          </Card>
        ) : (
          <div className="grid gap-6">
            {results
              .filter(result => result.doctorResponse)
              .map((result) => (
                <Card key={result.id} className="border-border bg-card p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-card-foreground">
                        {result.fileName}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Response received on {new Date(result.doctorResponse!.respondedAt).toLocaleDateString()}
                      </p>
                    </div>
                    {result.doctorResponse?.requestAppointment && (
                      <Badge variant="default">Appointment Requested</Badge>
                    )}
                  </div>

                  {result.doctorResponse?.notes && (
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium text-card-foreground">Doctor's Notes</h4>
                      <div className="rounded-lg bg-muted/50 p-4">
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                          {result.doctorResponse.notes}
                        </p>
                      </div>
                    </div>
                  )}

                  {result.doctorResponse?.prescription && (
                    <div className="mb-4">
                      <h4 className="mb-2 font-medium text-card-foreground">Prescription</h4>
                      <div className="rounded-lg bg-muted/50 p-4">
                        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                          {result.doctorResponse.prescription}
                        </p>
                      </div>
                    </div>
                  )}

                  {result.doctorResponse?.requestAppointment && (
                    <Button
                      onClick={() => navigate("/doctors")}
                      className="w-full"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book an Appointment
                    </Button>
                  )}
                </Card>
              ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorFeedback;
