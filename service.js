const puppeteer = require("puppeteer");
const timeLeft = require("./main");
const { spawn } = require("child_process");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto("file://C:/Users/Mert/Desktop/iftar/index.html");

  const canvas = await page.$("#canvas");

  async function loop() {
    console.log("loop");
    const time = timeLeft();

    await canvas.evaluate((canvas, time) => {
      // Draw the timer text
      const context = canvas.getContext("2d");
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "white";
      context.font = "180px Arial";
      context.textAlign = "center";
      context.fillText(time, canvas.width / 2, canvas.height / 2);
    }, time);

    await page.screenshot({ path: "screenshot.png" }, { fullPage: true });
    const pythonProcess = spawn("python", [
      "C:/Users/Mert/Desktop/iftar/changewallpaper.py",
    ]);
  }

  setInterval(loop, 1000 * 60);

  loop();

  // await browser.close();
})();
