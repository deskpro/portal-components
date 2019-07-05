const PercyScript = require('@percy/script');

// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8000/portal-components/style/demos/kb-view.html');
  await percySnapshot('KB View');
});
