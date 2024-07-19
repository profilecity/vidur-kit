import { PluginApp } from "./types";
import { composeMessage } from "./utils";

export const validatePluginApp = (app: PluginApp | null | undefined) => {
  if (!app) {
    throw new Error(composeMessage("Field `app` is mandatory"));
  } else if (!app.name) {
    throw new Error(composeMessage("Field `name` is mandatory while defining `app`"));
  } else if (app.name.length > 36) {
    throw new Error(composeMessage("Length of field `name` cannot exceed 36 while defining `app`"));
  } else if (app.description && app.description.length > 128) {
    throw new Error(composeMessage("Length of field `description` cannot exceed 36 while defining `app`"));
  };
}

export const validateBaseURL = (baseURL: string | null | undefined) => {
  if (!baseURL) {
    throw new Error(composeMessage("Field `baseURL` is mandatory"));
  }
  validateURL(baseURL, "baseURL");
}

const validateURL = (url: string, fieldName: string) => {
  try {
    new URL(url);
  } catch (error) {
    throw new Error(composeMessage(`Field ${fieldName} muse be URL`));
  }
}