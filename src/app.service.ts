import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPublic(): string {
    return '👋 This is a public endpoint yo!';
  }

  getPrivate(): string {
    return '🔐 This is a private endpoint yo!';
  }
}
