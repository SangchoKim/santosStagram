import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from '../../../middlewares';
export default {
    Query: {
        searchPost: async (_, args) => prisma.posts({
            where: {
                OR: [{
                        location_starts_with: args.term
                    },
                    {
                        caption_starts_with: args.term
                    },
                   
                ]
            }
        })
    }
    
}