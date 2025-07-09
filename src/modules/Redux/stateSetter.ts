import { Account } from "../dataTypes-Template/Account";
import { Credentials } from "../dataTypes-Template/Credentials";
import { StateVariables } from "./stateVariables";

export const stateSetters = {
  globalAccount: function (state: StateVariables, action: ActionAccount) {
    const newValue = action.payload;
    state.globalAccount = newValue;
  },
  globalAnswer: function (state: StateVariables, action: ActionString) {
    const newValue = action.payload;
    state.globalAnswer = newValue;
  },
  globalCredentials: function (
    state: StateVariables,
    action: ActionCredentials
  ) {
    const newValue = action.payload;
    state.globalCredentials = newValue;
  },
};

type ActionBoolean = {
  payload: boolean;
  type: string;
};

type ActionString = {
  payload: string;
  type: string;
};

type ActionAccount = {
  payload: Account | undefined;
  type: string;
};

type ActionCredentials = {
  payload: Credentials | undefined;
  type: string;
};
