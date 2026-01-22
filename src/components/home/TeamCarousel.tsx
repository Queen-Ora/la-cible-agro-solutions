import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import SectionTitle from "@/components/SectionTitle";
import { homeTeamData, HomeTeamMember } from "@/data/homeTeamData";

const TeamMemberCard = ({ member, index }: { member: HomeTeamMember; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300">
        {/* Photo */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Social links overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.socials.tiktok && (
              <a
                href={member.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            )}
            {member.socials.facebook && (
              <a
                href={member.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-6 text-center">
          <h3 className="font-serif text-xl font-bold text-foreground mb-1">
            {member.name}
          </h3>
          <p className="text-primary font-medium">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TeamCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="container-custom">
        <SectionTitle
          subtitle="Notre équipe"
          title="Les experts à votre service"
          description="Une équipe passionnée et expérimentée pour vous accompagner dans tous vos projets agricoles."
        />

        <div className="relative px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {homeTeamData.map((member, index) => (
                <CarouselItem key={member.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <TeamMemberCard member={member} index={index} />
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

export default TeamCarousel;
