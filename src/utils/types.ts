export const planTypes = {
  FALE_MAIS_30: {
    label: "Fale Mais 30",
    durationLimit: 30,
  },
  FALE_MAIS_60: {
    label: "Fale Mais 60",
    durationLimit: 60,
  },
  FALE_MAIS_120: {
    label: "Fale Mais 120",
    durationLimit: 120,
  },
};

export const callTypes = {
  "11-16": { tax: 1.9 },
  "16-11": { tax: 2.9 },
  "11-17": { tax: 1.7 },
  "17-11": { tax: 2.7 },
  "11-18": { tax: 0.9 },
  "18-11": { tax: 1.9 },
};

export type PlanTypes = keyof typeof planTypes;
export type CallTypes = keyof typeof callTypes;
export type DDDTypes = "11" | "16" | "17" | "18";

export interface DataParams {
  origin: DDDTypes;
  destiny: DDDTypes;
  duration: number;
  plan: PlanTypes;
}
