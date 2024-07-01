
const unReadMessages = document.querySelectorAll('.unread');
const unReadMessagesCount = document.getElementById('count');
const markAll = document.getElementById('toggle');

// Initial count of unread messages
unReadMessagesCount.innerText = unReadMessages.length;

// Add click event listener to each unread message
unReadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const dotToRemove = message.querySelector(".dot");
        if (dotToRemove) {
            dotToRemove.classList.remove("dot");
        }
        const newUnreadMessages = document.querySelectorAll(".unread");
        unReadMessagesCount.innerText = newUnreadMessages.length;
    });
});

// Add click event listener to mark all button
markAll.addEventListener("click", () => {
    unReadMessages.forEach((message) => {
        message.classList.remove("unread");
        const dotToRemove = message.querySelector(".dot");
        if (dotToRemove) {
            dotToRemove.classList.remove("dot");
        }
        const newUnreadMessages = document.querySelectorAll(".unread");
        unReadMessagesCount.innerText = newUnreadMessages.length;
    });
});