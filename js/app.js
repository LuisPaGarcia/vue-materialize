// Items on the NavBar
let navbarItems = new Vue({
    el:'#vue-nav-repeat',
    data:{
        itemsOnNavbar:[
            { text:'Home', link:'home.html' },
            { text:'About', link:'about.html' },
            { text:'Price', link:'price.html' },
            { text:'Logout', link:'logout.html'}
        ]
    }
})


Vue.component('password-field',{
    template:`<div class="row">
                    <div class="input-field col s12">
                    <input id="password" type="password" class="validate">
                    <label for="password">This is a password custom component</label>
                    </div>
                </div>`
})




new Vue({
    el:'#vue-general-form',
    
    data:{
        firstName: '',
        lastName:'',
        emptyornot: true,
        enableOrDisable: 'Disabled'
    },

    methods:{
        VueShowAlert: function(){
            if (this.firstName != '' && this.lastName != '') {
                swal(this.firstName + ' ' +  this.lastName)
            }else{
                swal('Please fill this fields!')
            }
        },
        VueChangeEmpty: function(){
            if (this.firstName != '' && this.lastName != '') {
                this.emptyornot = false
                this.enableOrDisable = 'Enabled'
            }else{
                this.emptyornot = true
                this.enableOrDisable = 'Disabled'
            }
        }
    }
})
