const app = require("./app");

async function bootstrap() {
  await app.listen(3000, () =>
    console.log("server has been started on port 3000...")
  );
}

bootstrap();
