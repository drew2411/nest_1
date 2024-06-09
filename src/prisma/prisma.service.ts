import { Global, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        super({
            datasources:{
                db:{
                    url: 'postgresql://NMJ_owner:I79XfVBYNSZx@ep-lively-dew-a5k6i0l3-pooler.us-east-2.aws.neon.tech/NMJ?sslmode=require'
                }
            }
        })
    }
}
