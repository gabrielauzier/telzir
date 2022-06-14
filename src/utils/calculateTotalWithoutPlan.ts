import { CallTypes, callTypes, DDDTypes } from "./types";
import validateCall from "./validateCall";

interface CalculateTotalWithoutPlanProps {
  origin: DDDTypes;
  destiny: DDDTypes;
  duration: number;
}

export default function calculateTotalWithoutPlan({
  origin,
  destiny,
  duration,
}: CalculateTotalWithoutPlanProps) {
  const call = `${origin}-${destiny}`;

  return validateCall(call) ? callTypes[call as CallTypes]?.tax * duration : 0;
}
