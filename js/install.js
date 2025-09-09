let deferredInstallPrompt = null;
const installButton = document.getElementById("btnInstall");

installButton.addEventListener("click", installPWA);

window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    deferredInstallPrompt = evt;
    installButton.removeAttribute("hidden");
}

function installPWA(evt) {
    deferredInstallPrompt.prompt();

    evt.srcElement.setAttribute("hidden", true);

    deferredInstallPrompt.userChoice.then((choice) => {
        if (choice.outcome === "accepted") {
            console.log("User accepeted the A2HS prompt", choice);
        } else {
            console.log("User dismissed the A2HS prompt", choice);
        }

        deferredInstallPrompt = null;
    });
}

const logAppInstalled = (evt) => {
    console.log("L'application Synakode est installé.", evt);
};
window.addEventListener("appinstalled", logAppInstalled);
