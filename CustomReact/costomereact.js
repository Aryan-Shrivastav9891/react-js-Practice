function customeRender(reactElement , container){
    const domElement = document.createElement(reactElement.type)
    domElement.textContent = reactElement.children
    domElement.setAttribute('href' , reactElement.props.href)
    domElement.setAttribute('target' , reactElement.props.target)
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"click me to visit google"
}
customeRender(reactElement , mainContainer)
const mainContainer = document.getElementById("root")

// function customRender(reactElement, container) {
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute('href', reactElement.props.href);
//     domElement.setAttribute('target', reactElement.props.target);
//     container.appendChild(domElement);
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: "click me to visit google"
// }

// const mainContainer = document.getElementById("root");

// customRender(reactElement, mainContainer);
