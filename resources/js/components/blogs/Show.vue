<template>
    <div class="container">
        <div class="row">
            <router-link :to="{ name: 'createBlogs' }"><i class="fa-solid fa-square-plus"></i></router-link>
        </div>
        <div class="col-12">
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class=" bg-primary text-white">
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="blog in blogs" :key="blog.id">
                            <td>{{ blog.id }}</td>
                            <td>{{ blog.title }}</td>
                            <td>{{ blog.description }}</td>
                            <td>
                                <router-link :to="{ name: 'editBlogs', params: { id: blog.id } }" class="btn btn-info"><i
                                        class="fa-solid fa-square-pen"></i></router-link>
                                <a type="button" @click="deleteBlog(blog.id)" class="btn  btn-danger"><i
                                        class="fa-solid fa-square-minus"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'blogs',
    data() {
        return {
            blogs: []
        }
    },
    created() {
        this.showBlogs();
    },
    methods: {
        async showBlogs() {
            await this.axios.get('/api/blog')
                .then(response => {
                    this.blogs = response.data;
                })
                .catch(err=>{
                    this.blogs = [];
                })
        },
        deleteBlog(id){
            if(confirm('Are you sure you want to delete this blog?')){
                this.axios.delete('/api/blog/'+id)
                   .then(response=>{
                        this.showBlogs();
                    })
                   .catch(err=>{
                        console.log(err);
                    })
            }
        }
    }
}
</script>