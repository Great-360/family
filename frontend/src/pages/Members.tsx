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

const Members: React.FC = () => {
  const members: Person[] = [
    { id: 1, name: "Mark", birthYear: 1960, image: "/placeholder.jpg", variant: "secondary" },
    { id: 2, name: "Anna", birthYear: 1962, image: "/placeholder.jpg", variant: "secondary" },
    { id: 3, name: "Paul", birthYear: 1990, image: "/placeholder.jpg", variant: "secondary" },
    { id: 4, name: "Sara", birthYear: 1992, image: "/placeholder.jpg", variant: "secondary" },
    { id: 5, name: "Noah", birthYear: 2020, image: "/placeholder.jpg", variant: "secondary" },
    { id: 6, name: "Lily", birthYear: 2022, image: "/placeholder.jpg", variant: "secondary" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 p-10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Family Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <PersonCard key={member.id} name={member.name} birthYear={member.birthYear} image={member.image} variant={member.variant} />
        ))}
      </div>
    </div>
  );
};

export default Members;
