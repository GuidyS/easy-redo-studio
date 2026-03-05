import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from "recharts";
import PageLayout from "@/components/PageLayout";

const monthlyData = [
  { month: "ม.ค.", sodium: 72000 },
  { month: "ก.พ.", sodium: 68000 },
  { month: "มี.ค.", sodium: 75000 },
];

const Stats = () => {
  const avgDaily = Math.round(monthlyData.reduce((s, d) => s + d.sodium, 0) / (monthlyData.length * 30));

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="font-heading text-2xl font-bold text-foreground">
          สถิติรวม
        </h1>

        {/* Summary cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-card rounded-2xl p-4 shadow-md text-center">
            <p className="text-xs text-muted-foreground">เฉลี่ยต่อวัน</p>
            <p className="font-heading text-xl font-bold text-primary">{avgDaily.toLocaleString()} mg</p>
          </div>
          <div className="glass-card rounded-2xl p-4 shadow-md text-center">
            <p className="text-xs text-muted-foreground">เป้าหมาย</p>
            <p className="font-heading text-xl font-bold text-accent">2,000 mg</p>
          </div>
        </div>

        {/* Chart */}
        <div className="glass-card rounded-2xl p-5 shadow-lg">
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4">
            โซเดียมรายเดือน
          </h2>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis hide />
                <Tooltip
                  contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                  formatter={(value: number) => [`${value.toLocaleString()} mg`, "โซเดียม"]}
                />
                <Bar dataKey="sodium" radius={[8, 8, 0, 0]} fill="hsl(170,60%,55%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Stats;
