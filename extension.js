var hmiPF = false;
var hmiCal = false;
var hmi3DM = false;
var hmiPW = false;
var hmiHelp = false;
var hmiRS = false;

export default {
    onload: ({ extensionAPI }) => {
        const config = {
            tabTitle: "Hide Menu Items",
            settings: [
                {
                    id: "hmi-PF",
                    name: "Page Filter",
                    description: "Whether to hide the Page Filter button",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 1); } },
                },
                {
                    id: "hmi-Cal",
                    name: "Calendar",
                    description: "Whether to hide the Calendar button",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 2); } },
                },
                {
                    id: "hmi-3DM",
                    name: "Three-Dot Menu",
                    description: "Whether to hide the Three-Dot Menu button",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 3); } },
                },
                {
                    id: "hmi-PW",
                    name: "Page Width",
                    description: "Whether to hide the Page Width button",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 4); } },
                },
                {
                    id: "hmi-Help",
                    name: "Help",
                    description: "Whether to hide the Help button",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 5); } },
                },
                {
                    id: "hmi-RS",
                    name: "Right Sidebar",
                    description: "Whether to hide the Right Sidebar button",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 6); } },
                },
            ]
        };
        extensionAPI.settings.panel.create(config);

        hmiPF = extensionAPI.settings.get("hmi-PF");
        hmiCal = extensionAPI.settings.get("hmi-Cal");
        hmi3DM = extensionAPI.settings.get("hmi-3DM");
        hmiPW = extensionAPI.settings.get("hmi-PW");
        hmiHelp = extensionAPI.settings.get("hmi-Help");
        hmiRS = extensionAPI.settings.get("hmi-RS");

        function setHMI(evt, i) {
            if (i == 1) {
                hmiPF = evt;
            } else if (i == 2) {
                hmiCal = evt;
            } else if (i == 3) {
                hmi3DM = evt;
            } else if (i == 4) {
                hmiPW = evt;
            } else if (i == 5) {
                hmiHelp = evt;
            } else if (i == 6) {
                hmiRS = evt;
            }
            hideDIVs();
        }
    },
    onunload: () => {
        hmiPF = false;
        hmiCal = false;
        hmi3DM = false;
        hmiPW = false;
        hmiHelp = false;
        hmiRS = false;
        hideDIVs();
    }
}

async function hideDIVs() {
    let topbar = document.querySelectorAll("div.rm-topbar > span.bp3-popover-wrapper");
    if (window.roamAlphaAPI.platform.isMobile || window.roamAlphaAPI.platform.isMobileApp || window.roamAlphaAPI.platform.isTouchDevice || window.roamAlphaAPI.platform.isIOS) {
        // hide items if selected as mobile only or all platforms
        if (topbar.length > 0) {
            for (var i = 0; i < topbar.length; i++) {
                if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-filter") {
                    if (hmiPF != "Show on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-calendar") {
                    if (hmiCal != "Show on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[3] == "bp3-icon-more") {
                    if (hmi3DM != "Show on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[3] == "bp3-icon-horizontal-distribution") {
                    if (hmiPW != "Show on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.classList[2] == "bp3-icon-help") {
                    if (hmiHelp != "Show on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-menu-closed") {
                    if (hmiRS != "Show on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                }
            }
        }
    } else {
        // hide items only if selected for all platforms
        if (topbar.length > 0) {
            for (var i = 0; i < topbar.length; i++) {
                if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-filter") {
                    if (hmiPF == "Hide on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-calendar") {
                    if (hmiCal == "Hide on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[3] == "bp3-icon-more") {
                    if (hmi3DM == "Hide on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[3] == "bp3-icon-horizontal-distribution") {
                    if (hmiPW == "Hide on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.classList[2] == "bp3-icon-help") {
                    if (hmiHelp == "Hide on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-menu-closed") {
                    if (hmiRS == "Hide on All Platforms") {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                }
            }
        }
    }
}