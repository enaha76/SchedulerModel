import { ExceptionalClosure as TExceptionalClosure } from "../api/exceptionalClosure/ExceptionalClosure";

export const EXCEPTIONALCLOSURE_TITLE_FIELD = "reason";

export const ExceptionalClosureTitle = (
  record: TExceptionalClosure
): string => {
  return record.reason?.toString() || String(record.id);
};
