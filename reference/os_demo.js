//  Operating system - node os_demo

const os = require('os');

// Platform - win32 - windows, darwin - Mac
console.log(os.platform())

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freeman());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());