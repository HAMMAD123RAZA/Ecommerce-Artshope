const user={
    name:"user",
    title:'User',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            validation:(Rule)=>Rule.required()
                },
                {
                    name:'email',
                    title:'Email',
                    type:'string',
                    validation:(Rule)=>Rule.required().unique()
        
                },
                {
                    name:'password',
                    title:'Password',
                    type:'string',
                    validation:(Rule)=>Rule.required()
        
                },
                {
                    name:'role',
                    title:'Role',
                    type:'string',
                    validation:(Rule)=>Rule.required()

                },
                {
                    name:'createdAt',
                    title:'Created At',
                    type:'datetime',
                    Options:{
                        dateFormate:"YYYY-MM-DD",

                    },
                }
    ],
    initialValue:{
        createdAt:new Date().toISOString()
    }
}
export default user;