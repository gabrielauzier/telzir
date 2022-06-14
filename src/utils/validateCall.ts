import { callTypes, CallTypes } from "./types";

export default function validateCall(call: string) {
  return callTypes[call as CallTypes] ? true : false;
}
