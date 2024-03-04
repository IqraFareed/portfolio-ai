import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import type { sectionName } from "./types";

export function useSectionInView(sectionName: sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold: threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, timeOfLastClick, sectionName]);
  return { ref };
}
