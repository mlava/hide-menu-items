var hmiDNP = false;
var hmiGO = false;
var hmiAP = false;
var hmiRD = false;
var hmiPF = false;
var hmiCal = false;
var hmi3DM = false;
var hmiPW = false;
var hmiHelp = false;
var hmiDNPM = false;
var hmiGOM = false;
var hmiAPM = false;
var hmiRDM = false;
var hmiPFM = false;
var hmiCalM = false;
var hmi3DMM = false;
var hmiPWM = false;
var hmiHelpM = false;

export default {
    onload: ({ extensionAPI }) => {
        const all = {
            tabTitle: "Hide Menu Items",
            settings: [
                {
                    id: "hmi-Menu",
                    name: "Mobile or All Platforms",
                    description: "Turn on to hide items on all platforms, leave off for Mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setMenu(evt); }
                    },
                },
                {
                    id: "hmi-DNP",
                    name: "Daily Notes",
                    description: "Turn on to hide the Daily Notes link on all platforms",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 1); }
                    },
                },
                {
                    id: "hmi-GO",
                    name: "Graph Overview",
                    description: "Turn on to hide the Graph Overview link on all platforms",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 2); }
                    },
                },
                {
                    id: "hmi-AP",
                    name: "All Pages",
                    description: "Turn on to hide the All Pages link on all platforms",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 3); }
                    },
                },
                {
                    id: "hmi-RD",
                    name: "Roam Depot",
                    description: "Turn on to hide the Roam Depot link on all platforms",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 4); }
                    },
                },
                {
                    id: "hmi-PF",
                    name: "Page Filter",
                    description: "Turn on to hide the Page Filter button on all platforms",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 5); }
                    },
                },
                {
                    id: "hmi-Cal",
                    name: "Calendar",
                    description: "Turn on to hide the Calendar button on all platforms",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 6); }
                    },
                },
                {
                    id: "hmi-3DM",
                    name: "Three-Dot Menu",
                    description: "Turn on to hide the Three-Dot Menu button on all platforms",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 7); }
                    },
                },
                {
                    id: "hmi-PW",
                    name: "Page Width",
                    description: "Turn on to hide the Page Width button on all platforms",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 8); }
                    },
                },
                {
                    id: "hmi-Help",
                    name: "Help",
                    description: "Turn on to hide the Help button on all platforms",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 9); }
                    },
                },
            ]
        };
        const mobile = {
            tabTitle: "Hide Menu Items",
            settings: [
                {
                    id: "hmi-Menu",
                    name: "Mobile or All Platforms",
                    description: "Turn on to hide items on all platforms, leave off for Mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setMenu(evt); }
                    },
                },
                {
                    id: "hmi-DNPM",
                    name: "Daily Notes",
                    description: "Turn on to hide the Daily Notes link on mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMIM(evt, 1); }
                    },
                },
                {
                    id: "hmi-GOM",
                    name: "Graph Overview",
                    description: "Turn on to hide the Graph Overview link on mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMIM(evt, 2); }
                    },
                },
                {
                    id: "hmi-APM",
                    name: "All Pages",
                    description: "Turn on to hide the All Pages link on mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMIM(evt, 3); }
                    },
                },
                {
                    id: "hmi-RDM",
                    name: "Roam Depot",
                    description: "Turn on to hide the Roam Depot link on mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMIM(evt, 4); }
                    },
                },
                {
                    id: "hmi-PFM",
                    name: "Page Filter",
                    description: "Turn on to hide the Page Filter button on mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMIM(evt, 5); }
                    },
                },
                {
                    id: "hmi-CalM",
                    name: "Calendar",
                    description: "Turn on to hide the Calendar button on mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMIM(evt, 6); }
                    },
                },
                {
                    id: "hmi-3DMM",
                    name: "Three-Dot Menu",
                    description: "Turn on to hide the Three-Dot Menu button on mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMIM(evt, 7); }
                    },
                },
                {
                    id: "hmi-PWM",
                    name: "Page Width",
                    description: "Turn on to hide the Page Width button on mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMIM(evt, 8); }
                    },
                },
                {
                    id: "hmi-HelpM",
                    name: "Help",
                    description: "Turn on to hide the Help button on mobile only",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMIM(evt, 9); }
                    },
                },
            ]
        };
        extensionAPI.settings.panel.create(mobile);

        function setMenu(evt) {
            if (evt.target.checked) {
                extensionAPI.settings.panel.create(all);
            } else {
                extensionAPI.settings.panel.create(mobile);
            }
        }

        hmiDNP = extensionAPI.settings.get("hmi-DNP");
        hmiGO = extensionAPI.settings.get("hmi-GO");
        hmiAP = extensionAPI.settings.get("hmi-AP");
        hmiRD = extensionAPI.settings.get("hmi-RD");
        hmiPF = extensionAPI.settings.get("hmi-PF");
        hmiCal = extensionAPI.settings.get("hmi-Cal");
        hmi3DM = extensionAPI.settings.get("hmi-3DM");
        hmiPW = extensionAPI.settings.get("hmi-PW");
        hmiHelp = extensionAPI.settings.get("hmi-Help");

        function setHMI(evt, i) {
            if (i == 1) {
                hmiDNP = evt.target.checked;
            } else if (i == 2) {
                hmiGO = evt.target.checked;
            } else if (i == 3) {
                hmiAP = evt.target.checked;
            } else if (i == 4) {
                hmiRD = evt.target.checked;
            } else if (i == 5) {
                hmiPF = evt.target.checked;
            } else if (i == 6) {
                hmiCal = evt.target.checked;
            } else if (i == 7) {
                hmi3DM = evt.target.checked;
            } else if (i == 8) {
                hmiPW = evt.target.checked;
            } else if (i == 9) {
                hmiHelp = evt.target.checked;
            }
            hideDIVs();
        }
        function setHMIM(evt, i) {
            if (i == 1) {
                hmiDNPM = evt.target.checked;
            } else if (i == 2) {
                hmiGOM = evt.target.checked;
            } else if (i == 3) {
                hmiAPM = evt.target.checked;
            } else if (i == 4) {
                hmiRDM = evt.target.checked;
            } else if (i == 5) {
                hmiPFM = evt.target.checked;
            } else if (i == 6) {
                hmiCalM = evt.target.checked;
            } else if (i == 7) {
                hmi3DMM = evt.target.checked;
            } else if (i == 8) {
                hmiPWM = evt.target.checked;
            } else if (i == 9) {
                hmiHelpM = evt.target.checked;
            }
            hideDIVs();
        }
    },
    onunload: () => {
        hmiDNP = false;
        hmiGO = false;
        hmiAP = false;
        hmiRD = false;
        hmiPF = false;
        hmiCal = false;
        hmi3DM = false;
        hmiPW = false;
        hmiHelp = false;
        hmiDNPM = false;
        hmiGOM = false;
        hmiAPM = false;
        hmiRDM = false;
        hmiPFM = false;
        hmiCalM = false;
        hmi3DMM = false;
        hmiPWM = false;
        hmiHelpM = false;
        hideDIVs();
    }
}

