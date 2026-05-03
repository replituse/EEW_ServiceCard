import { motion } from "framer-motion";
import {
  FileText, Layers, Zap, GitBranch, Cpu, LayoutGrid,
  BarChart2, ClipboardList, Shield, Settings, Activity,
  Thermometer, Wind, Radio, TrendingUp, Phone
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText, Layers, Zap, GitBranch, Cpu, LayoutGrid,
  BarChart2, ClipboardList, Shield, Settings, Activity,
  Thermometer, Wind, Radio, TrendingUp,
};

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
}

interface Props {
  service: Service;
  view: "grid" | "list";
}

const PHONE_RAW = "917767062794";

export default function ServiceCard({ service, view }: Props) {
  const Icon = iconMap[service.icon] ?? Zap;
  const isExpertise = service.category === "Expertise";
  const badgeBg = isExpertise ? "bg-sky-100 text-sky-700" : "bg-indigo-100 text-indigo-700";
  const iconBg = isExpertise
    ? "bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white"
    : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white";
  const borderHover = isExpertise
    ? "hover:border-sky-400 hover:shadow-sky-100"
    : "hover:border-indigo-400 hover:shadow-indigo-100";
  const accentLine = isExpertise
    ? "bg-sky-100 group-hover:bg-sky-400"
    : "bg-indigo-100 group-hover:bg-indigo-400";

  if (view === "list") {
    return (
      <motion.div
        whileHover={{ x: 3 }}
        transition={{ duration: 0.18 }}
        className={`group flex items-center gap-3 bg-white rounded-2xl border border-blue-100 ${borderHover} shadow-sm hover:shadow-md px-4 py-3.5 transition-all duration-200`}
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 ${iconBg}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5 flex-wrap">
            <h3 className="font-semibold text-slate-800 text-sm truncate">{service.title}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${badgeBg}`}>{service.category}</span>
          </div>
          <p className="text-xs text-slate-500 line-clamp-2 sm:line-clamp-1">{service.description}</p>
        </div>
        <a
          href={`tel:${PHONE_RAW}`}
          className={`flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-semibold flex-shrink-0 transition-colors ${isExpertise ? "bg-sky-50 text-sky-700 hover:bg-sky-500 hover:text-white" : "bg-indigo-50 text-indigo-700 hover:bg-indigo-500 hover:text-white"}`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Contact</span>
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`group bg-white rounded-2xl border border-blue-100 ${borderHover} shadow-sm hover:shadow-lg p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 transition-all duration-200 h-full`}
    >
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${iconBg}`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${badgeBg}`}>{service.category}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1.5 sm:mb-2 group-hover:text-[#0c4a6e] transition-colors">{service.title}</h3>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">{service.description}</p>
      </div>
      <div className={`h-0.5 rounded-full transition-all duration-300 ${accentLine}`} />
    </motion.div>
  );
}
