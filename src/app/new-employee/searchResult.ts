import { NewEmployee } from "./employee2";

export interface SearchResult {
    status: string;
    data: Array<NewEmployee>;
}