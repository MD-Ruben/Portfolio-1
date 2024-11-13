"use client";
import { Button } from "@nextui-org/react";
import {
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconLocation,
  IconPhoneCall,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { GlobeDemo } from "../ui/globe-demo";

const contactInfo = [
  {
    title: "Email",
    description: "contact@victoireservice.com",
    icon: <IconAt className="h-6 w-6 text-[#FFF07C]" />,
  },
  {
    title: "Téléphone",
    description: "+33 1 23 45 67 89",
    icon: <IconPhoneCall className="h-6 w-6 text-[#FFF07C]" />,
  },
  {
    title: "Adresse",
    description: "Paris, France",
    icon: <IconLocation className="h-6 w-6 text-[#FFF07C]" />,
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    url: "#",
    icon: <IconBrandLinkedin className="h-6 w-6 text-[#FFF07C]" />,
  },
  {
    title: "GitHub",
    url: "#",
    icon: <IconBrandGithub className="h-6 w-6 text-[#FFF07C]" />,
  },
  {
    title: "Twitter",
    url: "#",
    icon: <IconBrandTwitter className="h-6 w-6 text-[#FFF07C]" />,
  },
];

export const ContactSection = () => {
  return (
    <section className="py-20">
      <GlobeDemo />
      <div className="container mx-auto px-4 mt-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12 text-[#ECBA82]"
        >
          Contactez-nous
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <BentoGrid className="grid-cols-1">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BentoGridItem
                    title={info.title}
                    icon={info.icon}
                    description={info.description}
                  />
                </motion.div>
              ))}
            </BentoGrid>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 rounded-full bg-[#297045]/20 hover:bg-[#297045]/40 transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 bg-[#297045]/10 p-8 rounded-2xl backdrop-blur-sm border border-[#ECBA82]/20"
          >
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#ECBA82] mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-[#297045]/20 border border-[#ECBA82]/20 text-white focus:outline-none focus:border-[#ECBA82]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#ECBA82] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#297045]/20 border border-[#ECBA82]/20 text-white focus:outline-none focus:border-[#ECBA82]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#ECBA82] mb-2">
                Sujet
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-[#297045]/20 border border-[#ECBA82]/20 text-white focus:outline-none focus:border-[#ECBA82]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#ECBA82] mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-[#297045]/20 border border-[#ECBA82]/20 text-white focus:outline-none focus:border-[#ECBA82]"
              />
            </div>
            <Button
              className="w-full bg-gradient-to-r from-[#ECBA82] to-[#81C14B] text-white"
              size="lg"
            >
              Envoyer
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
