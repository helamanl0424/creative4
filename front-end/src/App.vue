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
          <p id="newreq">New Request</p>
        </div>
      </router-link>
      <router-link to="/edit">
        <div class="menu-item list">
          <img id="logo2" src="/editmama.png">
          <p id="newreq">Edit Request</p>
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

* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

.content {
  margin-top: 120px;
  padding: 20px 20px 20px 50px;
  min-height: 500px;
}

#menu {
  display: grid;
  grid-template-areas: "none brand side";
  padding-top: 100px;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100px;
  padding-top: 30px;
}

#logo2 {
  height: 100px;
  width: 100px;
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
  width: 50px;
  padding-left: 100px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  margine: 0px;
}

#newreq {
  text-align: center;
  margin: 0px;
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
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  #logo2 {
    width: 80px;
    height: 80px;
  }

  #newreq {
    font-size: 15px;
  }
}

@media only screen and (max-width: 767px) and (min-width: 540px) {
  #logo2 {
    width: 60px;
    height: 60px;
  }

  #newreq {
    font-size: 12px;
  }
}
</style>
