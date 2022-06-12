import { planTypes, PlanTypes } from "../../../utils/types";
import { PlanTypeContainer, PlanTypeRadioButton } from "../styles";

interface PlanTypeRadioBoxProps {
  selected: PlanTypes;
  onSelect: (type: PlanTypes) => void;
}

export function PlanTypeRadioBox({
  selected,
  onSelect,
}: PlanTypeRadioBoxProps) {
  const planList: PlanTypes[] = [
    "FALE_MAIS_30",
    "FALE_MAIS_60",
    "FALE_MAIS_120",
  ];

  return (
    <PlanTypeContainer>
      {planList.map((plan) => (
        <PlanTypeRadioButton
          key={plan}
          type="button"
          onClick={() => onSelect(plan)}
          isActive={selected === plan}
        >
          <span>{planTypes[plan].label}</span>
        </PlanTypeRadioButton>
      ))}
    </PlanTypeContainer>
  );
}
