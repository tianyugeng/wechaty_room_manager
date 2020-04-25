# 微信群管辅助 [![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/chatie/wechaty)


[![Node.js CI](https://github.com/wechaty/wechaty-getting-started/workflows/Node.js%20CI/badge.svg)](https://github.com/wechaty/wechaty-getting-started/actions?query=workflow%3A%22Node.js+CI%22)
![Node.js v10](https://img.shields.io/badge/node-%3E%3D10-green.svg)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)

[Wechaty](https://github.com/Chatie/wechaty/) is a Wechat Bot SDK for Personal Account that lets you create software to extend the functionality of the Wechat, writen in Node.js with TypeScript, Support all platforms including Linux, OSX, Win32, and Docker.

## 功能目的

大型微信群（员工群）通常需要多位管理员分工管理，有各种信息需要发布。但是目前微信群中不论规模均最多只能设置三位群管理员，这在有三名以上管理人员的场景中显得十分不便。本项目的目的是通过机器人代办解决超过三名管理员的情况，方便大型微信群的管理。



## 系统需求

1. Node.js v10 或以上
2. 基本开发编译环境

## 开始使用

### 0. 安装 Node.js (>=10)

If you have not installed Node.js(or version is below 10),You need to install the latest version of Node.js first by following the links below:

* [Windows](https://nodejs.org/en/download/package-manager/#windows)
* [Linux(Debian/Ubuntu)](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)
* [macOS](https://nodejs.org/en/download/package-manager/#macos)

> Instal Node.js for other platforms can be found at <https://nodejs.org/en/download/package-manager/>

### 1. Clone this Repository

```sh
git clone https://github.com/lijiarui/wechaty-getting-started.git
cd wechaty-getting-started
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Run the Bot

```sh
npm start
```

Or use node to run bot directly

```shell
# Linux: export WECHATY_LOG=verbose
# Win32: set WECHATY_LOG=verbose
node examples/ding-dong-bot.js
```

You are all set!

## ADVANCED

### 1. TypeScript

```sh
npm run start:ts
```

This will run `examples/ding-dong-bot.ts` instead of `examples/ding-dong-bot.js` for you.

### 2. Wechaty Tutorial

<div align="center">
<a target="_blank" href="https://blog.chatie.io/getting-started-wechaty/"><img src="https://cloud.githubusercontent.com/assets/1361891/21722581/3ec957d0-d468-11e6-8888-a91c236e0ba2.jpg" border=0 width="60%"></a>
</div>

Above is a 10 minute video tutorial(a little outdated, it's running under v0.14 or older versions of Wechaty), which is a good way to start if you are new to Wechaty.

### 3. More Examples

> Note: Please make sure you can run `npm start` with this repository first before you go furture with more examples!

* [Official Wechaty Examples Directory](https://github.com/wechaty/wechaty-getting-started/tree/master/examples)

## API REFERENCE

1. JSDoc: <https://chatie.io/wechaty/>

## SEE ALSO

### 1. Docker Wechaty Getting Started

[![Docker](https://avatars0.githubusercontent.com/u/5429470?s=200)](https://github.com/Chatie/docker-wechaty-getting-started)

<https://github.com/Chatie/docker-wechaty-getting-started>

### 2. Heroku Wechaty Getting Started

[![Heroku](https://avatars3.githubusercontent.com/u/23211?s=200)](https://github.com/Chatie/heroku-wechaty-getting-started)

<https://github.com/Chatie/heroku-wechaty-getting-started>

## FAQ

### 1. I can not login with my Wechat account

Wechat account that registered after 2017 will not be able to login via Web API.  Learn more at <https://github.com/Chatie/wechaty/issues/872>

Solution: Wechaty support protocols other than Web API, such as pad. Learn more at <https://github.com/Chatie/wechaty/issues/1296>

### 2. What is a `Puppet` in Wechaty

The term [Puppet](https://github.com/Chatie/wechaty/wiki/Puppet) in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the Wechat(that's the reason we call it puppet).

The plugins are named `PuppetXXX`, like [PuppetPuppeteer](https://github.com/Chatie/wechaty-puppet-puppeteer) is using the [google puppeteer](https://github.com/GoogleChrome/puppeteer) to control the [WeChat Web API](https://wx.qq.com) via a chrome browser, [PuppetPadchat](https://github.com/lijiarui/wechaty-puppet-padchat) is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad Wechat program. More detail you could go [Puppet in wiki](https://github.com/Chatie/wechaty/wiki/Puppet).
