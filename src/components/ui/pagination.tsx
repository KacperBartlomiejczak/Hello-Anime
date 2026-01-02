"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl?: string; 
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl = "",
}: PaginationProps) {
  const searchParams = useSearchParams();

  
  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  // Logika "okna" - maksymalnie 3 cyfry
  const getVisiblePages = () => {
    if (totalPages <= 3) {
      
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
     
      return [1, 2, 3];
    }

    if (currentPage >= totalPages - 1) {
      
      return [totalPages - 2, totalPages - 1, totalPages];
    }

   
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center gap-2 justify-center py-8">
      
      <Link
        href={currentPage > 1 ? createPageUrl(currentPage - 1) : "#"}
        aria-disabled={currentPage <= 1}
        className={cn(
          "p-2 rounded-lg transition-colors border border-white/10 bg-secondary-background hover:bg-white/10",
          currentPage <= 1 && "opacity-50 pointer-events-none"
        )}
      >
        <ChevronLeft size={20} />
      </Link>

      
      <div className="flex items-center gap-2 bg-secondary-background/50 p-1 rounded-xl border border-white/5">
        <AnimatePresence mode="popLayout">
          {visiblePages.map((page) => {
            const isActive = page === currentPage;

            return (
              <Link
                key={page}
                href={createPageUrl(page)}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg text-sm font-bold transition-colors z-10"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pagination-bg"
                    className="absolute inset-0 bg-brand rounded-lg shadow-lg shadow-brand/20 -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={cn(isActive ? "text-white" : "text-gray-400 hover:text-white")}>
                  {page}
                </span>
              </Link>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Przycisk Dalej */}
      <Link
        href={currentPage < totalPages ? createPageUrl(currentPage + 1) : "#"}
        aria-disabled={currentPage >= totalPages}
        className={cn(
          "p-2 rounded-lg transition-colors border border-white/10 bg-secondary-background hover:bg-white/10",
          currentPage >= totalPages && "opacity-50 pointer-events-none"
        )}
      >
        <ChevronRight size={20} />
      </Link>
    </div>
  );
}
