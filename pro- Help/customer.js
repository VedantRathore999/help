class Customer{
constructor(){
this.username=""
this.state=""
this.city=""
this.area=""
this.nmonument=""
this.number=0
this.index=null
}
static fillInfo(){
var custIndex="customers/customer"+cIndex;
database.ref('/').set({
//index:custIndex,
//username:this.username,
state:this.state,
city:this.city,
area:this.area,
nmonument:this.nmonument,
number:this.number
}
)
}


}