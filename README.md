# Games Results

Below there are detailed instructions on how to run the project.

Please run all commands from inside the project folder - the same folder as the `package.json` file

## Running with Docker

1. Build the Docker Image:

```bash
docker build -t games-results .
```

2. Run the image in a container

```bash
docker run -p 3000:3000 games-results
```

3. go to the dashboard

- The frontend will be available at http://localhost:3000

- The games endpoints is http://localhost:3000/api/games

- The participants endpoint is http://localhost:3000/api/participants

---

## Running it directly

1. Install NodeJS version 18
2. Install Yarn by running:  `npm i -g yarn`
3. in the app directory (same as package.json file), install the dependencies:

```bash
yarn
```

4. After dependencies are installed, dev server is ready to run:

```bash
yarn dev
```
- The frontend will be available at http://localhost:3000

- The games endpoints is http://localhost:3000/api/games

- The participants endpoint is http://localhost:3000/api/participants

5. In order to run the production build, first build it

```bash
yarn build
```

6. Then run it

```bash
yarn start
```
- The frontend will be available at http://localhost:3000

- The games endpoints is http://localhost:3000/api/games

- The participants endpoint is http://localhost:3000/api/participants


### Note

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
