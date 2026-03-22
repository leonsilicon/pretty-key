import type { KeyMappingCode } from 'keycode-ts2';

// prettier-ignore
export default function getPrettyKey(input: KeyMappingCode | string, os: 'macos' | 'windows' | 'linux' = 'macos') {
  const key = input.toLowerCase();

  // Ordered by keyboard rows
  switch (key) {
    case "esc":
    case "escape": return "⎋";
    case "f1": return "F1";
    case "f2": return "F2";
    case "f3": return "F3";
    case "f4": return "F4";
    case "f5": return "F5";
    case "f6": return "F6";
    case "f7": return "F7";
    case "f8": return "F8";
    case "f9": return "F9";
    case "f10": return "F10";
    case "f11": return "F11";
    case "f12": return "F12";
    case "f13": return "F13";
    case "f14": return "F14";
    case "f15": return "F15";
    case "f16": return "F16";
    case "f17": return "F17";
    case "f18": return "F18";
    case "f19": return "F19";
    case "f20": return "F20";
    case "f21": return "F21";
    case "f22": return "F22";
    case "f23": return "F23";
    case "f24": return "F24";
    case "pwr":
    case "power": return "⏻";

    case "`":
    case "backquote": return "`";
    case "1":
    case "digit1": return "1";
    case "2":
    case "digit2": return "2";
    case "3":
    case "digit3": return "3";
    case "4":
    case "digit4": return "4";
    case "5":
    case "digit5": return "5";
    case "6":
    case "digit6": return "6";
    case "7":
    case "digit7": return "7";
    case "8":
    case "digit8": return "8";
    case "9":
    case "digit9": return "9";
    case "0":
    case "digit0": return "0";
    case "-":
    case "minus": return "-";
    case "=":
    case "equal": return "=";
    case "bs":
    case "bksp":
    case "backspace": return "⌫";

    case "tab": return "⇥";
    case "q":
    case "keyq": return "Q";
    case "w":
    case "keyw": return "W";
    case "e":
    case "keye": return "E";
    case "r":
    case "keyr": return "R";
    case "t":
    case "keyt": return "T";
    case "y":
    case "keyy": return "Y";
    case "u":
    case "keyu": return "U";
    case "i":
    case "keyi": return "I";
    case "o":
    case "keyo": return "O";
    case "p":
    case "keyp": return "P";
    case "[":
    case "bracketleft": return "[";
    case "]":
    case "bracketright": return "]";
    case "\\":
    case "backslash": return "\\";
    case "#":
    case "intlhash": return "#";

    case "caps":
    case "capslock": return "⇪";
    case "a":
    case "keya": return "A";
    case "s":
    case "keys": return "S";
    case "d":
    case "keyd": return "D";
    case "f":
    case "keyf": return "F";
    case "g":
    case "keyg": return "G";
    case "h":
    case "keyh": return "H";
    case "j":
    case "keyj": return "J";
    case "k":
    case "keyk": return "K";
    case "l":
    case "keyl": return "L";
    case ";":
    case "semicolon": return ";";
    case "'":
    case "quote": return "'";
    case "return":
    case "enter": return "↩";

    case "lshift":
    case "shiftleft": return "⇧";
    case "z":
    case "keyz": return "Z";
    case "x":
    case "keyx": return "X";
    case "c":
    case "keyc": return "C";
    case "v":
    case "keyv": return "V";
    case "b":
    case "keyb": return "B";
    case "n":
    case "keyn": return "N";
    case "m":
    case "keym": return "M";
    case ",":
    case "comma": return ",";
    case ".":
    case "period": return ".";
    case "/":
    case "slash": return "/";
    case "rshift":
    case "shiftright":
    case "shift": return "⇧";

    case "fn": return os === 'macos' ? "🌐" : "Fn";
    case "lctrl":
    case "ctrlleft":
    case "controlleft": return os === 'macos' ? "⌃" : "Ctrl";
    case "lalt":
    case "opt":
    case "option":
    case "altleft": return os === 'macos' ? "⌥" : "Alt";
    case "lcmd":
    case "cmd":
    case "command":
    case "win":
    case "metaleft": return os === 'macos' ? "⌘" : "❖";
    case "spacebar":
    case "space": return "␣";
    case "rcmd":
    case "rwin":
    case "metaright": return os === 'macos' ? "⌘" : "❖";
    case "rctrl":
    case "ctrlright":
    case "controlright": return os === 'macos' ? "⌃" : "Ctrl";
    case "ropt":
    case "altgr":
    case "altright": return os === 'macos' ? "⌥" : "AltGr";
    case "left":
    case "arrowleft": return "←";
    case "up":
    case "arrowup": return "↑";
    case "down":
    case "arrowdown": return "↓";
    case "right":
    case "arrowright": return "→";

    case "prtsc":
    case "printscreen": return "⎙";
    case "scrlk":
    case "scrolllock": return "⎚";
    case "break":
    case "pause": return "⎉";
    case "ins":
    case "insert": return "⎀";
    case "home": return "⇱";
    case "pgup":
    case "pageup": return "⇞";
    case "del":
    case "delete": return "⌦";
    case "end": return "⇲";
    case "pgdn":
    case "pagedown": return "⇟";

    case "numlock": return "⇭";
    case "kp/":
    case "numpaddivide": return "÷";
    case "kp*":
    case "numpadmultiply": return "×";
    case "kp-":
    case "numpadsubtract": return "−";
    case "kp+":
    case "numpadadd": return "+";
    case "kpenter":
    case "numpadenter": return "↩";
    case "kp.":
    case "numpaddecimal": return "·";
    case "kp0":
    case "numpad0": return "0";
    case "kp1":
    case "numpad1": return "1";
    case "kp2":
    case "numpad2": return "2";
    case "kp3":
    case "numpad3": return "3";
    case "kp4":
    case "numpad4": return "4";
    case "kp5":
    case "numpad5": return "5";
    case "kp6":
    case "numpad6": return "6";
    case "kp7":
    case "numpad7": return "7";
    case "kp8":
    case "numpad8": return "8";
    case "kp9":
    case "numpad9": return "9";
    case "kp=":
    case "numpadequal": return "=";
    case "kp,":
    case "numpadcomma": return ",";
    case "kp(":
    case "numpadparenleft": return "(";
    case "kp)":
    case "numpadparenright": return ")";
    case "kpbs":
    case "numpadbackspace": return "⌫";
    case "ms":
    case "numpadmemorystore": return "m▸";
    case "mr":
    case "numpadmemoryrecall": return "mr";
    case "mc":
    case "numpadmemoryclear": return "mc";
    case "m+":
    case "numpadmemoryadd": return "m+";
    case "m-":
    case "numpadmemorysubtract": return "m−";
    case "clear":
    case "numpadclear": return "c";
    case "clearentry":
    case "numpadclearentry": return "ce";

    case "hyper": return "✦";
    case "super": return "❖";
    case "fnlock": return "Fn⇪";
    case "suspend": return "⏸";
    case "resume": return "▶";
    case "turbo": return "⚡";
    case "sleep": return "☾";
    case "wakeup": return "☀";
    case "displaytoggleintext": return "🖥⇄";
    case "intlbackslash": return "\\";
    case "menu":
    case "contextmenu": return "☰";
    case "open": return "↗";
    case "help": return "?";
    case "select": return "◉";
    case "again": return "↻";
    case "undo": return "↶";
    case "cut": return "✂";
    case "copy": return "⧉";
    case "paste": return "📋";
    case "find":
    case "search": return "⌕";
    case "mute":
    case "audiovolumemute": return "🔇";
    case "volup":
    case "audiovolumeup": return "🔊";
    case "voldown":
    case "audiovolumedown": return "🔉";
    case "intlro": return "ろ";
    case "kanamode": return "かな";
    case "intlyen": return "¥";
    case "convert": return "変";
    case "nonconvert": return "無変";
    case "lang1": return "한";
    case "lang2": return "漢";
    case "lang3": return "カ";
    case "lang4": return "ひ";
    case "lang5": return "半";
    case "abort": return "⎋";
    case "props": return "⚙";
    case "brup":
    case "brightnessup": return "☀+";
    case "brdown":
    case "brightnessdown": return "☀−";
    case "play":
    case "mediaplay": return "⏵";
    case "rec":
    case "mediarecord": return "⏺";
    case "ff":
    case "mediafastforward": return "⏩";
    case "rw":
    case "mediarewind": return "⏪";
    case "next":
    case "mediatracknext": return "⏭";
    case "prev":
    case "mediatrackprevious": return "⏮";
    case "stop":
    case "mediastop": return "⏹";
    case "eject": return "⏏";
    case "playpause":
    case "mediaplaypause": return "⏯";
    case "mediaselect": return "♫";
    case "mail":
    case "launchmail": return "✉";
    case "app2":
    case "launchapp2": return "②";
    case "app1":
    case "launchapp1": return "①";
    case "controlpanel":
    case "launchcontrolpanel": return "⚙";
    case "taskview":
    case "selecttask": return "☰";
    case "screensaver":
    case "launchscreensaver": return "✺";
    case "assistant":
    case "launchassistant": return "◎";
    case "browsersearch": return "⌕";
    case "browserhome": return "⌂";
    case "back":
    case "browserback": return "←";
    case "forward":
    case "browserforward": return "→";
    case "browserstop": return "⏹";
    case "refresh":
    case "browserrefresh": return "↻";
    case "favorites":
    case "browserfavorites": return "★";
    case "zoom":
    case "zoomtoggle": return "⊕";
    case "reply":
    case "mailreply": return "↩✉";
    case "mailforward": return "↪✉";
    case "send":
    case "mailsend": return "↗✉";
    case "layout":
    case "keyboardlayoutselect": return "⌨";
    case "allwindows":
    case "showallwindows": return "▣";

    default: return input;
  }
}
