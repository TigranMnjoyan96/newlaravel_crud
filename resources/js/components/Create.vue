<template>
    <div>
        <div class="col s4">
            <h2>Create Task</h2>
        </div>
        <div class="row">
            <form @submit.prevent="formSubmit" class="pt-3">

                <div class="input-field col s6">
                    <input id="title" type="text" class="validate" v-model="tasks.title">
                    <label for="title">Title</label>
                </div>
                <div class="input-field col s6">
                    <input id="description" type="text" class="validate" v-model="tasks.description">
                    <label for="description">Description</label>
                </div>

                    <div class="col s3">
                        <select browser-default ref="select" v-model="tasks.tagId" class="col s2">
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>

                <div class="col s6">
                    <button class="btn waves-effect waves-light mt-3" type="submit">Submit
                        <i class="material-icons right">create</i>
                    </button>
                </div>

            </form>


        </div>


        <div class="row">
            <div class="container">
                <div class="col">
                    <div v-if="!allTasks.length">loading...</div>
                    <table v-else>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Selected Id</th>
                            <th>Action</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-for="task in allTasks" :key="task.id">
                            <td>{{task.id}}</td>
                            <td>{{task.title}}</td>
                            <td>{{task.description}}</td>
                            <td v-if="task.tag">{{task.tag.name}}</td>
                            <td v-else></td>
                            <td>
                                <button class="btn waves-effect" @click="removeTask(task.id)">
                                    <i class="material-icons text-danger">delete</i>
                                </button>
                                <button class="btn waves-effect" @click="editTask(task.id)">
                                    <i class="material-icons text-warning">edit</i>
                                </button>
                            </td>
                        </tr>

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Create",
        data() {
            return {
                tasks: {
                    title: '',
                    description: '',
                    tagId: ''
                },
                allTasks: [],
            }
        },
        methods: {
            getTasks() {
                axios.get('/api/tasks')
                    .then(res => {
                        this.allTasks = res.data
                        this.tasks.title = ''
                        this.tasks.description = ''
                        this.tasks.tagId = ''
                    })
                    .catch(err => {
                    })
            },
            formSubmit() {
                axios.post('/api/tasks/', {
                    title: this.tasks.title,
                    description: this.tasks.description,
                    tagId: this.tasks.tagId
                })
                    .then(res => {
                        this.getTasks()
                        console.log(res, 555);
                    })
                    .catch(err => {

                    })
            },
            removeTask(id) {
                axios.delete('/api/tasks/' + id)
                    .then(res => {
                        console.log(res);
                        this.getTasks()
                    })
                    .catch(err => {

                    })
            },
            editTask(id) {
                axios.put('/api/tasks/' + id, {
                    title: this.tasks.title,
                    description: this.tasks.description,
                    tagId: this.tasks.tagId
                })
                    .then(res => {
                        console.log(res)
                        this.getTasks()
                    })
                    .catch(err => {

                    })
            }
        },

        mounted() {
            M.FormSelect.init(this.$refs.select);
            this.getTasks()
        }
    }
</script>

<style scoped>

</style>
