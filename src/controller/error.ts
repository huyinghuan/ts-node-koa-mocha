import { Context, Next } from 'koa';
import { Fail } from '../rcode';
// 错误处理中间件
export default async (ctx: Context, next: Next) => {
  try {
    // 执行下一个中间件
    await next();
  } catch (err: any) {
    // 捕获错误
    ctx.status = 500; // 设置 HTTP 状态码为 500 Internal Server Error
    ctx.body = Fail(err.message);
    // 在这里可以进行错误日志记录、发送错误报警等操作
    console.error(ctx.request.path, err); // 示例中简单地将错误输出到控制台
  }
};

