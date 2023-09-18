# YapZ
A multipurpose chat application built by college undergrads

PAGES:

    
    

API's:

    (POST) /api/users/signup for User SignUP
    
    (GET) /api/users/signin for User SignIN (with jwt) 
    
    (POST) /api/users/forget-password for reseting Password
    
    (GET) /api/users


Database Models:

    USER MODEL :
    
        {
            name: {},
            email: {},
            username: {},
            password: {},
        }
        (sample user : 
                    {
                        "username" : "05-yuvraj-singh",
                        "password" : "12312345"
                    }
            )

    CHAT MODEL:

        {
            chatName: "" ,
            isGroupChat: (true/false) , 
            users: [],
            groupAdminID: (none if not a group chat),      
        }


    MESSAGE MODEL:

        {
            chatId: "",
            senderId: "",
            content: "",
            timestamp: "",      
        }