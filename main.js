import "@ui5/webcomponents-fiori/dist/ShellBar.js";
import "@ui5/webcomponents-fiori/dist/ShellBarSpacer.js";

import "@ui5/webcomponents/dist/Button.js";

const testButton = document.querySelector('#test-btn');

testButton.addEventListener('click', async () => {
  const response = await fetch('http://localhost:8080/hello');
  console.log(response.text());

  console.log('tes1');
});
