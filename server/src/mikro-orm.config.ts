import {__prod__} from "./constants";
import {Post} from "./entities/Post";
import {MikroORM} from "@mikro-orm/core";
import path from "path";

export default {
  dbName: 'lireddit',
  user: 'postgres',
  password: '01programmer01',
  debug: !__prod__,
  type: 'postgresql',
  entities: [Post],
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  }
} as Parameters<typeof MikroORM.init>[0];
