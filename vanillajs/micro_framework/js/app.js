var homeTemplate =
    `<div id="app-container">
        <input type="text" data-input="name">
        <input type="text" data-input="last_name">
        <input type="text" data-input="unknown" value="">
        <h1>Hello mi name is <span data-text="name"></span> and i'm awesome</h1>
        <h1 data-text="last_name">
        </h1>
        <h1 data-text="address">
        </h1>
        <h1 data-text="unknown">
        </h1>
    </div>
`;


var router = new Router([{
        path: "",
        template: ""
    },
    {
        path: 'home',
        template: '<h1>Welcome</h1>'
    },
    {
        path: 'app',
        component: {
            element: "#app-container",
            data:{
                name: "John",
                last_name: "Doe",
                address: "ellison park",
            }
        },
        template:homeTemplate
    },

]);