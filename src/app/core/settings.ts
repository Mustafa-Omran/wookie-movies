/**
 * Setting interface 
 * 
 * @interface Settings
 */

export interface Settings {
  apiProtocol: "http" | "https";
  apiHost: string;
  apiPort?: number;
  requestTimeout?: number;
  cookieHeader?: boolean;
  allowOffline?: boolean;
  apiSubDomain?: string;
}
