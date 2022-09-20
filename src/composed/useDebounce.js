import { ref } from 'vue';
import { useStore } from "vuex";

export function useDebounce(timeoutCount = 1000, dispatchAction) {
    const store = useStore();
    let timeoutRef = null;
    const searchStr = ref("");

    const searchList = e => {
        if (timeoutRef !== null) {
            clearTimeout(timeoutRef);
        }

        searchStr.value = e.target.value;
        timeoutRef = setTimeout(() => {
            store.dispatch(dispatchAction, searchStr.value);
        }, timeoutCount);
    };

    return { searchStr, searchList };
}



// let timeoutRef = null;
// let searchStr = ref("");
// const searchUser = (event) => {
//   searchStr.value = event.target.value;
//   clearTimeout(timeoutRef);
//   timeoutRef = setTimeout(() => {
//     store.dispatch("getSearchedUser", searchStr.value);
//   }, 2000);
// };