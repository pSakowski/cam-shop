import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Use the ValidationPipe to enable validation and transformation of incoming data
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Set the global prefix for your API routes
  app.setGlobalPrefix('api');

  // Enable cookie parsing
  app.use(cookieParser());

  // Access the PrismaService and enable shutdown hooks
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // Access the ConfigService and listen on the configured port
  const configService = app.get(ConfigService);
  await app.listen(configService.get('port'));

  // Configure the express instance
  const expressApp = express();
  expressApp.use(express.json());
  expressApp.use(express.urlencoded({ extended: true }));

  // Mount the Nest application onto the express instance
  app.init();

  // Serve static files (CSS, JavaScript, etc.)
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Set up a view engine for rendering templates (if applicable)
  // For example, if you're using handlebars as the template engine:
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
}
bootstrap();
