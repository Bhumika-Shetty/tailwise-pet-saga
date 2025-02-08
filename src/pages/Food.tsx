
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Food = () => {
  const [food, setFood] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [showAlternatives, setShowAlternatives] = useState(false);
  const [alternatives, setAlternatives] = useState<string[]>([]);
  const { toast } = useToast();

  const checkFood = () => {
    // Mock food safety check
    const safeFood = [
      "carrots",
      "apples",
      "chicken",
      "fish",
      "green beans",
      "pumpkin",
    ];
    const dangerousFood = [
      "chocolate",
      "grapes",
      "onions",
      "garlic",
      "avocado",
      "macadamia nuts",
    ];
    
    const foodLower = food.toLowerCase();
    let isSafe = safeFood.includes(foodLower);
    let isDangerous = dangerousFood.includes(foodLower);
    
    if (isDangerous) {
      setResult("❌ This food is dangerous for your pet! Please avoid it.");
      // Set specific alternatives based on dangerous food
      const alternativeMap: { [key: string]: string[] } = {
        chocolate: ["carob treats", "pet-safe chocolate alternatives", "banana treats"],
        grapes: ["blueberries", "apple slices", "watermelon"],
        onions: ["carrots", "sweet potatoes", "green beans"],
        garlic: ["plain chicken", "fish", "turkey"],
        avocado: ["pumpkin", "sweet potato", "banana"],
        "macadamia nuts": ["regular dog treats", "carrots", "apple slices"],
      };
      setAlternatives(alternativeMap[foodLower] || ["carrots", "apples", "pumpkin"]);
    } else if (isSafe) {
      setResult("✅ This food is safe for your pet!");
      setAlternatives([]);
    } else {
      setResult("❓ We recommend consulting with your vet about this food.");
      setAlternatives(["carrots", "apples", "pumpkin", "green beans"]);
    }
    
    toast({
      title: "Food Check Complete",
      description: "We've analyzed the food safety for your pet.",
    });
  };

  const showAlternativeFoods = () => {
    setShowAlternatives(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8 animate-fade-up">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Food Safety Check
              </h1>
              <p className="text-gray-500">
                Let's make sure your pet eats safely
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter a food item..."
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={checkFood} disabled={!food}>
                    Check Food
                  </Button>
                </div>

                {result && (
                  <div
                    className={`p-4 rounded-lg ${
                      result.includes("✅")
                        ? "bg-primary/30"
                        : result.includes("❌")
                        ? "bg-destructive/20"
                        : "bg-secondary/30"
                    }`}
                  >
                    <p className="text-lg">{result}</p>
                    {!result.includes("✅") && (
                      <Button
                        variant="outline"
                        onClick={showAlternativeFoods}
                        className="mt-4"
                      >
                        Show Safe Alternatives
                      </Button>
                    )}
                  </div>
                )}

                {showAlternatives && alternatives.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Safe Alternatives
                    </h3>
                    <div className="grid gap-3">
                      {alternatives.map((alt, index) => (
                        <div
                          key={index}
                          className="bg-secondary/30 p-3 rounded-lg"
                        >
                          {alt}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Food;
