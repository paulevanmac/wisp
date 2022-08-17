const app = (() => {
    const message = "Hello, World!";

    const styles = `
        .container {
            display: flex;
            flex-direction: column;
            height: 100vh;
            width: auto;
            align-items: center;
            justify-content: center;
        }

        .floatybox {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 3rem;
            border: 1px solid rebeccapurple;
            box-shadow: 12px 12px 2px 1px rgba(102, 51, 153, .2);
        }

        .heading {
            color: rebeccapurple;
        }
    `;

    const html = `
    <div class="container">
        <div class="floatybox">
            <h1 class="heading">
                ${message}
            </h1>
        </div>
    </div>
    `;

    return {
        styles,
        html
    };
})();

export default app;

// https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js

// https://github.com/trueadm/t7
