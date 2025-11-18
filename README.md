# My Developer Blog

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Repository Description

This repository hosts a developer blog built with Docusaurus. It includes tools and scripts for creating, managing, and deploying static web content. The software supports rapid local development, customizable theming, and seamless deployment to platforms like GitHub Pages or NGINX.

## Table of Contents

- [My Developer Blog](#my-developer-blog)
  - [Repository Description](#repository-description)
  - [Table of Contents](#table-of-contents)
  - [Quickstart](#quickstart)
    - [Prerequisites](#prerequisites)
  - [Repository Structure](#repository-structure)
  - [Deployment](#deployment)
    - [Deploy to Github Pages](#deploy-to-github-pages)
    - [Deploying using NGINX](#deploying-using-nginx)
    - [Contributing](#contributing)

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [pnpm](https://pnpm.io/) (package manager for faster and more efficient dependency handling)
- [Docker](https://www.docker.com/products/docker-desktop) (only required if [deploying using NGINX](#deploying-using-nginx))

### How to Start

1. **Installation**

   ```
   $ pnpm install
   ```

2. **Local Development**

   ```
   $ pnpm start
   ```

   This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

3. **Build**

   ```
   $ pnpm build
   ```

   This command generates static content into the `build` directory and can be served using any static contents hosting service.

4. **Deployment**

   In order to deploy onto Github Pages, ensure that your `docusaurus.config.ts` conforms with the [documentation guidelines](https://docusaurus.io/docs/deployment#deploying-to-github-pages). After that is ensured run the following command to deploy:

   ```
   $ USE_SSH=true pnpm deploy
   ```

For detailed information about deploying this Docusaurus project, refer to the [Deployment](#deployment) section below.

## Usage

This Docusaurus project is designed to be easily configurable. Here’s how you can modify different parts of the website:

### Modifying Portfolio Content

The main portfolio page is located at `src/pages/index.tsx`. This file is composed of several React components that form the different sections of the portfolio.

To modify the content of a specific section, you need to edit the corresponding component in the `src/components` directory. Each component has its own folder and consists of an `index.tsx` file for the component logic and a `styles.module.css` file for the styling.

Here is a list of the components used in the portfolio:

- **Header**: `src/components/header/index.tsx`
- **Hero Section**: `src/components/hero/index.tsx`
- **My Skills**: `src/components/my-skills/index.tsx`
- **Project Highlights**: `src/components/my-project-highlights/index.tsx`
- **Contact Form**: `src/components/contact/index.tsx`
- **Footer**: `src/components/footer/index.tsx`

By editing these files, you can change the text, images, and overall appearance of the portfolio.

### Adding New Blog Posts or Documentation

- **Blog Posts**: To add a new blog post, create a new markdown file in the `blog/` directory. The file name should follow the format `YYYY-MM-DD-your-post-title.md`.
- **Documentation**: To add new documentation, create a new markdown file in the `docs/` directory and add a reference to it in `sidebars.ts`.

## Repository Structure

The repository is organized as follows:

- `blog/`: Contains markdown files for blog posts. Blog-related metadata is automatically picked up by the Docusaurus configuration.
- `docs/`: Contains markdown files for documentation. These files are referenced in `sidebars.ts` to define the sidebar structure.
- `src/`: Contains custom React components, CSS, and JavaScript for additional functionality or theming.
- `static/`: Stores static assets (e.g., images, icons) served directly without processing.
- `sidebars.ts`: Configures the structure of sidebars in the documentation section.
- `docusaurus.config.ts`: Main configuration file for customizing and managing Docusaurus behavior.
- `build/`: Generated after running the `pnpm build` command. Contains the static website files ready for deployment.

New content can be added as follows:

- Add new documentation files to the `docs/` folder.
- Add new blog posts to the `blog/` folder. No additional configuration is required.

## Deployment

### Deploy to Github Pages

To deploy using SSH:

```
$ USE_SSH=true pnpm deploy
```

To deploy without using SSH, run:

```
$ GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Deploying using NGINX

To deploy the site using NGINX and Docker, follow this [guide](./docs/guides/deploy-docusaurus-with-docker-and-nginx.md)
