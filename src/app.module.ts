import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";

// Modules are used to organize the application structure by grouping related controllers and providers
@Module({
    controllers: [AppController]
})
export class AppModule {
}
