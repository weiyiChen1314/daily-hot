/**
 * loading 占位
 * 解决首次加载时白屏的问题
 */
(function () {
  const _root = document.querySelector("#root");
  if (_root && _root.innerHTML === "") {
    _root.innerHTML = `
    <style>
    html,
    body,
    #root {
      height: 100%;
      margin: 0;
      padding: 0;
    }

    .loader {
      position: relative;
      width: 2.5em;
      height: 2.5em;
      transform: rotate(165deg);
     }
     
     .loader:before, .loader:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 0.5em;
      height: 0.5em;
      border-radius: 0.25em;
      transform: translate(-50%, -50%);
     }
     
     .loader:before {
      animation: before8 2s infinite;
     }
     
     .loader:after {
      animation: after6 2s infinite;
     }
     
     @keyframes before8 {
      0% {
       width: 0.5em;
       box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
      }
     
      35% {
       width: 2.5em;
       box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
      }
     
      70% {
       width: 0.5em;
       box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
      }
     
      100% {
       box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
      }
     }
     
     @keyframes after6 {
      0% {
       height: 0.5em;
       box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
      }
     
      35% {
       height: 2.5em;
       box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
      }
     
      70% {
       height: 0.5em;
       box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
      }
     
      100% {
       box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
      }
     }
     
     .loader {
      position: absolute;
      top: calc(50% - 1.25em);
      left: calc(50% - 1.25em);
     }
  </style>
  <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 420px;
        ">
        <div class="loader"></div>
  </div>
    `;
  }
})();
