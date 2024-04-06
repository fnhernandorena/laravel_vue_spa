<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Edit blog</h4></div>
                <div class="card-body">
                    <form @submit.prevent="update">
                         <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="blog.title">
                                </div>
                            </div>
                            <div class="col-12 mb-2">

                                <div class="form-floating">
                                <textarea class="form-control" id="floatingTextarea2" v-model="blog.description" style="height: 100px"></textarea>
                                <label for="floatingTextarea2">Content</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </div>                          
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"edit-blog",
    data(){
        return {
            blog:{
                title:"",
                description:"",
            }
        }
    },
    mounted(){
        this.showBlog()
    },
    methods:{
        async showBlog(){
            await this.axios.get(`/api/blog/${this.$route.params.id}`).then(response=>{
                const { title, description } = response.data
                this.blog.title = title
                this.blog.description = description
            }).catch(error=>{
                console.log(error)
            })
        },
        async update(){
            await this.axios.put(`/api/blog/${this.$route.params.id}`,this.blog).then(response=>{
                this.$router.push({name:"showBlogs"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>