const express = require('express');
const loremIpsum = require('lorem-ipsum');

let app = express();


// console.log(loremIpsum({
//     count: 3,
//     units: 'paragraphs'
// }));

app.get('/lorem/:num-paragraphs', function (req, res) {
    res.send(loremIpsum({
        count: req.params.num-paragraphs,
        units: 'paragraph',
        format: 'html'
    }))
});

app.listen(3000, function (){

});