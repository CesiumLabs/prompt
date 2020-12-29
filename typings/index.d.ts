declare module "simple-prompt" {

    class SimplePrompt {

        /**
         * Synchronous prompt for node.js
         * @param message Prompt message
         * @param defaultResponse Default response
         */
        static prompt(message: string, defaultResponse?: string): string;

    }

    export const version: string;

    export default SimplePrompt;

}