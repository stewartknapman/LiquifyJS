// data.js and templates.js both extend collector.js
// the collector contains an object of found things each with a key of thier url
// if it ealread exists in the collection then return it (cached)
// else go and get it from the url

// It also fires progress events from the ajax call
// if no ajax call is needed then it just fires a progress event at the end?