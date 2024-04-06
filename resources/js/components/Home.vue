<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col text-center">
                <h1>Componente <span class="badge bg-secondary">HOME</span></h1>
                <div v-for="blog in blogs" :key="blog.id">
                    <div>{{ blog.title }}</div>
                    <div>{{ blog.description }}</div>
                </div>

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