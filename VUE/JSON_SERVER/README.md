# jserver

> 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

//1.先全局安装jsonserver
npm install -g json-server
//2.响应文件下安装jsonserver
npm install  json-server --save
//3.在package.json的script中加：
  "json:server":"json-server --watch db.json",
//4.创建db.json并写入数据
//5.启动json_sever：npm run json:server 




//获取所有用户信息

http://localhost:3000/users

获取单个用户信息
http://localhost:3000/users/1  

//获取公司信息
http://localhost:3000/companies

//获取单个公司信息
http://localhost:3000/companies/2

//获取所有公司id为3的用户
http://localhost:3000/companies/3/users

//根据公司名字获取信息
http://localhost:3000/companies?name=Huawei


//根绝多个名字获取公司信息
http://localhost:3000/companies?name=Huawei&name=Google

//获取一页中只有两条数据  通过_page设置页码&_limit设置显示几个数据
http://localhost:3000/companies?_page=1&_limit=2

//按名字升序排序  asc升序  desc降序
http://localhost:3000/companies?_sort=name&_order=asc




//获取年龄为30及以上的
http://localhost:3000/users?age_gte=30


//获取年龄为30-33之间的
http://localhost:3000/users?age_gte=30&age_lte=33

//搜索用户信息
http://localhost:3000/users?q=xiaoming
http://localhost:3000/users?q=e   所有包含e的名字都会出来


//获取JSONPlaceholder的所有数据  :json-server http://jsonplaceholder.typicode.com/db
 "json:server:remote":"json-server http://jsonplaceholder.typicode.com/db",


