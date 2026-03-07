import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const healthyFoods = [
  { name: "แกงจืดเต้าหู้หมูสับ/ไก่สับ", sodium: 600, benefit: "โปรตีนจากถั่วเหลือง โซเดียมต่ำ" },
  { name: "ผัดผักรวม", sodium: 650, benefit: "อุดมด้วยวิตามินและเส้นใย" },
  { name: "ข้าวต้มหมูสับ", sodium: 500, benefit: "ย่อยง่าย โซเดียมต่ำ" },
  { name: "สลัดโรล", sodium: 700, benefit: "ผักสด วิตามินสูง" },
  { name: "จ๊กไข่ขาว", sodium: 400, benefit: "โปรตีนสูง ไขมันต่ำ" },
  { name: "เกาเหลาเลือดหมู", sodium: 800, benefit: "ธาตุเหล็กสูง" },
  { name: "ปลานึ่งขิง", sodium: 900, benefit: "โปรตีนดี ไขมันต่ำ" },
  { name: "ผัดบวบใส่ไข่", sodium: 600, benefit: "ผักโซเดียมต่ำ" },
  { name: "แกงส้มปลา", sodium: 900, benefit: "โปรตีนจากปลา วิตามินสูง" },
  { name: "วุ้นเส้นผัดไก่", sodium: 700, benefit: "พลังงานต่ำ โปรตีนดี" },
];

const highSodiumFoods = [
  { name: "ข้าวผัดกะเพรา", sodium: 1299, warning: "เครื่องปรุงรสมีโซเดียมสูง" },
  { name: "ข้าวมันไก่", sodium: 1200, warning: "น้ำจิ้มและน้ำซุปมีโซเดียมมาก" },
  { name: "ข้าวผัดไข่ใส่หมู", sodium: 1257, warning: "ซอสปรุงรสมีโซเดียมสูง" },
  { name: "ผัดไทย", sodium: 1100, warning: "น้ำปลาและซอสมีโซเดียมมาก" },
  { name: "ส้มตำไทยปู", sodium: 1200, warning: "น้ำปลาและปูเค็มมีโซเดียมสูง" },
  { name: "ข้าวไข่พะโล้", sodium: 976, warning: "น้ำพะโล้มีซีอิ๊วเยอะ" },
  { name: "ขนมจีน", sodium: 655, warning: "น้ำยามีกะทิและเครื่องปรุงเค็ม" },
  { name: "แกงเขียวหวานไก่", sodium: 870, warning: "พริกแกงและเครื่องปรุงมีโซเดียม" },
  { name: "ข้าวหมกไก่", sodium: 1018, warning: "เครื่องเทศและน้ำซุปมีโซเดียม" },
  { name: "บะหมี่น้ำหมูแดง", sodium: 675, warning: "น้ำซุปมีโซเดียมสูง" },
  { name: "บะหมี่แห้งหมูแดง", sodium: 1777, warning: "ซอสปรุงรสเข้มข้นมาก" },
  { name: "ข้าวหมูแดง", sodium: 909, warning: "น้ำราดหมูแดงมีโซเดียม" },
  { name: "ข้าวหมูกรอบ", sodium: 700, warning: "หมูกรอบผ่านการปรุงรสเค็ม" },
  { name: "สุกี้น้ำ", sodium: 1560, warning: "น้ำจิ้มและซอสมีโซเดียมสูงมาก" },
  { name: "พะแนงหมู", sodium: 1349, warning: "พริกแกงและเครื่องปรุงเข้มข้น" },
];

const FoodRecommend = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"healthy" | "highSodium">("healthy");

  const foods = activeTab === "healthy" ? healthyFoods : highSodiumFoods;

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
            แนะนำรายการอาหาร
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex rounded-2xl bg-secondary p-1">
          <button
            onClick={() => setActiveTab("healthy")}
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all ${
              activeTab === "healthy"
                ? "gradient-btn text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Leaf className="h-4 w-4" />
            อาหารมีประโยชน์
          </button>
          <button
            onClick={() => setActiveTab("highSodium")}
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-all ${
              activeTab === "highSodium"
                ? "gradient-btn text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <AlertTriangle className="h-4 w-4" />
            อาหารโซเดียมสูง
          </button>
        </div>

        {/* Food info cards */}
        <div className="space-y-3">
          {foods.map((food, i) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, x: activeTab === "healthy" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-4 shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-foreground">{food.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {"benefit" in food ? food.benefit : food.warning}
                  </p>
                </div>
                <div className={`rounded-lg px-3 py-1 text-sm font-bold ${
                  activeTab === "healthy"
                    ? "bg-green-500/10 text-green-600"
                    : "bg-red-500/10 text-red-500"
                }`}>
                  {food.sodium.toLocaleString()} mg
                </div>
              </div>
              {/* Progress bar showing sodium level */}
              <div className="mt-3 h-2 rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((food.sodium / 2000) * 100, 100)}%` }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                  className={`h-full rounded-full ${
                    activeTab === "healthy"
                      ? "bg-gradient-to-r from-green-400 to-green-500"
                      : "bg-gradient-to-r from-orange-400 to-red-500"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageLayout>
  );
};

export default FoodRecommend;
