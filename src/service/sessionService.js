export default new class SessionService {
    get(key) {
        let val = sessionStorage.getItem(key);
        return val ? JSON.parse(val) : null;
    }

    set(key, val) {
        sessionStorage.setItem(key, JSON.stringify(val));
    }

    getCurrentUser() {
        return this.get('user');
    }

    setCurrentUser(user) {
        this.set('user', user);
    }

    clear() {
        sessionStorage.clear();
    }
}