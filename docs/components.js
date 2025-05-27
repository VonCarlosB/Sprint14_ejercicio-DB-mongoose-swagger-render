module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"Name of the task",
                        example:"Make documentation"
                    },
                    completed:{
                        type:'boolean',
                        description:"Whether task is completed or not",
                        example:true
                    },
                }
            },
            TaskInput:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"Name of the task",
                        example:"Make documentation"
                    }
                }
            },
            _id:{
                type:'objectId',
                description:"task identification number",
                example:"6201064b0028de7866e2b2c4"
            }
        }
    }
}