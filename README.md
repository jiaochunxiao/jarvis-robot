## Jarvis-robot

Jarvis-robot is a tool for your work and life.

### command

```
Usage: jarvis <command> [options]

Options:
  -V, --version     output the version number
  -i, --info        output some info of the tools
  -h, --help        display help for command

Commands:
  info|i            show some information for your computer!
  tree|t [options]  show folders && files in current folder!
  help [command]    display help for command
```

#### info

```
jarvis info
// or
jarvis i
```
result:

```
系统信息：
CPU架构： x64
操作系统平台： darwin
操作系统名称： Darwin
系统内存大小： 8.00GB
系统可用内存： 0.32GB
系统内存使用率： 96.00999999999999%
系统本次已正常运行： 20天5小时2分钟10秒


用户信息
uid： 501
gid： 20
username： xxx
homedir： /Users/xxx
shell： /bin/zsh


网络信息
address: 172.13.18.102
netmask: 255.255.224.0
family: IPv4
mac: 4c:21:fb:63:20:29
internal: false
cidr: 172.23.88.170/19
```

#### tree

usage:

```
Usage: jarvis tree|t [options]

show folders && files in current folder!

Options:
  -L, --layer [number]   the max depth to show
  -a --all [boolean]     is show all files
  -c --color             is show colorful foldername
  -I --exclude [string]  ignore folder or files
  -h, --help             display help for command
```
result:
```
$ jarvis tree
.
├── info.js
├── test-a
│   ├── a.js
│   └── test-aa
│       ├── aa.js
│       ├── bb.js
│       └── cc.js
├── test-b
│   └── b.js
└── tree.js

$ jarvis t -L 2
.
├── info.js
├── test-a
│   ├── a.js
│   └── test-aa
├── test-b
│   └── b.js
└── tree.js

$ jarvis t -I aa.js
.
├── info.js
├── test-a
│   ├── a.js
│   └── test-aa
│       ├── bb.js
│       └── cc.js
├── test-b
│   └── b.js
└── tree.js

$ jarvis tree -a
.
├── info.js
├── test-a
│   ├── a.js
│   └── test-aa
│       ├── .aa.js
│       ├── aa.js
│       ├── bb.js
│       └── cc.js
├── test-b
│   └── b.js
└── tree.js

```
