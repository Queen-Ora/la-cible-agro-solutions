import { motion } from "framer-motion";
import { Stat } from "@/data/statsData";

interface StatCardProps {
  stat: Stat;
  index: number;
}

const StatCard = ({ stat, index }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="font-serif text-4xl md:text-5xl font-bold text-primary mb-2">
        {stat.value}
      </div>
      <div className="text-foreground font-semibold mb-1">{stat.label}</div>
      <div className="text-muted-foreground text-sm">{stat.description}</div>
    </motion.div>
  );
};

export default StatCard;
