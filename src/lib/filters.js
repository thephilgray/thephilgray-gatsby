const slugify = require('slugify')

module.exports = {
  slugFilter: str =>
    slugify(str, {
      replacement: '-',
      lower: true,
      remove: /[$*_+~.,()'"!\-:@]/g,
    }),

  allTagsFromMarkdown: edges =>
    edges.reduce((acc, { node }) => {
      const allTags = { ...acc }
      node.frontmatter.tags.split(', ').forEach(tag => {
        if (!allTags[tag]) {
          allTags[tag] = []
        }
        allTags[tag].push(node)
      })
      return allTags
    }, {}),
  sortTagsByNumberOfPosts: tagsFromMarkdown =>
    Object.keys(tagsFromMarkdown).sort(
      (a, b) => tagsFromMarkdown[b].length - tagsFromMarkdown[a].length
    ),
}
