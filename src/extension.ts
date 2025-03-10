import * as vscode from 'vscode';

// 注册命令
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand(
        'multicaseSearchTransformer.transformSearch',
        async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showWarningMessage('请先打开文件并定位到要搜索的单词');
                return;
            }

            const document = editor.document;
            const position = editor.selection.active;
            const wordRange = document.getWordRangeAtPosition(position);
            const input = wordRange ? document.getText(wordRange) : '';

            if (!input) {
                vscode.window.showWarningMessage('未找到光标处的有效单词');
                return;
            }
            
            // 删除原有的输入框获取逻辑
            // 保留后续转换和搜索逻辑不变
            const cleanedInput = input.trim();
            // 新增转换函数
            const toCamelCase = (str: string) =>
                str.replace(/-(\w)/g, (_, c) => c.toUpperCase());
            const toKebabCase = (str: string) =>
                str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

            // 生成两种格式并去重
            const camelCase = toCamelCase(cleanedInput);
            const kebabCase = toKebabCase(cleanedInput);
            const patterns = Array.from(new Set([camelCase, kebabCase].filter(Boolean)));

            // 转义正则特殊字符
            const escapedPatterns = patterns.map(p =>
                p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

            // 使用非捕获组优化正则
            const searchRegex = `(?<!\\w)(?:${escapedPatterns.join('|')})(?!\\w)`;

            // 修正搜索参数
            vscode.commands.executeCommand('workbench.action.findInFiles', {
                query: searchRegex,
                isRegex: true,
                useExcludeSettings: true,
                triggerSearch: true
            });
        });

    context.subscriptions.push(disposable);
}

export function deactivate() { }
