import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, MapPin, Calendar, Award, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";

const mockDoctorDetails = {
  "1": {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    clinic: "Heart & Vascular Center",
    rating: 4.9,
    reviews: 156,
    insurance: ["Blue Cross", "Aetna", "United"],
    yearsExperience: 15,
    certifications: ["Board Certified in Cardiology", "Fellow of the American College of Cardiology", "Advanced Heart Failure Specialist"],
    education: "MD from Harvard Medical School",
    summary: "Dr. Johnson is a leading cardiologist with over 15 years of experience in treating complex cardiovascular conditions. She has published numerous research papers and is known for her compassionate patient care approach.",
    achievements: ["Named Top Doctor in Cardiology 2023", "Research Grant Award from NIH", "1000+ successful cardiac procedures"],
  },
  "2": {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    clinic: "Skin Care Specialists",
    rating: 4.8,
    reviews: 203,
    insurance: ["Aetna", "Cigna", "Kaiser"],
    yearsExperience: 12,
    certifications: ["Board Certified in Dermatology", "Mohs Surgery Specialist", "Cosmetic Dermatology Certification"],
    education: "MD from Stanford University",
    summary: "Dr. Chen specializes in both medical and cosmetic dermatology, with a focus on skin cancer treatment and prevention. His expertise in Mohs surgery has helped hundreds of patients.",
    achievements: ["Published 30+ research papers", "Award for Excellence in Dermatology", "Speaker at International Dermatology Conferences"],
  },
  "3": {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "General Practitioner",
    clinic: "Family Health Clinic",
    rating: 4.7,
    reviews: 184,
    insurance: ["Blue Cross", "United", "Cigna"],
    yearsExperience: 10,
    certifications: ["Board Certified in Family Medicine", "Certified in Lifestyle Medicine", "Advanced Primary Care Certification"],
    education: "MD from UCLA Medical School",
    summary: "Dr. Rodriguez provides comprehensive primary care with a focus on preventive medicine and holistic health. She believes in treating the whole person, not just symptoms.",
    achievements: ["Community Health Award 2022", "Excellence in Patient Care", "Developed innovative wellness programs"],
  },
};

const DoctorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const doctor = id ? mockDoctorDetails[id as keyof typeof mockDoctorDetails] : null;

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Doctor not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          ← Back
        </Button>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gradient-card p-6 shadow-card">
              <div className="mb-6 flex items-start gap-6">
                <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gradient-hero shadow-soft">
                  <Award className="h-12 w-12 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h1 className="mb-2 text-3xl font-bold text-card-foreground">{doctor.name}</h1>
                  <p className="mb-2 text-lg font-medium text-primary">{doctor.specialty}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-card-foreground">{doctor.rating}</span>
                      <span>({doctor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{doctor.clinic}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">About</h2>
                <p className="text-muted-foreground">{doctor.summary}</p>
              </div>

              <div className="mb-6">
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">Education</h2>
                <p className="text-muted-foreground">{doctor.education}</p>
              </div>

              <div className="mb-6">
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">Certifications</h2>
                <ul className="space-y-2">
                  {doctor.certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Award className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-card-foreground">Key Achievements</h2>
                <ul className="space-y-2">
                  {doctor.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <Star className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-card p-6 shadow-card">
              <div className="mb-4 flex items-center gap-3">
                <Building2 className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold text-card-foreground">Experience</h3>
              </div>
              <p className="mb-6 text-2xl font-bold text-primary">{doctor.yearsExperience} Years</p>
              
              <div className="mb-6">
                <h4 className="mb-2 text-sm font-medium text-muted-foreground">Accepts Insurance:</h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.insurance.map((ins) => (
                    <span key={ins} className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                      {ins}
                    </span>
                  ))}
                </div>
              </div>

              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => navigate(`/booking/${doctor.id}`)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Visit
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
