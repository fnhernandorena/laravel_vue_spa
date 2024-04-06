<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <h4>Create blog</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Title</label>
                                    <input type="text" class="form-control" v-model="blog.title">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-floating">
                                    <textarea class="form-control" id="textarea" style="height: 100px;"
                                        v-model="blog.description"></textarea>
                                        
                                    <label>Content</label>
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
export default{
name:"create-blog",
data(){
    return{
        blog:{
            title:'',
            description:''
        }
    }
},
methods:{
    async create(){
       await this.axios.post('/api/blog',this.blog)
       .then(res=>{
            this.$router.push({name:'showBlogs'}) 
        })
       .catch(err=>{
            console.log(err);
        })
    }
}
}
</script>