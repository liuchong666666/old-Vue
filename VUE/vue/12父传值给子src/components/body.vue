<template>
        <div>
            我是body,{{texttwo}}
          </div>
      </template>
      
      <script>
       
        export default {
          data() {//data是一个函数
            return {//return过一个对象
            }
          
          },
          props:['texttwo']
        }
      </script>
     <style scoped>
        div{
          height: 50px;
          background-color: skyblue;
        }
      </style>