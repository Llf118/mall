import {request} from "./request";
export function getDetail(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}
//导出一个class
export class Goods{
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discountDesc=itemInfo.discountDesc
    this.discount=itemInfo.discount
    this.columns=columns
    this.services=services
    this.realPrice=itemInfo.lowNowPrice

  }
}
//店铺信息的展示
export class Shop{
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo
    this.name=shopInfo.name
    this.fans=shopInfo.cFans
    this.sells=shopInfo.cSells
    this.goodsCount=shopInfo.cGoods
  }
}

export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

