<template>
  <div class="contact-body">
    <div class="contact-upper-photo">
      <div class="contact-photo">
        <img :src="photo_url" class="contact-photo"/>
      </div>
    </div>

    <div class="contact-content">
      <div class="upper-contact-content-name"><div class="contact-content-name">{{name}}</div></div>

      <div class="upper-contact-content-email"><div class="contact-content-email">{{email}}</div></div>


    </div>

    <div class="contact-edit-icon">
      <font-awesome-icon class="icon" icon="ellipsis-h" size="lg" />
    </div>

  </div>
</template>

<script>
export default {
name: "Contact",
  props: {
    email: String,
    name: String,
    photo_url: String,
    id: String
  }
}
</script>

<style scoped>

.upper-contact-content-name{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.contact-content-name{
  padding-top: 3px;
  width: calc(0.6 * 280px - 40px);
  font-size: 13px;
  font-weight: 600;
  display: block;
  text-align: start;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.upper-contact-content-email{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
}

.contact-content-email{
  padding-top: 3px;
  font-size: 13px;
  font-weight: 300;
  display: block;
  text-align: start;


  white-space: nowrap;
  width: calc(0.6 * 280px);
  overflow: hidden;
  text-overflow: ellipsis;

}

.contact-upper-photo{
  width: calc(0.15 * 280px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
}

.contact-photo{
  width:33px;
  height:33px;
  border-radius: 50%;
  background-color: #C4C4C4;
}

.contact-edit-icon{
  color: #C4C4C4;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(0.15 * 280px);

}

.contact-body{
  display: flex;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 280px;
  height:52px;
  border-radius: 10px;
  background-color: #FDFDFD;
  box-sizing: border-box;

  box-shadow: 8px 8px 12px #00000025
}

@media(max-width: 390px){
  .contact-body{
    box-sizing: border-box;
    max-width: 280px;
    width: calc(75vw - 20px);
  }

  .contact-content-name{
    width: calc(37vw);

  }

  .contact-content-email{

    width: calc(40vw);


  }
}


</style>