import { motion } from "framer-motion";
import { ArrowLeft, Pill, Leaf, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const categories = [
  {
    title: "NSAID",
    description: "ยาแก้ปวดลดอักเสบ เช่น Ibuprofen, Naproxen ที่อาจส่งผลต่อไต",
    icon: Pill,
    items: ["Ibuprofen", "Naproxen", "Diclofenac", "Celecoxib"],
    color: "from-[hsl(255,60%,65%)] to-[hsl(280,60%,60%)]",
  },
  {
    title: "Steroid",
    description: "ยาสเตียรอยด์ที่อาจทำให้ร่างกายกักเก็บโซเดียมมากขึ้น",
    icon: Pill,
    items: ["Prednisolone", "Dexamethasone", "Hydrocortisone"],
    color: "from-[hsl(200,60%,55%)] to-[hsl(220,70%,65%)]",
  },
  {
    title: "สมุนไพร",
    description: "สมุนไพรที่ช่วยลดโซเดียมและบำรุงไต",
    icon: Leaf,
    items: ["หญ้าหวาน", "ขิง", "ขมิ้นชัน", "ใบบัวบก", "กระเจี๊ยบ"],
    color: "from-[hsl(140,50%,50%)] to-[hsl(170,60%,55%)]",
  },
];

const Medicine = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-5"
      >
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/dashboard")} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            ความรู้เกี่ยวกับยา
          </h1>
        </div>

        <div className="space-y-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden shadow-md"
              >
                <div className={`bg-gradient-to-r ${cat.color} p-4`}>
                  <div className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-white" />
                    <h2 className="font-heading text-lg font-bold text-white">{cat.title}</h2>
                  </div>
                  <p className="mt-1 text-xs text-white/80">{cat.description}</p>
                </div>
                <div className="p-4 space-y-2">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl bg-secondary/50 px-4 py-2.5"
                    >
                      <span className="text-sm font-medium text-foreground">{item}</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default Medicine;
