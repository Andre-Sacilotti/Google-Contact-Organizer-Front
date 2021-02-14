import store from "@/store/store"

export default {
    name: "Navbar",
    component: {

    },
    data: ()=> ({
        profile_photo_url: store.state.profile_photo
    }),
    props: {
        'is_login': String,
        'handlerSideBar': Function,
    }
}

