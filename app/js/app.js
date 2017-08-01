// VENDOR DEPENDENCIES

import 'lazysizes';

const

    init = () => {

        fetch('projects')
            .then(res => res.json())
            .then(res => makeProjectThumbnails(res));

    },

    createElement = (tag, classes = null, innerHTML = null, attrs = {}) => {

        const el   = document.createElement(tag);

        Object.keys(attrs).forEach(key => attrs[key] && el.setAttribute(key, attrs[key]));

        classes && el.classList.add(Array.isArray(classes) ? [...classes] : classes);
        innerHTML && Object.assign(el, { innerHTML });

        return el;
    },

    appendTo = (container, ...elements) => {
        elements.forEach(el => container.appendChild(el));
        return container;
    },

    makeProjectThumbnails = projects => {
        const
            section = document.createDocumentFragment(),
    	    thumbs  = projects.map(makeThumbnail);

        appendTo(section, ...thumbs);
        appendTo(document.getElementById('projects'), section)

    },

    makeThumbnail = ({
        name = 'Looking for a name...',
        thumbnail = false,
        description = 'No Description'
    }) => {

        const format = str => str
            .split('-')
            .map(w => w.slice(0,1).toUpperCase() + w.slice(1))
            .join(' ')
        ;

        return appendTo(createElement('article', 'thumbnail'),
            createElement('img', 'thumbnail__image', null, { src: thumbnail }),
            createElement('h1', 'thumbnail__title', format(name)),
            createElement('p', 'thumbnail__description', description)
        );
    };



init();