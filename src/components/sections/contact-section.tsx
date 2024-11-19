"use client";
import { Button } from "@nextui-org/react";
import {
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconLocation,
  IconPhoneCall,
} from "@tabler/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { GlobeDemo } from "../ui/globe-demo";

const contactInfo = [
  // {
  //   title: "Email",
  //   description: "contact@victoireservice.com",
  //   icon: <IconAt className="h-6 w-6 text-[#FFF07C]" />,
  // },
  {
    title: "Téléphone",
    description: "+225 07 14 87 67 07 / +225 07 05 84 39 01",
    icon: <IconPhoneCall className="h-6 w-6 text-[#FFF07C]" />,
  },
  {
    title: "Adresse",
    description: "Abidjan, Côte d'Ivoire",
    icon: <IconLocation className="h-6 w-6 text-[#FFF07C]" />,
  },
];

const socialLinks = [
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/yablai-ruben-virgil-yablai-b1657b1a9/",
    icon: <IconBrandLinkedin className="h-6 w-6 text-[#FFF07C]" />,
  },
  {
    title: "GitHub",
    url: "#",
    icon: <IconBrandGithub className="h-6 w-6 text-[#FFF07C]" />,
  },
];

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || "95c0070a-9af6-480c-b188-893ba1de9078";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "LA VICTOIRE",
      subject: "Nouveau message d'un contact à partir de votre site web",
    },
    onSuccess: () => {
      setIsSuccess(true);
      setMessage("Message envoyé avec succès.");
      reset();
    },
    onError: () => {
      setIsSuccess(false);
      setMessage("Un problème s'est produit. Veuillez réessayer plus tard.");
    },
  });

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
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-[#297045]/10 p-8 rounded-2xl backdrop-blur-sm border border-[#ECBA82]/20"
          >
            <input
              type="checkbox"
              id="botcheck"
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            />
            <div className="flex flex-wrap">
              <div className="w-full px-4 md:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Nom et prénom"
                    autoComplete="off"
                    className={`w-full rounded-md px-4 py-3 outline-none placeholder:text-primary bg-[#297045]/20 border border-[#ECBA82]/20 text-white focus:outline-none focus:border-[#ECBA82] ${
                      errors.name ? "border-red-600" : ""
                    }`}
                    {...register("name", {
                      required: "Le nom complet est obligatoire",
                      maxLength: 80,
                    })}
                  />
                  {errors.name && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.name.message}</small>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full px-4 md:w-1/2">
                <div className="mb-5">
                  <input
                    id="email_address"
                    type="email"
                    placeholder="Adresse e-mail"
                    autoComplete="off"
                    className={`w-full rounded-md px-4 py-3 outline-none placeholder:text-primary bg-[#297045]/20 border border-[#ECBA82]/20 text-white focus:outline-none focus:border-[#ECBA82] ${
                      errors.email ? "border-red-600" : ""
                    }`}
                    {...register("email", {
                      required: "Saisissez votre adresse e-mail",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Veuillez saisir un e-mail valide",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.email.message}</small>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full px-4">
                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Votre message"
                    className={`h-36 w-full rounded-md px-4 py-3 outline-none placeholder:text-primary bg-[#297045]/20 border border-[#ECBA82]/20 text-white focus:outline-none focus:border-[#ECBA82] ${
                      errors.message ? "border-red-600" : ""
                    }`}
                    {...register("message", {
                      required: "Saisissez votre message",
                    })}
                  />
                  {errors.message && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.message.message}</small>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full px-4">
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  className="rounded-sm px-9 py-4 font-semibold text-white bg-gradient-to-r from-[#ECBA82] to-[#81C14B]"
                >
                  {isSubmitting ? "Envoi..." : "Contactez-nous"}
                </Button>
              </div>
            </div>
            {isSubmitSuccessful && (
              <div
                className={`mt-3 text-center text-sm ${
                  isSuccess ? "text-green-500" : "text-red-500"
                }`}
              >
                {message}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};
