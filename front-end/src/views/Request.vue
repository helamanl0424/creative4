<template>
<div class="request">
  <div class="heading">
    <h2>Raise a request</h2>
   </div>
   <div class="add">
     <div class="form">
       <input v-model="location" placeholder="Location">
       <p></p>
       <input v-model="description" placeholder="Description">
       <p></p>
       <form>
         <label for="assign">Assign to: </label>
         <select name="assign" id="assign">
           <option value="Luke">Luke</option>
           <option value="Helaman">Helaman</option>
           <option value="Kenneth">Kenneth</option>
           <option value="Gordon">Gordon</option>
           <option value="William">William</option>
           <option value="Yiu">Yiu</option>
         </select>
       </form>
       <form>
         <label for="status">Status: </label>
         <select name="status" id="status">
           <option value="Not Started">Not Started</option>
           <option value="In Progress">In Progress</option>
           <option value="Completed">Completed</option>
         </select>
       </form>
       <input type="file" name="photo" @change="fileChanged">
       <button @click="upload">Upload</button>
     </div>
     <div class="upload" v-if="addItem">
       <p><b>Location: </b>{{addItem.location}}</p>
       <p><b>Description: </b>{{addItem.description}}</p>
       <p><b>Assigned to: </b>{{addItem.assign}}</p>
       <p><b>Status: </b>{{addItem.status}}</p>
       <img :src="addItem.path" />
     </div>
   </div>
</div>
</template>

<style scoped>

h1 {
  font-size: 20px;
}

.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 8px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>

<script>
import axios from 'axios';
export default {
  name: 'Request',
  data() {
    return {
      location: "",
      description: "",
      assign: "",
      status: "Incomplete",
      file: null,
      addItem: null,
      requests: [],
      findLocation: "",
      findItem: null,
      findDescription: "",
      findAssign: "",
      findStatus: "",
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    suggestions() {
      let requests = this.requests.filter(request => request.location.toLowerCase().startsWith(this.findLocation.toLowerCase()));
      return requests.sort((a, b) => a.location > b.location);
    }
  },
  methods: {
    selectItem(request) {
      this.findLocation = "";
      this.findItem = request;
      this.findDescription = "";
      this.findStatus = "";
    },
    async deleteItem(request) {
      try {
        await axios.delete("/api/requests/" + request._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async editItem(request) {
      try {
        await axios.put("/api/requests/" + request._id, {
          location: this.findItem.location,
          description: this.findItem.description,
          assign: this.findItem.assign,
          status: this.findItem.status,
        });
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async getItems() {
      try {
        let response = await axios.get("/api/requests");
        this.requests = response.data;
        return true;
       } catch (error) {
         console.log(error);
       }
    },
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let selectElement = document.querySelector('#status');
        let output = selectElement.value;
        let selectElement2 = document.querySelector('#assign');
        let output2 = selectElement2.value;
        let r2 = await axios.post('/api/requests', {
          location: this.location,
          description: this.description,
          assign: output2,
          status: output,
          path: r1.data.path
        });
        this.addItem = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
