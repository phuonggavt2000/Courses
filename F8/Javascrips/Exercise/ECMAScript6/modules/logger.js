// export const TYPE_LOG = "log";// Cách 1
// export const TYPE_WARN = "warn";
// export const TYPE_ERROR = "error"

import {TYPE_ERROR} from "./contants.js"

function logger(log, TYPE_ERROR = "error") {
    console[TYPE_ERROR](log)
}

export default logger // Expect Logger ra "app.js" important nhận
