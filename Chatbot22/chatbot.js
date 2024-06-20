(function(d, t) {
  // Erstellt den Chat-Container, falls er noch nicht existiert
  if (!d.getElementById('chat-container')) {
    var chatContainer = d.createElement('div');
    chatContainer.id = 'chat-container';
    chatContainer.style.width = '450px';
    chatContainer.style.height = '850px';
    d.body.appendChild(chatContainer);
  }

  // Lade Voiceflow Chatbot
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '6670a21f3c0374134484b65a' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      assistant: {
        stylesheet: 'https://www.estatebotics.de/Chatbot22/Chatbot22.css'
      },
      render: {
        mode: 'embedded',
        target: document.getElementById('chat-container')
      },
      autostart: true // Setze autostart auf true
    }).then(() => {
      window.onload = function() {
        if (window.innerWidth >= 1024) {
          setTimeout(function() {
            window.voiceflow.chat.open();
          }, 4000); // Wartezeit von 4 Sekunden
        }
      };
    }).catch(error => {
      console.error('Voiceflow Chatbot failed to load:', error);
    });
  };
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  v.type = "text/javascript";
  s.parentNode.insertBefore(v, s);
})(document, 'script');
