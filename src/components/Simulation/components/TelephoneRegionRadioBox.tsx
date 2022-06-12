import { DDDTypes } from "../../../utils/types";
import { TelephoneRegionRadioButton } from "./../styles";

interface TelephoneRegionRadioBoxProps {
  selected: DDDTypes;
  onSelect: (type: DDDTypes) => void;
}

export function TelephoneRegionRadioBox({
  selected,
  onSelect,
}: TelephoneRegionRadioBoxProps) {
  const DDDsList: DDDTypes[] = ["11", "16", "17", "18"];

  return (
    <>
      {DDDsList.map((ddd) => (
        <TelephoneRegionRadioButton
          key={ddd}
          type="button"
          onClick={() => onSelect(ddd)}
          isActive={selected === ddd}
        >
          {ddd}
        </TelephoneRegionRadioButton>
      ))}
    </>
  );
}
