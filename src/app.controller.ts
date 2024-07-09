// Controllers handle incoming requests and return responses to the client.
import {Controller, Get} from "@nestjs/common";

@Controller('/app')
export class AppController {
    // This decorator creates a route handler for GET requests to the root path
    @Get("/home")
    getRootRoute() {
        return "Hello World"
    }
}