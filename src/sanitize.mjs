export const sanitize = (async () => {
    const styleSheet = "./node_modules/sanitize.css/sanitize.css";
    const result = await fetch(styleSheet);
    const styles = await result.text();
    const styleNode = document.createElement("style");
    styleNode.type = "text/css";
    styleNode.textContent = styles;
    document.head.appendChild(styleNode);
})();
