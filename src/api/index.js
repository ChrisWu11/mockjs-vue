import mockRequest from "./mockAjax"

//获取songs数据
export const reqGetSongs = () => mockRequest.get('/songs')