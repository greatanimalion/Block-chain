export function setLocalStorage(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
}
export function getLocalStorage(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    }
    return null;
}

export function removeLocalStorage(key: string) {
    localStorage.removeItem(key);
}

export  function setCookie(name: string, value: string, days: number=1) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function getCookie(name: string) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop()?.split(";").shift();
    }
    return null;
}

export function removeCookie(name: string) {
    setCookie(name, "", -1);
}