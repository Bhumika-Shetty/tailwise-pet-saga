
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Plus, AlertTriangle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const PetDetails = ({ pet }: { pet: any }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6 hover:shadow-md transition-shadow animate-fade-up">
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <img
          src={pet.photo}
          alt={pet.name}
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{pet.name}</h2>
          <p className="text-gray-500">{pet.age} old</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-secondary/30 rounded-xl p-4 hover:bg-secondary/40 transition-colors">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Age</h3>
            <p className="text-lg font-semibold text-gray-800">{pet.age}</p>
          </div>
          
          <div className="bg-primary/30 rounded-xl p-4 hover:bg-primary/40 transition-colors">
            <h3 className="text-sm font-medium text-gray-500 mb-1">Happiness</h3>
            <p className="text-lg font-semibold text-gray-800">{pet.happinessIndex}%</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Vaccination History</h3>
          <div className="space-y-3">
            {pet.vaccinations.map((vac: any) => (
              <div
                key={vac.name}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium text-gray-700">{vac.name}</span>
                <span className="text-sm text-gray-500">{vac.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const { toast } = useToast();
  const [pets] = useState([
    {
      name: "Luna",
      age: "2 years",
      photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vaccinations: [
        { name: "Rabies", date: "2023-08-15" },
        { name: "FVRCP", date: "2023-09-01" },
      ],
      happinessIndex: 95,
      upcomingVaccination: { name: "FVRCP Booster", date: "2024-09-01" }
    },
    {
      name: "Max",
      age: "1 year",
      photo: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      vaccinations: [
        { name: "Rabies", date: "2023-12-15" },
        { name: "DHPP", date: "2024-01-01" },
      ],
      happinessIndex: 90,
      upcomingVaccination: { name: "Rabies Booster", date: "2024-12-15" }
    }
  ]);

  // Show vaccination reminder on component mount
  useState(() => {
    pets.forEach(pet => {
      if (pet.upcomingVaccination) {
        toast({
          title: `Upcoming Vaccination for ${pet.name}`,
          description: `${pet.upcomingVaccination.name} due on ${pet.upcomingVaccination.date}`,
          variant: "default",
        });
      }
    });
  });

  const handleAddPet = () => {
    toast({
      title: "Add New Pet",
      description: "Feature coming soon! You'll be able to add your pets here.",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800">My Pets</h1>
              <Button onClick={handleAddPet} className="gap-2">
                <Plus className="w-4 h-4" />
                Add Pet
              </Button>
            </div>

            <div className="space-y-6">
              {pets.map((pet) => (
                <PetDetails key={pet.name} pet={pet} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
