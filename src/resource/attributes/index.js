import attributesCreate from "./attributesCreate";
import attributesEdit from "./attributesEdit";
import attributesList from "./attributesList";
import { ControlPointDuplicate,CategoryRounded } from "@mui/icons-material";

const Attributes = {
  list: attributesList,
  edit: attributesEdit,
  create: attributesCreate,
  icon: CategoryRounded,
  createIcon: ControlPointDuplicate,
};
export default Attributes;