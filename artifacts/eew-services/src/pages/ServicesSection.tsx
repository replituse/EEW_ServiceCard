import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Phone, Mail, MessageCircle, Grid3X3, List } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import FloatingButtons from "@/components/FloatingButtons";
import SideMenu from "@/components/SideMenu";
import eewLogo from "/eew-logo.png";

const EXPERTISE = [
  { id: 1, title: "GA Drawing", category: "Expertise", description: "General Arrangement drawings for accurate layout planning of electrical panels and components.", icon: "FileText" },
  { id: 2, title: "IGA Drawing", category: "Expertise", description: "Internal and General Arrangement drawings for precise instrumentation and equipment placement.", icon: "Layers" },
  { id: 3, title: "Power Wiring Drawing", category: "Expertise", description: "Detailed power wiring schematics ensuring safe and efficient electrical power distribution.", icon: "Zap" },
  { id: 4, title: "Control Wiring Drawing", category: "Expertise", description: "Control circuit diagrams for automation, interlocking, and protection of electrical systems.", icon: "GitBranch" },
  { id: 5, title: "Terminal Drawing", category: "Expertise", description: "Terminal block layouts and wiring details for clean and organized panel connections.", icon: "Cpu" },
  { id: 6, title: "Layout Drawing", category: "Expertise", description: "Floor plan and equipment layout drawings for optimal installation and maintenance access.", icon: "LayoutGrid" },
  { id: 7, title: "Panel Costing", category: "Expertise", description: "Accurate cost estimation for electrical panel fabrication, materials, and assembly.", icon: "BarChart2" },
  { id: 8, title: "Quotation with BOQ", category: "Expertise", description: "Detailed Bill of Quantities with competitive quotations for complete project transparency.", icon: "ClipboardList" },
];

const PANELS = [
  { id: 9, title: "LT Panel", category: "Panel Types", description: "Low Tension panels designed for reliable power distribution in industrial and commercial setups.", icon: "Shield" },
  { id: 10, title: "MCC Panel", category: "Panel Types", description: "Motor Control Centers for centralized control and protection of multiple motor circuits.", icon: "Settings" },
  { id: 11, title: "PCC Panel", category: "Panel Types", description: "Power Control Centers providing main distribution and bus protection for large facilities.", icon: "Activity" },
  { id: 12, title: "Heater Panel", category: "Panel Types", description: "Specialized panels for safe and efficient control of industrial heating elements.", icon: "Thermometer" },
  { id: 13, title: "AHU Panel", category: "Panel Types", description: "Air Handling Unit control panels for HVAC systems in commercial and industrial buildings.", icon: "Wind" },
  { id: 14, title: "Relay Control Panel", category: "Panel Types", description: "Protection and control relay panels for safeguarding critical electrical equipment.", icon: "Radio" },
  { id: 15, title: "APFC Panel", category: "Panel Types", description: "Automatic Power Factor Correction panels to improve energy efficiency and reduce penalties.", icon: "TrendingUp" },
];

const ALL_SERVICES = [...EXPERTISE, ...PANELS];

type ViewMode = "grid" | "list";
type Category = "All" | "Expertise" | "Panel Types";

const PHONE_RAW = "917767062794";
const PHONE_DISPLAY = "+91 7767062794";
const EMAIL = "electricalsengineeringworks@gmail.com";
const LOCATION = "Thane, Maharashtra";

