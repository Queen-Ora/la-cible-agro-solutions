import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import SectionTitle from "@/components/SectionTitle";
import { testimonialsData, Testimonial } from "@/data/testimonialsData";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? "text-accent fill-accent"
              : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 h-full flex flex-col relative overflow-hidden">
        {/* Quote decoration */}
        <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
        
        {/* Rating */}
        <div className="mb-4">
          <StarRating rating={testimonial.rating} />
        </div>

        {/* Content */}
        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed italic">
          "{testimonial.content}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-serif font-bold text-foreground">
              {testimonial.name}
            </h4>
            <p className="text-sm text-primary">
              {testimonial.role}
              {testimonial.company && (
                <span className="text-muted-foreground"> • {testimonial.company}</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsCarousel = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <SectionTitle
          subtitle="Témoignages"
          title="Ce que disent nos clients"
          description="Découvrez les retours d'expérience de ceux qui nous ont fait confiance pour leurs projets agricoles."
        />

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard testimonial={testimonial} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-primary text-primary-foreground hover:bg-primary/90" />
            <CarouselNext className="right-0 bg-primary text-primary-foreground hover:bg-primary/90" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
