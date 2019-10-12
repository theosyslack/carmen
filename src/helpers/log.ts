import chalk from "chalk";
type LogType =
  | "default"
  | "table"
  | "success"
  | "pending"
  | "error"
  | "info"
  | "warning";
type Logger = (message: string | object) => void;
type LogCollection = {
  [type in LogType]: Logger;
};
const { log, table, clear } = console;

const LOG_TYPES: LogCollection = {
  default: (message: string) => log(chalk.blue(message)),
  info: (message: string) => log(chalk.blue(`[INFO]    ${message}`)),
  table: (message: object) => table(message),
  success: (message: string) => log(chalk.green(`[SUCCESS] ${message}`)),
  pending: (message: string) => log(chalk.yellow(`[PENDING] ${message}`)),
  warning: (message: string) => log(chalk.magenta(`[WARNING] ${message}`)),
  error: (message: string) => {
    log(chalk.red(`[ERROR]   ${message}`));
  }
};

export { clear };

export default (message: string, type?: LogType) => {
  if (!type) {
    log(message);
  } else {
    const styledLog = LOG_TYPES[type];
    if (!styledLog) throw new Error("No style found");

    styledLog(message);
  }
};

export const globe = () => {
  log(chalk.red.bold`

               _-o#&&*''''?d:>b\_
          _o/"\`''  '',, dMF9MMMMMHo_
       .o&#'        \`"MbHMMMMMMMMMMMHo.
     .o"" '         vodM*$&&HMMMMMMMMMM?.
    ,'              $M&ood,~'\`(&##MMMMMMHH
   /               ,MMMMMMM#b?#bobMMMMHMMML
  &              ?MMMMMMMMMMMMMMMMM7MMM$R*Hk
 ?$.            :MMMMMMMMMMMMMMMMMMM/HMMM|\`*L
|               |MMMMMMMMMMMMMMMMMMMMbMH'   T,
$H#:            \`*MMMMMMMMMMMMMMMMMMMMb#}'  \`?
]MMH#             ""*""""*#MMMMMMMMMMMMM'    -
MMMMMb_                   |MMMMMMMMMMMP'     :
HMMMMMMMHo                 \`MMMMMMMMMT       .
?MMMMMMMMP                  9MMMMMMMM}       -
-?MMMMMMM                  |MMMMMMMMM?,d-    '
 :|MMMMMM-                 \`MMMMMMMT .M|.   :
  .9MMM[                    &MMMMM*' \`'    .
   :9MMk                    \`MMM#"        -
     &M}                     \`          .-
      \`&.                             .
        \`~,   .                     ./
            . _                  .-
              '\`--._,dd###pp=""'

  `);
};