async function hideDIVs() {
    let menuItems = document.querySelectorAll("div.log-button");
    let topbar = document.querySelectorAll("div.rm-topbar > span.bp3-popover-wrapper");
    if (window.roamAlphaAPI.platform.isMobile || window.roamAlphaAPI.platform.isMobileApp || window.roamAlphaAPI.platform.isTouchDevice || window.roamAlphaAPI.platform.isIOS) {
        // hide items if selected as mobile only or all platforms
        if (menuItems.length > 0) {
            for (var i = 0; i < menuItems.length; i++) {
                if (menuItems[i].innerText == "Daily Notes") {
                    if (hmiDNPM || hmiDNP) {
                        menuItems[i].style.display = "none";
                    } else {
                        menuItems[i].style.display = "";
                    }
                } else if (menuItems[i].innerText == "Graph Overview") {
                    if (hmiGOM || hmiGO) {
                        menuItems[i].style.display = "none";
                    } else {
                        menuItems[i].style.display = "";
                    }
                } else if (menuItems[i].innerText == "All Pages") {
                    if (hmiAPM || hmiAP) {
                        menuItems[i].style.display = "none";
                    } else {
                        menuItems[i].style.display = "";
                    }
                } else if (menuItems[i].innerText == "Roam Depot") {
                    if (hmiRDM || hmiRD) {
                        menuItems[i].style.display = "none";
                    } else {
                        menuItems[i].style.display = "";
                    }
                }

            }
        }

        if (topbar.length > 0) {
            for (var i = 0; i < topbar.length; i++) {
                if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-filter") {
                    if (hmiPFM || hmiPF) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-calendar") {
                    if (hmiCalM || hmiCal) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[3] == "bp3-icon-more") {
                    if (hmi3DMM || hmi3DM) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[3] == "bp3-icon-horizontal-distribution") {
                    if (hmiPWM || hmiPW) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.classList[2] == "bp3-icon-help") {
                    if (hmiHelpM || hmiHelp) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                }
            }
        }
    } else {
        // hide items only if selected for all platforms
        if (menuItems.length > 0) {
            for (var i = 0; i < menuItems.length; i++) {
                if (menuItems[i].innerText == "Daily Notes") {
                    if (hmiDNP) {
                        menuItems[i].style.display = "none";
                    } else {
                        menuItems[i].style.display = "";
                    }
                } else if (menuItems[i].innerText == "Graph Overview") {
                    if (hmiGO) {
                        menuItems[i].style.display = "none";
                    } else {
                        menuItems[i].style.display = "";
                    }
                } else if (menuItems[i].innerText == "All Pages") {
                    if (hmiAP) {
                        menuItems[i].style.display = "none";
                    } else {
                        menuItems[i].style.display = "";
                    }
                } else if (menuItems[i].innerText == "Roam Depot") {
                    if (hmiRD) {
                        menuItems[i].style.display = "none";
                    } else {
                        menuItems[i].style.display = "";
                    }
                }

            }
        }

        if (topbar.length > 0) {
            for (var i = 0; i < topbar.length; i++) {
                if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-filter") {
                    if (hmiPF) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[1] == "bp3-icon-calendar") {
                    if (hmiCal) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[3] == "bp3-icon-more") {
                    if (hmi3DM) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[3] == "bp3-icon-horizontal-distribution") {
                    if (hmiPW) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                } else if (topbar[i].childNodes[0]?.childNodes[0]?.classList[2] == "bp3-icon-help") {
                    if (hmiHelp) {
                        topbar[i].style.display = "none";
                    } else {
                        topbar[i].style.display = "";
                    }
                }
            }
        }
    }
}