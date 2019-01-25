const attributes = {
    addLink: {
        type: 'boolean',
        default: false,
    },
    link: {
        type: 'string',
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

}

export default attributes;