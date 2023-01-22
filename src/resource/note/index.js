import noteCreate from "./noteCreate";
import noteList from "./noteList";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import FolderIcon from '@mui/icons-material/Folder';
import NoteIcon from '@mui/icons-material/Note';
const Note = {
  list: noteList,
  create: noteCreate,
  icon: NoteIcon,
  createIcon: CreateNewFolderIcon,
};
export default Note;