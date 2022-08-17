export const render = (component, node) => {
    // Inject component styles
    const styleNode = document.createElement("style");
    styleNode.type = "text/css";
    styleNode.innerHTML = component.styles;
    document.head.appendChild(styleNode);

    // Inject component content
    node.innerHTML = component.html;
};
