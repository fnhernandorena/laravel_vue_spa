<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col">
                <h1 class=" text-center"><span class="badge bg-secondary">HOME</span> Page</h1>
               <div class="d-flex flex-wrap"> <div v-for="blog in blogs" :key="blog.id">
                    <div class="card col" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">{{ blog.title }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">{{ blog.description }}</h6>
                        </div>
                    </div>
                </div></div>

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
                .catch(err => {
                    this.blogs = [];
                })
        }
    }
}
</script>