import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Shield, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSelectCategory: (cat: "All" | "Expertise" | "Panel Types") => void;
}

const PHONE_RAW = "917767062794";
const PHONE_DISPLAY = "+91 7767062794";
const EMAIL = "electricalsengineeringworks@gmail.com";
const LOCATION = "Thane, Maharashtra";

const expertiseItems = [
  "GA Drawing", "IGA Drawing", "Power Wiring Drawing",
  "Control Wiring Drawing", "Terminal Drawing", "Layout Drawing",
  "Panel Costing", "Quotation with BOQ",
];

const panelItems = [
  "LT Panel", "MCC Panel", "PCC Panel", "Heater Panel",
  "AHU Panel", "Relay Control Panel", "APFC Panel",
];

export default function SideMenu({ open, onClose, onSelectCategory }: Props) {
  function handleCategory(cat: "All" | "Expertise" | "Panel Types") {
    onSelectCategory(cat);
    onClose();
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white z-50 flex flex-col shadow-2xl overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="bg-[#0c4a6e] px-5 py-4 flex items-center justify-between flex-shrink-0">
              <span className="text-white font-bold text-lg">EEW Menu</span>
              <button onClick={onClose} className="text-white/80 hover:text-white transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 px-4 py-4 space-y-5">
              {/* Drawing / Expertise Section */}
              <section>
                <button
                  onClick={() => handleCategory("Expertise")}
                  className="w-full flex items-center gap-2 mb-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-sky-600" />
                  </div>
                  <span className="font-bold text-[#0c4a6e] text-sm group-hover:text-sky-600 transition-colors">
                    Drawing & Expertise
                  </span>
                  <span className="ml-auto text-xs bg-sky-100 text-sky-600 px-2 py-0.5 rounded-full font-medium">
                    {expertiseItems.length}
                  </span>
                </button>
                <ul className="space-y-1 pl-10">
                  {expertiseItems.map(item => (
                    <li key={item}>
                      <button
                        onClick={() => handleCategory("Expertise")}
                        className="w-full text-left text-xs text-slate-600 hover:text-sky-600 hover:bg-sky-50 px-2 py-1.5 rounded-lg transition-colors"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="border-t border-slate-100" />

              {/* Panel Types Section */}
              <section>
                <button
                  onClick={() => handleCategory("Panel Types")}
                  className="w-full flex items-center gap-2 mb-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-indigo-600" />
                  </div>
                  <span className="font-bold text-[#0c4a6e] text-sm group-hover:text-indigo-600 transition-colors">
                    Panel Types
                  </span>
                  <span className="ml-auto text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
                    {panelItems.length}
                  </span>
                </button>
                <ul className="space-y-1 pl-10">
                  {panelItems.map(item => (
                    <li key={item}>
                      <button
                        onClick={() => handleCategory("Panel Types")}
                        className="w-full text-left text-xs text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 px-2 py-1.5 rounded-lg transition-colors"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>

              <div className="border-t border-slate-100" />

              {/* Get In Touch */}
              <section>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="font-bold text-[#0c4a6e] text-sm">Get In Touch</span>
                </div>
                <div className="pl-10 space-y-2 text-xs text-slate-600">
                  <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-2 hover:text-[#0c4a6e] transition-colors">
                    <Phone className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                    {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-start gap-2 hover:text-[#0c4a6e] transition-colors break-all">
                    <Mail className="w-3.5 h-3.5 text-sky-500 flex-shrink-0 mt-0.5" />
                    {EMAIL}
                  </a>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                    {LOCATION}
                  </div>
                </div>

                {/* Quick contact buttons */}
                <div className="mt-4 pl-10 flex flex-col gap-2">
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="flex items-center justify-center gap-2 py-2 rounded-xl bg-[#0c4a6e] text-white text-xs font-semibold hover:bg-[#0e5a80] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center justify-center gap-2 py-2 rounded-xl bg-sky-500 text-white text-xs font-semibold hover:bg-sky-600 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" /> Send Email
                  </a>
                  <a
                    href={`https://wa.me/${PHONE_RAW}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 rounded-xl bg-[#25d366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                  </a>
                </div>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
