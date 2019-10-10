package in.stackroute.umove.apigateway.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class UIController {

//    @GetMapping("/")
//    private RedirectView redirectToAdminUI() {
//        RedirectView redirectView = new RedirectView();
//        redirectView.setUrl("http://localhost:8088");
//        return redirectView;
//    }

//    @GetMapping("/")
//    private ModelAndView redirectToAdminUI(ModelMap model) {
//        model.addAttribute("attribute", "forwardWithForwardPrefix");
//        return new ModelAndView("forward:http://localhost:8088", model);
//    }

    @GetMapping("/")
    private String redirectToAdminUI(ModelMap model) {
        return "forward:/admin-ui";
    }


}
