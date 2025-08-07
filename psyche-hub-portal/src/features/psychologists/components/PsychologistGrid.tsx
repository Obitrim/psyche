
import { Psychologist } from "@/core/types";
import PsychologistCard from "./PsychologistCard";

interface PsychologistGridProps {
  psychologists: Psychologist[];
  title?: string;
}

const PsychologistGrid = ({ psychologists, title }: PsychologistGridProps) => {
  return (
    <div className="my-12">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="h-1 w-20 bg-psyche-300 rounded-full"></div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {psychologists.map((psychologist) => (
          <PsychologistCard key={psychologist.id} psychologist={psychologist} />
        ))}
      </div>
    </div>
  );
};

export default PsychologistGrid;
