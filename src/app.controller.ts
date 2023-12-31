import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response) {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Ise Backend API',
    });
  }
}
