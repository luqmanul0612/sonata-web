"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ColorSchemeProps = {
  colorScheme: "light" | "dark";
};

interface ColorSchemeState extends ColorSchemeProps {
  setColorScheme: (data: ColorSchemeProps) => void;
}

const useColorScheme = create<ColorSchemeState>()(
  persist(
    (set) => ({
      colorScheme: "light",
      setColorScheme: (data) => {
        document.body.classList.add(data.colorScheme);
        document.body.classList.remove(
          data.colorScheme === "light" ? "dark" : "light"
        );
        set(data ?? {});
      },
    }),
    {
      name: "color-scheme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useColorScheme;
