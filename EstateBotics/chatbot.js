(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '671fa9b30a0ccb218be2f6fd' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      assistant: {
        stylesheet: 'https://www.estatebotics.de/EstateBotics/EstateBoticsNew.css'
      }
    });
  };
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  v.type = "text/javascript";
  s.parentNode.insertBefore(v, s);
})(document, 'script');

window.addEventListener("load", function () {
  if (window.innerWidth >= 1024) {
    setTimeout(function() {
      console.log('Open Function Triggered');
      window.voiceflow.chat.open();
    }, 5000);
  }
});
