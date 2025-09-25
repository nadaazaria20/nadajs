import { ReactNode } from "react";

interface SkillItemProps {
  name: string;
  icon: ReactNode;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition transform hover:scale-150">
      {icon}
      <p className="mt-3 font-semibold">{name}</p>
    </div>
  );
};

export default SkillItem;
