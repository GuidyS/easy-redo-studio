import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, UserCircle, Edit3, Save, LogOut, User, Mail, Phone, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "ผู้ใช้ทดสอบ",
    email: "user@example.com",
    phone: "081-234-5678",
    age: "25",
  });
  const [editProfile, setEditProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editProfile);
    setIsEditing(false);
    toast({
      title: "บันทึกสำเร็จ",
      description: "ข้อมูลส่วนตัวของคุณได้รับการอัปเดตแล้ว",
    });
  };

  const handleLogout = () => {
    toast({
      title: "ออกจากระบบ",
      description: "คุณได้ออกจากระบบเรียบร้อยแล้ว",
    });
    navigate("/");
  };

  const fields = [
    { key: "name" as const, label: "ชื่อ-นามสกุล", icon: User, type: "text" },
    { key: "email" as const, label: "อีเมล", icon: Mail, type: "email" },
    { key: "phone" as const, label: "เบอร์โทรศัพท์", icon: Phone, type: "tel" },
    { key: "age" as const, label: "อายุ", icon: Calendar, type: "number" },
  ];

  return (
    <PageLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/dashboard")} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            โปรไฟล์
          </h1>
        </div>

        {/* Avatar section */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 shadow-lg">
            <UserCircle className="h-16 w-16 text-primary" />
          </div>
          <p className="font-heading text-lg font-bold text-foreground">{profile.name}</p>
          <p className="text-sm text-muted-foreground">{profile.email}</p>
        </motion.div>

        {/* Profile fields */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-5 shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-base font-semibold text-foreground">
              ข้อมูลส่วนตัว
            </h2>
            {!isEditing ? (
              <button
                onClick={() => {
                  setEditProfile(profile);
                  setIsEditing(true);
                }}
                className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/10 transition-colors"
              >
                <Edit3 className="h-3.5 w-3.5" />
                แก้ไข
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="flex items-center gap-1.5 rounded-xl gradient-btn px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-md"
              >
                <Save className="h-3.5 w-3.5" />
                บันทึก
              </button>
            )}
          </div>

          <div className="space-y-4">
            {fields.map((field, i) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <label className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-1.5">
                  <field.icon className="h-3.5 w-3.5" />
                  {field.label}
                </label>
                {isEditing ? (
                  <input
                    type={field.type}
                    value={editProfile[field.key]}
                    onChange={(e) =>
                      setEditProfile({ ...editProfile, [field.key]: e.target.value })
                    }
                    className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                ) : (
                  <p className="rounded-xl bg-secondary/30 px-4 py-2.5 text-sm font-medium text-foreground">
                    {profile[field.key]}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logout button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 py-3.5 text-sm font-semibold text-destructive hover:bg-destructive/20 transition-all"
        >
          <LogOut className="h-4 w-4" />
          ออกจากระบบ
        </motion.button>
      </motion.div>
    </PageLayout>
  );
};

export default Profile;
