const app = require("./app");
const initializerService = require("./modules/initializer/initializer.service");

async function bootstrap() {
  if (process.env.NODE_ENV === "dev") {
    initializerService.initializeAll();
  }
  await app.listen(3000, () =>
    console.log("server has been started on port 3000...")
  );
}

bootstrap();
