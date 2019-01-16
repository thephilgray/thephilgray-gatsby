# thephilgray-gatsby

## Introduction

### TLDR

Over the years, I've completed a few `Gatsby` _getting started_ projects, and it wasn't quite to my liking. But things change and people change, and now I want to rebuild my "portfolio" site using `Gatsby` and `Netlify`.

### Background

When I first created my site with `Nuxt`, I was more comfortable with `Vue` than `React`; `styled-components` didn't exist or I didn't know about it yet; my understanding of component architecture was more about chunking templates to reduce naming and nesting fatigue than functionality; and `Gatsby` and `graphql` were in their infancy, and although there were already lots of tutorials, the APIs seemed to be changing so fast that most of the information out there was already out-of-date by the time I found it.

Already comfortable with `Vue` and static site generators like `Jekyll`, `Nuxt` was simple to understand and easily my first choice for new sites. When I wanted to add markdown-based blogging to my site, `Nuxtent` was the most mature solution I could find, even though it was `REST`-based and already abandoned by its creator.

Now, it seems the `Vue` community has largely moved away from `Nuxt`. While it's still very popular and talked about and actively maintained, I feel the tides seemed to change when the official `Vue` team released `Vue Cli 3` and their own markdown-powered static site generator (albeit for docs), `Vuepress`. At the same time, `Gatsby` was really taking off, and it seemed to be the gateway into `graphql` for most frontend developers. Meanwhile, `Netlify` was expanding their feature-set, offering freemium users, in addition to static hosting and deployment from Github, really everything a developer could ask for in terms of enticing them to fully embrace JAMStack, including an extensible CMS, cloud functions, authentication services, and form handling.

As far as I know, `Gatsby` has always been a first-class citizen on `Netlify`, always featured among their templates and tutorials. And I wanted to deploy my site as a purely static site and take advantage of this freemium plan with free `https` and the other goodies. I know I could have accomplished this with `Nuxtent` long ago, but I'm at the point where I've come to really appreciate the flexibility that `React` provides; and the `Gatsby` ecosystem has turned out to be one of the richest out there. It's arguably not as versatile as a tool like `Next`, but it's specialized for building traditional websites. Also, I want to make it my go-to tool (+ `Netlify`) for whenever someone comes to me asking for the kind of low-traffic marketing site that was traditionally built with `WordPress`, which starts as purely presenational, but evolves with the scope, as the client develops a lexicon for the web, to include a blog, a contact form, and maybe even a shopping cart.

## Scaffold the Project

```bash
npm i -g gatsby-cli
gatsby new <project-name>
```

## Setup a Blog

Create the `posts` directory in `src/posts` and include a markdown file with `yaml` frontmatter:

```md
---
title: EPUB Dev Testing and Debugging
tags: EPUB, E-books, Node, JavaScript, Testing, Cypress, CLI, Android, Mobile
slug: /epub-dev-testing-and-debugging
date: 2019-01-11
---

### EPUB Dev Testing

For the past five years or so, many of us have become accustomed to developing websites and web apps using powerful build tools that speed up our workflow and allow us to focus on really interesting features and design decisions without needing to sacrifice performance and usability.
```

Assuming `gatsby-source-filesystem` is installed, add an object to the `plugins` array in `gatsby-config.js` for each directory of files you want to expose as a collection.

This object must `resolve` to the plugin `gatsby-source-filesystem` and should include an `options` object which includes a `name` and `path` for the directory of files it reads and exposes to the graphql api.

There can be multiple instances of this plugin. For instance, in the example below derrived from the current default template which already included `gatsby-source-filesystem` configured to expose the `images` directory, I've added a new instance which also exposes the `posts` directory.

```js
plugins: [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`,
    },
  },
]
```

Install `gatsby-transformer-remark`

```bash
npm i --save gatsby-transformer-remark
```

Add `gatsby-transformer-remark` to the `plugins` array in `gatsby-config.js`

```js
plugins: [
  // ....other plugins
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `posts`,
      path: `${__dirname}/src/posts`,
    },
  },
  `gatsby-transformer-remark`,
]
```

Restart `gatsby develop` so that the `posts` directory is read. You do not need to restart for new values and files, but you do for new config properties and new yaml fields to register.

Query the markdown data at `http://localhost:8000/___graphql`

```graphql
query BLOG_POST_LISTING {
  allMarkdownRemark(
    limit: 5
    sort: { order: DESC, fields: [frontmatter___date] }
  ) {
    edges {
      node {
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
          tags
        }
        excerpt
        id
      }
    }
  }
}
```

Explore the docs for more fields, filters, and sorting.

TODO: notes from videos 11-15

Things that were tricky:

- Parsing tags and handling multiple post types with `gatsby-transformer-remark`
- Page transitions with `gatsby-plugin-layout` (see https://github.com/gatsbyjs/gatsby/tree/master/examples/using-page-transitions)
- Pagination
