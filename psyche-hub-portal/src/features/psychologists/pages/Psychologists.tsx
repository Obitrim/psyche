
import Layout from "@/core/components/layout/Layout";
import { psychologists } from "@/core/data/mockData";
import PsychologistGrid from "@/features/psychologists/components/PsychologistGrid";
import { Input } from "@/core/components/ui/input";
import { Button } from "@/core/components/ui/button";
import { useState } from "react";
import { Badge } from "@/core/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/core/components/ui/select";
import { Slider } from "@/core/components/ui/slider";

// Extract all unique specialties from psychologists
const allSpecialties = Array.from(
  new Set(psychologists.flatMap(p => p.specialties))
).sort();

const Psychologists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState("rating");
  
  const toggleSpecialty = (specialty: string) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };
  
  const minPrice = 0;
  const maxPrice = 300;
  
  const filteredPsychologists = psychologists
    .filter(psychologist => {
      // Filter by search query
      const matchesSearch = searchQuery === "" || 
        psychologist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        psychologist.bio.toLowerCase().includes(searchQuery.toLowerCase());
        
      // Filter by selected specialties
      const matchesSpecialties = selectedSpecialties.length === 0 || 
        selectedSpecialties.some(specialty => psychologist.specialties.includes(specialty));
        
      // Filter by price range
      const lowestPrice = Math.min(...psychologist.consultationTypes.map(c => c.price));
      const matchesPrice = lowestPrice >= priceRange[0] && lowestPrice <= priceRange[1];
        
      return matchesSearch && matchesSpecialties && matchesPrice;
    })
    .sort((a, b) => {
      // Sort by selected criteria
      if (sortBy === "rating") {
        return b.rating - a.rating;
      } else if (sortBy === "price-low") {
        const aPrice = Math.min(...a.consultationTypes.map(c => c.price));
        const bPrice = Math.min(...b.consultationTypes.map(c => c.price));
        return aPrice - bPrice;
      } else if (sortBy === "price-high") {
        const aPrice = Math.min(...a.consultationTypes.map(c => c.price));
        const bPrice = Math.min(...b.consultationTypes.map(c => c.price));
        return bPrice - aPrice;
      }
      return 0;
    });

  return (
    <Layout>
      <div className="bg-gradient-to-b from-psyche-50 to-background py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Find a Psychologist</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Connect with verified mental health professionals for virtual consultations
            </p>
            
            <div className="flex gap-2">
              <Input 
                placeholder="Search by name, specialty, or keywords..." 
                className="max-w-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="default">Search</Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Sort By</h3>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[minPrice, maxPrice]}
                    min={minPrice}
                    max={maxPrice}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <div>${priceRange[0]}</div>
                  <div>${priceRange[1]}</div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {allSpecialties.map(specialty => (
                    <Badge 
                      key={specialty} 
                      variant={selectedSpecialties.includes(specialty) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => toggleSpecialty(specialty)}
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 order-1 lg:order-2">
            <PsychologistGrid psychologists={filteredPsychologists} />
            
            {filteredPsychologists.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No psychologists found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Psychologists;
