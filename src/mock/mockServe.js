//引入mockjs
import Mock from 'mockjs'
//引入json数据,webpack里的json文件是默认对外暴露的
import songs from "./songs.json"
//第一个参数：请求地址   第二个参数：请求数据
Mock.mock("/mock/songs",{code:200,data:songs});