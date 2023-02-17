import { ApiMockResponse } from "../ApiMockData/dummyData";
const LocalStorageKeyName = "kanban-boards";
//Data Layer
export class BoardAPI {
    async fetchBoardList() {
        var a;
        const apiData = ApiMockResponse;
        let BoardList = [];
        //first check local storage if local storage is empty then add api mock data as seed
        if (localStorage.getItem(LocalStorageKeyName)) {
            const localStorageData = JSON.parse((a = localStorage.getItem(LocalStorageKeyName)) !== null && a !== void 0 ? a : "");
            BoardList = [...localStorageData];
        }
        else {
            BoardList = [...apiData];
            updateLocalStorageBoards(BoardList);
        }
        return BoardList;
    }
} 
//Business Layer
export async function fetchBoardList() {
    const api = new BoardAPI();
    return api.fetchBoardList();
}
export function updateLocalStorageBoards(boards) {
    localStorage.setItem(LocalStorageKeyName, JSON.stringify(boards));
}