
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('contactPopup');
    const closeBtn = document.getElementById('closePopupBtn');
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');

    if (!popup) return;

    // Popup openen
    ['openPopupBtn', 'openPopupBtn2', 'openPopupBtnCta'].forEach(function (id) {
        const button = document.getElementById(id);

        if (button) {
            button.addEventListener('click', function (event) {
                event.preventDefault();
                popup.style.display = 'flex';
            });
        }
    });

    // Popup sluiten
    function closePopup() {
        popup.style.display = 'none';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }

    // Sluiten bij klikken op de achtergrond
    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Sluiten met Escape
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && popup.style.display === 'flex') {
            closePopup();
        }
    });

    // Formulierfeedback
    if (contactForm && submitBtn && formStatus) {
        contactForm.addEventListener('submit', function () {
            // Dit gebeurt alleen als de browser het formulier geldig vindt.
            submitBtn.disabled = true;
            submitBtn.textContent = 'Bericht wordt verzonden...';

            formStatus.hidden = false;
            formStatus.textContent =
                'Je bericht wordt verzonden. Een moment geduld.';
        });
    }
});
