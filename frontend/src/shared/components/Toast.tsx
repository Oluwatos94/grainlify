import { Toaster } from "sonner";
import { useTheme } from "../contexts/ThemeContext";

const Toast = () => {
  const { theme } = useTheme();
  return (
    <Toaster
      richColors={false}
      position="top-right"
      closeButton={true}
      duration={3000}
      visibleToasts={1}
      expand={false}
      toastOptions={{
        unstyled: true,
<<<<<<< HEAD
        className: `${theme === "dark" ? "bg-[#2d2820]/90 text-[#f5efe5]" : "bg-white/95 text-[#2d2820]"} backdrop-blur-[40px] w-[340px] flex flex-row text-md py-3 px-4 rounded-md border ${theme === "dark" ? "border-white/20" : "border-white/30"} shadow-[0_8px_32px_rgba(0,0,0,0.15)]`,
=======
        className: `${theme === 'dark'
          ? 'bg-[#2d2820]/80 text-[#f5f5f5] border-[#c9983a]/30'
          : 'bg-white/90 text-[#2d2820] border-[#c9983a]/30'
        } backdrop-blur-[40px] w-[340px] flex flex-row text-md py-3 px-4 rounded-[12px] border shadow-[0_8px_24px_rgba(0,0,0,0.15)]`,
>>>>>>> origin/master
        classNames: {
          closeButton:
            "order-last ml-auto cursor-pointer hover:opacity-70 transition-opacity",
          icon: "mr-1 mt-0.5 flex-shrink-0",
          description: "mt-0.5 text-sm",
<<<<<<< HEAD
          success: `bg-gradient-to-r from-[#10b981]/25 to-[#059669]/25 border border-[#10b981]/60 shadow-[0_4px_24px_rgba(16,185,129,0.25)] text-[#047857] ${theme === "dark" ? "!text-[#6ee7b7]" : ""}`,
          error: `bg-gradient-to-r from-[#ef4444]/25 to-[#dc2626]/25 border border-[#ef4444]/60 shadow-[0_4px_24px_rgba(239,68,68,0.25)] text-[#991b1b] ${theme === "dark" ? "!text-[#fca5a5]" : ""}`,
        },
=======
          success: 'border border-[#c9983a]/60 shadow-[0_4px_18px_rgba(201,152,58,0.35)]',
          error: 'border border-[#ff6b6b]/60 shadow-[0_4px_18px_rgba(255,107,107,0.35)]'
        }
>>>>>>> origin/master
      }}
    />
  );
};

export default Toast;
