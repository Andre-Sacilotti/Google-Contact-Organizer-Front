<template>
  <div class ="content-display-body">
    <div class="content-display-content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentDisplay",
  props: {
    show: String
  }


}
</script>

<style scoped>

.content-display-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: calc(100vh - 70px - 20px);
  overflow-y: scroll;

}

@media (max-width: 511px){
  .content-display-content{
    width: calc(100% - 32px);
    background-color: #E9E9E9;
    min-height: calc(100vh - 70px - 32px);
    border-radius: 15px;
  }

  .content-display-body{
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px);

  }


}



@media (min-width: 512px){
  .content-display-body{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 5px;

  }

  .content-display-content{
    background-color: #E9E9E9;
    height: calc(100vh - 80px);
    max-height: calc(100vh - 70px - 40px);
    width: calc(100vw - 20px);
    border-radius: 30px;

  }



}

</style>