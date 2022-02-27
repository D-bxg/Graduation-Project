// 类组件状态的初始化
const initState = {
    isLoding:false,
    isFirst:true,
}
export default function Loding(preState=initState,action){
    // 获取action对象的type和data
    const{type,data}=action
    // 根据type决定如何处理data
    switch(type){
        case 'changeLoding':
            preState.isLoding=!preState.isLoding;
            return ;
        default:
        // 【初始化】
            return preState;
    }
}