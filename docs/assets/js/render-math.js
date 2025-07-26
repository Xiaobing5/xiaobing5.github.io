// docs/assets/js/render-math.js（必须添加！）
document.addEventListener("DOMContentLoaded", function () {
    renderMathInElement(document.body, {
        // 定义公式分隔符（$=行内，$$=块级）
        delimiters: [
            { left: "$", right: "$", display: false },  // 行内公式（如$E=mc^2$）
            { left: "$$", right: "$$", display: true }   // 块级公式（如$$E=mc^2$$）
        ],
        throwOnError: false,  // 忽略错误公式（避免页面崩溃）
        output: "html"         // 使用HTML渲染（兼容所有浏览器）
    });
});