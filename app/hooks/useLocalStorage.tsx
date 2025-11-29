"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [firstLoadDone, setFirstLoadDone] = useState(false);

  // 🔹 Charger la valeur depuis localStorage une seule fois
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = window.localStorage.getItem(key);

      if (item !== null) {
        setStoredValue(JSON.parse(item));
      } else {
        // si rien en localStorage, on enregistre la valeur initiale
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      }
    } catch (error) {
      console.error("Erreur lecture localStorage:", error);
    }

    setFirstLoadDone(true);
    // ⚠️ on dépend SEULEMENT de `key`
    // -> pas de boucle si initialValue est un objet
  }, [key]); 

  // 🔹 Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    if (!firstLoadDone) return;
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Erreur écriture localStorage:", error);
    }
  }, [key, storedValue, firstLoadDone]);

  // 🔹 Setter compatible avec setState classique
  const setValue = (value: T | ((val: T) => T)) => {
    setStoredValue((prev) =>
      value instanceof Function ? value(prev) : value
    );
  };

  return [storedValue, setValue] as const;
}
