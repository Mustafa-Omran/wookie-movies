import { Settings } from '../app/core/settings';

/**
 * Base URL settings (production)
 *
 *
 */
const settings: Settings = {
  apiHost: 'wookie.codesubmit.io',
  apiProtocol: 'https'
}

export const environment = {
  production: true,
  settings: settings
};
