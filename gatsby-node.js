/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { slugFilter, allTagsFromMarkdown } = require('./src/lib/filters.js')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      query {
        blogposts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { draft: { ne: true } }
            fileAbsolutePath: { regex: "/posts/" }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                tags
              }
              id
            }
          }
        }
        projects: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: { draft: { ne: true } }
            fileAbsolutePath: { regex: "/projects/" }
          }
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                tags
              }
              id
            }
          }
        }
      }
    `).then(({ data, errors }) => {
      if (errors) {
        return reject(errors)
      }

      const allPosts = {}
      allPosts.edges = [...data.blogposts.edges, ...data.projects.edges]
      /**
       *
       * filterPostsByTag
       *
       * return an object with keys for each unique tag
       * push the node for each post into an array for each tag
       */

      const filterPostsByTag = (currentTag, collection = allPosts) =>
        allTagsFromMarkdown(collection.edges)[currentTag]

      const tagsArray = (collection = allPosts) =>
        Object.keys(allTagsFromMarkdown(collection.edges))

      createPage({
        path: `/tags`,
        component: path.resolve('src/components/AllTagsPage.js'),
        context: {
          siteTags: tagsArray(allPosts),
        },
      })

      tagsArray(allPosts).forEach(tag => {
        createPage({
          path: `/tags/${slugFilter(tag)}`,
          component: path.resolve('./src/components/TagPage.js'),
          context: {
            tag,
            filteredPosts: filterPostsByTag(tag, data.blogposts),
            filteredProjects: filterPostsByTag(tag, data.projects),
          },
        })
      })

      data.projects.edges.forEach(({ node }) => {
        const slug = node.frontmatter.slug || slugFilter(node.frontmatter.title)
        const relativePath = `/projects/${slug}`
        createPage({
          path: relativePath,
          component: path.resolve('./src/components/ProjectPost.js'),
          context: {
            id: node.id,
          },
        })
      })

      data.blogposts.edges.forEach(({ node }) => {
        const slug = node.frontmatter.slug || slugFilter(node.frontmatter.title)
        const relativePath = `/blog/${slug}`
        createPage({
          path: relativePath,
          component: path.resolve('./src/components/BlogPost.js'),
          context: {
            id: node.id,
          },
        })
      })
      resolve()
    })
  })
}
