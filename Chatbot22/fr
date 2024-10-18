(function (d, t) {
  var v = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  v.onload = function () {
    window.voiceflow.chat.load({
      verify: { projectID: "66fef172763573dafb272182" },
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
  fontButtonIntervalID,
  shadowRootIntervalID,
  fontSize = 15;

window.addEventListener("load", function () {
  shadowRootIntervalID = this.setInterval(function () {
    searchShadowRoot();
  }, 100);

  fontButtonIntervalID = setInterval(function () {
    addFontSizeButtonToShadowDom();
  }, 100);

  var config = {
    attributes: true,
    childList: true,
    subtree: true,
  };

  var observer = new MutationObserver(callback);

  const searchShadowRoot = () => {
    console.log("Find Shadow Root");
    document.querySelectorAll("*").forEach((element) => {
      // No shadow root? Continue.
      if (!element.shadowRoot) {
        return;
      }

      if (element.id === "voiceflow-chat") {
        observer.observe(element.shadowRoot, config);
        shadowRoot = element.shadowRoot;
        clearInterval(shadowRootIntervalID);
      }
    });
  };
});

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

const modifyShadowDomTimestamps = () => {
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
  console.log("Add Font Size Button");
  if (shadowRoot && !shadowRoot.getElementById("btn-font-increase")) {
    // Create the button element
    const buttonContainer = document.createElement("div");
    buttonContainer.id = "btn-container";

    const fontSizeButton = document.createElement("button");
    fontSizeButton.id = "btn-font-increase";
    fontSizeButton.textContent = "Increase Font Size";

    const magnifyingContainer = document.createElement("div");
    magnifyingContainer.id = "magnifier-container";
    magnifyingContainer.textContent = "🔍";

    fontSizeButton.appendChild(magnifyingContainer);

    buttonContainer.appendChild(fontSizeButton);

    // Append the button to the shadow DOM, within the chatbot's container
    const chatContainer = shadowRoot.querySelector(".vfrc-header");
    if (chatContainer) {
      chatContainer.insertAdjacentElement("afterend", buttonContainer);

      // Add event listener to increase font size when clicked
      fontSizeButton.addEventListener("click", increaseFontSizeInShadowDom);

      clearInterval(fontButtonIntervalID);
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
