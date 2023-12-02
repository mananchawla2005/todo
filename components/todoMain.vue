<script setup>
var todoText = ref("")
var todoDate = ref(null)
var counter = ref(0)
var tasks = reactive([
    {
        "id": counter.value,
        "date": null,
        "task": "Initial tasks",
        "color": 'bg-teal-100'
    },
])

async function addTodo() {
    counter.value = counter.value+1
    tasks.push({
        "id": counter.value,
        "date": todoDate.value,
        "task": todoText.value,
        "color": randomColor()
    })

    todoText.value = ""
}

onMounted(async ()=>{
    const tasksFromServer = await $fetch("/api/tasks", {
        method: "POST"
    })
    tasksFromServer.forEach(element => {
        tasks.push(element)
    });
})

const colors = ['bg-teal-100', 'bg-red-300', 'bg-pink-100', 'bg-yellow-200', 'bg-purple-200'];
var lastUsedColor = ref("");
function randomColor() {
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === lastUsedColor.value);

    lastUsedColor.value = newColor;

    return newColor;
}

function deleteNote(id) {
    const index = tasks.findIndex(x => x.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    console.log(tasks)
}
</script>
<template>
    <div>
        <form @submit.prevent="addTodo">
            <input class="p-4 focus:outline-none xl:w-[800px] w-[450px] rounded-xl shadow-2xl" type="text"
                placeholder="Enter your task!" v-model="todoText"/>
            <br />
            <input class="mt-5 p-2 rounded-lg" v-model="todoDate" type="date" required="true"/>
        </form>
        <br />
        <br />
        <div class="text-center">
            <div class="grid md:grid-cols-3 xl:w-[800px] w-[450px] mx-auto gap-4">
                <template v-for="t in tasks">
                    <div>
                        <todo-note :text="t.task" :date="t.date" :color="t.color" class="rounded-lg" :id="t.id" @delete-me="deleteNote"/>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>