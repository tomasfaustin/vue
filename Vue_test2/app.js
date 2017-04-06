
  var app = new Vue({
    el: '#app',
    data: {
      startingZip: '',
      startingCity: ''
    },
    watch: {
      startingZip: function(){
        this.startingCity = ''
        if (this.startingZip.length == 5){
          //Call Api
          this.lookUpStartingZip()
        }
      }

    },
    methods: {
      lookUpStartingZip:function(){
        this.startingCity = "Looking Up..."
        this.$http
        .get('http://ZiptasticAPI.com/' + this.startingZip)
        .then(function(response){
          this.startingCity = response.data.city + ", " + response.data.state
        })
        .catch(function(err){
          this.startingCity = "Invalid Zipcode"
        })
      }
    }
  })
