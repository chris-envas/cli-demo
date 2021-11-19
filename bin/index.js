#!/usr/bin/env node
/*
 * @Author: chris
 * @Date: 2021-11-19 14:47:21
 * @LastEditors: chris
 * @LastEditTime: 2021-11-19 18:29:55
 * @FilePath: \yt-cli-dev\bin\index.js
 */
const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const dedent = require("dedent")
const arg = hideBin(process.argv)
const cli = yargs(arg)

cli
  // 启动严格模式,错误汇报
  .strict()
  // 设置传入命令行 参数携带的最少个数
  .demandCommand(1, "A command is required.")
  // 用法
  .usage("xx-cli [command] <options>")
  // 设置别名 help => h, version => v
  .alias("h", "help")
  .alias("v", "version")
  // 终端输出宽度
  .wrap(cli.terminalWidth())
  // 结束语
  .epilogue(dedent`Thank you for using.`)
  //
  .options({
    debug: {
      type: 'boolean',
      describe: "Boostrap debug mode",
      alias: "d"
    }
  })
  .option("ci", {
    type: "boolean",
    hidden: true
  })
  // 显示输出
  .argv