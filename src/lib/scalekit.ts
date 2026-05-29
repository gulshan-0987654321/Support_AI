import { Scalekit } from '@scalekit-sdk/node';

let scalekitInstance: Scalekit | null = null;

export function getScalekitClient() {
  if (!scalekitInstance) {
    const envUrl = process.env.SCALEKIT_ENVIRONMENT_URL;
    const clientId = process.env.SCALEKIT_CLIENT_ID;
    const clientSecret = process.env.SCALEKIT_CLIENT_SECRET;

    if (!envUrl || !clientId || !clientSecret) {
      console.warn("Scalekit credentials are not set. Using placeholder client for build/static analysis.");
      return new Scalekit(
        "https://placeholder-env.scalekit.com",
        "placeholder-client-id",
        "placeholder-client-secret"
      );
    }

    scalekitInstance = new Scalekit(envUrl, clientId, clientSecret);
  }
  return scalekitInstance;
}