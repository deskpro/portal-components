#!/bin/bash

set -e

DIR_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.."
cd $DIR_ROOT

if [ ! -d ./packages/style/website/build/style ]; then
  echo "Missing: packages/style/website/build/style"
  echo "Did you build first?"
  exit 1
fi

if [ -d ./target/gh-pages ]; then
  rm -rf ./target/gh-pages
fi

mkdir -p ./target/gh-pages

mv ./packages/style/website/build/style ./target/gh-pages/style
mv ./packages/components-demo/storybook-static ./target/gh-pages/demo

cat << EOF > ./target/gh-pages/index.html
<html>
<head>
  <title>Deskpro Agent Interface</title>
  <link rel="stylesheet" href="style/css/main.css" />
</head>
<body>
  <div class="homeContainer">
    <div class="homeSplashFade">
      <div class="wrapper homeWrapper">
        <div class="inner">
          <h2 class="projectTitle">Agent Interface</h2>

          <div class="section promoSection">
            <div class="promoRow">
              <div class="pluginRowBlock">
                <div class="pluginWrapper buttonWrapper">
                  <a class="button" href="./style/">CSS and Styling</a>
                </div>
                <div class="pluginWrapper buttonWrapper">
                  <a class="button" href="./demo/">React Components Demo</a>
                </div>

                <div class="pluginWrapper buttonWrapper">
                  <a class="button" href="https://github.com/deskpro/agent-interface">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
EOF

echo ""
echo "target/gh-pages directory is ready for publishing"
echo ""
