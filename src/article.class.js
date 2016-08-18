export class article {
    constructor(props) {
        const articleProperties = ['title', 'description', 'author', 'date', 'link']

        if (!props) throw new Error('An article has to be created from an article object')

        Object.keys(props).forEach(
            key => {
                if (articleProperties.indexOf(key) > -1) this[key] = props[key]
            }
        )
    }
}