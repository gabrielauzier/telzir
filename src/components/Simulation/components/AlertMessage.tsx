import { Collapse } from "@mui/material";
import { Alert, IconButton } from "../styles";
import { X as CloseIcon } from "phosphor-react";

interface AlertMessageProps {
  message: string;
  showError: boolean;
  setShowError: (flag: boolean) => void;
}

export function AlertMessage({
  message,
  showError,
  setShowError,
}: AlertMessageProps) {
  return (
    <Collapse in={showError}>
      <Alert
        action={
          <IconButton
            onClick={() => {
              setShowError(false);
            }}
          >
            <CloseIcon size={16} color="gray" />
          </IconButton>
        }
      >
        {message}
      </Alert>
    </Collapse>
  );
}
