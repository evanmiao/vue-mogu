import Mock from 'mockjs'
const Random = Mock.Random

const baseUrl = process.env.VUE_APP_BASE_API

import { getParameter } from '@/utils/util'

Random.extend({
  goodsData(id) {
    const goodsData = [
      {"iid":"5e60e2b1035eb31958793ba9","cfav":152,"swiper_img":["https://s11.mogucdn.com/mlcdn/c45406/180124_3jc19gh3758ighkb1j9c3dgjgjag7_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/180124_7g7d3718l14b8bhi9c1d64ladhf81_640x960.jpg_640x960.v1cAC.70.webp","https://s11.mogucdn.com/mlcdn/c45406/180124_5lgk65g41lk8h38k4bk02892fa8je_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"Aub","text":"套装收到，非常喜欢","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dabu","text":"非常好看，赞一个","date":"1591228800"}],"sales":3570,"uid":1,"vip":1,"type":"女装","title":"小燕子 职业装套装女2018新款西装时尚气质修身教师主持人工作服面试正装大码美容院职业女装","price":50,"oldPrice":80,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/c45406/180308_4i819c12h84338l2f3laikhkedk37_640x960.jpg_360x480.v1cAC.40.webp","freight":"免运费","adress":"广东东莞","color_size":"{\"红色\":{\"12cs\":81}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/180515_20jj45ejddh4cf8530h96c99ia23c_200x200.jpg_120x120.webp\",\"name\":\"test\",\"number\":2,\"shopItem\":30,\"collection\":5023,\"sales\":28000}"},
      {"iid":"5e60e6c9aa5c2307fc02a00c","cfav":204,"swiper_img":["https://s11.mogucdn.com/mlcdn/c45406/181205_4cgh4i5l0ahb6731bak1lhei01204_640x853.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/180124_7g7d3718l14b8bhi9c1d64ladhf81_640x960.jpg_640x960.v1cAC.70.webp","https://s11.mogucdn.com/mlcdn/c45406/180124_5lgk65g41lk8h38k4bk02892fa8je_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"李婷婷","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"桥本环奈","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":2,"vip":2,"type":"女装","title":"【厚薄可选】大码女装胖mm2018秋冬加绒加厚减龄显瘦宽松上衣+阔腿裤套装","price":60,"oldPrice":90,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/c45406/181205_4cgh4i5l0ahb6731bak1lhei01204_640x853.jpg_360x480.v1cAC.40.webp","freight":"10元快递费","adress":"湖北武汉","color_size":"{\"红色\":{\"12cs\":81}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/180429_73i2hdg95j7597hd6dhikikbbe4i1_200x200.jpg_120x120.webp\",\"name\":\"欧丽雅\",\"number\":4,\"shopItem\":19,\"collection\":50223,\"sales\":26000}"},
      {"iid":"5e61f78928964626841da930","cfav":301,"swiper_img":["https://s5.mogucdn.com/mlcdn/c45406/170921_519ji34ll0gk082k615aii412g3gh_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/180124_7g7d3718l14b8bhi9c1d64ladhf81_640x960.jpg_640x960.v1cAC.70.webp","https://s11.mogucdn.com/mlcdn/c45406/180124_5lgk65g41lk8h38k4bk02892fa8je_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"李婷婷","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"桥本环奈","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":3,"vip":3,"type":"女装","title":"新款长袖露肩套装女春秋韩版学生胖MM宽松大码休闲运动两件套潮","price":78,"oldPrice":190,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/c45406/170921_519ji34ll0gk082k615aii412g3gh_640x960.jpg_360x480.v1cAC.40.webp","freight":"100元快递费","adress":"上海","color_size":"{\"红色\":{\"12cs\":81}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/180429_73i2hdg95j7597hd6dhikikbbe4i1_200x200.jpg_120x120.webp\",\"name\":\"欧丽雅\",\"number\":4,\"shopItem\":19,\"collection\":50223,\"sales\":26000}"},
      {"iid":"5e61f8a51b54ef2f74d12b92","cfav":373,"swiper_img":["https://s5.mogucdn.com/mlcdn/c45406/191229_47e5h03l9ae8deh93h64k60k9ff73_6664x9996.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191229_7hi5bb4eajee7kb139i1gk03i1l3h_6664x9996.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191229_7hi5bb4eajee7kb139i1gk03i1l3h_6664x9996.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":4,"vip":4,"type":"女装","title":"港风时尚微胖显瘦卫衣套装女秋冬季韩版新款打底衫休闲裤三件套","price":58,"oldPrice":100,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/c45406/191229_47e5h03l9ae8deh93h64k60k9ff73_6664x9996.jpg_360x480.v1cAC.40.webp","freight":"100元快递费","adress":"青岛","color_size":"{\"红色\":{\"LL\":81,\"XL\":70,\"SL\":60}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/181022_4gj2d40c6910ck4i6h141592leh06_200x200.jpg_120x120.webp\",\"name\":\"简单爱\",\"number\":4,\"shopItem\":19,\"collection\":5023,\"sales\":26000}"},
      {"iid":"5e61f972ef8eed14e822abf5","cfav":310,"swiper_img":["https://s5.mogucdn.com/mlcdn/c45406/191112_14h7c90125d1752h7dcl0e0djgh2h_3332x4999.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191112_1b2h2bhicl79a5g2fh1hhachk3aee_3332x4999.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191229_7hi5bb4eajee7kb139i1gk03i1l3h_6664x9996.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":5,"vip":5,"type":"女装","title":"秋冬2019新款韩版加绒加厚连帽卫衣女ins宽松百搭上衣外套","price":78,"oldPrice":120,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/c45406/191112_14h7c90125d1752h7dcl0e0djgh2h_3332x4999.jpg_360x480.v1cAC.40.webp","freight":"100元快递费","adress":"青岛","color_size":"{\"红色\":{\"LL\":81,\"XL\":70,\"SL\":60},\"灰色\":{\"LL\":81,\"XL\":70,\"SL\":100}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/190515_3defc7eak01l8eag9idkbeaa22bjd_200x200.jpg_120x120.webp\",\"name\":\"小公主\",\"number\":4,\"shopItem\":19,\"collection\":5023,\"sales\":26000}"},
      {"iid":"5e61fa105d53c428b8ea34c0","cfav":210,"swiper_img":["https://s5.mogucdn.com/mlcdn/c45406/190124_6dbh93407270276i7hdjal0j1j8c9_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/190124_52hbijdca066640c9312dfe8gfee7_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191229_7hi5bb4eajee7kb139i1gk03i1l3h_6664x9996.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":6,"vip":6,"type":"女装","title":"秋冬新款韩版字母印花连帽套头卫衣女加绒加厚宽松套头帽衫外套","price":58,"oldPrice":120,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/c45406/190124_6dbh93407270276i7hdjal0j1j8c9_640x960.jpg_360x480.v1cAC.40.webp","freight":"100元快递费","adress":"青岛","color_size":"{\"红色\":{\"LL\":81,\"XL\":70,\"SL\":60},\"灰色\":{\"LL\":81,\"XL\":70,\"SL\":100}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/190515_3defc7eak01l8eag9idkbeaa22bjd_200x200.jpg_120x120.webp\",\"name\":\"小公主\",\"number\":4,\"shopItem\":19,\"collection\":5023,\"sales\":26000}"},
      {"iid":"5e61fac1bf6bfd3304d7ff19","cfav":521,"swiper_img":["https://s11.mogucdn.com/mlcdn/55cf19/191010_54gc64df85i33j4klfecjbe3e793j_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/55cf19/191010_2diaj4c5d0bj9hgl3ii86ij911j4d_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/55cf19/191010_342bh2edldkh505eggd3h0h3l9c87_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":7,"vip":7,"type":"女装","title":"ins卫衣女学生韩版宽松连帽秋冬新款bf原宿加绒百搭长袖上衣","price":108,"oldPrice":120,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/55cf19/191010_54gc64df85i33j4klfecjbe3e793j_640x960.jpg_360x480.v1cAC.40.webp","freight":"100元快递费","adress":"青岛","color_size":"{\"红色\":{\"LL\":81,\"XL\":70,\"SL\":60},\"灰色\":{\"LL\":81,\"XL\":70,\"SL\":100}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/190515_3defc7eak01l8eag9idkbeaa22bjd_200x200.jpg_120x120.webp\",\"name\":\"小天鹅\",\"number\":4,\"shopItem\":19,\"collection\":5023,\"sales\":26000}"},
      {"iid":"5e61fb99d890d12e20f40f4b","cfav":82,"swiper_img":["https://s5.mogucdn.com/mlcdn/c45406/191112_14h7c90125d1752h7dcl0e0djgh2h_3332x4999.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191112_1b2h2bhicl79a5g2fh1hhachk3aee_3332x4999.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/55cf19/191010_342bh2edldkh505eggd3h0h3l9c87_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":8,"vip":8,"type":"女装","title":"秋冬2019新款韩版加绒加厚连帽卫衣女ins宽松百搭上衣外套","price":158,"oldPrice":180,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/c45406/191112_14h7c90125d1752h7dcl0e0djgh2h_3332x4999.jpg_360x480.v1cAC.40.webp","freight":"100元快递费","adress":"青岛","color_size":"{\"红色\":{\"LL\":81,\"XL\":70,\"SL\":60},\"灰色\":{\"LL\":81,\"XL\":70,\"SL\":100}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/190515_3defc7eak01l8eag9idkbeaa22bjd_200x200.jpg_120x120.webp\",\"name\":\"小天鹅\",\"number\":4,\"shopItem\":19,\"collection\":5023,\"sales\":26000}"},
      {"iid":"5e61fc736f6375334c8cb68a","cfav":96,"swiper_img":["https://s11.mogucdn.com/mlcdn/55cf19/190405_0l700ea279l9h67e2kch0c901k53l_640x960.jpg_640x960.v1cAC.70.webp","https://s11.mogucdn.com/mlcdn/55cf19/190405_2ce7i8ejg3b7ai07l91j132h7ljb0_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/55cf19/190405_0936j0102j479955e9i9ja48icl9h_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":9,"vip":9,"type":"男装","title":"男士春季新款港风潮流衬衣学生翻领韩版字母刺绣宽松长袖衬衫","price":158,"oldPrice":250,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/55cf19/190405_0l700ea279l9h67e2kch0c901k53l_640x960.jpg_360x480.v1cAC.40.webp","freight":"100元快递费","adress":"青岛","color_size":"{\"红色\":{\"LL\":81,\"XL\":70,\"SL\":60},\"灰色\":{\"LL\":81,\"XL\":70,\"SL\":100}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/180331_4kf2jgc315c989kachgga3g1fdlhj_200x200.jpg_120x120.webp\",\"name\":\"潮品\",\"number\":5,\"shopItem\":50,\"collection\":15023,\"sales\":267000}"},
      {"iid":"5e61fda00bb82316b4048bdf","cfav":136,"swiper_img":["https://s5.mogucdn.com/mlcdn/55cf19/190829_70a0j7aidke1kh28l8ei4gh1f12hj_640x960.jpg_640x960.v1cAC.70.webp","https://s11.mogucdn.com/mlcdn/55cf19/190829_220ld09kkij9gbdj0a432i3fi7d18_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/55cf19/190829_47318h18d9ajc5j5jl4h7clegbf2f_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":10,"vip":10,"type":"男装","title":"2019秋冬新款男士宽松百搭工装裤港风潮流帅气直筒休闲九分裤","price":258,"oldPrice":250,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/55cf19/191119_31gd783ahff2j1948ebfd078gfbij_640x960.jpg_360x480.v1cAC.40.webp","freight":"免递费","adress":"青岛","color_size":"{\"红色\":{\"LL\":81,\"XL\":70,\"SL\":60},\"灰色\":{\"LL\":81,\"XXL\":70,\"SLL\":100}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/180331_4kf2jgc315c989kachgga3g1fdlhj_200x200.jpg_120x120.webp\",\"name\":\"潮品\",\"number\":5,\"shopItem\":50,\"collection\":15023,\"sales\":267000}"},
      {"iid":"5e61fe1116e6e214f47f9a2a","cfav":73,"swiper_img":["https://s11.mogucdn.com/mlcdn/55cf19/190702_550chd5j1kdjd3bg25l5a5gbdh5j0_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/190707_0ikcf4kfdfi8kii4e4c33gk75f8kj_640x830.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/55cf19/190702_1i5gg15i7g5a6dj0ikeijd2l0f5dl_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":11,"vip":11,"type":"男装","title":"PLAYBOY/花花公子裤子男休闲裤韩版潮流小脚九分长裤","price":48,"oldPrice":50,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/55cf19/190702_550chd5j1kdjd3bg25l5a5gbdh5j0_640x960.jpg_360x480.v1cAC.40.webp","freight":"免递费","adress":"青岛","color_size":"{\"红色\":{\"LL\":81,\"XL\":70,\"SXL\":60},\"灰色\":{\"LL\":81,\"XL\":80,\"L\":100}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/180331_4kf2jgc315c989kachgga3g1fdlhj_200x200.jpg_120x120.webp\",\"name\":\"潮品\",\"number\":5,\"shopItem\":50,\"collection\":15023,\"sales\":267000}"},
      {"iid":"5e61ff6d00e74d15f08c0401","cfav":69,"swiper_img":["https://s5.mogucdn.com/mlcdn/c45406/191010_727ii22319aejk53i3fa26i7aa58a_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191010_0g53hd76f8de4e3h9h22ejk6dlegg_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191010_6g5lahi1hai5ak4l051ljb9jb0cc1_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":12,"vip":12,"type":"男装","title":"现货可发】男士套装春秋季新款时尚宽松夹克外套休闲工装裤男装潮","price":78,"oldPrice":150,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/c45406/191010_6g5lahi1hai5ak4l051ljb9jb0cc1_640x960.jpg_360x480.v1cAC.40.webp","freight":"免递费","adress":"青岛","color_size":"{\"红色\":{\"LL\":81,\"XL\":70,\"SL\":60},\"灰色\":{\"LXL\":81,\"L\":70,\"SL\":100}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/180331_4kf2jgc315c989kachgga3g1fdlhj_200x200.jpg_120x120.webp\",\"name\":\"潮品\",\"number\":5,\"shopItem\":50,\"collection\":15023,\"sales\":267000}"},
      {"iid":"5e61ffd6171ca92fd8a5cd6c","cfav":296,"swiper_img":["https://s11.mogucdn.com/mlcdn/55cf19/190702_550chd5j1kdjd3bg25l5a5gbdh5j0_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191010_0g53hd76f8de4e3h9h22ejk6dlegg_640x960.jpg_640x960.v1cAC.70.webp","https://s5.mogucdn.com/mlcdn/c45406/191010_6g5lahi1hai5ak4l051ljb9jb0cc1_640x960.jpg_640x960.v1cAC.70.webp"],"feature":[{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"72小时发货"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"退货补运费"},{"icon":"https://s10.mogucdn.com/mlcdn/c45406/180417_25kbfg1c3hdbd120394ji4b11bk2k_36x36.png_80x80.v1cAC.40.webp","name":"七天无理由退货"}],"review":[{"avatar":"https://s5.mogucdn.com/mlcdn/5abf39/170905_05e728k60954e0c5a4j277dljbjal_100x100.jpg_48x48.webp","name":"ysy","text":"这个非常非常好看","date":"1591747200"},{"avatar":"https://s11.mogucdn.com/mlcdn/5abf39/190701_766c82j8ljiedd95jlbljeac3eai6_132x132.jpg_48x48.webp","name":"dash","text":"喜欢喜欢","date":"1591228800"}],"sales":3570,"uid":13,"vip":13,"type":"男装","title":"2019夏季衬衫男小清新宽松潮流青年长袖寸衫韩版休闲衬衣薄款","price":78,"oldPrice":150,"discount":"限时折扣","img":"https://s5.mogucdn.com/mlcdn/55cf19/190702_550chd5j1kdjd3bg25l5a5gbdh5j0_640x960.jpg_360x480.v1cAC.40.webp","freight":"免递费","adress":"青岛","color_size":"{\"红色\":{\"L\":81,\"XXL\":70,\"SL\":60},\"灰色\":{\"LL\":81,\"XLL\":70,\"SL\":100}}","shop_info":"{\"logo\":\"https://s5.mogucdn.com/mlcdn/c45406/180331_4kf2jgc315c989kachgga3g1fdlhj_200x200.jpg_120x120.webp\",\"name\":\"潮品\",\"number\":5,\"shopItem\":50,\"collection\":15023,\"sales\":267000}"}
    ]
    if (id) {
      for (let item of goodsData) {
        if (item.iid === id) return item
      }
    }
    return this.pick(goodsData)
  }
})

const homeMultiData = () => {
  return Mock.mock({
    code: '0000',
    msg: '请求成功',
    data: {
      'banner|4': [{
        'img|+1': ['https://s2.mogucdn.com/mlcdn/c45406/200609_7kdh2e63b7a1i0d05c1f583hfhi07_1125x390.jpg_750x9999.v1c7E.81.webp', 'https://s18.mogucdn.com/mlcdn/c45406/200609_21dakl66b60edja9k2hk02b5k21lc_1125x390.jpg_750x9999.v1c7E.81.webp', 'https://s2.mogucdn.com/mlcdn/c45406/200609_6784eldd3979cc9i9ife4233bah12_1125x390.jpg_750x9999.v1c7E.81.webp', 'https://s17.mogucdn.com/mlcdn/c45406/200610_602leefaci02ch6k50904e0d7cli9_1125x390.png_750x9999.v1c7E.81.webp'],
        'link': '#'
      }],
      'feature|4': [{
        'img|+1': ['https://s10.mogucdn.com/mlcdn/c45406/190821_8ak2b51abg5g1fk7lj9egjf0057ae_150x150.gif_640x640.v1cAC.40.webp', 'https://s10.mogucdn.com/mlcdn/c45406/200417_59ffibi517097d5j8cifj5fi2gi9k_135x136.png_640x640.v1cAC.40.webp', 'https://s10.mogucdn.com/mlcdn/c45406/200327_19jd6dflci2398dg7e43ijf5fei4d_135x135.jpg_640x640.v1cAC.40.webp', 'https://s10.mogucdn.com/mlcdn/c45406/200327_3bk3bgjf99be932bh5ja98gecg40i_135x135.jpg_640x640.v1cAC.40.webp'],
        'link': '#',
        'title|+1': ['十点抢券', '好物特卖', '内购福利', '初秋上新']
      }]
    }
  })
}

const homeGoodsData = () => {
  return Mock.mock({
    code: '0000',
    msg: '请求成功',
    data: {
      'list|10': ['@goodsData']
    }
  })
}

const detailData = options => {
  let iid = getParameter(options.url, 'iid')
  return Mock.mock({
    code: '0000',
    msg: '请求成功',
    data: `@goodsData(${iid})`
  })
}

const categoryData = () => {
  return Mock.mock({
    code: '0000',
    msg: '请求成功',
    data: {
      'list|16': [{
        'title|+1': ['正在流行', '上衣', '裤子', '裙子', '内衣', '女鞋', '男友', '包包', '运动', '配饰', '美妆', '个护', '家居', '百货', '母婴', '食品'],
        'maitKey|+1': ['正在流行', '上衣', '裤子', '裙子', '内衣', '女鞋', '男友', '包包', '运动', '配饰', '美妆', '个护', '家居', '百货', '母婴', '食品'],
        'miniWallkey|+1': ['正在流行', '上衣', '裤子', '裙子', '内衣', '女鞋', '男友', '包包', '运动', '配饰', '美妆', '个护', '家居', '百货', '母婴', '食品']
      }]
    }
  })
}

const subcategoryData = options => {
  let maitKey = getParameter(options.url, 'maitKey')
  return Mock.mock({
    code: '0000',
    msg: '请求成功',
    data: {
      'list|6': [{
        'img': Random.dataImage('100 x 100'),
        'title': `${maitKey}`,
        'link': '#'
      }]
    }
  })
}

Mock.mock(`${baseUrl}/home/multidata`, 'get', homeMultiData)
Mock.mock(RegExp(`${baseUrl}/home/goodsdata` + '.*'), 'get', homeGoodsData)
Mock.mock(RegExp(`${baseUrl}/detail` + '.*'), 'get', detailData)
Mock.mock(`${baseUrl}/recommend`, 'get', homeGoodsData)
Mock.mock(`${baseUrl}/category`, 'get', categoryData)
Mock.mock(RegExp(`${baseUrl}/subcategory/detail` + '.*'), 'get', homeGoodsData)
Mock.mock(RegExp(`${baseUrl}/subcategory` + '.*'), 'get', subcategoryData)