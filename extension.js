var hmiDNP = false;
var hmiGO = false;
var hmiAP = false;
var hmiRD = false;
var hmiPF = false;
var hmiCal = false;
var hmi3DM = false;
var hmiPW = false;
var hmiHelp = false;

export default {
    onload: ({ extensionAPI }) => {
        const config = {
            tabTitle: "Hide Menu Items",
            settings: [
                {
                    id: "hmi-DNP",
                    name: "Daily Notes",
                    description: "Turn on to hide the Daily Notes link",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 1); }
                    },
                },
                {
                    id: "hmi-GO",
                    name: "Graph Overview",
                    description: "Turn on to hide the Graph Overview link",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 2); }
                    },
                },
                {
                    id: "hmi-AP",
                    name: "All Pages",
                    description: "Turn on to hide the All Pages link",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 3); }
                    },
                },
                {
                    id: "hmi-RD",
                    name: "Roam Depot",
                    description: "Turn on to hide the Roam Depot link",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 4); }
                    },
                },
                {
                    id: "hmi-PF",
                    name: "Page Filter",
                    description: "Turn on to hide the Page Filter button",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 5); }
                    },
                },
                {
                    id: "hmi-Cal",
                    name: "Calendar",
                    description: "Turn on to hide the Calendar button",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 6); }
                    },
                },
                {
                    id: "hmi-3DM",
                    name: "Three-Dot Menu",
                    description: "Turn on to hide the Three-Dot Menu button",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 7); }
                    },
                },
                {
                    id: "hmi-PW",
                    name: "Page Width",
                    description: "Turn on to hide the Page Width button",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 8); }
                    },
                },
                {
                    id: "hmi-Help",
                    name: "Help",
                    description: "Turn on to hide the Help button",
                    action: {
                        type: "switch",
                        onChange: (evt) => { setHMI(evt, 9); }
                    },
                },
            ]
        };       
        extensionAPI.settings.panel.create(config);

        hmiDNP = extensionAPI.settings.get("hmi-DNP");
        hmiGO = extensionAPI.settings.get("hmi-GO");
        hmiAP = extensionAPI.settings.get("hmi-AP");
        hmiRD = extensionAPI.settings.get("hmi-RD");
        hmiPF = extensionAPI.settings.get("hmi-PF");
        hmiCal = extensionAPI.settings.get("hmi-Cal");
        hmi3DM = extensionAPI.settings.get("hmi-3DM");
        hmiPW = extensionAPI.settings.get("hmi-PW");
        hmiHelp = extensionAPI.settings.get("hmi-Help");

        async function setHMI(evt, i) {
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
        hideDIVs();
    }
}

async function hideDIVs() {
    let menuItems = document.querySelectorAll("div.log-button");
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

    let topbar = document.querySelectorAll("div.rm-topbar > span.bp3-popover-wrapper");    
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
            }  else if (topbar[i].childNodes[0]?.childNodes[0]?.childNodes[0]?.childNodes[0]?.classList[3] == "bp3-icon-horizontal-distribution") {
                if (hmiPW) {
                    topbar[i].style.display = "none";
                } else {
                    topbar[i].style.display = "";
                }
            }  else if (topbar[i].childNodes[0]?.childNodes[0]?.classList[2] == "bp3-icon-help") {
                if (hmiHelp) {
                    topbar[i].style.display = "none";
                } else {
                    topbar[i].style.display = "";
                }
            } 
        }
    }
}