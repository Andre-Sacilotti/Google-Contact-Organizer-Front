<template>
  <div class="contact-body">

    <Backdrop :show="showModal" :handler="handlerBackdropClick"/>
    <Modal :id="id" :show="showModal">
      <Loading :show="showLoading"/>

      <div class="modal-profile-photo-upper">
        <div class="modal-profile-photo">
          <img :src="photo_url" class="modal-contact-photo"/>
        </div>
      </div>
      <div class="modal-profile-name">{{name}}</div>
      <hr class="horizaon_separator" />
      <div class="modal-profile-infos">
        <div class="modal-profile-infos-address modal-flex">
          <div class="modal-bold">Address </div> {{ ": " + contactData['address'] }}
        </div>
        <div class="modal-profile-infos-birthdate modal-flex">
          <div class="modal-bold">Birthday </div> {{": " + contactData['birth_date'] }}
        </div>
        <div class="modal-profile-infos-organization modal-flex">
          <div class="modal-bold">Organization </div> {{ ": " +contactData['organization'] }}
        </div>
        <div class="modal-profile-infos-occupation modal-flex">
          <div class="modal-bold">Occupation </div> {{ ": " +contactData['occupation'] }}
        </div>
      </div>
      <div class="modal-profile-buttons">
      </div>

    </Modal>

    <div class="contact-upper-photo">
      <div class="contact-photo">
        <img :src="photo_url" class="contact-photo"/>
      </div>
    </div>

    <div class="contact-content">
      <div class="upper-contact-content-name"><div class="contact-content-name">{{name}}</div></div>

      <div class="upper-contact-content-email"><div class="contact-content-email">{{email}}</div></div>


    </div>

    <div class="contact-edit-icon" @click="() => handlerIconClick(id)">
      <font-awesome-icon class="icon" icon="ellipsis-h" size="lg" />
    </div>

  </div>
</template>

<script>

import Backdrop from "../../components/Backdrop/Backdrop.vue"
import Modal from "@/components/Modal/Modal.vue";
import API from "@/services/Axios";
import Loading from "@/components/Loading/Loading";

export default {
name: "Contact",
  data: ()=>({
    showModal: false,
    contactData: {'undefined': true},
    showLoading: false,
  }),
  props: {
    email: String,
    name: String,
    photo_url: String,
    id: String
  },
  components: {
    Backdrop,
    Modal,
    Loading
  },
  methods: {

    handlerBackdropClick: function(){
      this.showModal = false

    },
    handlerIconClick: function(){
      this.showModal=true

      if(this.contactData['undefined'] === true){
        this.showLoading = true
          API.get(
              "contact/?personId="+this.id+"/",
              { headers: {'authorization-code': this.$store.state.accessToken}}
          ).then(response => {
            this.contactData = response.data
            this.contactData['undefined'] = false
            this.showLoading = false
          }).catch(error => {
            console.log(error)
          })
      }else{
        console.log("jumped request")
      }
    }
  }
}
</script>

<style scoped>


.modal-profile-photo, .modal-contact-photo{
  background-color: #C4C4C4;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.horizaon_separator{
  width: 70%;
  border: 1px solid #00000012;

  max-width: 280px;
}

.modal-flex{
  display: flex;
  width: 200px;
}

.modal-bold{
  font-weight: bold;
}

.modal-bold:after{
  content: ' ';
}

.modal-profile-infos{
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: flex-start;

  font-size: 13px;
}

.modal-profile-name{
  padding-top: 20px;
}


.modal-profile-photo-upper{
  padding-top: 20px;
}

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

  box-shadow: 4px 4px 16px #00000025
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

.contact-edit-icon:hover{
  color: #adadad;
}

.contact-edit-icon:active{
  color: #9a9a9a;
}


</style>