import {createStore} from 'redux'
// 声明一个实际的操作函数，响应操作
const cartReducer = (state = {
  current: 'home'
}, action) => {
    switch (action.type) {
        case 'change':
            return { ...state, current: action.current }
        default:
            return state
    }
}
// 创建 store 实例并导出
const store = createStore(cartReducer)
export default store