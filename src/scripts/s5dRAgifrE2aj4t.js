const mobileInput = document.getElementById("mobile");

mobileInput.addEventListener("focus", function() {
    if (!mobileInput.value.startsWith("09")) {
        mobileInput.value = "09";
    }
});

mobileInput.addEventListener("input", function() {
    if (!mobileInput.value.startsWith("09")) {
        mobileInput.value = "09" + mobileInput.value.replace(/\D/g, "").slice(0, 9);
    } else {
        mobileInput.value = "09" + mobileInput.value.slice(2).replace(/\D/g, "").slice(0, 9);
    }
});