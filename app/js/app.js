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

    appendTo = (container, ...elements) => elements.forEach(el => container.appendChild(el)),

    makeProjectThumbnails = projects => {
        const
            section = createElement('section'),
    	    thumbs  = projects.map(makeThumbnail);

	appendTo(document.body, ...thumbs);

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
	    createElement('img', 'thumbnail__image',),
            createElement('h1', 'thumbnail__title', format(name)),
            createElement('p', 'thumbnail__description', description)
	)
    };



init();
