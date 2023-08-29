/** @typedef  {import("prettier").Config} PrettierConfig*/
/** @typedef  {{ tailwindConfig: string }} TailwindConfig*/

/** @type PrettierConfig */
const config = {
    arrowParens: "always",
    printWidth: 120,
    singleQuote: false,
    jsxSingleQuote: false,
    semi: true,
    trailingComma: "all",
    tabWidth: 4,
    importOrderTypeScriptVersion: "4.4.0",
    importOrder: [
        "^(react/(.*)$)|^(react$)",
        "^(next/(.*)$)|^(next$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^~/utils/(.*)$",
        "^~/components/(.*)$",
        "^~/styles/(.*)$",
        "^~/(.*)$",
        "^[./]",
    ],
};

module.exports = config;
