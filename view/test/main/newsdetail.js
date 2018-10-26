import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, WebView} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class NewsDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (

            <View style={{flex: 1, width: width, backgroundColor: 'white', flexDirection: 'column'}}>
                <Text style={{
                    width: width,
                    color: '#4A4A4A',
                    paddingTop: 18,
                    paddingLeft: 18,
                    paddingRight: 18,
                    fontSize: 18,
                }} numberOfLines={2}>When You Are Down And Out How Do You Get Up And Go Forward</Text>

                <View style={{
                    flexDirection: 'row',
                    paddingTop: 10,
                    paddingLeft: 18,
                    paddingRight: 18,
                    paddingBottom: 10
                }}>
                    <Text style={{fontSize: 10, color: '#4A4A4A'}}>xuke</Text>
                    <Text style={{marginLeft: 4, fontSize: 10, color: '#4A4A4A'}}>2018/10/26 17:04</Text>
                </View>
                <View style={{backgroundColor: '#E5E5E5', marginLeft: 18, marginRight: 18, height: 1}}/>
                <WebView
                    originWhitelist={['*']}
                    style={{marginLeft: 10, marginRight: 10}}
                    source={{
                        baseUrl: '',
                        html: '<p>原标题:最好的分寸，是看透不说透</p><p><!-- IFENG_DOC_AUDIO --></p><p><img src="http://p0.ifengimg.com/pmop/2018/1003/1D100D63B7FFE04C6F75E70E89E9C27BA405155F_size1200_w500_h207.gif"></p><p><span>文 | 一笑作春风 </span></p><p><span></span></p><p><span>1</span></p><p><span><strong>看透不说透，是生活的智慧</strong></span></p><p><span>《红楼梦》中刘姥姥是个有分寸感的人。</span></p><p><span>二进荣国府时，凤姐和鸳鸯为逗老太太开心，教她在吃饭前先说段台词。刘姥姥站起来高声道：</span><span>“老刘，老刘，食量大似牛，吃一个老母猪不抬头。”</span></p><p><span>众人笑喷。事后，两人向刘姥姥表示歉意，刘姥姥笑着说：</span><span>“姑娘说哪里话？咱哄着老太太开个心儿，有啥恼的？你先嘱咐我，我就明白了。不过大家取个笑儿：我要心里恼，我就不说了。”</span></p><p><img src="http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2018/1003/B6F3E91D32A8F3C0709C074633E933CB26CCDD03_size102_w900_h607.jpeg"></p><p><span>这话一出口，一个老人的智慧心胸全撂在桌面上了，当贾府中的人把刘姥姥看成耍开心的“丑角”时，刘姥姥心里明镜一般。所以，她配合着所有人演好自己的“丑角”。</span></p><p><span>看透，是刘姥姥的智慧；不说透，是刘姥姥的心胸。</span></p><p><span><strong><span>这一份恰到好处的分寸感，是人生阅历的体现。</span></strong></span></p><p><img src="http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2018/1003/ED466D86020599965662BD1D97332D580DF22057_size50_w1080_h664.jpeg"></p><p><span>2</span></p><p><strong><span>适时沉默，更是一种善良</span></strong></p><p><span>朋友阿星离婚了，几百年不联系的老同学打电话追问：“怎么了？为什么离呢？对方有没有人啊？不能再走下去了吗？你当初是咋看上他的呢？……”</span></p><p><span> </span></p><p><span>打破砂锅问到底。朋友说，放下电话时心中像吞了一个苍蝇。</span></p><p><span> </span></p><p><span>又一个朋友知道她离婚的事，想问，但看到她痛苦的眼神，只说了一句：“别说了，我都理解，好好生活。”</span></p><p><span> </span></p><p><span>朋友说，一句话，让她发自内心感激。</span></p><p><span> </span></p><p><span><strong><span>语言是面镜子，折射出内心的温度。能够选择适时的沉默，其背后的底色是人性的善良。</span></strong></span></p><p><img width="558px" src="http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2018/1003/F04C15E173D74718F32280250045AD91F3FFE8B4_size45_w658_h591.jpeg"></p><p><span>3</span></p><p><span><strong>做人做到恰如其分，是最高境界</strong></span></p><p><span><strong><span>看透不说透，是一种不让人难堪的教养。</span></strong></span></p><p><strong><span>听到的不一定全信，看到的也未必是真，知道的不要全说，这是“人艰不拆”的内涵。</span></strong></p><p><span>每个有分寸感的人，都知道何时该说，何时不该说，用温暖的方式靠近对方，这是智慧，更是教养。</span></p><p><img src="http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2018/1003/6BE06B03DCAFB05864BB37C55DD9257B0AEC7616_size39_w960_h600.jpeg"></p><p><span><strong>所以你要明白</strong></span><strong>：</strong></p><p><span><strong><span>1、直爽并不等于言语毫无顾忌</span></strong></span></p><p><span>不要总是把直爽当成口无遮拦的借口，不要总是说：</span><span>“我这人就是性子直，你别介意啊！”</span><span>性子直也不能成为当中揭人短的理由！不分场合，不顾他人的说话，势必会遭人嫉恨。</span></p><p><span><strong><span>2、见人宜说三分话</span></strong></span></p><p><span>说话小心些，为人谨慎些总是无害。俗话说得好：上帝之所以给人一个嘴巴、两只耳朵，就是要人多听少说。</span></p><p><span></p><p><img src="http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2018/1003/EAA86F6D6957440853292A95E92F2571A710BFBD_size27_w800_h534.jpeg"></p><p></span></p><p><strong><span>3、千万不能口无遮拦</span></strong></p><p><span>不要试图窥探别人的隐私；不能故意渲染和张扬对方的错误；说话留有余地；不能强人所难；说话不能不看时机。</span></p><p><strong><span>4、话题懂得适可而止</span></strong></p><p><span>即使很好的题材，说时也要适可而止，不可拖得太长，否则会令人疲倦。如此才能把对方的兴趣维持下去。</span></p><p><span></p><p></span></p><p><strong><span>5、多读书，忌浅薄无知</span></strong></p><p><span>没人会喜欢一个浅薄无知、满口粗话的人，所以多读书、多学习，做一个有内涵的人，这对你的人生是很有帮助的。</span></p><p><img src="http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2018/1003/77E87B2B000E2E03A33444BF8811CABEFE6F6D0F_size24_w800_h500.jpeg"></p><p><span>“分寸”，极其重要而又极难把握，好好说话，是种修养。</span></p><p><span><strong><span>做人做到恰如其分，是人生的最高境界。</span></strong></span></p><p><span><strong><span>愿你经历世事，看透人性之后，依然选择宽容！</span></strong></span></p><p><span></p><p></span></p><p><span></p><p></span></p>'
                    }}/>
            </View>
        );
    }
}


var styles = StyleSheet.create({});
