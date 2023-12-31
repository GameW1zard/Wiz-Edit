const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', function (event) {

    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
    console.log('PWA not installed');
});

//Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async function () {

        const promptEvent = window.deferredPrompt;

        if (!promptEvent) {
            return;
        }

        promptEvent.prompt();

        window.deferredPrompt = null;

        butInstall.classList.add('hide');
        console.log('PWA was installed');
});

//Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', function (event) {

    window.deferredPrompt = null;
    console.log('already installed');

});
