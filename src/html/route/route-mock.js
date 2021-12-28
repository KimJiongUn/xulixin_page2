class VueRoute{
    constructor(obj){
        this.obj = obj
        this.map={}
        this.init()
        this.refresh = this.refresh.bind(this)//改变refresh内部this指向
        window.addEventListener('hashchange',this.refresh)
    }
    init(){
        this.obj.routes.forEach(r=>{
            this.setRoute(r.path,()=>{
                goPage(r.name)
            })
        })
    }
    setRoute(path,cb){
        this.map[path]=cb
    }
    refresh(){
        let path = '/' + location.hash.split('#')[1]
        this.map[path]()
    }
}

function goPage(name){
    let h1 = document.querySelector('h1')
    h1.innerHTML = name
}

const routes = [
    {
        path:'/page1',
        name:'page1'
    },
    {
        path:'/page2',
        name:'page2'
    },
    {
        path:'/page3',
        name:'page3'
    }
]

const router = new VueRoute({routes})