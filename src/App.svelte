<script>
  // import { devtools } from "chrome";
  // let count = 0;

  function sum() {
    const window = chrome.extension.getBackgroundPage();

    window.console.log("HEHEHEHE");
    console.log("HEHEHHEHEHE CARAIO", window.document.body.innerHTML);
    alert(`${Object.getOwnPropertyNames(chrome.debugger)}`);
    // chrome.extension.getBackgroundPage().console.log("foo");
  }
</script>

<!-- <p>Counter: {count}</p> -->

<!-- <button on:click={sum}>Click here to inspect</button> -->
<style>
</style>
