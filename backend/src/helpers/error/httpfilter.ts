import { Catch, ExceptionFilter, HttpAdapterHost, ArgumentsHost, HttpException, HttpStatus } from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {};

    console.log('HTTP- ERROR:::',exception)
    
    this.httpAdapterHost.httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}