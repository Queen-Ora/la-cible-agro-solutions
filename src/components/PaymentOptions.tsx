import { motion } from "framer-motion";
import { CreditCard, Smartphone, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaymentOption {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

const paymentOptions: PaymentOption[] = [
  {
    id: "paypal",
    name: "PayPal",
    description: "Paiement sécurisé international",
    icon: CreditCard,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: "mixx",
    name: "Mixx by Yas",
    description: "Mobile Money rapide et simple",
    icon: Smartphone,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    id: "flooz",
    name: "Flooz",
    description: "Paiement mobile accessible",
    icon: Wallet,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

interface PaymentOptionsProps {
  title?: string;
  showTitle?: boolean;
  className?: string;
}

const PaymentOptions = ({ 
  title = "Modes de paiement", 
  showTitle = true,
  className = "" 
}: PaymentOptionsProps) => {
  const handlePayment = (paymentId: string) => {
    // TODO: Implement payment integration
    console.log(`Payment initiated with: ${paymentId}`);
  };

  return (
    <div className={className}>
      {showTitle && (
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
          {title}
        </h2>
      )}
      
      <div className="grid md:grid-cols-3 gap-6">
        {paymentOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer group"
              onClick={() => handlePayment(option.id)}
            >
              <div className={`w-14 h-14 rounded-full ${option.bgColor} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <Icon className={`w-7 h-7 ${option.color}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2 text-center text-lg">
                {option.name}
              </h3>
              <p className="text-muted-foreground text-sm text-center mb-4">
                {option.description}
              </p>
              <Button 
                variant="outline" 
                className="w-full rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                Payer avec {option.name}
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentOptions;
