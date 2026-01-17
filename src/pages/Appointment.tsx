import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { servicesData } from "@/data/servicesData";
import { z } from "zod";
import { Link } from "react-router-dom";

const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().trim().email("Adresse email invalide").max(255),
  phone: z.string().trim().min(8, "Numéro de téléphone invalide").max(20),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  date: z.string().min(1, "Veuillez sélectionner une date"),
  message: z.string().max(1000).optional(),
});

const Appointment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      appointmentSchema.parse(formData);
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      toast({
        title: "Rendez-vous confirmé !",
        description: "Nous vous contacterons pour confirmer les détails.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Generate min date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Prenez rendez-vous
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Prendre un rendez-vous
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Planifiez une consultation avec nos experts pour discuter de votre 
              projet agro-pastoral et bénéficier de conseils personnalisés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-2xl p-12 shadow-elevated text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Rendez-vous confirmé !
                </h2>
                <p className="text-muted-foreground text-lg mb-4">
                  Merci pour votre demande de rendez-vous.
                </p>
                <div className="bg-muted rounded-xl p-6 mb-8 text-left max-w-md mx-auto">
                  <h3 className="font-semibold text-foreground mb-3">Récapitulatif :</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Nom :</strong> {formData.name}</li>
                    <li><strong>Email :</strong> {formData.email}</li>
                    <li><strong>Service :</strong> {servicesData.find(s => s.id === formData.service)?.title}</li>
                    <li><strong>Date souhaitée :</strong> {new Date(formData.date).toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</li>
                  </ul>
                </div>
                <p className="text-muted-foreground mb-8">
                  Notre équipe vous contactera dans les plus brefs délais pour 
                  confirmer les détails de votre rendez-vous.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        date: "",
                        message: "",
                      });
                    }}
                    className="btn-primary rounded-full"
                  >
                    Nouveau rendez-vous
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link to="/">
                      Retour à l'accueil
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      Formulaire de rendez-vous
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Remplissez le formulaire ci-dessous pour réserver votre créneau
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Nom complet *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom complet"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Téléphone / WhatsApp *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+228 00 00 00 00"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Service souhaité *
                      </label>
                      <Select value={formData.service} onValueChange={handleServiceChange}>
                        <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {servicesData.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              {service.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-destructive text-sm mt-1">{errors.service}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Date souhaitée *
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      className={errors.date ? "border-destructive" : ""}
                    />
                    {errors.date && (
                      <p className="text-destructive text-sm mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message (optionnel)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez brièvement votre projet ou vos besoins..."
                      rows={4}
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="btn-primary rounded-full w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          Confirmer le rendez-vous
                          <Calendar className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      {!isSubmitted && (
        <section className="section-padding bg-muted">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Pourquoi prendre rendez-vous ?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Consultation gratuite",
                    description: "Premier échange sans engagement pour comprendre vos besoins.",
                  },
                  {
                    title: "Conseils d'experts",
                    description: "Bénéficiez de l'expertise d'Apélété et de son équipe.",
                  },
                  {
                    title: "Accompagnement personnalisé",
                    description: "Un plan d'action adapté à votre projet spécifique.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-soft"
                  >
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Appointment;
