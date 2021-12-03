<!-- <template>
<div id="app">
  <div id="menu">
    <div class="header">
      <router-link to="/">
        <div class="logo">
          <img id="logo" src="/FIRE_EYES.gif">
          <h1>Help Your Working Mama!</h1>
        </div> -->
        <!-- <div class="title">
          <h1>Help Your Working Mama!</h1>
        </div> -->
      <!-- </router-link>
    </div>
    <div id="side">
      <router-link to="/request">
        <div class="menu-item list">
          <img id="logo2" src="/new_request.png">
          <p>New Request</p>
        </div>
      </router-link>
    </div>
  </div> -->
  <!-- <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/admin">Admin</router-link>
  </div> -->
<!-- </div>
</template> -->

<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img id="logo" src="/FIRE_EYES.gif">
      </router-link>
      <h1 id="title">Help Your Working Mama!</h1>
    </div>
    <div id="side">
      <router-link to="/request">
        <div class="menu-item list">
          <img id="logo2" src="/mama.png">
          <p>New Request</p>
        </div>
      </router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <a href="https://github.com/helamanl0424/creative4"><img id="github" src="/GitHub.png" alt="GitHub"></a>
</div>
</template>

<style>
/* html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

.header {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

.header {
  height: 200px;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
  text-align: center;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

#logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: 20%;
}


h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

p {
  text-align: center;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: space-around;
}

#side {
  width: 50px;
}

#logo2 {
  width: 50px;
  height: 200px;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 40px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
} */

* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

#menu {
  display: grid;
  grid-template-areas: "none brand side";
  padding-top: 100px;
}

#menu a {
  color: #B84901;
}

/* .footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  font-size: 12px;
} */

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100px;
}

#logo2 {
  height: 150px;
  width: 150px;
}

#logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  width: 40%;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: space-around;
}

#side {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

p {
  text-align: center;
}

#title {
  text-align: center;
}

#github {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width:5%;
  height:auto;
}

h1 {
  font-family: 'Montserrat', sans-serif;
}

</style>
