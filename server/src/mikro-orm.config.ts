import {__prod__} from "./constants";
import {Post} from "./entities/Post";
import {MikroORM} from "@mikro-orm/core";

export default {
  dbName: 'lireddit',
  user: 'postgres',
  password: '01programmer01',
  debug: !__prod__,
  type: 'postgresql',
  entities: [Post]
} as Parameters<typeof MikroORM.init>[0];