export default function ServicesSection() {
  const [view, setView] = useState<ViewMode>("list");
  const [category, setCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    let list = ALL_SERVICES;
    if (category !== "All") list = list.filter(s => s.category === category);
    if (search.trim()) list = list.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));
    return list;
  }, [category, search]);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  function scrollToTop() {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div ref={topRef} className="relative min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Side Menu */}
      <SideMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onSelectCategory={(cat) => {
          setCategory(cat);
          setSearch("");
        }}
      />

      {/* Header */}
      <header className="bg-white border-b border-blue-100 shadow-sm sticky top-0 z-30 overflow-visible">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          {/* Clickable title → scroll to top */}
          <button
            onClick={scrollToTop}
            className="text-left group"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0c4a6e] leading-tight group-hover:text-sky-600 transition-colors">
              Our Services
            </h1>
            <p className="text-xs sm:text-sm text-[#0c4a6e] font-semibold mt-0.5 tracking-wide">
              Electrical Engineering Works
            </p>
          </button>

          {/* Clickable logo → opens side menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex-shrink-0 rounded-full hover:ring-2 hover:ring-sky-400 hover:ring-offset-2 transition-all active:scale-95"
            title="Open menu"
          >
            <img
              src={eewLogo}
              alt="EEW Logo"
              className="h-20 w-20 sm:h-24 sm:w-24 object-contain drop-shadow-md"
              style={{ marginTop: "-8px", marginBottom: "-8px" }}
            />
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-3 sm:px-4 py-5 sm:py-8 space-y-4 sm:space-y-6">
        {/* Controls */}
        <div className="flex flex-col gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-blue-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
            />
          </div>

          {/* Category + View row */}
          <div className="flex items-center gap-2">
            {/* Category Filter — fit all labels */}
            <div className="flex rounded-xl overflow-hidden border border-blue-200 bg-white shadow-sm flex-1 min-w-0">
              {(["All", "Expertise", "Panel Types"] as Category[]).map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`flex-1 px-1 py-2 text-[10px] sm:text-xs md:text-sm font-semibold transition-colors leading-tight ${
                    category === cat ? "bg-[#0c4a6e] text-white" : "text-slate-600 hover:bg-sky-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex rounded-xl overflow-hidden border border-blue-200 bg-white shadow-sm flex-shrink-0">
              <button
                onClick={() => setView("grid")}
                title="Grid View"
                className={`flex items-center gap-1 px-2.5 py-2 text-sm font-medium transition-colors ${view === "grid" ? "bg-sky-500 text-white" : "text-slate-500 hover:bg-sky-50"}`}
              >
                <Grid3X3 className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">Grid</span>
              </button>
              <button
                onClick={() => setView("list")}
                title="List View"
                className={`flex items-center gap-1 px-2.5 py-2 text-sm font-medium transition-colors ${view === "list" ? "bg-sky-500 text-white" : "text-slate-500 hover:bg-sky-50"}`}
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid / List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={view + category + search}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5"
                : "flex flex-col gap-3"
            }
          >
            {filtered.length === 0 ? (
              <motion.div variants={itemVariants} className="col-span-3 text-center py-16 text-slate-400">
                <Search className="w-10 h-10 mx-auto mb-3 opacity-40" />
                <p className="text-lg font-medium">No services found</p>
                <p className="text-sm mt-1">Try a different search term or category</p>
              </motion.div>
            ) : (
              filtered.map(service => (
                <motion.div key={service.id} variants={itemVariants}>
                  <ServiceCard service={service} view={view} />
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 sm:mt-10 rounded-2xl overflow-hidden shadow-lg border border-blue-100"
        >
          <div className="bg-[#0c4a6e] px-4 sm:px-6 py-4 sm:py-5 text-white">
            <h2 className="text-lg sm:text-xl font-bold">Get In Touch</h2>
            <p className="text-sky-200 text-xs sm:text-sm mt-1">Reach out for quotes, enquiries or project discussions</p>
          </div>

          <div className="bg-white px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span>{PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span className="break-all text-xs sm:text-sm">{EMAIL}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  <span>{LOCATION}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-row sm:gap-3">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2.5 rounded-xl bg-[#0c4a6e] text-white text-xs sm:text-sm font-semibold hover:bg-[#0e5a80] active:scale-95 transition-all shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2.5 rounded-xl bg-sky-500 text-white text-xs sm:text-sm font-semibold hover:bg-sky-600 active:scale-95 transition-all shadow"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a
                  href={`https://wa.me/${PHONE_RAW}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 sm:px-5 py-2.5 rounded-xl bg-[#25d366] text-white text-xs sm:text-sm font-semibold hover:bg-[#20bd5a] active:scale-95 transition-all shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="h-24" />
      </main>

      <FloatingButtons phone={PHONE_RAW} />

      {/* Fixed bottom footer */}
      <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-blue-200 bg-gray-100 flex items-center justify-center py-2">
        <a
          href="https://eew-coming-soon.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-semibold text-[#0c4a6e] hover:text-sky-500 transition-colors tracking-wide"
        >
          www.eew.com
        </a>
      </div>
    </div>
  );
}
