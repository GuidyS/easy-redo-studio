import { Settings, UserCircle } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-primary/20 px-5 py-3 mb-4">
      <h1 className="font-heading text-lg font-bold text-foreground">
        Desalt DeNa
      </h1>
      <div className="flex items-center gap-3">
        <Settings className="h-5 w-5 text-foreground" />
        <UserCircle className="h-5 w-5 text-foreground" />
      </div>
    </div>
  );
};

export default AppHeader;
