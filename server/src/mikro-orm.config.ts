import {__prod__} from "./constants";
import {Post} from "./entities/Post";
import {MikroORM} from "@mikro-orm/core";
import path from "path";
import {User} from "./entities/User";

const dirName = "C:\\Users\\John\\WebstormProjects\\lireddit\\server\\src"
export default {
  dbName: 'lireddit',
  user: 'postgres',
  password: '01programmer01',
  debug: !__prod__,
  type: 'postgresql',
  entities: [Post, User],
  migrations: {
    path: path.join(dirName, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/
  }
} as Parameters<typeof MikroORM.init>[0];
