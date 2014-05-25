var express = require('express'),
    app	= express(),
    Poet = require('poet'),

    poet = Poet(app, {
        posts: './_posts/',
        postsPerPage: 5,
        metaFormat: 'json'
    });

poet.init().then(function ()) {

});

app.listen(3000);
