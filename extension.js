var hmiPF, hmiCal, hmi3DM, hmiPW, hmiHelp, hmiRS = undefined;
var hmiYTT, hmiWS, hmiTOC, hmiAT = undefined;
let observer = undefined;

export default {
    onload: ({ extensionAPI }) => {
        const config = {
            tabTitle: "Hide Topbar Buttons",
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
                {
                    id: "hmi-YTT",
                    name: "Yesterday & Tomorrow",
                    description: "Whether to hide the Yesterday & Tomorrow buttons",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 7); } },
                },
                {
                    id: "hmi-WS",
                    name: "Workspaces",
                    description: "Whether to hide the Workspaces button",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 8); } },
                },
                {
                    id: "hmi-TOC",
                    name: "Table of Contents",
                    description: "Whether to hide the Table of Contents button",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 9); } },
                },
                {
                    id: "hmi-AT",
                    name: "Auto Tag",
                    description: "Whether to hide the Auto Tag button",
                    action: { type: "select", items: ["Show on All Platforms", "Hide on Mobile", "Hide on All Platforms"], onChange: (evt) => { setHMI(evt, 10); } },
                },
            ]
        };
        extensionAPI.settings.panel.create(config);

        // onload
        if (extensionAPI.settings.get("hmi-PF")) {
            hmiPF = extensionAPI.settings.get("hmi-PF");
        } else {
            hmiPF = "Show on All Platforms";
        }
        if (extensionAPI.settings.get("hmi-Cal")) {
            hmiCal = extensionAPI.settings.get("hmi-Cal");
        } else {
            hmiCal = "Show on All Platforms";
        }
        if (extensionAPI.settings.get("hmi-3DM")) {
            hmi3DM = extensionAPI.settings.get("hmi-3DM");
        } else {
            hmi3DM = "Show on All Platforms";
        }
        if (extensionAPI.settings.get("hmi-PW")) {
            hmiPW = extensionAPI.settings.get("hmi-PW");
        } else {
            hmiPW = "Show on All Platforms";
        }
        if (extensionAPI.settings.get("hmi-Help")) {
            hmiHelp = extensionAPI.settings.get("hmi-Help");
        } else {
            hmiHelp = "Show on All Platforms";
        }
        if (extensionAPI.settings.get("hmi-RS")) {
            hmiRS = extensionAPI.settings.get("hmi-RS");
        } else {
            hmiRS = "Show on All Platforms";
        }
        
        if (extensionAPI.settings.get("hmi-YTT")) {
            hmiYTT = extensionAPI.settings.get("hmi-YTT");
        } else {
            hmiYTT = "Show on All Platforms";
        }
        if (extensionAPI.settings.get("hmi-WS")) {
            hmiWS = extensionAPI.settings.get("hmi-WS");
        } else {
            hmiWS = "Show on All Platforms";
        }
        if (extensionAPI.settings.get("hmi-TOC")) {
            hmiTOC = extensionAPI.settings.get("hmi-TOC");
        } else {
            hmiTOC = "Show on All Platforms";
        }
        if (extensionAPI.settings.get("hmi-AT")) {
            hmiAT = extensionAPI.settings.get("hmi-AT");
        } else {
            hmiAT = "Show on All Platforms";
        }
        hideDIVs();

        // onchange
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
            } else if (i == 7) {
                hmiYTT = evt;
            } else if (i == 8) {
                hmiWS = evt;
            } else if (i == 9) {
                hmiTOC = evt;
            } else if (i == 10) {
                hmiAT = evt;
            }
            hideDIVs();
        }

        async function initiateObserver() {
            const targetNode1 = document.getElementsByClassName("rm-topbar")[0];
            const config = { attributes: false, childList: true, subtree: true };
            const callback = function (mutationsList, observer) {
                for (const mutation of mutationsList) {
                    if (mutation.addedNodes[0]) {
                        for (var i = 0; i < mutation.addedNodes[0]?.classList.length; i++) {
                            if (mutation.addedNodes[0]?.classList[i] == "rm-open-left-sidebar-btn") { // left sidebar has been closed
                                hideDIVs();
                            }
                        }
                    } else if (mutation.removedNodes[0]) {
                        for (var i = 0; i < mutation.removedNodes[0]?.classList.length; i++) {
                            if (mutation.removedNodes[0]?.classList[i] == "rm-open-left-sidebar-btn") { // left sidebar has been opened
                                hideDIVs();
                            }
                        }
                    }
                }
            };
            observer = new MutationObserver(callback);
            observer.observe(targetNode1, config);
        }
        initiateObserver();
    },
    onunload: () => {
        observer.disconnect();
        hmiPF = false;
        hmiCal = false;
        hmi3DM = false;
        hmiPW = false;
        hmiHelp = false;
        hmiRS = false;
        hmiYTT = false;
        hmiWS = false;
        hmiTOC = false;
        hmiAT = false;
        hideDIVs();
    }
}

