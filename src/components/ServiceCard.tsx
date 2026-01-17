import { motion } from "framer-motion";
import { MessageSquare, Compass, Tractor, GraduationCap, LucideIcon } from "lucide-react";
import { Service } from "@/data/servicesData";

const iconMap: Record<string, LucideIcon> = {
  MessageSquare,
  Compass,
  Tractor,
  GraduationCap,
};

interface ServiceCardProps {
  service: Service;
  index: number;
  imageUrl: string;
}

const ServiceCard = ({ service, index, imageUrl }: ServiceCardProps) => {
  const Icon = iconMap[service.icon] || MessageSquare;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-xl overflow-hidden shadow-soft card-hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
