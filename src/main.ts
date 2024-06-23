import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Starting application...');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('Application started on port 3000');
}
bootstrap();
