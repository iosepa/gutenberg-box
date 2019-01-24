const attributes = {
    addLink: {
        type: 'boolean',
        default: 'false',
    },
    link: {
        type: 'string',
        source: 'html',
        selector: 'a',
        default: "",
    },
    headingText: {
        type: 'string',
        source: 'html',
        selector: 'h5',
    },
    price: {
        type: 'string',
        source: 'html',
        selector: 'h6',
    },
    bodyText: {
        type: 'string',
        source: 'html',
        selector: 'p',
    },

    cardTitle: {
        type: 'string',
    },
    cardText: {
        type: 'string',
    },
    cardTextAlignment: {
        type: 'string',
        default: 'center',
    },
    cardHeadingSize: {
        type: 'string',
        default: 'h2',
    },
    imgID: {
        type: 'number',
        default: null,
    },
    imgURL: {
        type: 'string',
        default: null,
    },
    cardBtnPresent: {
        type: 'boolean',
        default: false,
    },
    buttonURL: {
        type: 'string',
        source: 'attribute',
        attribute: 'href',
        selector: 'a',
        default: 'http://'
    },
    buttonText: {
        type: 'string',
        source: 'text',
        selector: 'a',
        default: 'Click here',
    },
    buttonStyleClass: {
        type: 'string',
        default: 'primary',
    },
    newTab: {
        type: 'boolean',
        default: true,
    },
    useColor: {
        type: 'boolean',
        default: false,
    },
    colorFontControl: {
        type: 'string',
        default: '#000000'
    },
    colorBackgroundControl: {
        type: 'string',
        default: 'transparent',
    },
    align: {
        type: 'string',
        default: 'center',
    },
}

export default attributes;