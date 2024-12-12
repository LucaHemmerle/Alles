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

    // Direkter Aufruf zum Öffnen des Chats nach dem Laden
    window.voiceflow.chat.open();
  };
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  v.type = "text/javascript";
  s.parentNode.insertBefore(v, s);
})(document, 'script');

// Entferne den alten window.onload und ersetze ihn
document.addEventListener('DOMContentLoaded', function() {
  // Stellen Sie sicher, dass der Chat geöffnet wird, unabhängig von der Bildschirmgröße
  setTimeout(function() {
    if (window.voiceflow && window.voiceflow.chat && window.voiceflow.chat.open) {
      window.voiceflow.chat.open();
    }
  }, 1000);
});
