package in.stackroute.umove.adminwebapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UIController {

    @GetMapping("/")
    public String redirectToHome() {
        return "index.html";
    }

}
