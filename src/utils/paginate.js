import { slice, take } from "lodash";

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber-1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);

}