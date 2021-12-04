\<template>
<div class="home">
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><router-link to="/incomplete"><p class="pure-menu-link">Not Started</p></router-link></li>
      <li class="pure-menu-item"><router-link to="/doing"><p class="pure-menu-link">In Progress</p></router-link></li>
      <li class="pure-menu-item"><router-link to="/completed"><p class="pure-menu-link">Completed</p></router-link></li>
    </ul>
  </div>
  <section class="image-gallery">
    <div class="image" v-for="request in requests" :key="request.id">
      <div class="show">
        <div class="about">
          <div class="textbox">
            <p class="text"><b>Location: </b>{{request.location}}</p>
         </div>
         <div class="textbox">
            <p class="text"><b>Description: </b>{{request.description}}</p>
         </div>
         <div class="textbox">
            <p class="text"><b>Assigned to: </b>{{request.assign}}</p>
         </div>
         <div class="textbox">
            <p class="text"><b>Status: </b>{{request.status}}</p>
         </div>
        </div>
        <div class="picture">
          <img :src="request.path" />
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';
export default {
  name: 'Home',
  data() {
    return {
     requests: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/requests");
        this.requests = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.image h2 {
  font-style: italic;
}

.image {
  display: flex;
  flex-direction: column;
}

.show {
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  justify-content: space-around;
}

.picture {
  padding-left: 100px;
}

img {
  width: 650px;
  height: 500px;
}

.about {
  display: flex;
  flex-direction: column;
}

.text {
  line-height: 1.5em;
  font-size: 20px;
}

.textbox {
  display: flex;
  flex-direction: row;
}

@media only screen and (max-width: 1023px) and (min-width: 768px) {
  img {
    width: 500px;
    height: 350px;
  }
  
  .text {
    line-height: 1.5em;
    font-size: 15px;
  }
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  img {
    width: 400px;
    height: 250px;
  }

  .text {
    line-height: 1.5em;
    font-size: 12px;
  }
}
</style>
