import ProjectDetails from "./projectDetails";
import UserDetails from "./userDetails";

class Application {
    constructor() {
        this.projectDetails = new ProjectDetails();
        this.userDetails = new UserDetails();
    }
}

export default Application;
