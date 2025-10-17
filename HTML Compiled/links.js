document.addEventListener("DOMContentLoaded", () => {
    // Contact page popup logic
    if (window.location.pathname.includes("Contact.html")) {
        const button = document.getElementById("fun-button");
        const popup = document.getElementById("email-popup");
        const closeBtn = document.getElementById("close-popup");

        if (button && popup && closeBtn) {
            button.addEventListener("click", () => {
                popup.style.display = "flex";
            });

            closeBtn.addEventListener("click", () => {
                popup.style.display = "none";
            });

            // Close popup if clicking outside the box
            popup.addEventListener("click", (e) => {
                if (e.target === popup) {
                    popup.style.display = "none";
                }
            });
        }
    }

    // Resume button logic (runs on all pages)
    const container = document.getElementById("resume-button-container");
    if (container) {
        container.innerHTML = `
          <a href="Bo_2026_SWE_Berkeley_CDSS_Resume.pdf" target="_blank">
            <button class="color-pop-button">View My Resume</button>
          </a>
        `;
    }
});