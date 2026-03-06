import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Droplets, Heart, Shield, Activity } from "lucide-react";

const logos = [
  { icon: Droplets, label: "Sodium Tracking", color: "from-primary to-accent" },
  { icon: Heart, label: "สุขภาพดี", color: "from-pink-400 to-rose-500" },
  { icon: Shield, label: "ปลอดภัย", color: "from-emerald-400 to-teal-500" },
  { icon: Activity, label: "ติดตามผล", color: "from-amber-400 to-orange-500" },
];

const Splash = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(() => navigate("/dashboard"), 600);
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          {/* Decorative blobs */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden">
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          </div>

          {/* Logo grid */}
          <div className="relative grid grid-cols-2 gap-6 mb-10">
            {logos.map((logo, i) => {
              const Icon = logo.icon;
              return (
                <motion.div
                  key={logo.label}
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2 + i * 0.15,
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${logo.color} shadow-lg`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {logo.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* App title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-3xl font-bold text-foreground">
              Sodium Tracking
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              ติดตามปริมาณโซเดียมของคุณอย่างง่ายดาย
            </p>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-10 flex gap-2"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="h-2.5 w-2.5 rounded-full bg-primary"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Splash;
