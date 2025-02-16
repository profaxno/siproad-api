import { Module } from '@nestjs/common';
import { ReplicationService } from './replication.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [ReplicationService],
  exports: [ReplicationService]
})
export class ReplicationModule {}
