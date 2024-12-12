<script>
(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    // Chatbot laden
    window.voiceflow.chat.load({
      verify: { projectID: '671fa9b30a0ccb218be2f6fd' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      assistant: {
        stylesheet: 'https://www.estatebotics.de/EstateBotics/EstateBoticsNew.css'
      }
    });
    
    // Sobald die gesamte Seite fertig geladen ist
    window.addEventListener('load', function() {
      // Kurze Verzögerung, um sicherzustellen, dass alles initialisiert ist
      setTimeout(function() {
        window.voiceflow.chat.open();
      }, 1000);
    });
  };
  
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  v.type = "text/javascript";
  s.parentNode.insertBefore(v, s);
})(document, 'script');
</script>
