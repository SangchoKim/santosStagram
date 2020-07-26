import { secretGenerator, sendSecretMail, genereteToken } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation:{
        confirmSecret: async( _ , args, {request}) => {
            const { email, secret } = args;
            const user = await prisma.user({ email });
            if(user.loginSecret === secret){
                // JWT
                return genereteToken(user.id);
            }else{
                throw Error('Wrong email/secret combination');
            }
            
           
        }
    }
}