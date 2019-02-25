function setCookie(cookieName, cookieValue, exDays) {
    const date = new Date();
    date.setTime(date.getTime() + (exDays * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`;
}

export function getCookie() {
    let cookieData = readCookie('rex_site_react');
    if (cookieData.currentLang == 'English') {
        cookieData.currentLang = '日本語';
    }
    if (cookieData == '') {
        cookieData = {
            visibleSection: 'designer',
            currentColor: 'red',
            currentLang: '日本語',
        };
        const cookieTextData = JSON.stringify(cookieData);
        setCookie('rex_site_react', cookieTextData, 365);
    }
    return cookieData;
}

function readCookie(cookieName) {
    const name = `${cookieName}=`;
    const result = [];
    const cookieAttributes = document.cookie.split(';');
    for (let i = 0; i < cookieAttributes.length; i++) {
        let cookieAttribute = cookieAttributes[i];
        while (cookieAttribute.charAt(0) == ' ') {
            cookieAttribute = cookieAttribute.substring(1);
        }
        if (cookieAttribute.indexOf(name) == 0) {
            return cookieAttribute.substring(name.length, cookieAttribute.length);
        }
    }
    return '';
}

function getCookiePiece(piece) {
    let cookieAttributes = getCookie();
    if (typeof cookieAttributes === 'string') {
        cookieAttributes = JSON.parse(cookieAttributes);
        return cookieAttributes[piece];
    }
    return cookieAttributes[piece];
}

function setCookiePiece(atLocation, newValue) {
    let cookieData = getCookie();
    cookieData = JSON.parse(cookieData);
    cookieData[atLocation] = newValue;
    if (newValue != '' && newValue != null) {
        const cookieTextData = JSON.stringify(cookieData);
        setCookie('rex_site_react', cookieTextData, 365);
    }
}

export function getVisibleSectionCookie() {
    return getCookiePiece('visibleSection');
}
export function setVisibleSectionCookie(selectedSection) {
    setCookiePiece('visibleSection', selectedSection);
}

export function getCurrentColorCookie() {
    return getCookiePiece('currentColor');
}
export function setCurrentColorCookie(color) {
    setCookiePiece('currentColor', color);
}

export function getCurrentLangCookie() {
    return getCookiePiece('currentLang');
}
export function setCurrentLangCookie(lang) {
    setCookiePiece('currentLang', lang);
}