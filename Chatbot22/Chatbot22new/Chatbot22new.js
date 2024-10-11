(function (d, t) {
  var v = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  v.onload = function () {
    window.voiceflow.chat.load({
      verify: { projectID: "6670a21f3c0374134484b65a" },
      url: "https://general-runtime.voiceflow.com",
      versionID: "production",
      assistant: {
        stylesheet: "https://www.estatebotics.de/Chatbot22/Chatbot22new/Chatbot22new.css",
      },
    });
  };
  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  v.type = "text/javascript";
  s.parentNode.insertBefore(v, s);
})(document, "script");

var shadowRoot,
  intervalId,
  fontSize = 15;

window.onload = function () {
  if (window.innerWidth >= 1024) {
    setTimeout(function () {
      window.voiceflow.chat.open();
    }, 2000);
  }

  intervalId = setInterval(function () {
    addFontSizeButtonToShadowDom();
  }, 1000);

  var config = {
    attributes: true,
    childList: true,
    subtree: true,
  };

  var observer = new MutationObserver(callback);

  document.querySelectorAll("*").forEach((element) => {
    // No shadow root? Continue.
    if (!element.shadowRoot) {
      return;
    }

    if (element.id === "voiceflow-chat") {
      observer.observe(element.shadowRoot, config);
      shadowRoot = element.shadowRoot;
    }
  });
};

const convertTo24Hour = (timeString) => {
  let [time, modifier] = timeString.split(" ");
  let [hours, minutes] = time.split(":");

  if (modifier === "pm" && hours !== "12") {
    hours = parseInt(hours, 10) + 12;
  }
  if (modifier === "am" && hours === "12") {
    hours = "00";
  }

  return `${hours}:${minutes}`;
};

var callback = function (mutationsList) {
  for (var mutation of mutationsList) {
    if (mutation.type == "childList") {
      modifyShadowDomTimestamps();
    }
  }
};

var modifyShadowDomTimestamps = () => {
  if (shadowRoot) {
    const timestamps = shadowRoot.querySelectorAll(".vfrc-timestamp");

    timestamps.forEach(function (timestamp) {
      const timeText = timestamp.textContent.trim(); // e.g., "12:41 pm"
      timestamp.textContent = convertTo24Hour(timeText); // Update with 24-hour format
    });

    const messages = shadowRoot.querySelectorAll(".vfrc-message");

    messages.forEach(function (message) {
      message.style.fontSize = fontSize + "px";
    });
  }
};

const addFontSizeButtonToShadowDom = () => {
  console.log("Hello");
  if (shadowRoot && !shadowRoot.getElementById("btn-font-increase")) {
    // Create the button element
    const fontSizeButton = document.createElement("button");
    fontSizeButton.id = "btn-font-increase";
    fontSizeButton.textContent = "+";

    // Append the button to the shadow DOM, within the chatbot's container
    const chatContainer = shadowRoot.querySelector(".vfrc-chat");
    if (chatContainer) {
      chatContainer.appendChild(fontSizeButton);

      // Add event listener to increase font size when clicked
      fontSizeButton.addEventListener("click", increaseFontSizeInShadowDom);

      clearInterval(intervalId);
    }
  }
};

const increaseFontSizeInShadowDom = () => {
  if (shadowRoot) {
    const chatMessages = shadowRoot.querySelectorAll(".vfrc-message");

    chatMessages.forEach(function (message) {
      fontSize += 2;
      message.style.fontSize = fontSize + "px";
    });
  }
};
