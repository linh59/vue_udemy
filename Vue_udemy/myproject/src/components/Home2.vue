<template>
<div>
    <div v-for="(thread,index) in threads" v-bind:key="index" class="col-large push-top">

          <h1>{{thread.title}}</h1>

          <div class="post-list">

              <div v-for="(postId,index) in thread.posts" v-bind:key="index" class="post">

                  <div class="user-info">
                      <a href="profile.html#profile-details" class="user-name">
                          {{users[posts[postId].userId].name}}
                      </a>

                      <a href="profile.html#profile-details">
                          <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
                      </a>

                      <p class="desktop-only text-small">107 posts</p>                      
                  </div>

                  <div class="post-content">
                      <div>
                        <p>
                         {{posts[postId].text}}
                        </p>
                      </div>
                  </div>



                  <div class="post-date text-faded">
                      {{posts[postId].publishedAt}}
                  </div>
              </div>
      </div>
</div>
</div>
</template>

<script>
    import sourceData from '@/data/data'
    console.log(sourceData)
    export default {
        name: 'home2',
        data () {
            return {
                threads: sourceData.threads,
                posts: sourceData.posts,
                users: sourceData.users
            }
        },
        methods: {
        
        },
        components: {
        
        }
    }
</script>

<style scoped>

</style>

