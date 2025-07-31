
import Layout from "@/components/layout/Layout";
import { psychologists } from "@/data/mockData";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Check, Calendar, Video, Clock } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { format } from "date-fns";
import { toast } from "@/components/ui/use-toast";

const PsychologistDetail = () => {
  const { id } = useParams<{ id: string }>();
  const psychologist = psychologists.find((p) => p.id === id);
  
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedConsultationType, setSelectedConsultationType] = useState<string | null>(null);
  
  const availableDates = Array.from(
    new Set(psychologist?.availableSlots.map((slot) => slot.date))
  ).sort();
  
  const availableSlots = psychologist?.availableSlots.filter(
    (slot) => slot.date === selectedDate && slot.available
  );
  
  const handleBookConsultation = () => {
    if (!selectedConsultationType || !selectedSlot) {
      toast({
        title: "Please select all required options",
        description: "You need to select a consultation type and time slot.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Consultation Booked Successfully!",
      description: "Your appointment has been confirmed. Check your email for details.",
    });
  };
  
  if (!psychologist) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Psychologist not found</h1>
          <p className="text-muted-foreground mb-8">
            The psychologist you're looking for doesn't exist or has been removed.
          </p>
          <Button asChild>
            <Link to="/psychologists">Back to Psychologists</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-12">
        <Link to="/psychologists" className="text-sm text-muted-foreground hover:text-foreground flex items-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m15 18-6-6 6-6"/></svg>
          Back to Psychologists
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <div className="w-full md:w-1/3">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={psychologist.avatar} 
                    alt={psychologist.name} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{psychologist.name}</h1>
                  {psychologist.verified && (
                    <Badge variant="secondary" className="bg-psyche-300 text-white hover:bg-psyche-400">
                      Verified
                    </Badge>
                  )}
                </div>
                
                <p className="text-lg text-muted-foreground mb-4">{psychologist.title}</p>
                
                <div className="flex items-center gap-1 mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{psychologist.rating.toFixed(1)}</span>
                  <span className="text-sm text-muted-foreground">({psychologist.reviewCount} reviews)</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {psychologist.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="bg-psyche-50 hover:bg-psyche-100">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {psychologist.bio}
                </p>
                
                <Button asChild size="lg" className="w-full md:w-auto">
                  <a href="#book-consultation">Book Consultation</a>
                </Button>
              </div>
            </div>
            
            <Tabs defaultValue="about">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="education">Education & Experience</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Specializations</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {psychologist.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-psyche-300" />
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Consultation Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {psychologist.consultationTypes.map((consultation) => (
                        <Card key={consultation.id} className="border-psyche-100">
                          <CardHeader>
                            <CardTitle>{consultation.name}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {consultation.duration} minutes
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              {consultation.description}
                            </p>
                          </CardContent>
                          <CardFooter className="flex justify-between">
                            <div className="text-lg font-medium">${consultation.price}</div>
                            <div className="flex items-center text-sm">
                              {consultation.platform === "zoom" && "via Zoom"}
                              {consultation.platform === "google-meet" && "via Google Meet"}
                              {consultation.platform === "skype" && "via Skype"}
                              {consultation.platform === "in-person" && "In-person"}
                            </div>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Education</h2>
                    <ul className="space-y-4">
                      {psychologist.education.map((edu, index) => (
                        <li key={index} className="flex gap-4">
                          <div className="h-10 w-10 rounded-full bg-psyche-100 flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyche-400"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                          </div>
                          <div>
                            <p className="font-medium">{edu}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-semibold mb-3">Professional Experience</h2>
                    <ul className="space-y-4">
                      {psychologist.experience.map((exp, index) => (
                        <li key={index} className="flex gap-4">
                          <div className="h-10 w-10 rounded-full bg-psyche-100 flex items-center justify-center flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-psyche-400"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                          </div>
                          <div>
                            <p className="font-medium">{exp}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <div className="text-center py-8">
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star}
                        className={`h-8 w-8 ${star <= Math.round(psychologist.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-3xl font-bold mb-1">{psychologist.rating.toFixed(1)}/5</p>
                  <p className="text-muted-foreground mb-6">Based on {psychologist.reviewCount} reviews</p>
                  
                  <p className="max-w-md mx-auto">
                    Reviews are currently in development. Check back soon to see what others are saying about {psychologist.name}.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div id="book-consultation" className="lg:col-span-1">
            <div className="sticky top-24 bg-psyche-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Book a Consultation</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">1. Select Consultation Type</h3>
                  <div className="space-y-2">
                    {psychologist.consultationTypes.map((consultation) => (
                      <div
                        key={consultation.id}
                        className={`
                          p-4 rounded-md border cursor-pointer transition-colors
                          ${selectedConsultationType === consultation.id 
                            ? 'border-psyche-300 bg-psyche-100' 
                            : 'border-border hover:border-psyche-200'}
                        `}
                        onClick={() => setSelectedConsultationType(consultation.id)}
                      >
                        <div className="flex justify-between items-center">
                          <div className="font-medium">{consultation.name}</div>
                          <div className="font-medium">${consultation.price}</div>
                        </div>
                        <div className="flex gap-2 items-center text-sm text-muted-foreground mt-1">
                          <Clock className="h-3 w-3" />
                          <span>{consultation.duration} min</span>
                          <span>•</span>
                          <Video className="h-3 w-3" />
                          <span>
                            {consultation.platform === "zoom" && "via Zoom"}
                            {consultation.platform === "google-meet" && "via Google Meet"}
                            {consultation.platform === "skype" && "via Skype"}
                            {consultation.platform === "in-person" && "In-person"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">2. Select Date</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {availableDates?.map((date) => (
                      <div
                        key={date}
                        className={`
                          py-2 px-1 rounded-md border text-center cursor-pointer transition-colors
                          ${selectedDate === date
                            ? 'border-psyche-300 bg-psyche-100' 
                            : 'border-border hover:border-psyche-200'}
                        `}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedSlot(null);
                        }}
                      >
                        <div className="text-xs text-muted-foreground">
                          {format(new Date(date), "EEE")}
                        </div>
                        <div className="font-medium">
                          {format(new Date(date), "MMM d")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedDate && (
                  <div>
                    <h3 className="font-medium mb-3">3. Select Time</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {availableSlots?.map((slot) => (
                        <div
                          key={slot.id}
                          className={`
                            py-3 rounded-md border text-center cursor-pointer transition-colors
                            ${selectedSlot === slot.id
                              ? 'border-psyche-300 bg-psyche-100' 
                              : 'border-border hover:border-psyche-200'}
                          `}
                          onClick={() => setSelectedSlot(slot.id)}
                        >
                          <div className="font-medium">
                            {slot.startTime} - {slot.endTime}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleBookConsultation} 
                  disabled={!selectedConsultationType || !selectedSlot}
                  className="w-full"
                  size="lg"
                >
                  Book Appointment
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  By booking, you agree to our <Link to="/terms" className="underline">Terms of Service</Link> and <Link to="/privacy" className="underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PsychologistDetail;
