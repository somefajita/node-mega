class Mega {
    constructor(link, options = {}) {
        if (!link) return new Error('LINK_NOT_DEFINED');
        this.link = link;
        this.options = options;
        this.rest = {'api': true};
    }

    get api() {
        return new Promise((res) => res(this.rest.api));
    }

    set api(api = this.rest.api) {
        this.rest.api = api;
    }
}

module.exports = Mega;