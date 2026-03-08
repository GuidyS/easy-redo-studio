import { Settings, UserCircle } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="flex items-center justify-between rounded-2xl px-5 py-3 mb-4 shadow-md"
      style={{ background: "linear-gradient(135deg, hsl(155 45% 45%), hsl(140 40% 55%))" }}
    >
      <h1 className="text-xl font-extrabold tracking-wide text-white drop-shadow-sm">
        <span className="font-heading">Desalt</span>{" "}
        <span className="font-body italic opacity-90">DeNa</span>
      </h1>
      <div className="flex items-center gap-3">
        <Settings className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
        <UserCircle className="h-5 w-5 text-white/80 hover:text-white transition-colors" />
      </div>
    </div>
  );
};

export default AppHeader;
