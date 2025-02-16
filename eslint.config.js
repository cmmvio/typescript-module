import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
                sourceType: "module"
            }
        },
        files: ["src/**/*.ts", "apps/**/*.ts", "libs/**/*.ts", "test/**/*.ts"],
        ignores: ["node_modules", "dist", "build", ".generated", "eslint.config.js"],
        plugins: {
            "@typescript-eslint": tseslint,
            prettier
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...prettier.configs.recommended.rules,
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "off"
        },

        settings: {
            env: {
                node: true,
                jest: true
            }
        }
    }
];
