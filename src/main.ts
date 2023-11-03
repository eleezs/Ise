import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3006;
  app.setGlobalPrefix('/api/v1');
  // handle all user input validation globally

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true
    }
  ));
  await app.listen(port);
}
bootstrap();