/**
 * Typings for ReplAPI.it. Created by Coder100
 * 
 * TODO: Merge with the main library
 * TODO: Add comments
 */

import Parser from "rss-parser";

declare module "replapi-it";


// classes
declare class Blog {
  blogData(): Promise<{[key: string]: any} & Parser.Output<{[key: string]: any}>>;
  blogItem(guid: string): Promise<Parser.Item>;
  blogItems(order?: "newest" | "oldest", count?: number): Promise<Parser.Item[]>;
}


// interfaces
interface InitVariables {
  username: string;

  captcha: {
    token: string;
  }

  endpoints: {
    gql: string;
    restful: string;
    login: string;
  }

  markdown: {
    length: string;
    removeMarkdown: string;
  }

  previewCount: {
    comments: string;
  }

  experimentalFeatures: string;
  createDatabaseFlag: string;
}

interface ReplAPI {
  defaults: InitVariables;
  Blog: Blog;
  Board: Board;
  Comment: Comment;
  CustomDataQuery: CustomDataQuery;
  CustomRecursiveQuery: CustomRecursiveQuery;
  Explore: Explore;
  Database: Database;
  Languages: Languages;
  Leaderboard: Leaderboard;
  Login: Login;
  Notifications: Notifications;
  Post: Post;
  Repl: Repl;
  User: User;
}


// entrypoint
export default function ReplAPI(initVariables: InitVariables, fileType?: string): void;