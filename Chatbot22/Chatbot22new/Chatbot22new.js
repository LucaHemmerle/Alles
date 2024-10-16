(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '66fa98dc06930ea146f91983' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      assistant: {
        stylesheet: 'https://www.estatebotics.de/Chatbot22/Chatbot22old/Chatbot22.css'
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
    }, 2000);
  }
};
