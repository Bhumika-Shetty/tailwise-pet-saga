
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
    // This is a mock function - in a real app, you'd call an API
    const safeFood = [
      "carrots",
      "apples",
      "chicken",
      "fish",
      "green beans",
      "pumpkin",
    ];
    const isSafe = safeFood.includes(food.toLowerCase());
    setResult(
      isSafe
        ? "✅ This food is safe for your pet!"
        : "❌ This food might not be safe for your pet."
    );
    toast({
      title: "Food Check Complete",
      description: "We've analyzed the food safety for your pet.",
    });
  };

  const showAlternativeFoods = () => {
    // Mock alternatives - in a real app, these would come from an API
    setAlternatives([
      "Fresh carrots",
      "Cooked chicken breast",
      "Green beans",
      "Pumpkin puree",
      "Plain yogurt",
    ]);
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
                        : "bg-destructive/20"
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

                {showAlternatives && (
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
