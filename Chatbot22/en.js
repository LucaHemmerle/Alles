(function (d, t) {
  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];

  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
  v.type = "text/javascript";
  v.async = true;

  console.log("V Script Element: ", v);

  if (window.hasUserConsented) {
    console.log("User has given consent.");
  }

  // if (v.hasAttribute("data-cmp-src")) {
  //   window.location.reload(true);
  // }
  
  function initVoiceflow() {
    if (window.voiceflow && window.voiceflow.chat) {
      window.voiceflow.chat.load({
        verify: { projectID: "66fef165763573dafb272179" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        assistant: {
          stylesheet: "https://www.estatebotics.de/Chatbot22/Chatbot22new/Chatbot22new.css",
        },
      });
    } else {
      setTimeout(initVoiceflow, 500);
    }
  }

  v.addEventListener("load", function() {
    initVoiceflow();
  });
  s.parentNode.insertBefore(v, s);
})(document, "script");

var shadowRoot,
  fontButtonIntervalID,
  shadowRootIntervalID,
  fontSize = 15;

window.addEventListener("load", function () { 
  shadowRootIntervalID = setInterval(() => {
    searchShadowRoot();
  }, 2000);

  var config = {
    attributes: true,
    childList: true,
    subtree: true,
  };

  var observer = new MutationObserver(callback);

  const searchShadowRoot = () => {
    document.querySelectorAll("#voiceflow-chat").forEach((element) => {
      if (!element.shadowRoot) {
        return;
      }

      observer.observe(element.shadowRoot, config);
      shadowRoot = element.shadowRoot;
      clearInterval(shadowRootIntervalID);
      modifyShadowDomTimestamps();
      addFontSizeButtonToShadowDom();
    })
  };

  // Set a 60-second timer
  // this.setTimeout(() => {
  //   // Define the CSS as a string
  //   const css = `
  //   #chat-popover {
  //     position: fixed;
  //     bottom: 150px; /* Adjust to appear above the chat bubble */
  //     right: 20px; /* Adjust to align with chat bubble */
  //     width: 200px;
  //     padding: 15px 30px 15px 15px;
  //     background: rgba(255, 255, 255, 0.8);
  //     border-radius: 10px;
  //     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  //     backdrop-filter: blur(5px);
  //     z-index: 10000;
  //     opacity: 0;
  //     transition: opacity 0.5s ease-in-out;
  //     cursor: pointer;
  //   }

  //   /* Content inside the popover */
  //   #popover-content {
  //     position: relative;
  //   }

  //   #popover-content p {
  //     margin: 0;
  //     font-size: 16px;
  //     color: #333;
  //   }

  //   /* Close button */
  //   #popover-close {
  //     position: absolute;
  //     top: -5px;
  //     right: -25px;
  //     background: none;
  //     border: none;
  //     font-size: 18px;
  //     font-weight: bold;
  //     color: #555;
  //     cursor: pointer;
  //     opacity: 0.8;
  //   }

  //   #popover-close:hover {
  //     opacity: 1;
  //   }

  //   @media screen and (max-width: 767px) {
  //     #chat-popover {
  //       width: 130px;
  //       padding: 10px 20px 10px 10px;
  //     }

  //     #popover-content p {
  //       font-size: 10px;
  //       line-height: 16px !important;
  //     }

  //     #popover-close {
  //       right: -20px;
  //       font-size: 14px;
  //     }
  //   }
  //   `;

  //   // Create a <style> element
  //   const style = document.createElement('style');
  //   style.type = 'text/css';
  //   style.appendChild(document.createTextNode(css));

  //   // Append the <style> element to the <head> of the document
  //   document.head.appendChild(style);

  //   // Create popover container
  //   const popover = document.createElement('div');
  //   popover.id = 'chat-popover';
  //   popover.innerHTML = `
  //     <div id="popover-content">
  //       <p>Selling or buying? 🤔 Renting or letting? I'm Emily, and I have the answers to your real estate questions!</p>
  //       <button id="popover-close">X</button>
  //     </div>
  //   `;

  //   document.body.appendChild(popover);

  //   // Fade-in effect
  //   popover.style.opacity = '0';
  //   this.setTimeout(() => (popover.style.opacity = '1'), 1000);
    
  //   // Event listeners
  //   const closeButton = document.getElementById('popover-close');
  //   closeButton.addEventListener('click', () => {
  //     popover.style.opacity = '0';
  //     setTimeout(() => popover.remove(), 500);
  //   });

  //   popover.addEventListener('click', (e) => {
  //     if (e.target !== closeButton) {
  //       openChat();
  //       popover.style.opacity = '0';
  //       setTimeout(() => popover.remove(), 500);
  //     }
  //   });

  //   const chatBubble = shadowRoot.querySelector('.vfrc-launcher');
  //   chatBubble.addEventListener('click', () => {
  //     closeButton.click();
  //   })
  // }, 60000);
});

const openChat = () => {
  const chatBubble = shadowRoot.querySelector('.vfrc-launcher');
  if (chatBubble) {
    chatBubble.click();
  }
}

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
      mutation.addedNodes.forEach((node) => {
        if (shadowRoot && !shadowRoot.getElementById("btn-font-increase")) {
          addFontSizeButtonToShadowDom();
        }

        if (node.classList && (node.classList.contains("vfrc-system-response") || node.classList.contains("vfrc-user-response"))) {
          const timestamps = node.querySelectorAll(".vfrc-timestamp");

          timestamps.forEach(function (timestamp) {
            const timeText = timestamp.textContent.trim(); // e.g., "12:41 pm"
            timestamp.textContent = convertTo24Hour(timeText); // Update with 24-hour format
          });
      
          const messages = node.querySelectorAll(".vfrc-message");
      
          messages.forEach(function (message) {
            message.style.fontSize = fontSize + "px";
          });
        }
      })
    }
  }
};

const modifyShadowDomTimestamps = () => {
  if (shadowRoot) {
    if (!shadowRoot.getElementById("btn-font-increase")) {
      addFontSizeButtonToShadowDom();
    }

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
