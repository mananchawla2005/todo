export default defineEventHandler(async (event) => {
    const tasks = [
        {
            "id": 0,
            "date": null,
            "task": "Initial tasks",
            "color": 'bg-teal-100'
        },
        {
            "id": 1,
            "date": null,
            "task": "Initial tasks 2",
            "color": 'bg-teal-100'
        },
        {
            "id": 2,
            "date": null,
            "task": "Initial tasks 3",
            "color": 'bg-teal-100'
        },
        {
            "id": 3,
            "date": null,
            "task": "Initial tasks 4",
            "color": 'bg-teal-100'
        },
        {
            "id": 4,
            "date": null,
            "task": "Initial tasks 5",
            "color": 'bg-teal-100'
        },        
    ]
    return tasks
})

// /api/tasks  