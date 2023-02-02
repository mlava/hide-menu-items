var hmiPF = false;
var hmiCal = false;
var hmi3DM = false;
var hmiPW = false;
var hmiHelp = false;
var hmiRS = false;

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
        hideDIVs();
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
    var pf, pfSib, calendar, calendarSib, threeDot, threeDotSib, width, widthSib, help, helpSib, rightSidebar;

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
            }
        }
    }

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
    }
}

// hopefully redundant code, kept only to make sure above is working properly on mobile, electron etc
// I will remove in a future version if above working correctly

/*
    let electron = false;
    if (window.roamAlphaAPI.platform.isMobileApp || window.roamAlphaAPI.platform.isDesktop) {
        electron = true;
    }

    if (!electron) {
        pf = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-icon.bp3-icon-filter)");
        pfSib = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-icon.bp3-icon-filter) + .rm-topbar__spacer-sm");
        calendar = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-icon.bp3-icon-calendar)");
        calendarSib = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-icon.bp3-icon-calendar) + .rm-topbar__spacer-sm");
        threeDot = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-button.bp3-minimal.bp3-small.bp3-icon-more)");
        threeDotSib = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-button.bp3-minimal.bp3-small.bp3-icon-more) + .rm-topbar__spacer-sm");
        width = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-button.bp3-minimal.bp3-small.bp3-icon-horizontal-distribution)");
        widthSib = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-button.bp3-minimal.bp3-small.bp3-icon-horizontal-distribution) + .rm-topbar__spacer-sm");
        help = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-button.bp3-minimal.bp3-icon-help.bp3-small)");
        helpSib = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-button.bp3-minimal.bp3-icon-help.bp3-small) + .rm-topbar__spacer-sm");
        rightSidebar = document.querySelector("span.bp3-popover-wrapper:has(span.bp3-icon-menu-closed)");
    } else {
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
                }
            }
        }
    }
*/