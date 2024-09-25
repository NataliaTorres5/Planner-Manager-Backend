import { isValidObjectId } from "mongoose";
function validateObjectId (id) {
    return isValidObjectId(id);
}
export default validateObjectId 