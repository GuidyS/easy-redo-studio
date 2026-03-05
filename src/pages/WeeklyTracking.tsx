import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const weeklyData = [
  { date: "02", month: "MAR", sodium: 3600 },
  { date: "03", month: "MAR", sodium: 3600 },
  { date: "04", month: "MAR", sodium: 3600 },
  { date: "05", month: "MAR", sodium: 3600 },
  { date: "06", month: "MAR", sodium: 3600 },
  { date: "07", month: "MAR", sodium: 3600 },
  { date: "08", month: "MAR", sodium: 3600 },
];

const WeeklyTracking = () => {
  const totalWeekly = weeklyData.reduce((sum, d) => sum + d.sodium, 0);

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="font-heading text-2xl font-bold text-foreground">
          ปริมาณโซเดียมที่รับประทานสัปดาห์นี้
        </h1>

        <div className="grid grid-cols-2 gap-3">
          {weeklyData.map((day, i) => (
            <motion.div
              key={day.date}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card flex items-center gap-3 rounded-2xl p-4 shadow-md"
            >
              <div className="flex h-12 w-12 flex-col items-center justify-center rounded-xl bg-secondary">
                <span className="text-[10px] font-bold text-primary">{day.month}</span>
                <span className="font-heading text-lg font-bold text-foreground">{day.date}</span>
              </div>
              <p className="font-heading font-bold text-foreground">
                {day.sodium.toLocaleString()} mg
              </p>
            </motion.div>
          ))}

          {/* Total card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="gradient-btn flex flex-col items-center justify-center rounded-2xl p-4 shadow-lg"
          >
            <p className="text-xs text-primary-foreground/80">รวม</p>
            <p className="font-heading text-lg font-bold text-primary-foreground">
              {totalWeekly.toLocaleString()} mg
            </p>
          </motion.div>
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default WeeklyTracking;
