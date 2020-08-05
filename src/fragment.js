export const USER_FRAGMENT = `
    fragment UserParts on User{
        userName
        email
        firstName 
        lastName
        bio
        posts{
            id
            caption
        }
    }
`;

export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment{
        id
        text
        user {
            username
        }
    }
`;

