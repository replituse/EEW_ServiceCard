import { motion } from "framer-motion";

interface Props {
  phone: string;
}

export default function FloatingWhatsApp({ phone }: Props) {
  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-xl relative"
      style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.5)" }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-8 h-8">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.824 6.51L4 29l7.724-1.797A11.932 11.932 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm6.406 16.534c-.268.752-1.558 1.44-2.148 1.53-.55.083-1.24.118-2-.126-.462-.147-1.055-.343-1.81-.672-3.188-1.377-5.27-4.565-5.43-4.773-.158-.208-1.287-1.713-1.287-3.268s.814-2.32 1.103-2.635c.288-.314.63-.393.84-.393.21 0 .42.002.604.01.194.01.453-.073.708.54.264.637.898 2.193.977 2.35.08.16.133.346.027.558-.106.213-.16.346-.317.533-.157.187-.33.418-.472.56-.158.158-.322.33-.138.647.184.316.817 1.348 1.754 2.183 1.205 1.074 2.22 1.407 2.537 1.565.317.157.502.132.688-.08.186-.21.79-.924 1.001-1.24.21-.316.42-.264.71-.16.29.106 1.84.867 2.155 1.024.315.157.525.236.603.368.077.133.077.768-.19 1.52z"/>
      </svg>
    </motion.a>
  );
}
