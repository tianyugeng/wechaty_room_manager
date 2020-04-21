/**
 * Wechaty - WeChat Bot SDK for Personal Account, Powered by TypeScript, Docker, and 💖
 *  - https://github.com/chatie/wechaty
 */
import {
  Contact,
  Message,
  ScanStatus,
  Wechaty,
  log,
}               from 'wechaty'

import { generate } from 'qrcode-terminal'

/**
 * You can ignore the next line becasue it is using for CodeSandbox
 */
require('./.util/helper')

function onScan (qrcode: string, status: ScanStatus) {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    generate(qrcode, { small: true })  // show qrcode on console

    const qrcodeImageUrl = [
      'https://api.qrserver.com/v1/create-qr-code/?data=',
      encodeURIComponent(qrcode),
    ].join('')

    log.info('StarterBot', 'onScan: %s(%s) - %s', ScanStatus[status], status, qrcodeImageUrl)
  } else {
    log.info('StarterBot', 'onScan: %s(%s)', ScanStatus[status], status)
  }
}

function onLogin (user: Contact) {
  log.info('StarterBot', '%s login', user)
}

function onLogout (user: Contact) {
  log.info('StarterBot', '%s logout', user)
}

function addAdmin( roomId:string, userId:string) {
  adminSetting[roomId][userId] = true
}

function delAdmin(roomId: string, userId: string) {
  adminSetting[roomId][userId] = false
}

async function onMessage (msg: Message) {
  log.info('StarterBot', msg.toString())

  const contact = msg.from()
  if (!contact) {
    return null
  }
  var userId: any
  if (contact) {
    userId = contact.id
  }
  
  const text = msg.text()
  const room = msg.room()
  // 当由群组接收消息时,开始逻辑判断
  if (room) {
    // 获取群组名称和群组ID
    const topic = await room.topic()
    const roomId: any = room.id
    // 获取群主
    const owner = room.owner()
    // 获取被@的用户列表
    const contactList = await msg.mention()
    console.log("获取艾特")
    console.log(contactList)


    // 判断是否为命令消息
    if (text.search("^##") == 0) {
      // 当目标群组未初始化时,执行初始化操作
      // 只有群主可以设置/撤销管理员
      console.log("测到群主")
      console.log(owner)
      console.log(userId)
      if (!!userId && !!owner && owner.id == userId) {
        console.log("检测到群主命令")
        console.log(!adminSetting[roomId])
        if (!adminSetting[roomId]) {
          console.log("执行初始化")
          //var roomTemp: { [key: string]: any } = {}
          adminSetting[roomId] = {}
        }
        console.log("检测初始化")
        console.log(adminSetting)
        console.log(text.search("(?<=^##)ADD"))
        // 处理命令 设置管理员
        if (text.search("(?<=^##)ADD") > 0) {
          // 将@的人员添加为管理员
          console.log('添加管理员', contactList)
          for (var targetUserId of contactList) {
            addAdmin(roomId, targetUserId.id)
            adminSetting[roomId][userId] = true
          }
          return null
        }

        // 处理命令 撤销管理员
        if (text.search("(?<=^##)DEL") > 0) {
          // 将@的人员从管理员名单中剔除
          console.log('delAdmin', contactList)
          for (var targetUserId of contactList) {
            delAdmin(roomId, targetUserId.id)
          }
          return null
        }
      }

      // 开始处理管理员命令
      if (!!adminSetting[roomId][userId]) {
        // 当发送者被列为管理员时执行处理

        // 开始处理发送群公告
        room.announce(text.substring(2))
      }


    }

    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)
    console.log(`senderID: ${contact.id}`)
  } else {
    console.log(`Contact: ${contact.name()} Text: ${text}`)
  }

  return null

}

const bot = new Wechaty({
  name: 'ding-dong-bot',
  /**
   * Specify a puppet for a specific protocol (Web/Pad/Mac/Windows, etc).
   *
   * You can use the following providers:
   *  - wechaty-puppet-hostie
   *  - wechaty-puppet-puppeteer
   *  - wechaty-puppet-padplus
   *  - wechaty-puppet-macpro
   *  - etc.
   *
   * Learn more about Wechaty Puppet Providers at:
   *  https://github.com/wechaty/wechaty-puppet/wiki/Directory
   */
  puppet: 'wechaty-puppet-padplus',
})

// 用来储存管理员信息
// 开发阶段为了方便直接用变量存储
// 后期维护时将转移进第三方存储
var adminSetting: { [key: string]: { [key: string]: any } } = {}


bot.on('scan',    onScan)
bot.on('login',   onLogin)
bot.on('logout',  onLogout)
bot.on('message', onMessage)

bot.start()
  .then(() => log.info('StarterBot', 'Starter Bot Started.'))
  .catch(e => log.error('StarterBot', e))



// TODO 命令头暂定为##,后面要改为可通过命令指定
// TODO 管理员缓存目前存在变量中,后面要转移进第三方存储中(sqllite?)
// TODO 现在时间不够,图省事把代码都堆在一个文件里了,后面要梳理一下
// TODO 目前只实现了代发群公告,后面要添加各种群管功能
// TODO 原本微信机器人的接龙主持功能可以转移过来
// TODO 计划添加可供调用的API接口,通过接口可触发群管操作

var express = require("express");
var app = express();
var hostName = '0.0.0.0';
var port = 8088;

app.all('*', function (_req: any, res:any, next:any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// get请求
app.get("/get", function (req:any, res:any) {
  console.log("请求url：", req.path)
  console.log("请求参数：", req.query)
  res.send("这是get请求");
})

// post请求
app.post("/post", function (req:any, res:any) {
  console.log("请求参数：", req.body);
  var result = { code: 200, msg: "post请求成功" };
  res.send(result);
});


// 根据请求处理 向指定群发送群公告
// 根据请求处理 向指定群发送消息

// 根据请求处理 查找指定用户并尝试邀请加入群
// 根据请求处理 查找指定用户并尝试踢出指定群



app.listen(port, hostName, function () {

  console.log(`服务器运行在http://${hostName}:${port}`);

});
