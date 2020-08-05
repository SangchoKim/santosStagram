import {
    prisma
} from "../../../../generated/prisma-client";


export default {
    Query: {
        seeUser: async (_, args, {
            request,
            isAuthenticated
        }) => {
            const {
                id
            } = args;
            try {
                return await prisma.user({
                    where: {
                        id
                    },
                })
               
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
}