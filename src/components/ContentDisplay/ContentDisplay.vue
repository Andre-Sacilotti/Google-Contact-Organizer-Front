<template>
  <div class ="body">
    <div class="content">
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

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

@media (max-width: 511px){
  .content{
    width: calc(100% - 32px);
    background-color: #E9E9E9;
    min-height: calc(100vh - 70px - 32px);
    border-radius: 15px;
  }

  .body{
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px);

  }


}



@media (min-width: 512px){
  .body{
    display: flex;
    align-items: center;
    justify-content: center;


    padding-top: 10px;
    padding-bottom: 5px;

  }

  .content{
    background-color: #E9E9E9;
    height: calc(50vh - 20px);
    max-height: calc(50vh - 35px - 20px);
    width: calc(100vw - 20px);
    border-radius: 30px;

  }
}

</style>