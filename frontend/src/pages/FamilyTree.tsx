import React from "react";
import PersonCard from "../components/PersonCard";

interface Person {
  id: number;
  name: string;
  birthYear: number;
  image: string;
  variant?: "primary" | "secondary";
  badge?: string;
}

const HorizontalConnector: React.FC = () => (
  <div className="flex-1 h-px bg-gray-400 dark:bg-gray-500" />
);

const VerticalConnector: React.FC = () => (
  <div className="flex flex-col items-center">
    <div className="flex items-center w-full">
      <HorizontalConnector />
      <div className="w-px h-12 bg-gray-400 dark:bg-gray-500" />
      <HorizontalConnector />
    </div>
    <div className="w-0 h-0 border-l-3 border-r-3 border-t-3 border-transparent border-b-3 border-b-gray-400 dark:border-b-gray-500" />
  </div>
);

const FamilyTree: React.FC = () => {
  const father: Person = { id: 1, name: "Mark", birthYear: 1960, image: "/placeholder.jpg", variant: "secondary" };
  const mother: Person = { id: 2, name: "Anna", birthYear: 1962, image: "/placeholder.jpg", variant: "secondary" };

  const child1: Person = { id: 3, name: "Paul", birthYear: 1990, image: "/placeholder.jpg", variant: "secondary" };
  const child2: Person = { id: 4, name: "Sara", birthYear: 1992, image: "/placeholder.jpg", variant: "secondary" };

  const grandChild1: Person = { id: 5, name: "Noah", birthYear: 2020, image: "/placeholder.jpg", variant: "secondary" };
  const grandChild2: Person = { id: 6, name: "Lily", birthYear: 2022, image: "/placeholder.jpg", variant: "secondary" };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 flex justify-center p-10">
      <div className="flex flex-col items-center">
        {/* Parents */}
        <div className="flex gap-20">
          <PersonCard name={father.name} birthYear={father.birthYear} image={father.image} variant={father.variant} />
          <PersonCard name={mother.name} birthYear={mother.birthYear} image={mother.image} variant={mother.variant} />
        </div>

        <VerticalConnector />

        {/* Children */}
        <div className="flex gap-32">
          <div className="flex flex-col items-center">
            <PersonCard name={child1.name} birthYear={child1.birthYear} image={child1.image} variant={child1.variant} />
            <VerticalConnector />
            <PersonCard name={grandChild1.name} birthYear={grandChild1.birthYear} image={grandChild1.image} variant={grandChild1.variant} />
          </div>

          <div className="flex flex-col items-center">
            <PersonCard name={child2.name} birthYear={child2.birthYear} image={child2.image} variant={child2.variant} />
            <VerticalConnector />
            <PersonCard name={grandChild2.name} birthYear={grandChild2.birthYear} image={grandChild2.image} variant={grandChild2.variant} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;
