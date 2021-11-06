AFRAME.registerComponent("count",{
    schema:{
        count:{type:"number",default:0}
    },
    update:function(){
        window.addEventListener("click",e=>{
            this.data.count+=1
            if(this.data.count==4){
                const pos={x:0,y:100,z:500}
                this.el.setAttribute("position",pos)
                this.data.count=0
            }
            else{
                this.el.setAttribute("position",{x:0,y:50,z:250})
            }
        })
    }
})