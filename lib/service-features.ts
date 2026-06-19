import { ac1, ac2, ac3, ac4, ac5, ac6 } from "@/lib/assets";
import { washing1 as w1, washing2 as w2, washing3 as w3, washing4 as w4 } from "@/lib/assets";
import { fridge1 as f1, fridge2 as f2, fridge3 as f3 } from "@/lib/assets";
import { stove1 as s1, stove2 as s2 } from "@/lib/assets";

export type Feature = {
  slug: string;
  icon: string;
  image: { url: string };
};

export type ServiceCategory = {
  slug: string;
  parentPath: string;
  features: Feature[];
};

export const SERVICE_CATEGORIES: Record<string, ServiceCategory> = {
  ac: {
    slug: "ac",
    parentPath: "/services/ac",
    features: [
      {
        slug: "split-window-repair",
        icon: "❄️",
        image: ac1,
      },
      {
        slug: "installation-uninstallation",
        icon: "🛠️",
        image: ac2,
      },
      {
        slug: "gas-refill-leak",
        icon: "💨",
        image: ac3,
      },
      {
        slug: "deep-cleaning-service",
        icon: "🧼",
        image: ac4,
      },
      {
        slug: "electrical-pcb",
        icon: "⚡",
        image: ac5,
      },
      {
        slug: "water-leakage",
        icon: "🚿",
        image: ac6,
      },
    ],
  },
  "washing-machine": {
    slug: "washing-machine",
    parentPath: "/services/washing-machine",
    features: [
      {
        slug: "drum-motor-repair",
        icon: "🧺",
        image: w1,
      },
      {
        slug: "water-inlet-drainage",
        icon: "💧",
        image: w2,
      },
      {
        slug: "pcb-control-board",
        icon: "⚡",
        image: w3,
      },
      {
        slug: "spin-vibration",
        icon: "🌀",
        image: w4,
      },
      {
        slug: "door-lock-seal",
        icon: "🚪",
        image: w1,
      },
      {
        slug: "installation-setup",
        icon: "🛠️",
        image: w2,
      },
    ],
  },
  fridge: {
    slug: "fridge",
    parentPath: "/services/fridge",
    features: [
      {
        slug: "cooling-issues",
        icon: "🧊",
        image: f1,
      },
      {
        slug: "compressor-repair",
        icon: "⚙️",
        image: f2,
      },
      {
        slug: "gas-refilling",
        icon: "💨",
        image: f3,
      },
      {
        slug: "freezer-ice-maker",
        icon: "❄️",
        image: f1,
      },
      {
        slug: "water-leakage",
        icon: "🚿",
        image: f2,
      },
      {
        slug: "electrical-pcb",
        icon: "⚡",
        image: f3,
      },
    ],
  },
  "gas-stove": {
    slug: "gas-stove",
    parentPath: "/services/gas-stove",
    features: [
      {
        slug: "burner-repair-cleaning",
        icon: "🔥",
        image: s1,
      },
      {
        slug: "ignition-spark",
        icon: "⚡",
        image: s2,
      },
      {
        slug: "gas-leak-detection",
        icon: "🛡️",
        image: s1,
      },
      {
        slug: "knob-valve-replacement",
        icon: "🛠️",
        image: s2,
      },
      {
        slug: "deep-cleaning",
        icon: "🧽",
        image: s1,
      },
      {
        slug: "installation-hookup",
        icon: "🏠",
        image: s2,
      },
    ],
  },
};

export function getFeature(category: string, slug: string) {
  const cat = SERVICE_CATEGORIES[category];
  if (!cat) return null;
  const feature = cat.features.find((f) => f.slug === slug);
  if (!feature) return null;
  return { category: cat, feature };
}
