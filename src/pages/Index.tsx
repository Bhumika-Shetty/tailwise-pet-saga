
import { Sidebar } from "@/components/Sidebar";

const PetDetails = () => {
  const petInfo = {
    name: "Luna",
    age: "2 years",
    photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    vaccinations: [
      { name: "Rabies", date: "2023-08-15" },
      { name: "FVRCP", date: "2023-09-01" },
    ],
    happinessIndex: 95,
  };

  return (
    <div className="p-8 animate-fade-up">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{petInfo.name}'s Profile</h1>
          <p className="text-gray-500">Your furry companion's details at a glance</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <img
              src={petInfo.photo}
              alt={petInfo.name}
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary/30 rounded-xl p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Age</h3>
                <p className="text-lg font-semibold text-gray-800">{petInfo.age}</p>
              </div>
              
              <div className="bg-primary/30 rounded-xl p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-1">Happiness</h3>
                <p className="text-lg font-semibold text-gray-800">{petInfo.happinessIndex}%</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Vaccination History</h3>
              <div className="space-y-3">
                {petInfo.vaccinations.map((vac) => (
                  <div
                    key={vac.name}
                    className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
                  >
                    <span className="font-medium text-gray-700">{vac.name}</span>
                    <span className="text-sm text-gray-500">{vac.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <PetDetails />
      </main>
    </div>
  );
};

export default Index;
