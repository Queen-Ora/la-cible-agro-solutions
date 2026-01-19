import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Stat } from "@/data/statsData";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatCardProps {
  stat: Stat;
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Extract numeric value and suffix from stat.value (e.g., "3000+" -> 3000, "+")
  const numericMatch = stat.value.match(/^(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1]) : 0;
  const suffix = stat.value.replace(/^\d+/, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        delay: index * 0.2,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayValue(Math.floor(value).toLocaleString("fr-FR"));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="relative text-center p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 group"
    >
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.5 }}
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* Icon/decoration */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.15 + 0.3,
          type: "spring",
          stiffness: 200
        }}
        className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
      >
        <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
      </motion.div>
      
      <div className="relative z-10">
        <motion.div 
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.2 }}
        >
          {displayValue}{suffix}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.4 }}
          className="text-foreground font-semibold mb-1 text-lg"
        >
          {stat.label}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.5 }}
          className="text-muted-foreground text-sm"
        >
          {stat.description}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatCard;
