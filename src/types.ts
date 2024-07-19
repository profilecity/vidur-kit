export type SelectOption = {
  id: string;
  display: string;
}

export type Input<AcceptableValue = any, Key = string> = {
  type: "string" | "single-select" | "multi-select";
  key: string;
  default?: Key;
  acceptableValues: AcceptableValue[];
  description?: string;
  mandatory?: boolean;
}

export type StringInput = Input<string> & {
  type: "string";
};

export type SingleSelectInput = Input<SelectOption> & {
  type: "single-select";
}

export type MultiSelectInput = Input<SelectOption> & {
  type: "multi-select";
}

export type FeatureConfig = {
  name: string;
  description: string;
  configSchema: {
    fields: Input[]
  };
  putAt: string;
}

export type PluginApp = {
  name: string;
  description?: string;
  authors: string[];
}

export type HookInstallation = {
  postAt: string;
}

export type VidurPluginManifest = {
  app: PluginApp,
  baseURL: string;
  features: FeatureConfig[];
  hook: HookInstallation;
}