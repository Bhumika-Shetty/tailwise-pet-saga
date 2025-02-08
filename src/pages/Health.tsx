
import { Sidebar } from "@/components/Sidebar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Health = () => {
  const healthData = {
    steps: 8420,
    heartRate: 85,
    hydration: 75,
    sleepHours: 12,
    mealsPortion: 90,
    activityLevel: 85,
  };

  const weeklyData = [
    { day: "Mon", steps: 7500, heartRate: 82, hydration: 70 },
    { day: "Tue", steps: 8200, heartRate: 85, hydration: 75 },
    { day: "Wed", steps: 7800, heartRate: 83, hydration: 72 },
    { day: "Thu", steps: 8420, heartRate: 85, hydration: 75 },
    { day: "Fri", steps: 7900, heartRate: 84, hydration: 73 },
    { day: "Sat", steps: 8100, heartRate: 86, hydration: 74 },
    { day: "Sun", steps: 8300, heartRate: 85, hydration: 76 },
  ];

  const calculateOverallHealth = () => {
    const values = Object.values(healthData);
    const average = values.reduce((a, b) => a + b) / values.length;
    return Math.round(average);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="p-8 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Health Monitor
              </h1>
              <p className="text-gray-500">Track your pet's vital statistics</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-primary/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Steps</h3>
                <p className="text-2xl font-semibold">{healthData.steps}</p>
              </div>
              
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Heart Rate
                </h3>
                <p className="text-2xl font-semibold">{healthData.heartRate} bpm</p>
              </div>
              
              <div className="bg-accent/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Hydration
                </h3>
                <p className="text-2xl font-semibold">{healthData.hydration}%</p>
              </div>
              
              <div className="bg-primary/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Sleep Duration
                </h3>
                <p className="text-2xl font-semibold">{healthData.sleepHours}h</p>
              </div>
              
              <div className="bg-secondary/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Meals Portion
                </h3>
                <p className="text-2xl font-semibold">{healthData.mealsPortion}%</p>
              </div>
              
              <div className="bg-accent/30 rounded-xl p-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  Activity Level
                </h3>
                <p className="text-2xl font-semibold">
                  {healthData.activityLevel}%
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Weekly Trends</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="steps"
                      stroke="#9EC5FE"
                      name="Steps"
                    />
                    <Line
                      type="monotone"
                      dataKey="heartRate"
                      stroke="#F1A7A7"
                      name="Heart Rate"
                    />
                    <Line
                      type="monotone"
                      dataKey="hydration"
                      stroke="#A7F1E4"
                      name="Hydration"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Overall Health Score</h3>
              <p className="text-4xl font-bold">{calculateOverallHealth()}%</p>
              <p className="text-gray-600 mt-2">
                Your pet is doing great! Keep up the good work.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Health;
