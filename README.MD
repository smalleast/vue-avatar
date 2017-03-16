#vue-avatar
> Avatar for vue.

## props:
| name | type | value | description |
| :----| :----| :----| :----|
| cssClass  | string | '' | Customize css class |
| url  | string | 'http://www.baidu.com/img/bd_logo1.png' | Image url |
| title  | string | 'img title' | Image title |
| size  | string | '30px' | Image size(width/height) |
| radius  | string | '10px' | border radius for image |


## usage:
+ install:
```bash
npm install --save smalleast/vue-avatar


```

+ code:
```javascript
import VueAvatar from 'vue-avatar';

<div>
  <VueAvatar size="50px" url="http://himg.bdimg.com/sys/portrait/item/be10475f686d6c723db0023244.jpg" css-class="test1" />
  <VueAvatar size="80px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg"     css-class="test2" />
  <VueAvatar size="100px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg"   css-class="test3" />
  <VueAvatar :size="{width:'300px',height:'100px'}" radius="5px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg"   css-class="test3" />
</div>
```


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install
