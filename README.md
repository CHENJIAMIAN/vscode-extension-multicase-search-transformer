# MultiCase Search Transformer / 多命名风格搜索转换器

<!-- codex-github-rules:bilingual-summary -->
> **中文简介**：VS Code 多条件搜索转换扩展

> **English summary**: A VS Code extension for transforming multi-condition searches

---

Search camelCase and kebab-case variants of the word under the cursor with one command.

一条命令同时搜索光标处单词的 camelCase 与 kebab-case 变体。

## Features / 功能

- Converts the word under the cursor into camelCase and kebab-case variants.
- Opens VS Code workspace search with a combined regular expression.
- Removes duplicate variants automatically.
- Provides localized English and Simplified Chinese commands and messages.

- 将光标处的单词转换为 camelCase 与 kebab-case 变体。
- 使用联合正则表达式打开 VS Code 工作区搜索。
- 自动去除重复变体。
- 命令与提示信息支持英文和简体中文。

## Usage / 使用方法

1. Place the cursor on a camelCase or kebab-case word.
2. Run `MultiCase Search Transformer: Search camelCase and kebab-case Variants` from the Command Palette.
3. Review all matching variants in the Search view.

1. 将光标放在 camelCase 或 kebab-case 单词上。
2. 从命令面板运行“多命名风格搜索转换器: 搜索 camelCase 与 kebab-case 变体”。
3. 在搜索视图中查看所有匹配结果。

## Development / 开发

```powershell
npm ci
npm run compile
npm test
```

## License / 许可证

MIT