async function hideDIVs() {
    var pf, pfSib, calendar, calendarSib, threeDot, threeDotSib, width, widthSib, help, helpSib, rightSidebar;
    var ytt, ws, toc, at, atSib;

    let topbar = document.querySelectorAll("div.rm-topbar > span.bp3-popover-wrapper");
    if (topbar.length > 0) {
        for (var i = 0; i < topbar.length; i++) {
            if (topbar[i].innerHTML.indexOf("bp3-icon-filter") !== -1) {
                pf = topbar[i];
                pfSib = pf.nextSibling;
            } else if (topbar[i].innerHTML.indexOf("bp3-icon-calendar") !== -1) {
                calendar = topbar[i];
                calendarSib = calendar.nextSibling;
            } else if (topbar[i].innerHTML.indexOf("bp3-icon-more") !== -1) {
                threeDot = topbar[i];
                threeDotSib = threeDot.nextSibling;
            } else if (topbar[i].innerHTML.indexOf("bp3-icon-horizontal-distribution") !== -1) {
                width = topbar[i];
                widthSib = width.nextSibling;
            } else if (topbar[i].innerHTML.indexOf("bp3-icon-help") !== -1) {
                help = topbar[i];
                helpSib = help.nextSibling;
            } else if (topbar[i].innerHTML.indexOf("bp3-icon-menu-closed") !== -1) {
                rightSidebar = topbar[i];
            } else if (topbar[i].innerHTML.indexOf("bp3-icon-eye-off") !== -1) {
                at = topbar[i];
                atSib = at.nextSibling;
            }
        }
    }

    ytt = document.getElementById("todayTomorrow");
    ws = document.getElementById("workspaces");
    toc = document.getElementById("tableOfContents");

    if (window.roamAlphaAPI.platform.isMobile || window.roamAlphaAPI.platform.isMobileApp || window.roamAlphaAPI.platform.isTouchDevice || window.roamAlphaAPI.platform.isIOS) {
        // hide items if selected as mobile only or all platforms
        if (hmiPF != "Show on All Platforms") {
            if (pf != undefined) {
                pf.style.display = "none";
            }
            if (pfSib != undefined) {
                pfSib.style.display = "none";
            }
        } else {
            if (pf != undefined) {
                pf.style.display = "";
            }
            if (pfSib != undefined) {
                pfSib.style.display = "";
            }
        }
        if (hmiCal != "Show on All Platforms") {
            if (calendar != undefined) {
                calendar.style.display = "none";
            }
            if (calendarSib != undefined) {
                calendarSib.style.display = "none";
            }
        } else {
            if (calendar != undefined) {
                calendar.style.display = "";
            }
            if (calendarSib != undefined) {
                calendarSib.style.display = "";
            }
        }
        if (hmi3DM != "Show on All Platforms") {
            if (threeDot != undefined) {
                threeDot.style.display = "none";
            }
            if (threeDotSib != undefined) {
                threeDotSib.style.display = "none";
            }
        } else {
            if (threeDot != undefined) {
                threeDot.style.display = "";
            }
            if (threeDotSib != undefined) {
                threeDotSib.style.display = "";
            }
        }
        if (hmiPW != "Show on All Platforms") {
            if (width != undefined) {
                width.style.display = "none";
            }
            if (widthSib != undefined) {
                widthSib.style.display = "none";
            }
        } else {
            if (width != undefined) {
                width.style.display = "";
            }
            if (widthSib != undefined) {
                widthSib.style.display = "";
            }
        }
        if (hmiHelp != "Show on All Platforms") {
            if (help != undefined) {
                help.style.display = "none";
            }
            if (helpSib != undefined) {
                helpSib.style.display = "none";
            }
        } else {
            if (help != undefined) {
                help.style.display = "";
            }
            if (helpSib != undefined) {
                helpSib.style.display = "";
            }
        }
        if (hmiRS != "Show on All Platforms") {
            if (rightSidebar != undefined) {
                rightSidebar.style.display = "none";
            }
        } else {
            if (rightSidebar != undefined) {
                rightSidebar.style.display = "";
            }
        }
        if (hmiYTT != "Show on All Platforms") {
            if (ytt != undefined) {
                ytt.style.display = "none";
            }
        } else {
            if (ytt != undefined) {
                ytt.style.display = "";
            }
        }
        if (hmiWS != "Show on All Platforms") {
            if (ws != undefined) {
                ws.style.display = "none";
            }
        } else {
            if (ws != undefined) {
                ws.style.display = "";
            }
        }
        if (hmiTOC != "Show on All Platforms") {
            if (toc != undefined) {
                toc.style.display = "none";
            }
        } else {
            if (toc != undefined) {
                toc.style.display = "";
            }
        }
        if (hmiAT != "Show on All Platforms") {
            if (at != undefined) {
                at.style.display = "none";
            }
            if (atSib != undefined) {
                atSib.style.display = "none";
            }
        } else {
            if (at != undefined) {
                at.style.display = "";
            }
            if (atSib != undefined) {
                atSib.style.display = "";
            }
        }
    } else {
        // hide items only if selected for all platforms
        if (hmiPF == "Hide on All Platforms") {
            if (pf != undefined) {
                pf.style.display = "none";
            }
            if (pfSib != undefined) {
                pfSib.style.display = "none";
            }
        } else {
            if (pf != undefined) {
                pf.style.display = "";
            }
            if (pfSib != undefined) {
                pfSib.style.display = "";
            }
        }
        if (hmiCal == "Hide on All Platforms") {
            if (calendar != undefined) {
                calendar.style.display = "none";
            }
            if (calendarSib != undefined) {
                calendarSib.style.display = "none";
            }
        } else {
            if (calendar != undefined) {
                calendar.style.display = "";
            }
            if (calendarSib != undefined) {
                calendarSib.style.display = "";
            }
        }
        if (hmi3DM == "Hide on All Platforms") {
            if (threeDot != undefined) {
                threeDot.style.display = "none";
            }
            if (threeDotSib != undefined) {
                threeDotSib.style.display = "none";
            }
        } else {
            if (threeDot != undefined) {
                threeDot.style.display = "";
            }
            if (threeDotSib != undefined) {
                threeDotSib.style.display = "";
            }
        }
        if (hmiPW == "Hide on All Platforms") {
            if (width != undefined) {
                width.style.display = "none";
            }
            if (widthSib != undefined) {
                widthSib.style.display = "none";
            }
        } else {
            if (width != undefined) {
                width.style.display = "";
            }
            if (widthSib != undefined) {
                widthSib.style.display = "";
            }
        }
        if (hmiHelp == "Hide on All Platforms") {
            if (help != undefined) {
                help.style.display = "none";
            }
            if (helpSib != undefined) {
                helpSib.style.display = "none";
            }
        } else {
            if (help != undefined) {
                help.style.display = "";
            }
            if (helpSib != undefined) {
                helpSib.style.display = "";
            }
        }
        if (hmiRS == "Hide on All Platforms") {
            if (rightSidebar != undefined) {
                rightSidebar.style.display = "none";
            }
        } else {
            if (rightSidebar != undefined) {
                rightSidebar.style.display = "";
            }
        }
        if (hmiYTT == "Hide on All Platforms") {
            if (ytt != undefined) {
                ytt.style.display = "none";
            }
        } else {
            if (ytt != undefined) {
                ytt.style.display = "";
            }
        }
        if (hmiWS == "Hide on All Platforms") {
            if (ws != undefined) {
                ws.style.display = "none";
            }
        } else {
            if (ws != undefined) {
                ws.style.display = "";
            }
        }
        if (hmiTOC == "Hide on All Platforms") {
            if (toc != undefined) {
                toc.style.display = "none";
            }
        } else {
            if (toc != undefined) {
                toc.style.display = "";
            }
        }
        if (hmiAT == "Hide on All Platforms") {
            if (at != undefined) {
                at.style.display = "none";
            }
            if (atSib != undefined) {
                atSib.style.display = "none";
            }
        } else {
            if (at != undefined) {
                at.style.display = "";
            }
            if (atSib != undefined) {
                atSib.style.display = "";
            }
        }
    }
}