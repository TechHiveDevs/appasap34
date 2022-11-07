
import show from "./show.post";
import create from "./create.post";
import edit from "./edit.post";
import list from "./list.post";

export default { 
  name: "post",
  label: "post",
  hide: false,
  create,
  edit,
  list,
  show,
}