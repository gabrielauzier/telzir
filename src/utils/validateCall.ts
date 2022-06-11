import { callTypes, CallTypes } from "./types";

export default function (call: string) {
  return callTypes[call as CallTypes] ? true : false;
}
