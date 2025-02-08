
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Search, CheckCircle, HandHeart } from "lucide-react";

const Adoption = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate("/services")}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>

            <div className="bg-[#E5DEFF] rounded-xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Pet Adoption Services
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Find your perfect companion and give them a forever home
              </p>
              <Button size="lg">
                <Search className="mr-2 h-5 w-5" />
                Browse Available Pets
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <Heart className="w-8 h-8 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Match Making</h2>
                <p className="text-gray-600">
                  Find the perfect pet for your lifestyle
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <CheckCircle className="w-8 h-8 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Health Checked</h2>
                <p className="text-gray-600">
                  All pets are vaccinated and health-screened
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <HandHeart className="w-8 h-8 mb-4 text-primary" />
                <h2 className="text-xl font-semibold mb-2">Support</h2>
                <p className="text-gray-600">
                  Ongoing assistance after adoption
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Adoption;
