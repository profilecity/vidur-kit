import { FeatureConfig, HookInstallation, VidurPluginManifest } from "./types";
import { validateBaseURL, validatePluginApp } from "./validate";

type InitPluginManifestOptions = Partial<VidurPluginManifest>;
export function createVidurPlugin(init: InitPluginManifestOptions): InitPluginManifestOptions {
  return init;
}

export function defineVidurPlugin(ctx: InitPluginManifestOptions) {
  validatePluginApp(ctx.app);
  if (ctx.app && !Array.isArray(ctx.app?.authors)) {
    ctx.app.authors = [];
  }
  validateBaseURL(ctx.baseURL);
  if (!ctx.features) {
    ctx.features = [];
  };
  return ctx as VidurPluginManifest;
};

export function defineFeature(options: FeatureConfig, ctx: InitPluginManifestOptions) {
  if (!Array.isArray(ctx.features)) {
    ctx.features = [];
  }
  ctx.features.push(options);
  return ctx;
}

export function defineFeatures(options: FeatureConfig[], ctx: InitPluginManifestOptions) {
  if (!Array.isArray(ctx.features)) {
    ctx.features = [];
  }
  ctx.features.push(...options);
  return ctx;
}

export function defineHookInstallation(options: HookInstallation, ctx: InitPluginManifestOptions) {
  ctx.hook = options;
  return ctx;
}