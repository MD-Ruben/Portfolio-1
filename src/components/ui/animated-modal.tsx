"use client";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const AnimatedModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="bg-gradient-to-r from-[#ECBA82] to-[#81C14B] text-white"
        onPress={() => setIsOpen(true)}
      >
        Démarrer un projet
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl bg-[#204E4A] p-6 shadow-xl"
            >
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-[#ECBA82]">
                  Parlons de votre projet
                </h3>
                <p className="text-[#81C14B]">
                  Décrivez-nous votre projet et nous vous contacterons
                  rapidement.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="rounded-lg bg-[#297045]/20 p-2 text-white placeholder:text-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-lg bg-[#297045]/20 p-2 text-white placeholder:text-gray-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Type de projet"
                  className="w-full rounded-lg bg-[#297045]/20 p-2 text-white placeholder:text-gray-400"
                />
                <textarea
                  placeholder="Description du projet"
                  rows={4}
                  className="w-full rounded-lg bg-[#297045]/20 p-2 text-white placeholder:text-gray-400"
                />
                <div className="flex justify-end gap-2">
                  <Button
                    color="danger"
                    variant="light"
                    onPress={() => setIsOpen(false)}
                  >
                    Annuler
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-[#ECBA82] to-[#81C14B] text-white"
                    type="submit"
                  >
                    Envoyer
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
