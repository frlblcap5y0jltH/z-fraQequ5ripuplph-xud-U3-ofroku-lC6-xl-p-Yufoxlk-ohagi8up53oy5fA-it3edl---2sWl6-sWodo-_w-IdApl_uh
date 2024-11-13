const previousNumbers = new Set();
const loadForm = document.getElementById("loadForm");
const loadingMessage = document.getElementById("loadingMessage");
const loadingText = document.getElementById("loadingText");
const prankImage = document.getElementById("prankImage");

loadForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const network = document.getElementById("network").value;
    const mobile = document.getElementById("mobile").value;
    
    if (network && mobile.length === 11 && mobile.startsWith("09")) {
        previousNumbers.add(mobile);
        loadingMessage.style.display = "block";
        prankImage.style.display = "none";

        let loadingStages = ["Processing...", "Getting your details...", "Almost there..."];
        let stage = 0;

        const loadingInterval = setInterval(() => {
            if (stage < loadingStages.length) {
                loadingText.textContent = loadingStages[stage];
                stage++;
            } else {
                clearInterval(loadingInterval);
                loadingMessage.style.display = "none";
                prankImage.style.display = "block";

                const audioPath = 'src/audios/mEQa2Owepen8StO.mp3';
                document.title = "Joke lang par!";
                document.querySelector(".container h1").textContent = "Joke lang par!";
                document.querySelector(".container p").textContent = "😂 Na prank ka ata bossing??";
                document.querySelector(".warning").remove();
                document.getElementById("loadForm").remove();

                const audio = new Audio(audioPath);
                audio.play().catch(error => {
                    console.error("Audio playback failed: ", error);
                });
            }
        }, 1500);
    }
});