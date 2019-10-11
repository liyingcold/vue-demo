// 封装操作localstoryge本地存储的方法   模块化的文件

/* eslint-disable no-new */
var storage={
    set(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    get(key){
        return JSON.parse(localStorage.getItem(key));

    },
    remove(key){
        localStorage.removeItem(key);
    }
}

// 将封装好的东西暴露出去
export  default storage;


