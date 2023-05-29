declare const module: any;
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { log } from 'console';
import { AllExceptionsFilter } from './helpers/error/httpfilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('GenesisBank')
    .setDescription('system Api test')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('API', app, document);

  app.enableCors();
  const http_adapter = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(http_adapter));

  await app.listen(8080, () => {
    log(`Start Api server: http:/localhost:${8080}/API#`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
