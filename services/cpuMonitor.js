const os = require("os");

setInterval(() => {
  const load = os.loadavg()[0];
  const cpu = (load / os.cpus().length) * 100;

  console.log("CPU:", cpu.toFixed(2), "%");

  if (cpu > 70) {
    console.log("Restarting due to high CPU");
    process.exit(1);
  }
}, 5000);
