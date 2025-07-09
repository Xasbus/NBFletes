import { StateVariables } from "./stateVariables";

export function selectGlobalAccount(state: StateVariables) {
  const { globalAccount } = state;
  return globalAccount;
}
export function selectGlobalAnswer(state: StateVariables) {
  const { globalAnswer } = state;
  return globalAnswer;
}
export function selectGlobalCredentials(state: StateVariables) {
  const { globalCredentials } = state;
  return globalCredentials;
}
