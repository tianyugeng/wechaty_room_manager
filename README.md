# 微信群管辅助 [![Powered by Wechaty](https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg)](https://github.com/chatie/wechaty)


[![Node.js CI](https://github.com/wechaty/wechaty-getting-started/workflows/Node.js%20CI/badge.svg)](https://github.com/wechaty/wechaty-getting-started/actions?query=workflow%3A%22Node.js+CI%22)
![Node.js v10](https://img.shields.io/badge/node-%3E%3D10-green.svg)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg)](https://www.typescriptlang.org/)

[Wechaty](https://github.com/Chatie/wechaty/) is a Wechat Bot SDK for Personal Account that lets you create software to extend the functionality of the Wechat, writen in Node.js with TypeScript, Support all platforms including Linux, OSX, Win32, and Docker.

## 功能目的

- 大型微信群（员工群）通常需要多位管理员分工管理，有各种信息需要发布。但是目前微信群中不论规模均最多只能设置三位群管理员，这在有三名以上管理人员的场景中显得十分不便。本项目的目的是通过机器人代办解决超过三名管理员的情况，方便大型微信群的管理。

- 此外对于人员较多且拥有自己的OA系统的公司而言，HR在微信群的维护上也是苦不堪言。人员流动带来的成员变动、人数超过500人限制导致的分群消息同步等问题都为HR带来了巨量的麻烦。本项目的第二步计划通过网络接口的形式提供API供OA系统调用，达到可以自动控制群成员，解放人力的目的。

- 对于分群，本项目第三步计划是通过命令连接两个甚至多个不同的微信群，达到消息自动转发的目的，从某种意义上实现群成员超过500人上限。

## 系统需求

1. Node.js v10 或以上
2. 基本开发编译环境

## 开始使用

### 0. 安装 Node.js (>=10)

If you have not installed Node.js(or version is below 10),You need to install the latest version of Node.js first by following the links below:

- Linux 
```
wget https://npm.taobao.org/mirrors/node/v12.2.0/node-v12.2.0-linux-x64.tar.xz
tar -xvf node-v12.2.0-linux-x64.tar.xz 
mv node-v12.2.0-linux-x64 /opt/node
tee /etc/profile << EOF
  export NODE_HOME=/opt/node
  export PATH=$NODE_HOME/bin:$PATH
EOF
source /etc/profile
```
随后可验证安装是否成功
```
node -v
```
> 在其他平台安装 Node.js 的方法可参见 <https://nodejs.org/en/download/package-manager/>

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

