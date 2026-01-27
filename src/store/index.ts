import { defineStore } from "pinia";

const store = defineStore('test',{
    state:() => {
        return {
            num:1,
        }
    },
    getters:{
        getNum: (state) => `num：${state.num}`
    },
    actions:{
        setNum(newNum: number) {
            this.num = newNum;
        }
    },
})

export const useTestStore = store;
