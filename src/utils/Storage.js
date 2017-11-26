export default class Storage {
    constructor(type) {
        this.type = type || 'localStorage';
        this.isAvailable = Storage.isStorageAvailable(this.type);
    }

    static isStorageAvailable(type) {
    	try {
    		let storage = window[type];
    		let x = '__storage_test__';
    		storage.setItem(x, x);
    		storage.removeItem(x);
    		return true;
    	}
    	catch(e) {
            console.warn(`${type} is not available`);
    		return false;
    	}
    }

    save(key, item) {
        if (!this.isAvailable) return;

        let storage = window[this.type];
        storage.setItem(key, JSON.stringify(item));
    }

    get(key) {
        if (!this.isAvailable) return;

        const storage = window[this.type];
        const item = storage.getItem(key);

        if (item) return JSON.parse(item);

        return item;
    }
}