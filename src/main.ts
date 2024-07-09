import {Controller, Get, Module} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";

@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return "Hello World"
    }
}

@Module({
    controllers: [AppController]
})
class AppModule {

}

async function bootStrap() {
    const app = await NestFactory.create(AppModule)
}
