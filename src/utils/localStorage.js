export default class LocalStorage {
    #key;

    constructor({key}) {
        if (!key) throw Error('Key required')
        this.#key = key;
    }

    get item() {
        try {
            // TODO: Nullish && type check
            return JSON.parse(window.localStorage.getItem(this.#key));
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    set item(value) {
        try {
            if (typeof value == 'string' || typeof value == 'number') {
                window.localStorage.setItem(this.#key, value)
            } else {
                window.localStorage.setItem(this.#key, JSON.stringify(value))
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
}