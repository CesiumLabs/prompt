const SimplePromptAddon = require("./lib/addon");

class SimplePrompt {

    constructor() {
        throw new Error(`The ${this.constructor.name} class may not be instantiated!`);
    }

    /**
     * Synchronous prompt for node.js
     * @param {string} message Prompt message
     * @param {?string} [defaultResponse=null] Default response
     * @returns {string}
     */
    static prompt(message, defaultResponse = null) {
        if (typeof message !== "string") throw new TypeError(`Prompt message must be a string, received ${typeof message}!`);
        if (!message && (!defaultResponse || typeof defaultResponse !== "string")) throw new Error("Missing prompt message!");

        if (!message && defaultResponse) return defaultResponse;

        const response = SimplePromptAddon.prompt(message);

        return response;
    }

}

module.exports = SimplePrompt;
module.exports.default = SimplePrompt;
module.exports.version = require("./package.json").version;