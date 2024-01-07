document.addEventListener('DOMContentLoaded', function () {

    const languageSelectorWrapper = document.querySelector('#language-selector-wrapper');

    if (Boolean(languageSelectorWrapper)) {
        languageSelectorWrapper.style.opacity = '1';
    }

    const languageSelector = document.querySelector('#language-selector');
    if (Boolean(languageSelector)) {
        languageSelector.addEventListener('change', function (event) {
            event.preventDefault();

            const path = event.currentTarget.value;
            const language = event.currentTarget.options[event.currentTarget.selectedIndex].getAttribute('data-lang');

            Cookies.set(
                'STYXKEY-user_current_language',
                language,
                {
                    expires: 7,
                    path: '/',
                },
            );

            setTimeout(
                function (path) {
                    const search = (window.location.search !== '')
                        ? window.location.search
                        : '';
                    window.location = path + search;
                },
                250,
                path,
            );

        });
    }
    giveDecorativeImagesNullAltTag();
    promoLandingDynamicCTA();

}, false);

function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function (el) {
        let [key, value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

function getLanguageCode() {
    return getCookie('wp-wpml_current_language').split('-')[0];
}

/* Dynamic CTA Button in Promo Landing Pages */
function promoLandingDynamicCTA() {
    const button = document.querySelector('.promo-landing-cta-dynamic-button');
    if (Boolean(button)) {
        let currentURL = window.location.href;

        let promoCode = '';
        let urlSegments = currentURL.split('/');
        var lastSegment = urlSegments[urlSegments.length - 1];

        if ((lastSegment === '') || (lastSegment.includes('?'))) {
            promoCode = urlSegments[urlSegments.length - 2];
        } else {
            promoCode = lastSegment;
        }

        var localeCode = '';
        var localeObject = {
            "az": "az-AZ",
            "bs": "bs-BA",
            "bg": "bg-BG",
            "hr": "hr-HR",
            "cs": "cs-CZ",
            "da": "da-DK",
            "nl": "nl-NL",
            "digital": "en-US",
            "et": "et-EE",
            "fi": "fi-FI",
            "fr": "fr-FR",
            "de": "de-DE",
            "ka": "ka-GE",
            "el": "el-GR",
            "he": "he-IL",
            "hu": "hu-HU",
            "id": "id-ID",
            "it": "it-IT",
            "ja": "ja-JP",
            "ko": "ko-KR",
            "lv": "lv-LV",
            "lt": "lt-LT",
            "ms": "ms-MY",
            "no": "no-NO",
            "pl": "pl-PL",
            "ro": "ro-RO",
            "ru": "ru-RU",
            "sr": "sr-SR",
            "sk": "sk-SK",
            "sl": "sl-SI",
            "es": "es-ES",
            "sv": "sv-SE",
            "th": "th-TH",
            "tr": "tr-TR",
            "uk": "uk-UA",
            "vi": "vi-VT"
        };

        var localeSubdirectory = currentURL.split('/')[3];

        if (localeSubdirectory.includes('-')) {
            var parts = localeSubdirectory.split('-');
            var firstPart = parts[0];
            var secondPart = parts[1].toUpperCase();
            localeCode = firstPart + '-' + secondPart;
        } else {
            localeCode = localeObject[localeSubdirectory] || 'en-US';
        }

        var href = 'https://' + promoCode + '.happymealdigital.com/?locale=' + localeCode;


        button.setAttribute('href', href);
    }
};

function giveDecorativeImagesNullAltTag() {
    // BeTheme, by default, sets any image without a defined alt tag to have an alt tag equal to the page title
    const pageTitle = document.title.split(' | ')[0]; // Taking only page title -- removing site title
    const allImages = document.getElementsByTagName('img');

    // Iterate over the images using forEach
    Array.from(allImages).forEach(image => {
        // Check if the image has an alt attribute equal to the page title
        if (image.alt === pageTitle) {
            // Set alt attribute to an empty string to make it null
            image.alt = '';
        }
    });
}

function getOverlayImages() {
    return (document.getElementById("Content").getElementsByClassName("mcb-background-overlay"));
}

function applyAriaLabelToImageElement(imageElement, ariaLabel) {
    if (!imageElement) {
        // TODO: Should this be a console.warn, instead of error.
        console.error('Image element is null or undefined.');
        return;
    }

    imageElement.setAttribute('role', 'img');
    imageElement.setAttribute('aria-label', ariaLabel);
}
