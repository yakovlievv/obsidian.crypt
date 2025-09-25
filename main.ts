import { Plugin } from "obsidian";
import { SettingTab } from "./settings";

interface Settings {
    mySetting: string;
}

const DEFAULT_SETTINGS: Partial<Settings> = {
    mySetting: "default",
};

export default class MyPlugin extends Plugin {
    settings: Settings;

    async onload() {
        await this.loadSettings();

        this.addSettingTab(new SettingTab(this.app, this));
    }

    onunload() {
        console.log("Plugin unloaded");
    }

    async loadSettings() {
        this.settings = Object.assign(
            {},
            DEFAULT_SETTINGS,
            await this.loadData(),
        );
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
}
