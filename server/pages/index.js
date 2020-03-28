const createBlogPages = require('./createBlogPages');
const createCollectionPages = require('./createCollectionPages');
const createEditorialPages = require('./createEditorialPages');

module.exports = {
    generateBlog: createBlogPages,
    generateCollection: createCollectionPages,
    generateEditorial: createEditorialPages,
}
