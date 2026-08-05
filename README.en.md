[中文](./README.md)

# MultiCase Search Transformer

Search camelCase and kebab-case variants of the word under the cursor with one command.

## Features

- Converts the word under the cursor into camelCase and kebab-case variants.
- Opens VS Code workspace search with a combined regular expression.
- Removes duplicate variants automatically.
- Provides localized English and Simplified Chinese commands and messages.

## Usage

1. Place the cursor on a camelCase or kebab-case word.
2. Run MultiCase Search Transformer: Search camelCase and kebab-case Variants from the Command Palette.
3. Review all matching variants in the Search view.

## Development

~~~powershell
npm ci
npm run compile
npm test
~~~

## License

MIT
