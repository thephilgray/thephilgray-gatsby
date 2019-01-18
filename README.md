# thephilgray (gatsby blog)

A rebuild of my professional blog/portfolio site with `Gatsby`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Requires `node` with `npm`. See [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/) for installation instructions.

Requires `gatsby-cli` to be installed globally. See [gatsby-cli](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-cli) for more options and details.

```bash
npm i -g gatsby-cli
```

Some instructions also assume you are using `git`. See [Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for installation instructions.

### Installing

1. Fork the repo with the `Fork` button at the top of the repo page.

2. Clone the forked repo locally and change directory into it.

```bash
git clone <forked_github_repo>
cd <forked_github_repo>
```

3. Install local dependencies with `npm` or `yarn`

```bash
npm i
```

### Development

- Launch the dev server with hot reloading

```bash
gatsby develop

# once complete, open the site at `http://localhost:8000/` in the browser
# open GraphiQL in the browser or with GraphQL Playground at `http://localhost:8000/___graphql`
```

> :warning: Typically, you will want to stop the server and rerun this command after each time you change either `gatsby-config` or `gatsby-node` or add new `yaml` properties to the markdown files. Type <kbd>control</kbd> + <kbd>c</kbd> to stop the server.

- Build the static site in the `public` directory

```bash
gatsby build
```

- Serve the static site from the `public` directory

```bash
gatsby serve
```

## Deployment

### Now

Deploy with [now](https://zeit.co/now)

> :exclamation: This method is currently failing.

1. Install the latest version of `now` globally

```bash
npm i -g now
```

2. Authenticate and or deploy with `now`

```bash
now
```

### Netlify

Deploy with [netlify](https://www.netlify.com/) (preferred)

1. Fork the repo.

2. Sign up for a new account and or login to Netlify.

3. Click `New site from Git`

4. Select the forked repo.

5. Grant Netlify access to your Github account.

Once these steps are completed. Netlify will deploy the site and provide you with a URL.

#### Use Netlify CMS

1. To use `Netlify CMS`, change the value of `repo` in `static/admin/config.yml` to the name of your forked repo.

2. From your Github account, navigate to `Settings > Developer Settings`

3. Choose `New OAuth App`

4. Enter a value for `Application name` and `Homepage URL`

5. Enter `https://api.netlify.com/auth/done` as the value for `Authorization callback URL`

6. Click the submit button to create

7. From the Netlify panel, navigate to your site dashboard and to `Settings > Access Control > OAuth`

8. Click `Install provider`

9. In the modal, choose `GitHub` and enter the `Client ID` and `Client Secret` from the new OAuth app you setup on Github.

10. Now when you navigate to `/admin` from your site, you should be able to access the admin panel by logging in with your Github account.

## Built With

- [gatsby-cli](https://github.com/gatsbyjs/) - Blazing fast modern site generator for React
- [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age

## Authors

- **Phil Gray** - _Initial work_ - [thephilgray](https://github.com/thephilgray)
