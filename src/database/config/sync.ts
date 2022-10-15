import Users from "../models/user";
import Posts from "../models/post";

async function syncTable(){
    await Users.drop();
    await Posts.drop();

    await Users.sync();
    await Posts.sync();
}

syncTable();