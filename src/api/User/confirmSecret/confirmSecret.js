import { secretGenerator, sendSecretMail, genereteToken } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation:{
        confirmSecret: async( _ , args, {request}) => {
            const { email, secret } = args;
            const user = await prisma.user({ email });
            if(user.loginSecret === secret){
                await prisma.updateUser({where:{id:user.id}, data:{loginSecret:''}})
                // JWT
                return genereteToken(user.id);
            }else{
                throw Error('Wrong email/secret combination');
            }
            
           
        }
    }
}