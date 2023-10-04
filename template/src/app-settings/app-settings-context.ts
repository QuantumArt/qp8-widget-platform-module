import path from 'path';
import settingsPath from 'src/app-settings/settings.json';
import { IModuleSettings } from './app-settings-models';

let appSettings: IModuleSettings | null = null;

export async function loadAppSettings(): Promise<IModuleSettings> {
  try {
    if (!appSettings) {
      let fileURI: string;

      if (typeof window === 'undefined') {
        const sourceUrl = global.__remote_scope__._config.qp_widgets_platform_modules
          .replace(/#.*$/, '')
          .replace(/\?.*$/, '')
          .replace(/\/[^/]+$/, '/');
        fileURI = path.join(sourceUrl, settingsPath);
      } else {
        fileURI = settingsPath;
      }

      appSettings = await fetch(`${fileURI}?t=${Date.now()}`, {
        method: 'get',
      }).then(r => r.json() as unknown as IModuleSettings);
    }
    return appSettings!;
  } catch (ex) {
    console.error(ex);
    throw ex;
  }
}
