const notifications = document.querySelector(".notifications");
const buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-solid fa-circle-check",
    text: "success: this is a success toast.",
  },
  error: {
    icon: "fa-solid fa-circle-xmark",
    text: "Error: this is an error toast.",
  },
  warning: {
    icon: "fa-solid fa-triangle-exclamation",
    text: "Warning: this is a warning toast.",
  },
  info: {
    icon: "fa-solid fa-circle-info",
    text: "Info: this is an information toast.",
  },
};

const removeToast = (toast) => {
  toast.classList.add("hide");
  if (toast.timeoutId) clearTimeout(toast.timeoutId); //clearing the timeout for the toast
  setTimeout(() => toast.remove(), 500); //removing the toast after 500ms
};

const createToast = (id) => {
  //getting the icon & text for the toast based on the id
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li"); //create new li element for toast
  toast.className = `toast ${id}`; //setting the classes for toast

  //setting innerHtml for toast
  toast.innerHTML = `<div class="column">
                     <i class="fa-solid ${icon}"> </i>
                     <span>${text}</span>
                     </div>
                    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

  notifications.appendChild(toast); //append toast to the notification section
  //setting a timeout to remove the toast
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

// adding a click event listener to each button to toast when it clicked
buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
