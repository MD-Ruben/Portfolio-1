import { useEffect, useState } from "react";

export function useClientRandom() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const getRandom = () => (isClient ? Math.random() : 0.5);
  const getRandomInRange = (min: number, max: number) =>
    isClient ? Math.random() * (max - min) + min : min;

  return { getRandom, getRandomInRange, isClient };
}
