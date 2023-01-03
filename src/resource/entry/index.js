import entryCreate from "./entryCreate";
import entryEdit from "./entryEdit";
import entryList from "./entryList";
import { LibraryBooksRounded,PostAddRounded} from "@mui/icons-material";
const Entry = {
  list: entryList,
  edit: entryEdit,
  create: entryCreate,
  icon: LibraryBooksRounded,
  createIcon: PostAddRounded,
};
export default Entry;