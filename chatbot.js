<script type="text/javascript">
(function(d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
  v.onload = function() {
    window.voiceflow.chat.load({
      verify: { projectID: '656759ba18b33e0007c8ccff' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      assistant: {
        stylesheet: ' 
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
</script>