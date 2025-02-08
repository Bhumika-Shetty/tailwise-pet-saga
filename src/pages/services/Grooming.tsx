
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Grooming = () => {
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

            <div className="bg-[#F2FCE2] rounded-xl p-8 mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Professional Pet Grooming
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                Pamper your pet with our expert grooming services
              </p>
              <Button size="lg">
                Schedule Appointment
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Bath & Brush</h2>
                <p className="text-gray-600">
                  Thorough cleaning and brushing for a fresh, clean pet
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Hair Trimming</h2>
                <p className="text-gray-600">
                  Professional cuts tailored to your pet's breed
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-2">Nail Care</h2>
                <p className="text-gray-600">
                  Gentle nail trimming and paw care services
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Grooming;
