module.exports = {
    paths: {
        "/create": {
            post: {
                tags: {
                    Tasks: "Create a task",
                },
                description: "Create Task",
                operationId: "createTask",
                parameters: [],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TaskInput",
                            },
                        },
                    },
                },
                responses: {
                    201: {
                        description: "Task created successfully",
                    },
                    500: {
                        description: "Server error",
                    },
                },
            }
        },
        "/":{
            get: {
                tags: {
                    Tasks: "Get all tasks",
                },
                description: "Get All Tasks",
                operationId: "getAllTasks",
                parameters: [],
                responses: {
                    200: {
                        description: "Retrieved all tasks successfully",
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/Task",
                                },
                            },
                        },
                    },
                    500: { description: "Server error" },
                },
            },
        },
        "/id/{_id}": {
            put: {
                tags: {
                    Tasks: "Update a task",
                },
                description: "Update Task",
                operationId: "updateTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of Task to be updated",
                    },
                ],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/TaskInput",
                            },
                        },
                    },
                },
                responses: {
                    200: { description: "Task updated successfully" },
                    500: { description: "Server error" },
                },
            },
            delete: {
                tags: {
                    Tasks: "Delete a task",
                },
                description: "Delete Task",
                operationId: "deleteTask",
                parameters: [
                    {
                        name: "_id",
                        in: "path",
                        schema: {
                            $ref: "#/components/schemas/_id",
                        },
                        description: "Id of Task to be deleted",
                    },
                ],
                responses: {
                    200: { description: "Task deleted successfully" },
                    500: { description: "Server error" },
                },
            },
        },
    },
}