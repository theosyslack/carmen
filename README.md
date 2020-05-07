# carmen

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@theosyslack/carmen.svg)](https://npmjs.org/package/@theosyslack/carmen)
[![Downloads/week](https://img.shields.io/npm/dw/@theosyslack/carmen.svg)](https://npmjs.org/package/@theosyslack/carmen)
[![License](https://img.shields.io/npm/l/@theosyslack/carmen.svg)](https://github.com/theosyslack/carmen/blob/master/package.json)

<!-- toc -->
* [carmen](#carmen)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @theosyslack/carmen
$ carmen COMMAND
running command...
$ carmen (-v|--version|version)
@theosyslack/carmen/3.0.2 darwin-x64 node-v12.16.1
$ carmen --help [COMMAND]
USAGE
  $ carmen COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`carmen help [COMMAND]`](#carmen-help-command)
* [`carmen screenshot [URL]`](#carmen-screenshot-url)
* [`carmen test [URL]`](#carmen-test-url)

## `carmen help [COMMAND]`

display help for carmen

```
USAGE
  $ carmen help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `carmen screenshot [URL]`

describe the command here

```
USAGE
  $ carmen screenshot [URL]

OPTIONS
  -h, --help     show CLI help
  -o, --out=out  [default: 1,588,809,700,753] Name of the output file. If no extension is specified, .png will be used.
  -s, --silent
```

_See code: [src/commands/screenshot.ts](https://github.com/theosyslack/carmen/blob/v3.0.2/src/commands/screenshot.ts)_

## `carmen test [URL]`

test out some pipeline

```
USAGE
  $ carmen test [URL]
```

_See code: [src/commands/test.ts](https://github.com/theosyslack/carmen/blob/v3.0.2/src/commands/test.ts)_
<!-- commandsstop -->
