export const AddItem = title => ({
  type: "ADD_Item",
  title
});

export const UpdateItem = (ItemID, title) => ({
  type: "UPDATE_Item",
  id: ItemID,
  title: title
});

export const GetAllItem = () => ({
  type: "GET_ALL_Item"
});

export const GetSingleItem = ItemID => ({
  type: "GET_SINGLE_Item",
  id: ItemID
});

export const DeleteItem = ItemID => ({
  type: "DELETE_Item",
  id: ItemID
});
