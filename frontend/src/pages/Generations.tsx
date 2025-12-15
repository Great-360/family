import React from "react";
import PersonCard from "../components/PersonCard";

const Generations: React.FC = () => {
  const generations = [
    {
      generation: "Generation 1",
      members: [
        { id: 1, name: "Mark", birthYear: 1960, image: "/placeholder.jpg", variant: "secondary" as const },
        { id: 2, name: "Anna", birthYear: 1962, image: "/placeholder.jpg", variant: "secondary" as const },
      ],
    },
    {
      generation: "Generation 2",
      members: [
        { id: 3, name: "Paul", birthYear: 1990, image: "/placeholder.jpg", variant: "secondary" as const },
        { id: 4, name: "Sara", birthYear: 1992, image: "/placeholder.jpg", variant: "secondary" as const },
      ],
    },
    {
      generation: "Generation 3",
      members: [
        { id: 5, name: "Noah", birthYear: 2020, image: "/placeholder.jpg", variant: "secondary" as const },
        { id: 6, name: "Lily", birthYear: 2022, image: "/placeholder.jpg", variant: "secondary" as const },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 p-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Generations</h2>
      {generations.map((gen, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">{gen.generation}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gen.members.map((member) => (
              <PersonCard key={member.id} name={member.name} birthYear={member.birthYear} image={member.image} variant={member.variant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Generations;
