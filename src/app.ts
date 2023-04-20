import Koa from 'koa';
import cors from '@koa/cors';
import koaBody from 'koa-body';
import path from 'path';
import errorMiddleware from './controller/error';
// import mount from 'koa-mount';
// import serve from 'koa-static';
import router from './router';
const app = new Koa();
app.use(cors(
    {
        origin: '*',
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    }
))
app.use(koaBody({
    json: true,
    multipart: true,
    // formidable: {
    //     uploadDir: path.join(process.cwd(), 'tmp'), // 上传文件保存目录
    //     keepExtensions: true, // 保持文件后缀
    //     onFileBegin: (name, file: any) => {
    //         console.log(file)
    //     },
    // },
}))
//app.use(mount("/public", serve(path.join(process.cwd(), 'static'))));
app.use(errorMiddleware);
app.use(router.routes());
export default app