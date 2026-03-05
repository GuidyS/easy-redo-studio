import { motion } from "framer-motion";
import { UtensilsCrossed, BookOpen, Pill, Star, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const chartData = [
  { day: "จ.", sodium: 2100 },
  { day: "อ.", sodium: 3200 },
  { day: "พ.", sodium: 1800 },
  { day: "พฤ.", sodium: 2900 },
  { day: "ศ.", sodium: 3600 },
  { day: "ส.", sodium: 2400 },
  { day: "อา.", sodium: 1900 },
];

const features = [
  {
    icon: UtensilsCrossed,
    label: "กรอกข้อมูลอาหาร",
    path: "/food-log",
    gradient: "from-[hsl(170,60%,55%)] to-[hsl(200,60%,60%)]",
  },
  {
    icon: BookOpen,
    label: "แนะนำรายการอาหาร",
    path: "/food-recommend",
    gradient: "from-[hsl(220,70%,65%)] to-[hsl(255,60%,70%)]",
  },
  {
    icon: Pill,
    label: "ความรู้เกี่ยวกับยา",
    path: "/medicine",
    gradient: "from-[hsl(170,50%,50%)] to-[hsl(190,60%,60%)]",
  },
  {
    icon: Star,
    label: "คะแนนสะสม",
    path: "/points",
    gradient: "from-[hsl(40,80%,60%)] to-[hsl(30,90%,55%)]",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Header */}
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Sodium Tracking
          </h1>
          <p className="text-sm text-muted-foreground">ยินดีต้อนรับกลับ 👋</p>
        </div>

        {/* Graph Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-5 shadow-lg"
        >
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-lg font-semibold text-foreground">
              ปริมาณโซเดียม
            </h2>
          </div>
          <p className="mb-4 text-xs text-muted-foreground">รายสัปดาห์ (mg)</p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="sodiumGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(170,60%,55%)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="hsl(220,70%,70%)" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                  formatter={(value: number) => [`${value.toLocaleString()} mg`, "โซเดียม"]}
                />
                <Area
                  type="monotone"
                  dataKey="sodium"
                  stroke="hsl(170,60%,55%)"
                  strokeWidth={2.5}
                  fill="url(#sodiumGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.button
                key={feature.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(feature.path)}
                className={`glass-card flex flex-col items-center gap-3 rounded-2xl p-6 shadow-md transition-shadow hover:shadow-lg`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-md`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <span className="font-heading text-sm font-semibold text-foreground">
                  {feature.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Dashboard;
