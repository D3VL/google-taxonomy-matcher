const taxonomy_parser = require('./taxonomy_parser')
const MiniSearch = require('minisearch')

class matcher {
    constructor(locale = 'en-GB', threshold = 100) {
        this.taxonomy = new taxonomy_parser(locale);
        this.threshold = threshold;
        this.miniSearch = new MiniSearch({
            fields: ['category', 'full_path_scrubbed'],
            storeFields: ['id', 'full_path']
        })

        this.miniSearch.addAll(this.taxonomy.read())
    }

    match(title, miniSearchOpts = { fuzzy: 0.2, boost: { category: 2 } }) {
        let matched = this.miniSearch.search(title, miniSearchOpts)[0];
        if (!matched || matched.score < this.threshold) return false
        else return matched;
    }
}

module.exports = matcher;