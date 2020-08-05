import {
    prisma
} from "../../../../generated/prisma-client";
import { USER_FRAGMENT } from "../../../fragment";


export default {
    Query: {
        me: async (_,__, {
            request,
            isAuthenticated
        }) => {
            isAuthenticated(request);
            const { user } = request;
            try {
                const userProfile = await prisma.user({
                    where: {
                        id:user.id
                    },
                });
                const posts = await prisma.user({
                    where: {
                        id:user.id
                    },
                }).posts();
                return {
                    user:userProfile,
                    posts
                }
               
            } catch (error) {
                console.log(error)
                return false;
            }
        }
    }
}