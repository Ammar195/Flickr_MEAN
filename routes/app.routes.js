const router = require('express').Router();
const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ attrkey: "ATTR" });

module.exports = function (app) {
    router.get('/flickr_photos', function (req, res) {
        let xml_string = fs.readFileSync("public/files/flickr_public-feed.xml", "utf8");

        parser.parseString(xml_string, function (error, result) {
            if (error === null) res.json(result);
            else console.log(error);
        });

    });

    return router;
}
