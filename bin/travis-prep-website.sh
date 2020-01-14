#!/bin/bash

set -e

DIR_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.."
cd $DIR_ROOT

if [ ! -d ./packages/portal-style/.build ]; then
  echo "Missing: packages/portal-style/.build"
  echo "Did you build first?"
  exit 1
fi

if [ -d ./target/portal-components ]; then
  rm -rf ./target/portal-components
fi

mkdir -p ./target/portal-components

mv ./packages/portal-style/.build/portal-components/portal-style ./target/portal-components/portal-style
mv ./packages/components-demo/storybook-static ./target/portal-components/demo

cat << EOF > ./target/portal-components/index.html
<html>
<head>
  <title>Deskpro Portal Components</title>
  <link rel="stylesheet" href="style/css/main.css" />
</head>
<body>
  <div class="homeContainer">
    <div class="homeSplashFade">
      <div class="wrapper homeWrapper">
        <div class="inner">
          <h2 class="projectTitle">Portal Components</h2>

          <div class="section promoSection">
            <div class="promoRow">
              <div class="pluginRowBlock">
                <div class="pluginWrapper buttonWrapper">
                  <a class="button" href="./portal-style/">CSS and Styling</a>
                </div>
                <div class="pluginWrapper buttonWrapper">
                  <a class="button" href="./demo/">React Components Demo</a>
                </div>

                <div class="pluginWrapper buttonWrapper">
                  <a class="button" href="https://github.com/deskpro/portal-components">GitHub</a>
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
echo "target/portal-components directory is ready for publishing"
echo ""
