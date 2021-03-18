import Dexie, { Table } from "dexie";
import { Friend } from "./Friend";

class FriendsDB extends Dexie {
  friends!: Table<Friend>;

  constructor() {
    super("friendsDB");
    this.version(2).stores({
      friends: `
        ++id,
        age`
    });
  }
}

export const db = new FriendsDB();
