// VENDOR DEPENDENCIES

import 'lazysizes';

const

    init = () => {

        fetch('projects')
            .then(res => res.json())
            .then(res => makeProjectThumbnails(res));

    },

    createElement = (tag, classes = null, innerHTML = null) => {

        const el = document.createElement(tag);

        classes && el.classList.add(Array.isArray(classes) ? [...classes] : classes);
        innerHTML && Object.assign(el, { innerHTML });

        return el;
    },

    appendTo = (container, ...elements) => {

    }

    makeProjectThumbnails = projects => {
        const
            div = createElement('section'),
            len = projects.length;
        for (let i = 0; i < len; i++) {

        }
    },

    makeThumbnail = ({
        name = 'Looking for a name...',
        thumbnail = false,
        description = 'No Description'
    }) => {

        const
            t     = str => 
            thumb = createElement('a', 'thumbnail'),
            image = createElement('img', 'thumbnail__image'),
            title = createElement('h1', 'thumbnail__title'),
            desc  = createElement('p', 'thumbnail__description');

    };



document.addEventListener("DOMContentLoaded", init)