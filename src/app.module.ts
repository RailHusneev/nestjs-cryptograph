import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MarketModule } from './market/market.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    MarketModule,
  ],
  controllers: [],
})
export class AppModule {}
