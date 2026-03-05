import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const todayFoods = [
  { name: "ผัดไทย", sodium: 1000, emoji: "🍜" },
  { name: "ต้มยำกุ้ง", sodium: 1200, emoji: "🍲" },
  { name: "แกงเขียวหวาน", sodium: 1400, emoji: "🥘" },
];

const DailyTracking = () => {
  const totalSodium = todayFoods.reduce((sum, f) => sum + f.sodium, 0);
  const limit = 2000;

  const getStatus = () => {
    if (totalSodium <= limit) return { label: "ดีมาก", color: "text-green-500", bg: "bg-green-500/10", icon: CheckCircle2 };
    if (totalSodium <= limit * 1.5) return { label: "ระวัง", color: "text-yellow-500", bg: "bg-yellow-500/10", icon: AlertTriangle };
    return { label: "เกินแล้ว!", color: "text-red-500", bg: "bg-red-500/10", icon: XCircle };
  };

  const status = getStatus();
  const StatusIcon = status.icon;

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="font-heading text-2xl font-bold text-foreground">
          อาหารที่รับประทานวันนี้
        </h1>

        {/* Status badge */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className={`flex items-center gap-3 rounded-2xl ${status.bg} p-4`}
        >
          <StatusIcon className={`h-8 w-8 ${status.color}`} />
          <div>
            <p className={`font-heading text-lg font-bold ${status.color}`}>{status.label}</p>
            <p className="text-xs text-muted-foreground">เป้าหมาย: {limit.toLocaleString()} mg/วัน</p>
          </div>
        </motion.div>

        {/* Food list */}
        <div className="space-y-3">
          {todayFoods.map((food, i) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card flex items-center gap-4 rounded-2xl p-4 shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-2xl">
                {food.emoji}
              </div>
              <div className="flex-1">
                <p className="font-heading font-semibold text-foreground">{food.name}</p>
              </div>
              <p className="font-heading font-bold text-primary">
                {food.sodium.toLocaleString()} mg
              </p>
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="gradient-btn rounded-2xl p-4 text-center shadow-lg"
        >
          <p className="text-sm text-primary-foreground/80">รวมทั้งสิ้น</p>
          <p className="font-heading text-2xl font-bold text-primary-foreground">
            {totalSodium.toLocaleString()} mg
          </p>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default DailyTracking;
