   import deleteItemHandler from "../handlers/deleteItemHandler.js";

const createItem = (item) => {
    const itemDom = document.createElement("div");
    itemDom.id = item.id;
    itemDom.classList.add("item");

    const itemText = document.createElement("span");
    itemText.classList.add("item-text");
    itemText.innerText = item.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
        deleteItemHandler(item.id);
    });

    itemDom.appendChild(itemText);
    itemDom.appendChild(deleteBtn);

    return itemDom;
};


export default createItem;