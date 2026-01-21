import { useState } from "react";
import { CreditCard, Smartphone, Wallet, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PaymentOption {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
}

const paymentOptions: PaymentOption[] = [
  {
    id: "paypal",
    name: "PayPal",
    icon: CreditCard,
    color: "text-blue-600",
  },
  {
    id: "mixx",
    name: "Mixx by Yas",
    icon: Smartphone,
    color: "text-orange-600",
  },
  {
    id: "flooz",
    name: "Flooz",
    icon: Wallet,
    color: "text-green-600",
  },
];

interface PaymentDropdownProps {
  variant?: "header" | "service";
  className?: string;
}

const PaymentDropdown = ({ variant = "header", className = "" }: PaymentDropdownProps) => {
  const handlePayment = (paymentId: string) => {
    console.log(`Payment initiated with: ${paymentId}`);
  };

  if (variant === "header") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={`rounded-full px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground ${className}`}>
            Paiement
            <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          {paymentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <DropdownMenuItem
                key={option.id}
                onClick={() => handlePayment(option.id)}
                className="cursor-pointer"
              >
                <Icon className={`w-4 h-4 mr-2 ${option.color}`} />
                {option.name}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className={`rounded-full border border-accent text-accent hover:bg-accent hover:text-accent-foreground ${className}`}
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Payer
          <ChevronDown className="ml-2 w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {paymentOptions.map((option) => {
          const Icon = option.icon;
          return (
            <DropdownMenuItem
              key={option.id}
              onClick={() => handlePayment(option.id)}
              className="cursor-pointer"
            >
              <Icon className={`w-4 h-4 mr-2 ${option.color}`} />
              {option.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default PaymentDropdown;
