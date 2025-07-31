import { Psychologist } from "@/types";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface PsychologistCardProps {
  psychologist: Psychologist;
}

const PsychologistCard = ({ psychologist }: PsychologistCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      {/* <Link to={`/psychologists/${psychologist.id}`}> */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={psychologist.avatar}
          alt={psychologist.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {psychologist.verified && (
          <div className="absolute top-2 right-2">
            <Badge
              variant="secondary"
              className="bg-psyche-300 text-white hover:bg-psyche-400">
              Verified
            </Badge>
          </div>
        )}
      </div>
      {/* </Link> */}

      <CardHeader className="pb-2">
        <Link to={`/psychologists/${psychologist.id}`}>
          <h3 className="font-semibold text-lg hover:text-psyche-300 transition-colors">
            {psychologist.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground">{psychologist.title}</p>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-2 mb-3">
          {psychologist.specialties.slice(0, 3).map((specialty, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-psyche-50 hover:bg-psyche-100">
              {specialty}
            </Badge>
          ))}
          {psychologist.specialties.length > 3 && (
            <Badge variant="outline">
              +{psychologist.specialties.length - 3}
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground line-clamp-3">{psychologist.bio}</p>
      </CardContent>

      <CardFooter className="pt-0 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
          <span className="font-medium">{psychologist.rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">
            ({psychologist.reviewCount} reviews)
          </span>
        </div>
        <div className="text-sm font-medium text-psyche-300">
          from $
          {Math.min(...psychologist.consultationTypes.map((c) => c.price))}
          /session
        </div>
      </CardFooter>
    </Card>
  );
};

export default PsychologistCard;
