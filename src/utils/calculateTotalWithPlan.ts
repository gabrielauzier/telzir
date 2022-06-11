import { CallTypes, callTypes, DDDTypes, planTypes, PlanTypes } from "./types";
import validateCall from "./validateCall";

interface CalculateTotalWithPlanProps {
  origin: DDDTypes;
  destiny: DDDTypes;
  duration: number;
  plan: PlanTypes;
}

export default function ({
  origin,
  destiny,
  duration,
  plan,
}: CalculateTotalWithPlanProps) {
  const call = `${origin}-${destiny}`;
  const extraTax = 0.1;

  if (duration > planTypes[plan]?.durationLimit && validateCall(call))
    return (
      (1 + extraTax) *
      callTypes[call as CallTypes]?.tax *
      (duration - planTypes[plan]?.durationLimit)
    );

  return 0;
}
