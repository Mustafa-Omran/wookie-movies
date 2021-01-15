import { Settings } from '../app/core/settings';

/**
 * Base URL settings (development)
 *
 *
 */
const settings: Settings = {
  apiHost: 'wookie.codesubmit.io',
  apiProtocol: 'https'
}

export const environment = {
  production: false,
  settings: settings
};
