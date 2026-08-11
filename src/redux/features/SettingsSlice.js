import { createSlice } from "@reduxjs/toolkit";
import { ALL_APPS } from "../../constants";

const getStoredSettings = () => {
    try {
        const storedSettings = JSON.parse(localStorage.getItem('storedSettings'));
        if (typeof storedSettings === 'object' && !Array.isArray(storedSettings) && storedSettings !== null) {
            return {
                showFPSCounter: storedSettings.showFPSCounter ? true : false,
                EnableDebugLogs: storedSettings.EnableDebugLogs ? true : false,
                InspectReduxDevTool: storedSettings.InspectReduxDevTool ? true : false,
                ExperimentalFeatures: storedSettings.ExperimentalFeatures ? true : false,
            }
        } else {
            return undefined
        }
    } catch {
        return undefined
    }
}

const SettingsSlice = createSlice({
    name: 'Settings',
    initialState: {
        Section: 'About Us',
        activePanel: '', //for opening of settings options
        TotalStorage: ALL_APPS.reduce((total, { size, dataSize }) => total + Number(size.slice(0, -2)) + Number(dataSize.slice(0, -2)), 0),

        AppTotalStorage: ALL_APPS.reduce((apps, { name, size, dataSize }) => {
            let appSize = Number(size.slice(0, -2))
            let appDataSize = Number(dataSize.slice(0, -2))
            apps[name] = appDataSize + appSize >= 1024 ? `${Math.floor((appDataSize + appSize) / 1024)} GB` : `${appDataSize + appSize} MB`
            return apps
        }, {}),

        // devOptions
        showFPSCounter: getStoredSettings()?.showFPSCounter ?? false,
        EnableDebugLogs: getStoredSettings()?.EnableDebugLogs ?? false,
        InspectReduxDevTool: getStoredSettings()?.InspectReduxDevTool ?? false,
        ExperimentalFeatures: getStoredSettings()?.ExperimentalFeatures ?? false,
    },
    reducers: {
        setSection(state, action) {
            const { section } = action.payload;
            if (!section) return;
            state.Section = section
            state.activePanel = ''; //close the active panel when section is changed

        },
        setActivePanel(state, action) {
            const { panel } = action.payload;
            state.activePanel = panel;
        },
        ResetSettings(state) {
            state.Section = 'About Us'
            state.activePanel = ''
            state.showFPSCounter = false
            state.EnableDebugLogs = false
            state.InspectReduxDevTool = false
            state.ExperimentalFeatures = false
        },
        setExperimentalFeatures(state) {
            state.ExperimentalFeatures = state.ExperimentalFeatures === true ? false : true;
            if (state.EnableDebugLogs) console.log(`Experimental Features ${state.ExperimentalFeatures === true ? 'Enabled' : 'Disabled'}`)
            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, ExperimentalFeatures: state.ExperimentalFeatures };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },
        setshowFPSCounter(state) {
            state.showFPSCounter = state.showFPSCounter === true ? false : true
            if (state.EnableDebugLogs) console.log(`FPS Counter ${state.showFPSCounter === true ? 'Enabled' : 'Disabled'}`)
            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, showFPSCounter: state.showFPSCounter };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },
        setEnableDebugLogs(state) {
            state.EnableDebugLogs = state.EnableDebugLogs === true ? false : true
            if (state.EnableDebugLogs) console.log(`Debug Logs Enabled`)
            if (!state.EnableDebugLogs) console.log(`Debug Logs Disabled`)

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, EnableDebugLogs: state.EnableDebugLogs };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },
        setInspectReduxDevTool(state) {
            state.InspectReduxDevTool = state.InspectReduxDevTool === true ? false : true
if (state.EnableDebugLogs) console.log(` Inspect Redux DevTool ${state.InspectReduxDevTool === true ? 'Enabled' : 'Disabled'}`)

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = { ...storedSettings, InspectReduxDevTool: state.InspectReduxDevTool };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        },
        RestoreDefaultDevOpsSettings(state) {

            state.showFPSCounter = false,
                state.EnableDebugLogs = false,
                state.InspectReduxDevTool = false,
                state.ExperimentalFeatures = false

            const storedSettings = JSON.parse(localStorage.getItem('storedSettings')) || {};
            const updatedSettings = {
                ...storedSettings,
                InspectReduxDevTool: state.InspectReduxDevTool,
                EnableDebugLogs: state.EnableDebugLogs,
                ExperimentalFeatures: state.ExperimentalFeatures,
                showFPSCounter: state.showFPSCounter
            };
            localStorage.setItem('storedSettings', JSON.stringify(updatedSettings));
        }
    }
})


export const { setSection, setActivePanel, ResetSettings, setExperimentalFeatures, setshowFPSCounter, setEnableDebugLogs, setInspectReduxDevTool, RestoreDefaultDevOpsSettings } = SettingsSlice.actions;
export default SettingsSlice.reducer;