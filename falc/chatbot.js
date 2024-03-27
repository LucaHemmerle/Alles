(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '65952dc3528558fdb011854f' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      assistant: {
        stylesheet: 'https://www.estatebotics.de/falc/falc.css'
      }
    });
  };
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  v.type = "text/javascript";
  s.parentNode.insertBefore(v, s);
})(document, 'script');

window.onload = function() {
  if (window.innerWidth >= 1024) {
    setTimeout(function() {
      window.voiceflow.chat.open();
    }, 1000);
  }
};
