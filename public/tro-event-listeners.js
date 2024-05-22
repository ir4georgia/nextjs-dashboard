document.addEventListener('userConsentReady', function (detail) {
    console.log("MP-OPS: User Consent Ready Event at " + new Date(Date.now()).toLocaleString())
}, true)

document.addEventListener('AdFuelCreated', function (detail) {
    console.log("MP-OPS: AdFuel is Created Event at " + new Date(Date.now()).toLocaleString())
    document.getElementById("AdFuelVersion").innerHTML = "Ad Fuel Version: <b>" + AdFuel.version().toString() + "</b>"
    document.getElementById("UCVersion").innerHTML = "UserConsent Version: <b>" + window.WM.UserConsent.getVersion().toString() + "</b>"
}, true)

document.addEventListener('AdFuelRequestComplete', function (detail) {
    console.log("MP-OPS: AdFuel Request Complete Event at " + new Date(Date.now()).toLocaleString())
}, true)

document.addEventListener('GPTRenderComplete', function (event) {
    console.log('MP-OPS: GPTRenderComplete Event for ' + event.detail.divId + ' fired at ' + new Date(Date.now()).toLocaleString());
}, true)

document.addEventListener('GPTSlotLoaded', function (event) {
    console.log('MP-OPS: GPTSlotLoaded Event for ' + event.detail.slot.getSlotElementId() + ' fired at ' + new Date(Date.now()).toLocaleString());
}, true)
