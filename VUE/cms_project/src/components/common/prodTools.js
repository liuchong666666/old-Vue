let prodTools = {};

let store = window.localStorage;


// let prods = {没有数据就应该是空对象};//未来从LocalStorage中获取
// let prods = store.getItem();
// let prods =JSON.parse(localStorage.getItem('prod')||'{}');
let prods =JSON.parse(store.getItem('prods')||'{}');
//如果localStorage.getItem('prod')没有值，会成为null，，parse就报错，所以加个{}，没有值会转为空对象{}

//{id:num}
//增加或追加
prodTools.addOrUpdate=function(p){
    if(prods[p.id]){
        //如果存在,就追加
        prods[p.id] +=p.num;
    }else{
        //不存在就直接赋值
        prods[p.id] = p.num;
    }
    //保存
    this.saveProds (prods);
    
}
//删除
prodTools.delete=function(id){
   delete prods[id];
   //保存
   this.saveProds (prods);
}
//获取
prodTools.getProds = function(){
    // return prods;

    //获取到storage
    return JSON.parse(store.getItem('prods')||'{}');
}
//获取总数
prodTools.getTotalCount= function(){
    let sum=0;
    for(let id in prods){
        sum+=prods[id];
    }
    return sum;
}

//存储
prodTools.saveProds = function(prods){
    store.setItem('prods',JSON.stringify(prods));
}
export default prodTools;
