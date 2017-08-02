#!/usr/bin/env nodejs

const
    // DEPENDENCIES
    express = require('express'),
    { join } = require('path'),

    // CONFIGURATION
    PORT = 3000,
    PROJECTS_FOLDER = join(__dirname, 'public', 'fcc'),
    // APP
    app = express();

// MIDDLEWARES
app.use( express.static(join(__dirname, 'public')) );

app.get('/', (req, { send }) => send('index.html'));
app.get('/projects', getAllProjectInfo);
app.get('/:project', getProject)
app.get('/:project/source', getProjectSource)

app.listen(PORT, err => {
    !err && console.log('LISTENING ON PORT %s', PORT);
})

function getAllProjectInfo (req, res) {
    const fs = require('fs');

    fs.readdir(PROJECTS_FOLDER, (err, folders) => {
        res.json(folders.map(dir => {
            const
                name        = dir,
                thumbPath   = join(PROJECTS_FOLDER, dir, 'thumbnail.png'),
                descPath    = join(PROJECTS_FOLDER, dir, 'description.txt'),
                // lets us know whether to render a background image or not
                thumbnail   = fs.existsSync(thumbPath) ? join('fcc', dir, 'thumbnail.png') : false,
                // reads the plaintext description to be sent to the client
                description = fs.existsSync(descPath) ? fs.readFileSync(descPath, 'utf8') : null;

            return { name, thumbnail, description };
        }))
    });
}

function getProject ({ params }, res) {
    res.redirect(`fcc/${params.project}/docs/index.html`);
}

function getProjectSource (req, res) {}
