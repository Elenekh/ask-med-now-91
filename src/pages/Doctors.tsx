import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  clinic: string;
  rating: number;
  reviews: number;
  insurance: string[];
}

const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    clinic: "Heart & Vascular Center",
    rating: 4.9,
    reviews: 156,
    insurance: ["Blue Cross", "Aetna", "United"],
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatologist",
    clinic: "Skin Care Specialists",
    rating: 4.8,
    reviews: 203,
    insurance: ["Aetna", "Cigna", "Kaiser"],
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "General Practitioner",
    clinic: "Family Health Clinic",
    rating: 4.7,
    reviews: 184,
    insurance: ["Blue Cross", "United", "Cigna"],
  },
];

const Doctors = () => {
  const [insuranceFilter, setInsuranceFilter] = useState("all");
  const [specialtyFilter, setSpecialtyFilter] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Find Your Doctor</h1>
          <p className="text-muted-foreground">Browse and book appointments with qualified specialists</p>
        </div>

        {/* Filters */}
        <Card className="mb-8 bg-gradient-card p-6 shadow-card">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground">Insurance Provider</label>
              <Select value={insuranceFilter} onValueChange={setInsuranceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Providers" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="all">All Providers</SelectItem>
                  <SelectItem value="blue-cross">Blue Cross</SelectItem>
                  <SelectItem value="aetna">Aetna</SelectItem>
                  <SelectItem value="united">United Healthcare</SelectItem>
                  <SelectItem value="cigna">Cigna</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-card-foreground">Specialty</label>
              <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Specialties" />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="dermatology">Dermatology</SelectItem>
                  <SelectItem value="general">General Practice</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Doctors List */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockDoctors.map((doctor) => (
            <Card key={doctor.id} className="bg-gradient-card p-6 shadow-card transition-smooth hover:shadow-elevated">
              <div className="mb-4">
                <h3 className="mb-1 text-xl font-semibold text-card-foreground">{doctor.name}</h3>
                <p className="text-sm font-medium text-primary">{doctor.specialty}</p>
              </div>

              <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{doctor.clinic}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-card-foreground">{doctor.rating}</span>
                  <span>({doctor.reviews} reviews)</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="mb-2 text-xs font-medium text-muted-foreground">Accepts Insurance:</p>
                <div className="flex flex-wrap gap-2">
                  {doctor.insurance.map((ins) => (
                    <span key={ins} className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">
                      {ins}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="hero" className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
