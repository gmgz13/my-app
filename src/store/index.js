import { createStore } from 'vuex'

const date = new Date();
let now = ''
if(date.getMinutes()<10){
    now = date.getHours() + ':0' +date.getMinutes();
}else{
    now =  date.getHours() + ':' + date.getMinutes();
}

export default createStore({
    state: {
        rank:[
            {title:'1',},
            {title:'12',},
            {title:'123',},
            {title:'1234',},
            {title:'12345',},
            {title:'123456', },
            {title:'1234567',},
            {title:'12345678',}],
        searchValue:'',
        data:[
            {
                id:123456,
                name:"花季",
                pic: 109951165421144830,
                picUrl:"http://p3.music.126.net/NzaJ7ipCNkAMkXgdHTZbiw==/109951166444634903.jpg",
                friends:[131231221,1241231231,123121241241,234324343],//朋友id
                articleIds:[12312321,121231231,325435324534], //发布的说说id
                article:"目前，哈尔滨市相关部门已组织开展对风险人群进行核酸检测，做好病例救治和隔离医学观察，切实落实医务人员个人防护和院内感染控制。积极开展流调溯源，排查潜在的密切接触者。",
                like:false
            },
            {
                id:1234562142,
                name:"不超级的马里奥",
                pic: 109951165421144830,
                picUrl:"http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                friends:[131231221,1241231231,123121241241,234324343],
                articleIds:[12312321,121231231,325435324534],
                article:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                    "\n" +
                    "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                    "\n" +
                    "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                    "\n" +
                    "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                    "\n" +
                    "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                like:false
            },
            {
                id:12345634643,
                name:"人生如梦",
                pic: 109951165421144830,
                picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                friends:[131231221,1241231231,123121241241,234324343],
                articleIds:[12312321,121231231,325435324534],
                article:"987654322345ujnbvcxzsawertyuik,lmn，离开不符合那算了，lsankjasdamsmdsadsankdnsalndj啊，按时打算买",
                like:false
            },
            {
                id:123456,
                name:"我和我的父辈",
                pic: 109951165421144830,
                picUrl:"http://p3.music.126.net/NljAUrMBAWi5h_c4ZXXN0w==/109951165421144832.jpg",
                friends:[131231221,1241231231,123121241241,234324343],
                articleIds:[12312321,121231231,325435324534],
                article:"987654322345ujnbvcxzsawertyuik,lmn，离开不符合那算了，lsankjasdamsmdsadsankdnsalndj啊，按时打算买",
                like:false
            },
            {
                id:123456,
                name:"dasda阿斯顿撒",
                pic: 109951165421144830,
                picUrl:"http://p3.music.126.net/N3jQuLaolBNv9xn0QVxknQ==/109951162922568240.jpg",
                friends:[131231221,1241231231,123121241241,234324343],
                articleIds:[12312321,121231231,325435324534],
                article:"987654322345ujnbvcxzsawertyuik,lmn，离开不符合那算了，lsankjasdamsmdsadsankdnsalndj啊，按时打算买",
                like:false
            },
        ],
        personal:{
            id:123456,
            name:"不超级的马里奥",
            pic: 109951165421144830,
            sex:'男',
            state:'单身',
            age:19,
            school:'北京大学',
            signature:'篮球是我的生命，欢迎交友',
            picUrl:"http://p3.music.126.net/mLtP6JozoeQkUZXOTJ4EeA==/109951163796835408.jpg",
            friends:[131231221,1241231231,123121241241,234324343],
            articleIds:[12312321,121231231,325435324534],
        },
        chatList: [
            {
                id: 1,
                user: {
                    name: '好兄弟',
                    img: 'http://p3.music.126.net/N3jQuLaolBNv9xn0QVxknQ==/109951162922568240.jpg'
                },
                messages: [
                    {
                        content: '走打球',  //聊天内容
                        date: now  //时间
                    },
                    {
                        content: '按回车可以发送信息，还可以给我发送表情哟',
                        date: now
                    }
                ],
                index: 1  // 当前在聊天列表中的位置,从1开始

            },
            {
                id: 2,
                user: {
                    name: '人生如梦',
                    img: 'http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg'
                },
                messages: [
                    {
                        content: 'Are you kidding me?',
                        date: now
                    }
                ],
                index: 2
            },
            {
                id: 3,
                user: {
                    name: '机器人',
                    img: 'http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg'
                },
                messages: [
                    {
                        content: '我会跟你聊聊天的哟',
                        date: now
                    }
                ],
                index: 3
            },
            {
                id: 4,
                user: {
                    name: '人生如梦',
                    img: 'http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg'
                },
                messages: [
                    {
                        content: 'Are you kidding me?',
                        date: now
                    }
                ],
                index: 4
            },
            {
                id: 5,
                user: {
                    name: '人生如梦',
                    img: 'http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg'
                },
                messages: [
                    {
                        content: 'Are you kidding me?',
                        date: now
                    }
                ],
                index: 5
            },
            {
                id: 6,
                user: {
                    name: '人生如梦',
                    img: 'http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg'
                },
                messages: [
                    {
                        content: 'Are you kidding me?',
                        date: now
                    }
                ],
                index: 6
            },
            {
                id: 7,
                user: {
                    name: '人生如梦',
                    img: 'http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg'
                },
                messages: [
                    {
                        content: 'Are you kidding me?',
                        date: now
                    }
                ],
                index: 7
            },
            {
                id: 8,
                user: {
                    name: '人生如梦',
                    img: 'http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg'
                },
                messages: [
                    {
                        content: 'Are you kidding me?',
                        date: now
                    }
                ],
                index: 8
            },
            {
                id: 9,
                user: {
                    name: '人生如梦',
                    img: 'http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg'
                },
                messages: [
                    {
                        content: 'Are you kidding me?',
                        date: now
                    }
                ],
                index: 9
            },
            {
                id: 10,
                user: {
                    name: '人生如梦',
                    img: 'http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg'
                },
                messages: [
                    {
                        content: 'Are you kidding me?',
                        date: now
                    }
                ],
                index: 10
            },
        ],
        selectId: 1,
    },
    getters:{

    },
    mutations: {
        setSearchValue(state,value){
            state.searchValue = value
            console.log(state.searchValue)
        },
        selectSession (state, value) {
            state.selectId = value
        },
    },
    actions: {

    },
    modules: {
    }
})
