// Modules: Import / Export
// Export ra cái gì thì Import ra được cái đó

// import logger , { TYPE_ERROR, TYPE_LOG, TYPE_WARN} from "./logger.js" // Cách 1

import logger from "./logger.js"
// import { TYPE_ERROR, TYPE_LOG, TYPE_WARN} from "./contants.js" // Cách 2.1 sử dụng default
import * as contants from "./contants.js" // Cách 2.2 lấy ra tất cả expect ra



logger("message...", contants.TYPE_ERROR)