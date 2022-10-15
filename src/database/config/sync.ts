import Users from "../models/user";
import Posts from "../models/post";

async function syncTable(){
    await Posts.drop();
    await Users.drop();

    await Users.sync();
    await Posts.sync();
}

syncTable();