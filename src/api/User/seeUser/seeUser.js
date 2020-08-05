import {
    prisma
} from "../../../../generated/prisma-client";


export default {
    Query: {
        seeUser: async (_, args) => {
            const {
                id
            } = args;
            try {
                const user = await prisma.user({id});
                const posts = await prisma.user({id}).posts();
                return { user, posts }
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
}