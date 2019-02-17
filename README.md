# GODREAU.XYZ

godreau.xyz website

- use this src branch for development.
- when pushing a new build, it pushes on the `master` branch!
- the master branch must be used for github pages since this is the user
    root account website, `ggodreau.github.io`. See [the docs](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/) for deets.
- the website MUST have a CNAME record copied into public/static. This gets
    placed into a copy statement of the deploy script in `package.json`.
    See this [github issue](https://github.com/gatsbyjs/gatsby/issues/243)
    for deets.
- when you're finally done, run `npm run deploy` from this branch and it'll
    push to `master` and re-publish at https://www.godreau.xyz
