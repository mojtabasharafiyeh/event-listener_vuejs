const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:''
    };
  },
  methods:{
    setName(event,lastname,nikname){
      this.name=event.target.value + ' ' + lastname +' '+ nikname

    },
    add(){
      this.counter=this.counter+1;
    },
    reduse(){
      this.counter=this.counter-1
    }
  }
});

app.mount('#events');
