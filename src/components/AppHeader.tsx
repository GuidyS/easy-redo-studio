import { Settings, UserCircle } from "lucide-react";

const AppHeader = () => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="font-heading text-xl font-bold text-foreground">
        Sodium Tracking
      </h1>
      <div className="flex items-center gap-3">
        <Settings className="h-6 w-6 text-foreground" />
        <UserCircle className="h-6 w-6 text-foreground" />
      </div>
    </div>
  );
};

export default AppHeader;
