# Building our denpendencies and Scripts
## Dependencies
1. run npm i to install the dependence 
    - if there isn't the luxury of npm i installing it by hand with `npm install -D 'name of package'`
    - the -D will save it into the dependencies
        - the dependencies are mainly jest but we will be using babel-preset-env, jest and parcel-bundler

## Scripts
1. look for "start"  Change `react-scripts start` to `parcel index.html`
2. now look for "test" and change `react-scripts test --env=jsdom` to jest --watchAll