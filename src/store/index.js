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
        //排行榜
        rank:[
            {title:'1',},
            {title:'12',},
            {title:'123',},
            {title:'1234',},
            {title:'12345',},
            {title:'123456', },
            {title:'1234567',},
            {title:'12345678',}],
        //搜索
        searchValue:"",
        //主页说说
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
        //个人信息
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
            //评论
            comments:[
                {
                    index:1,
                    id:123456,
                    name:"不超级的马里奥",
                    picUrl:"http://p3.music.126.net/mLtP6JozoeQkUZXOTJ4EeA==/109951163796835408.jpg",
                    articleID:1412421,
                    author:"近战法师刘海柱",
                    articleTitle:'给我来个对象',
                    time:now,
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                    say:'卧槽，刺激'
                },
                {
                    index:2,
                    id:123456,
                    name:"不超级的马里奥",
                    picUrl:"http://p3.music.126.net/mLtP6JozoeQkUZXOTJ4EeA==/109951163796835408.jpg",
                    articleID:14122341,
                    author:"不抽到ssr不改名",
                    articleTitle:'我要赚钱',
                    time:now,
                    articleContent:'我需要money，发工资吧',
                    say:'笑死，老老实实打工'
                },
                {
                    index:3,
                    id:123456,
                    name:"不超级的马里奥",
                    picUrl:"http://p3.music.126.net/mLtP6JozoeQkUZXOTJ4EeA==/109951163796835408.jpg",
                    articleID:1412421,
                    author:"海绵宝宝",
                    articleTitle:'给我来个对象',
                    time:now,
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                    say:'卧槽，刺激'
                },
                {
                    index:4,
                    id:123456,
                    name:"不超级的马里奥",
                    picUrl:"http://p3.music.126.net/mLtP6JozoeQkUZXOTJ4EeA==/109951163796835408.jpg",
                    articleID:1412421,
                    author:"海绵宝宝",
                    articleTitle:'笑死，太刺激了，哈哈哈哈哈哈哈哈哈哈哈',
                    time:now,
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                    say:'卧槽，刺激'
                },
                {
                    index:5,
                    id:123456,
                    name:"不超级的马里奥",
                    picUrl:"http://p3.music.126.net/mLtP6JozoeQkUZXOTJ4EeA==/109951163796835408.jpg",
                    articleID:1412421,
                    author:"海绵宝宝",
                    articleTitle:'给我来个对象',
                    time:now,
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                    say:'想都不想要想啊你'
                },
                {
                    index:5,
                    id:123456,
                    name:"不超级的马里奥",
                    picUrl:"http://p3.music.126.net/mLtP6JozoeQkUZXOTJ4EeA==/109951163796835408.jpg",
                    articleID:1412421,
                    author:"海绵宝宝",
                    articleTitle:'给我来个对象',
                    time:now,
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                    say:'想都不想要想啊你'
                },

            ],
            //收藏
            collections:[
                {
                    index:1,
                    articleID:1412421,
                    articleTitle:'毫不夸张地说，苏炳添就是本届全运会的人气王',
                    author:"uzi说出海妖",
                    time:now,
                    articlePicUrl:"http://p3.music.126.net/N3jQuLaolBNv9xn0QVxknQ==/109951162922568240.jpg",
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                },
                {
                    index:2,
                    articleID:1412421,
                    articleTitle:'我还不能起飞么',
                    author:"uzi说出海妖",
                    time:now,
                    articlePicUrl:"http://p3.music.126.net/N3jQuLaolBNv9xn0QVxknQ==/109951162922568240.jpg",
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                },
                {
                    index:3,
                    articleID:1412421,
                    articleTitle:'什么时候发工资',
                    author:"uzi说出海妖",
                    time:now,
                    articlePicUrl:"http://p3.music.126.net/N3jQuLaolBNv9xn0QVxknQ==/109951162922568240.jpg",
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                },
                {
                    index:4,
                    articleID:1412421,
                    articleTitle:'兄弟们，号没了',
                    author:"uzi说出海妖",
                    time:now,
                    articlePicUrl:"http://p3.music.126.net/N3jQuLaolBNv9xn0QVxknQ==/109951162922568240.jpg",
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                },
                {
                    index:5,
                    articleID:1412421,
                    articleTitle:'她段位太高，我把握不住',
                    author:"uzi说出海妖",
                    time:now,
                    articlePicUrl:"http://p3.music.126.net/mLtP6JozoeQkUZXOTJ4EeA==/109951163796835408.jpg",
                    articleContent:"　毫不夸张地说，苏炳添就是本届全运会的人气王。\n" +
                        "\n" +
                        "　　20日是全运会田径项目的第一个比赛日，上午不到9时，主赛场外就聚集了许多排队入场的观众，因为男子百米第一枪预赛即将打响；晚间的半决赛，西安奥体中心更是坐进了约两万人……\n" +
                        "\n" +
                        "　　只要苏炳添一亮相，就伴随着全场的欢呼，现场DJ一度要提醒观众在发枪时保持安静。\n" +
                        "\n" +
                        "　　苏炳添的人气源于他过人的实力。东京奥运会上苏炳添以创亚洲纪录的9秒83杀入百米决赛，他代表了中国速度、亚洲速度。来到全运会的赛场，所有人都期待苏炳添再一次带来惊喜。\n" +
                        "\n" +
                        "　　苏炳添没有让大家失望——预赛后程完全留力，依然轻松获得小组第一，10秒23的成绩排在所有选手的第二位。",
                },
            ]
        },
        //消息
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
        //帖子
        article: {
            game:[
                {
                    userId:12312412,
                    userName:"王多鱼",
                    userPicUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                    titleId:123131241,
                    title:"我要做首富",
                    tag:"游戏",
                    main:"娃娃吾问无为谓吾问无为谓无呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜呜多那所军不多军卡所不不军奥所可能萨达是大三班丢了你啥可能但是你到哪看大师的撒，" +
                        "按时的雷克萨大家啊三块多那是谁看你傻安达街扩散到能删的快三点卡萨三大类考试你打算安达市来看你看",
                    //评论
                    comment:[
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            userPicUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"卧槽，太牛了"
                        },
                        {
                            userId:12312412,
                            userName:"王32432",
                            userPicUrl: "http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"这个我喜欢"
                        },
                        {
                            userId:12312412,
                            userName:"王1231",
                            userPicUrl:"http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王43543543",
                            userPicUrl:"http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"54654",
                            userPicUrl:"http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"lol",
                            userPicUrl:"http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"pubg",
                            userPicUrl:"http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            userPicUrl:"http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            userPicUrl:"http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"cy cy"
                        },

                    ]
                },
                {
                    userId:123124234,
                    userName:"1234567",
                    titleId:123324321,
                    userPicUrl: "http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                    title:"123456789",
                    tag:"游戏",
                    main:"今天，我们的恐龙化石挖掘工作进行到了第二天。最新情况是，我们对恐龙的颈椎部分进行了挖掘，但只发现了三块颈椎化石。我们来看一下，就是这里的三块颈椎。禄丰龙这类恐龙它的颈椎是很长的，现在我们只挖掘出其中的三节。我们通过虚拟模型来直观的感受一下。\n" +
                        "\n" +
                        "现在大家可以看到禄丰龙这类的恐龙，它的颈椎应该有九块，但昨天到现在，我们能找到的颈椎部分的化石只有三块，也就是说这只恐龙的颈椎部分的缺失是比较多的。不仅是颈椎，目前的情况来看，头部的化石也没有找到。好了，送走我们的虚拟恐龙。\n" +
                        "\n" +
                        "来到现场，今天的挖掘作业扩大了颈椎、头骨部分的挖掘面积，在周围的土层中进行寻找。现场负责挖掘工作的依旧是中国科学院的科学家，以及禄丰市恐龙化石保护研究中心的工作人员。\n" +
                        "\n" +
                        "\n" +
                        "昨天，我们通过3D扫描以及虚拟系统，还原了这只恐龙生活的环境，一起来进入我们虚拟中的侏罗纪世界。当年的地球上，还没有花，也没有草，有的是蕨类植物，还有松树、银杏。如果真的可以穿越到侏罗纪早期，那么给禄丰龙带去最好的礼物，可能就是我手上的松柏，它可能会是恐龙爱吃的食物。\n" +
                        "\n" +
                        "但是今天看来，对于这只恐龙来说，这片家园也处处存在危险。比如它的天敌肉食恐龙就也生活在这里。今天，中国科学院的尤海鲁教授也在现场。\n" +
                        "\n" +
                        "化石在哪里？\n" +
                        "\n" +
                        "化石是时间的产物。当恐龙死后，身体中那些硬体组织经过几千万年甚至上亿年的沉积，化身为石。这些穿越了时空的石头，携带着生命的密码来到我们面前，帮助我们打开了一扇研究史前生命的窗口。那么，恐龙化石都分布在地球上哪些地方呢？我们就用沙画的形式带您去了解一下。\n" +
                        "\n" +
                        "恐龙统治地球一亿六千多万年，所以世界上恐龙化石的分布非常广泛。有些地方比较集中，如北美的美国、加拿大，非洲的坦桑尼亚、南非，南美洲的阿根廷、巴西，亚洲的中国、蒙古国等。\n" +
                        "\n",
                    comment:[
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            userPicUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"卧槽，太牛了"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            userPicUrl: "http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"这个我喜欢"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },

                    ]
                },
                {
                    userId:123124234,
                    userName:"嫩爹",
                    userPicUrl: "http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                    titleId:123324321,
                    title:"有没有玩游戏的一起来玩啊！！！！！！！",
                    tag:"游戏",
                    main:"?dsadassa为wqeqweqw军卡所不不军奥所可能萨达是大三班丢了你啥可能但是你到哪看大师的撒，" +
                        "按时的雷克萨大家啊三块多那是谁看你傻安达街扩散到能删的快三点卡萨三大类考试你打算安达市来看你看",
                    comment:[
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            userPicUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"卧槽，太牛了"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            userPicUrl: "http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                            say:"这个我喜欢"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },
                        {
                            userId:12312412,
                            userName:"王多鱼",
                            picUrl:"http://p4.music.126.net/VDmN2dNpIFu4gTv4bZe6KQ==/109951166254691365.jpg",
                            say:"cy cy"
                        },

                    ]
                },
                {
                    userId:123124234,
                    userName:"嫩爹",
                    userPicUrl: "http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                    titleId:123324321,
                    title:"我是嫩爹",
                    tag:"游戏",
                    main:"?dsadassa为wqeqweqw军卡所不不军奥所可能萨达是大三班丢了你啥可能但是你到哪看大师的撒，" +
                        "按时的雷克萨大家啊三块多那是谁看你傻安达街扩散到能删的快三点卡萨三大类考试你打算安达市来看你看"
                },
                {
                    userId:123124234,
                    userName:"嫩爹",
                    userPicUrl: "http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                    titleId:123324321,
                    title:"我是嫩爹",
                    tag:"游戏",
                    main:"?dsadassa为wqeqweqw军卡所不不军奥所可能萨达是大三班丢了你啥可能但是你到哪看大师的撒，" +
                        "按时的雷克萨大家啊三块多那是谁看你傻安达街扩散到能删的快三点卡萨三大类考试你打算安达市来看你看"
                },
                {
                    userId:123124234,
                    userName:"嫩爹",
                    userPicUrl: "http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                    titleId:123324321,
                    title:"我是嫩爹",
                    tag:"游戏",
                    main:"?dsadassa为wqeqweqw军卡所不不军奥所可能萨达是大三班丢了你啥可能但是你到哪看大师的撒，" +
                        "按时的雷克萨大家啊三块多那是谁看你傻安达街扩散到能删的快三点卡萨三大类考试你打算安达市来看你看"
                },
                {
                    userId:123124234,
                    userName:"嫩爹",
                    userPicUrl: "http://p3.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg",
                    titleId:123324321,
                    title:"我是嫩爹",
                    tag:"游戏",
                    main:"?dsadassa为wqeqweqw军卡所不不军奥所可能萨达是大三班丢了你啥可能但是你到哪看大师的撒，" +
                        "按时的雷克萨大家啊三块多那是谁看你傻安达街扩散到能删的快三点卡萨三大类考试你打算安达市来看你看"
                }
            ]
        },
        //附近
        nearby:[
            {
                index:1,
                userId:12312412,
                userName:'我不是药神',
                time:now,
                picUrl:'https://img0.baidu.com/it/u=1077360284,2857506492&fm=26&fmt=auto',
                context:'我去，我脱单了！！！！！！！！！！！！',
            },
            {
                index:2,
                userId:121312124,
                userName:'我是超人！！',
                time:now,
                picUrl:'https://img2.baidu.com/it/u=1462569300,2999175010&fm=26&fmt=auto',
                context:'有没有人来交个朋友啊',
            },
            {
                index:3,
                userId:54334412,
                userName:'123木头人',
                time:now,
                picUrl:'https://img2.baidu.com/it/u=3153897759,1180801003&fm=26&fmt=auto',
                context:'好无聊，来个人陪我聊天',
            },
            {
                index:4,
                userId:12234412,
                userName:'赞美太阳',
                time:now,
                picUrl:'https://img1.baidu.com/it/u=2912879642,1971740057&fm=26&fmt=auto',
                context:'嘻嘻嘻嘻，赚到了第一桶金',
            },
            {
                index:5,
                userId:1232312,
                userName:'我喜欢',
                time:now,
                picUrl:'https://img1.baidu.com/it/u=2045691591,1559371911&fm=26&fmt=auto',
                context:'芒种我滴超人',
            },
            {
                index:6,
                userId:1243412,
                userName:'嘿嘿',
                time:now,
                picUrl:'https://img1.baidu.com/it/u=2650958260,2971299643&fm=26&fmt=auto',
                context:'我去，我脱单了！！！！！！！！！！！！',
            },

        ]
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
