import { Settings } from './settings';

/**
 * App singleton design pattern of the required settings
 *
 *
 */
export class App {

    /**
     * Singleton instance.
     * 
     * 
     */
    private static instance: App;

    /**
     * private variables for set and get.
     * 
     * 
     */
    private settings: Settings;

    constructor() { }

    static get Instance() {
        if (!this.instance) {
            this.instance = new App();
        }
        return this.instance;
    }

    static get Settings(): Settings {
        if (!this.Instance.settings) {
            throw "Application settings are not set.";
        }
        return this.Instance.settings;
    }

    static set Settings(newSettings: Settings) {
        this.Instance.settings = newSettings;
    }

    static get backEndUrl(): string {
        const settings = this.Settings;
        return settings.apiProtocol + '://' + settings.apiHost;
    }
}
