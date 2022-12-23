# Nuxt.js project

## Build Setup

```bash
# install dependencies
$ yarn install
$ yarn install --cwd server
$ yarn install --cwd server2

# serve with hot reload at localhost:8000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start
```

## Architecture

```mermaid
flowchart BT
  Device([https://solufa.github.io/cookie-test])
  S1["/server"]
  S2["/server2"]

  Device --> |session| S1
  Device --> |me| S2

  subgraph https://cookie-test2-...
    S2
  end

  subgraph https://cookie-test1-...
    S1
  end
```
