import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameGateway } from './game.gateway';
import { RoomModule } from 'src/room/room.module';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [
    RoomModule,
    UserModule
  ],
  providers: [GameGateway, GameService],
})
export class GameModule {}
