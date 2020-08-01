import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from '../../../middlewares';
export default {
    Mutation:{
        toggleLike: async( _ , args, { request } ) => {
            isAuthenticated(request);
            const { postId } = args;
            const { user } = request;
            const filterOption = {
                AND:[
                    {
                        user:{
                            id:user.id
                        }
                    },
                    {
                        post:{
                            id:postId
                        }
                    }
                ]
            }
            
            try {
                const existingLike = await prisma.$exists.like(filterOption);
                console.log(existingLike);
                if(existingLike){
                    await prisma.deleteManyLikes(filterOption);
                }else{
                    await prisma.createLike({
                        user:{
                            connect:{
                                id:user.id
                            }
                        },
                        post:{
                            connect:{
                                id:postId
                            }
                        }
                    });
                }
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
           
        }
    }
}