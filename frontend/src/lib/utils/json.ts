type ReviverType =  ((this: any, key: string, value: any) => any) | undefined
function safeJSONparse(text: string, defaultVal: any = null, reviver?: ReviverType) {
    try {
        const parsed = JSON.parse(text, reviver);
        return parsed;
    } catch (e) {
        return defaultVal;
    }
}

export {safeJSONparse};